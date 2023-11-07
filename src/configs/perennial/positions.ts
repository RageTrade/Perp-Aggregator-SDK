import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import {
  Address,
  Hex,
  Chain,
  PublicClient,
  WalletClient,
  decodeFunctionResult,
  encodeFunctionData,
  encodePacked,
  getAddress,
  getContract,
  getContractAddress,
  keccak256,
  pad,
  parseEther, // eslint-disable-line no-restricted-imports
  toHex,
  zeroAddress,
} from "viem";

import {
    PositionSide2,
    PositionStatus,
    addressToAsset2,
    chainAssetsWithAddress,
    SupportedChainId,
    isTestnet,
    usePyth,
    buildUpdateMarket,
    getOracleContract,
    buildInterfaceFee,
    getRecentVaa,
    buildCommitPrice,
    getPythProviderContract,
    BigOrZero,
    MultiInvoker2Abi,
    MultiInvoker2Addresses,
    fetchMarketOracles2,
    fetchMarketSnapshots2,
    buildCancelOrder,
  } from "perennial-sdk-ts";
import { MultiInvoker2Action } from "perennial-sdk-ts/dist/_types/types/perennial";
import { UnsignedTransaction } from "ethers";
import { notEmpty } from "./utils";
import { UnsignedTxWithMetadata } from "../../interfaces/V1/RouterV1";

export const modifyPositionUnsigned = async (
    publicClient: PublicClient,
    chain: Chain,
    walletAddress: Address,
    productAddress: Address,
    modifyData: {
      positionSide?: PositionSide2;
      positionAbs?: bigint;
      collateralDelta?: bigint;
      txHistoryLabel?: string;
      interfaceFee?: bigint;
    } = {}
  ) => {
    if (!chain || !walletAddress )
      throw new Error("Missing data");
  
    const chainId = chain.id as SupportedChainId;
    const address = walletAddress;
  
    const marketOracles = await fetchMarketOracles2(publicClient);
    const marketSnapshots = await fetchMarketSnapshots2(publicClient, address);
    const pyth = usePyth(publicClient);
  
    // Position Change Values
    const {
      positionSide,
      positionAbs,
      txHistoryLabel,
      interfaceFee,
      collateralDelta,
    } = modifyData;
  
    const oracleInfo = Object.values(marketOracles).find(
      (o) => o.marketAddress === productAddress
    );
    if (!oracleInfo) return;
    const asset = addressToAsset2(productAddress);
  
    // // Interface fee
    // const interfaceFeeInfo = interfaceFeeBps[chainId];
    // let chargeFeeAction;
    // if (interfaceFee && interfaceFeeInfo) {
    //   chargeFeeAction = buildInterfaceFee({
    //     to: interfaceFeeInfo.feeRecipientAddress,
    //     amount: interfaceFee,
    //   });
    // }
  
    const updateAction = buildUpdateMarket({
      market: productAddress,
      maker: positionSide === PositionSide2.maker ? positionAbs : undefined, // Absolute position size
      long: positionSide === PositionSide2.long ? positionAbs : undefined,
      short: positionSide === PositionSide2.short ? positionAbs : undefined,
      collateral: (collateralDelta ?? BigInt(0)) - (interfaceFee ?? BigInt(0)), // Delta collateral
      wrap: true,
    });
  
    // const actions: MultiInvoker2Action[] = [updateAction, chargeFeeAction].filter(
    //   notEmpty
    // );
    const actions: MultiInvoker2Action[] = [updateAction].filter(
      notEmpty
    );
    let isPriceStale = false;
    if (asset && marketSnapshots?.market[asset]) {
      const {
        parameter: { maxPendingGlobal, maxPendingLocal },
        riskParameter: { staleAfter },
        pendingPositions,
      } = marketSnapshots.market[asset];
      const lastUpdated = await getOracleContract(
        oracleInfo.address,
        publicClient
      ).read.latest();
      isPriceStale =
        BigInt(Math.floor(Date.now() / 1000)) - lastUpdated.timestamp >
        staleAfter;
      // If there is a backlog of pending positions, we need to commit the price
      isPriceStale =
        isPriceStale || BigInt(pendingPositions.length) >= maxPendingGlobal;
      // If there is a backlog of pending positions for this user, we need to commit the price
      isPriceStale =
        isPriceStale ||
        BigOrZero(marketSnapshots.user?.[asset]?.pendingPositions?.length) >=
          maxPendingLocal;
    }
  
    // // Only add the price commit if the price is stale
    // if (isPriceStale) {
    //   const { vaa, version } = await getRecentVaa({
    //     pyth,
    //     feedId: oracleInfo.providerId,
    //     minValidTime: oracleInfo.minValidTime,
    //   });
  
    //   const commitAction = buildCommitPrice({
    //     oracle: oracleInfo.providerAddress,
    //     version,
    //     value: BigInt(1),
    //     index: await getPythProviderContract(
    //       oracleInfo.providerAddress,
    //       publicClient
    //     ).read.versionListLength(),
    //     vaa,
    //     revertOnFailure: false,
    //   });
  
    //   actions.unshift(commitAction);
    // }
  
    const calldata = encodeFunctionData({
      abi: MultiInvoker2Abi,
      functionName: "invoke",
      args: [actions],
    });
  
    return {
      tx: {
        data: calldata,
        to: MultiInvoker2Addresses[chainId],
        value: BigInt(1),
        chainId: chainId
      } as UnsignedTransaction,
      type: "PER_V2",
      data: undefined
    } as UnsignedTxWithMetadata;
  }

  export const cancelOrderUnsigned = async (
    chain: Chain,
    market: Address,
    orderId: string
  ) => {
    
    const chainId = chain.id as SupportedChainId;
  
    const cancelAction = buildCancelOrder({market, orderId:BigInt(orderId)});
  
    const actions: MultiInvoker2Action[] = [cancelAction]
  
    const calldata = encodeFunctionData({
      abi: MultiInvoker2Abi,
      functionName: "invoke",
      args: [actions],
    });
  
    return {
      tx: {
        data: calldata,
        to: MultiInvoker2Addresses[chainId],
        value: BigInt(1),
        chainId: chainId
      } as UnsignedTransaction,
      type: "PER_V2",
      data: undefined
    } as UnsignedTxWithMetadata;
  }