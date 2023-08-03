/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PositionUtils, PositionUtilsInterface } from "../PositionUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralDelta",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "prevLeverage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nextLeverage",
        type: "uint256",
      },
    ],
    name: "LeverageDecreased",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS_DIVISOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6109f4610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c8063126082cf14610050578063be1e78781461006a578063e0cab550146100df575b600080fd5b6100586101dd565b60408051918252519081900360200190f35b81801561007657600080fd5b506100dd600480360361012081101561008e57600080fd5b506001600160a01b038135811691602081013582169160408201358116916060810135821691608082013581169160a08101359091169060c08101359060e081013515159061010001356101e3565b005b8180156100eb57600080fd5b506101c9600480360361010081101561010357600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561013657600080fd5b82018360208201111561014857600080fd5b803590602001918460208302840111600160201b8311171561016957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350506001600160a01b0360208301351691604081013515159150606081013590608001356105d8565b604080519115158252519081900360200190f35b61271081565b60008261026857896001600160a01b03166381a612d6866040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561023757600080fd5b505afa15801561024b573d6000803e3d6000fd5b505050506040513d602081101561026157600080fd5b50516102e2565b896001600160a01b031663e124e6d2866040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156102b557600080fd5b505afa1580156102c9573d6000803e3d6000fd5b505050506040513d60208110156102df57600080fd5b50515b905082156103385781811115610333576040805162461bcd60e51b81526020600482015260116024820152706d61726b5072696365203e20707269636560781b604482015290519081900360640190fd5b610381565b81811015610381576040805162461bcd60e51b81526020600482015260116024820152706d61726b5072696365203c20707269636560781b604482015290519081900360640190fd5b60008a6001600160a01b03166312d43a516040518163ffffffff1660e01b815260040160206040518083038186803b1580156103bc57600080fd5b505afa1580156103d0573d6000803e3d6000fd5b505050506040513d60208110156103e657600080fd5b505160408051633cc8e33b60e21b81526001600160a01b038b811660048301528a81166024830152898116604483015287151560648301526084820189905260a48201869052600160c48301529151929350908b169163f3238cec9160e48082019260009290919082900301818387803b15801561046357600080fd5b505af1158015610477573d6000803e3d6000fd5b50505050806001600160a01b0316636d63c1d08c6040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156104ca57600080fd5b505af11580156104de573d6000803e3d6000fd5b505060408051630f8ee8bb60e11b81526001600160a01b038c811660048301528b811660248301528a81166044830152606482018a905288151560848301529151918e169350631f1dd176925060a48082019260009290919082900301818387803b15801561054c57600080fd5b505af1158015610560573d6000803e3d6000fd5b50505050806001600160a01b031663d3c87bbb8c6040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156105b357600080fd5b505af11580156105c7573d6000803e3d6000fd5b505050505050505050505050505050565b6000836105e7575060006107fb565b826105f4575060016107fb565b60008760018951038151811061060657fe5b6020026020010151905060008a9050600080826001600160a01b0316634a3f088d8d868c8c6040518563ffffffff1660e01b815260040180856001600160a01b03168152602001846001600160a01b03168152602001836001600160a01b0316815260200182151581526020019450505050506101006040518083038186803b15801561069257600080fd5b505afa1580156106a6573d6000803e3d6000fd5b505050506040513d6101008110156106bd57600080fd5b5080516020909101519092509050816106dd5760009450505050506107fb565b60006106e98389610807565b90506000846001600160a01b0316630a48d5a9878e6040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b15801561074257600080fd5b505afa158015610756573d6000803e3d6000fd5b505050506040513d602081101561076c57600080fd5b50519050600061077c8483610807565b905060006107968561079088612710610868565b906108c1565b905060006107ac83610790876127108f01610868565b604080518681526020810185905280820183905290519192507f3f6e9241514ae172d9872f51274a73fd6b370b2f8fa612669bb17d933078860c919081900360600190a1109750505050505050505b98975050505050505050565b60008282018381101561085f576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b90505b92915050565b60008261087757506000610862565b8282028284828161088457fe5b041461085f5760405162461bcd60e51b815260040180806020018281038252602181526020018061099e6021913960400191505060405180910390fd5b600061085f83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250600081836109875760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561094c578181015183820152602001610934565b50505050905090810190601f1680156109795780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161099357fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220c109347f45d5c5b711038694df43a9210480549d72cffcc6ae07a3a8dbf1d3e164736f6c634300060c0033";

export class PositionUtils__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PositionUtils> {
    return super.deploy(overrides || {}) as Promise<PositionUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PositionUtils {
    return super.attach(address) as PositionUtils;
  }
  connect(signer: Signer): PositionUtils__factory {
    return super.connect(signer) as PositionUtils__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionUtilsInterface {
    return new utils.Interface(_abi) as PositionUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionUtils {
    return new Contract(address, _abi, signerOrProvider) as PositionUtils;
  }
}