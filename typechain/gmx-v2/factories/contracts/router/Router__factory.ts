/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Router, RouterInterface } from "../../../contracts/router/Router";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "pluginTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161068738038061068783398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516105f6610091600039600081816055015261013f01526105f66000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631b8278781461003b5780634a4a7b0414610050575b600080fd5b61004e6100493660046104a9565b610093565b005b6100777f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6101086040516020016100c7906020808252600d908201526c2927aaaa22a92fa8262aa3a4a760991b604082015260600190565b604051602081830303815290604052805190602001206040518060400160405280600d81526020016c2927aaaa22a92fa8262aa3a4a760991b815250610123565b61011d6001600160a01b0385168484846101e0565b50505050565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa15801561018e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b291906104f4565b6101dc57338160405163a35b150b60e01b81526004016101d392919061056d565b60405180910390fd5b5050565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180516001600160e01b03166323b872dd60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261011d928792916000916102789185169084906102fd565b905080516000148061029957508080602001905181019061029991906104f4565b6102f85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101d3565b505050565b606061030c8484600085610314565b949350505050565b6060824710156103755760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101d3565b600080866001600160a01b031685876040516103919190610591565b60006040518083038185875af1925050503d80600081146103ce576040519150601f19603f3d011682016040523d82523d6000602084013e6103d3565b606091505b50915091506103e4878383876103ef565b979650505050505050565b6060831561045e578251600003610457576001600160a01b0385163b6104575760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101d3565b508161030c565b61030c83838151156104735781518083602001fd5b8060405162461bcd60e51b81526004016101d391906105ad565b80356001600160a01b03811681146104a457600080fd5b919050565b600080600080608085870312156104bf57600080fd5b6104c88561048d565b93506104d66020860161048d565b92506104e46040860161048d565b9396929550929360600135925050565b60006020828403121561050657600080fd5b8151801515811461051657600080fd5b9392505050565b60005b83811015610538578181015183820152602001610520565b50506000910152565b6000815180845261055981602086016020860161051d565b601f01601f19169290920160200192915050565b6001600160a01b038316815260406020820181905260009061030c90830184610541565b600082516105a381846020870161051d565b9190910192915050565b602081526000610516602083018461054156fea2646970667358221220e3136a6c20889a2b070bc0ec87eb9f80b8477d98c0c350cf676c7fcb785b21f764736f6c63430008120033";

type RouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Router__factory extends ContractFactory {
  constructor(...args: RouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Router> {
    return super.deploy(_roleStore, overrides || {}) as Promise<Router>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, overrides || {});
  }
  override attach(address: string): Router {
    return super.attach(address) as Router;
  }
  override connect(signer: Signer): Router__factory {
    return super.connect(signer) as Router__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterInterface {
    return new utils.Interface(_abi) as RouterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Router {
    return new Contract(address, _abi, signerOrProvider) as Router;
  }
}