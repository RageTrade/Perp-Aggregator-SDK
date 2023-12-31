/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export declare namespace Market {
  export type PropsStruct = {
    marketToken: PromiseOrValue<string>;
    indexToken: PromiseOrValue<string>;
    longToken: PromiseOrValue<string>;
    shortToken: PromiseOrValue<string>;
  };

  export type PropsStructOutput = [string, string, string, string] & {
    marketToken: string;
    indexToken: string;
    longToken: string;
    shortToken: string;
  };
}

export interface MarketFactoryInterface extends utils.Interface {
  functions: {
    "createMarket(address,address,address,bytes32)": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "roleStore()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createMarket"
      | "dataStore"
      | "eventEmitter"
      | "roleStore"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createMarket",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;

  events: {};
}

export interface MarketFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketFactoryInterface;

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
    createMarket(
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;
  };

  createMarket(
    indexToken: PromiseOrValue<string>,
    longToken: PromiseOrValue<string>,
    shortToken: PromiseOrValue<string>,
    marketType: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createMarket(
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Market.PropsStructOutput>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createMarket(
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createMarket(
      indexToken: PromiseOrValue<string>,
      longToken: PromiseOrValue<string>,
      shortToken: PromiseOrValue<string>,
      marketType: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
