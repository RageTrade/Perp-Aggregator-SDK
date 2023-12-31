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
} from "../../../common";

export interface AssemblyReturnTestInterface extends utils.Interface {
  functions: {
    "count()": FunctionFragment;
    "testReturnAssembly(bool)": FunctionFragment;
    "testReturnNormal()": FunctionFragment;
    "testReturnWithExternalCall(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "count"
      | "testReturnAssembly"
      | "testReturnNormal"
      | "testReturnWithExternalCall"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "testReturnAssembly",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "testReturnNormal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testReturnWithExternalCall",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testReturnAssembly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testReturnNormal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testReturnWithExternalCall",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AssemblyReturnTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssemblyReturnTestInterface;

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
    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    testReturnAssembly(
      shouldReturn: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testReturnNormal(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testReturnWithExternalCall(
      counter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  count(overrides?: CallOverrides): Promise<BigNumber>;

  testReturnAssembly(
    shouldReturn: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testReturnNormal(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testReturnWithExternalCall(
    counter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    testReturnAssembly(
      shouldReturn: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testReturnNormal(overrides?: CallOverrides): Promise<BigNumber>;

    testReturnWithExternalCall(
      counter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    count(overrides?: CallOverrides): Promise<BigNumber>;

    testReturnAssembly(
      shouldReturn: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testReturnNormal(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testReturnWithExternalCall(
      counter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testReturnAssembly(
      shouldReturn: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testReturnNormal(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testReturnWithExternalCall(
      counter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
