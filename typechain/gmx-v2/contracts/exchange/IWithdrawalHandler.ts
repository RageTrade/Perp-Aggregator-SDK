/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace WithdrawalUtils {
  export type CreateWithdrawalParamsStruct = {
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
    minLongTokenAmount: PromiseOrValue<BigNumberish>;
    minShortTokenAmount: PromiseOrValue<BigNumberish>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type CreateWithdrawalParamsStructOutput = [
    string,
    string,
    string,
    string,
    string[],
    string[],
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    receiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
    minLongTokenAmount: BigNumber;
    minShortTokenAmount: BigNumber;
    shouldUnwrapNativeToken: boolean;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };
}

export declare namespace Price {
  export type PropsStruct = {
    min: PromiseOrValue<BigNumberish>;
    max: PromiseOrValue<BigNumberish>;
  };

  export type PropsStructOutput = [BigNumber, BigNumber] & {
    min: BigNumber;
    max: BigNumber;
  };
}

export declare namespace OracleUtils {
  export type SimulatePricesParamsStruct = {
    primaryTokens: PromiseOrValue<string>[];
    primaryPrices: Price.PropsStruct[];
  };

  export type SimulatePricesParamsStructOutput = [
    string[],
    Price.PropsStructOutput[]
  ] & { primaryTokens: string[]; primaryPrices: Price.PropsStructOutput[] };
}

export interface IWithdrawalHandlerInterface extends utils.Interface {
  functions: {
    "cancelWithdrawal(bytes32)": FunctionFragment;
    "createWithdrawal(address,(address,address,address,address,address[],address[],uint256,uint256,bool,uint256,uint256))": FunctionFragment;
    "simulateExecuteWithdrawal(bytes32,(address[],(uint256,uint256)[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelWithdrawal"
      | "createWithdrawal"
      | "simulateExecuteWithdrawal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelWithdrawal",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createWithdrawal",
    values: [
      PromiseOrValue<string>,
      WithdrawalUtils.CreateWithdrawalParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateExecuteWithdrawal",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SimulatePricesParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateExecuteWithdrawal",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWithdrawalHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWithdrawalHandlerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelWithdrawal(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createWithdrawal(
    account: PromiseOrValue<string>,
    params: WithdrawalUtils.CreateWithdrawalParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  simulateExecuteWithdrawal(
    key: PromiseOrValue<BytesLike>,
    params: OracleUtils.SimulatePricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelWithdrawal(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createWithdrawal(
      account: PromiseOrValue<string>,
      params: WithdrawalUtils.CreateWithdrawalParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    simulateExecuteWithdrawal(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
