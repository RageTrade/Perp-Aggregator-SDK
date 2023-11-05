/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MarketToken,
  MarketTokenInterface,
} from "../../../contracts/market/MarketToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyHoldingAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "EmptyTokenTranferGasLimit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "InvalidNativeTokenSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "SelfTransferNotSupported",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferError",
    type: "error",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "shouldUnwrapNativeToken",
        type: "bool",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "transferOutNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001bde38038062001bde8339810160408190526200003491620000cd565b8181816040518060400160405280600a81526020016911d3560813585c9ad95d60b21b81525060405180604001604052806002815260200161474d60f01b8152508160039081620000869190620001b1565b506004620000958282620001b1565b5050506001600160a01b039081166080521660a052506200027d915050565b6001600160a01b0381168114620000ca57600080fd5b50565b60008060408385031215620000e157600080fd5b8251620000ee81620000b4565b60208401519092506200010181620000b4565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200013757607f821691505b6020821081036200015857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001ac57600081815260208120601f850160051c81016020861015620001875750805b601f850160051c820191505b81811015620001a85782815560010162000193565b5050505b505050565b81516001600160401b03811115620001cd57620001cd6200010c565b620001e581620001de845462000122565b846200015e565b602080601f8311600181146200021d5760008415620002045750858301515b600019600386901b1c1916600185901b178555620001a8565b600085815260208120601f198616915b828110156200024e578886015182559484019460019091019084016200022d565b50858210156200026d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a051611912620002cc6000396000818160e9015281816102d3015281816105da01528181610754015281816108900152610c1701526000818161029201526107c701526119126000f3fe6080604052600436106100dd5760003560e01c806306fdde031461014a578063078d3b7914610175578063095ea7b31461019557806318160ddd146101c557806323b872dd146101e45780632fb1260514610204578063313ce56714610224578063395093511461024057806340c10f19146102605780634a4a7b0414610280578063660d0d67146102c157806370a08231146102f557806395d89b411461032b5780639dc29fac14610340578063a457c2d714610360578063a9059cbb14610380578063d443ca94146103a0578063dd62ed3e146103c057600080fd5b3661014557600061010d7f00000000000000000000000000000000000000000000000000000000000000006103e0565b9050336001600160a01b03821614610143573360405163738d28df60e11b815260040161013a91906114e2565b60405180910390fd5b005b600080fd5b34801561015657600080fd5b5061015f610493565b60405161016c9190611546565b60405180910390f35b34801561018157600080fd5b50610143610190366004611575565b610525565b3480156101a157600080fd5b506101b56101b03660046115b6565b610585565b604051901515815260200161016c565b3480156101d157600080fd5b506002545b60405190815260200161016c565b3480156101f057600080fd5b506101b56101ff366004611575565b61059d565b34801561021057600080fd5b5061014361021f3660046115f0565b6105c1565b34801561023057600080fd5b506040516012815260200161016c565b34801561024c57600080fd5b506101b561025b3660046115b6565b610645565b34801561026c57600080fd5b5061014361027b3660046115b6565b610667565b34801561028c57600080fd5b506102b47f000000000000000000000000000000000000000000000000000000000000000081565b60405161016c91906114e2565b3480156102cd57600080fd5b506102b47f000000000000000000000000000000000000000000000000000000000000000081565b34801561030157600080fd5b506101d6610310366004611643565b6001600160a01b031660009081526020819052604090205490565b34801561033757600080fd5b5061015f610687565b34801561034c57600080fd5b5061014361035b3660046115b6565b610696565b34801561036c57600080fd5b506101b561037b3660046115b6565b6106b2565b34801561038c57600080fd5b506101b561039b3660046115b6565b61072d565b3480156103ac57600080fd5b506101436103bb3660046115b6565b61073b565b3480156103cc57600080fd5b506101d66103db366004611660565b610785565b6000816001600160a01b03166321f8a7216040516020016104189060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161044c91815260200190565b602060405180830381865afa158015610469573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048d9190611699565b92915050565b6060600380546104a2906116b6565b80601f01602080910402602001604051908101604052809291908181526020018280546104ce906116b6565b801561051b5780601f106104f05761010080835404028352916020019161051b565b820191906000526020600020905b8154815290600101906020018083116104fe57829003601f168201915b5050505050905090565b610575604051602001610537906116f0565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b8152506107b0565b610580838383610860565b505050565b6000336105938185856108b7565b5060019392505050565b6000336105ab8582856109db565b6105b6858585610a55565b506001949350505050565b6105d3604051602001610537906116f0565b60006105fe7f00000000000000000000000000000000000000000000000000000000000000006103e0565b9050806001600160a01b0316856001600160a01b031614801561061e5750815b156106335761062e858585610be7565b61063e565b61063e858585610860565b5050505050565b6000336105938185856106588383610785565b6106629190611714565b6108b7565b610679604051602001610537906116f0565b6106838282610c3e565b5050565b6060600480546104a2906116b6565b6106a8604051602001610537906116f0565b6106838282610ceb565b600033816106c08286610785565b9050838110156107205760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161013a565b6105b682868684036108b7565b600033610593818585610a55565b61074d604051602001610537906116f0565b60006107787f00000000000000000000000000000000000000000000000000000000000000006103e0565b9050610580818484610be7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb906107fe9033908690600401611735565b602060405180830381865afa15801561081b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083f919061174e565b61068357338160405163a35b150b60e01b815260040161013a92919061176b565b306001600160a01b0383160361088b5781604051637387c8a960e11b815260040161013a91906114e2565b6105807f0000000000000000000000000000000000000000000000000000000000000000848484610e0b565b6001600160a01b0383166109195760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161013a565b6001600160a01b03821661097a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161013a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006109e78484610785565b90506000198114610a4f5781811015610a425760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161013a565b610a4f84848484036108b7565b50505050565b6001600160a01b038316610ab95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161013a565b6001600160a01b038216610b1b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161013a565b6001600160a01b03831660009081526020819052604090205481811015610b935760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161013a565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290926000805160206118bd833981519152910160405180910390a3610a4f565b306001600160a01b03831603610c125781604051637387c8a960e11b815260040161013a91906114e2565b6105807f0000000000000000000000000000000000000000000000000000000000000000848484611058565b6001600160a01b038216610c945760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161013a565b8060026000828254610ca69190611714565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481526000805160206118bd833981519152910160405180910390a35050565b6001600160a01b038216610d4b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161013a565b6001600160a01b03821660009081526020819052604090205481811015610dbf5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161013a565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192916000805160206118bd833981519152910160405180910390a3505050565b8015610a4f57610e1a826111b8565b6000846001600160a01b031663bd02d0f5610e34866111df565b6040518263ffffffff1660e01b8152600401610e5291815260200190565b602060405180830381865afa158015610e6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e939190611797565b905080600003610eb85783604051634fe14bfd60e11b815260040161013a91906114e2565b6000610ec685858585611267565b5090508015610ed6575050610a4f565b6000866001600160a01b03166321f8a721604051602001610f1a906020808252600f908201526e484f4c44494e475f4144445245535360881b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610f4e91815260200190565b602060405180830381865afa158015610f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8f9190611699565b90506001600160a01b038116610fb857604051633a6de2f560e21b815260040160405180910390fd5b600080610fc788848888611267565b915091508115610fdb575050505050610a4f565b6000610fe6826113cf565b5090507fc9f14d9a0a9b46470c7c0b6c508f8283abaab7f795f153953c58cd4250824dae818360405161101a9291906117b0565b60405180910390a160405163012f3b8f60e71b81526001600160a01b03808b166004830152891660248201526044810188905260640161013a565b50565b8015610a4f57611067826111b8565b604051632e1a7d4d60e01b8152600481018290526001600160a01b03841690632e1a7d4d90602401600060405180830381600087803b1580156110a957600080fd5b505af11580156110bd573d6000803e3d6000fd5b505050506000846001600160a01b031663bd02d0f5604051602001611113906020808252601f908201527f4e41544956455f544f4b454e5f5452414e534645525f4741535f4c494d495400604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161114791815260200190565b602060405180830381865afa158015611164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111889190611797565b90506000806000806000868887f1905080156111a5575050610a4f565b6111b086858561145f565b505050505050565b6001600160a01b0381166110555760405163d551823d60e01b815260040160405180910390fd5b600060405160200161121d906020808252601890820152771513d2d15397d514905394d1915497d1d054d7d31253525560421b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b60006060600063a9059cbb60e01b8686604051602401611288929190611735565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080886001600160a01b031686846040516112d991906117de565b60006040518083038160008787f1925050503d8060008114611317576040519150601f19603f3d011682016040523d82523d6000602084013e61131c565b606091505b509150915081156113bd57805160000361137a576001600160a01b0389163b61137a5760006040518060400160405280601481526020017310d85b1b081d1bc81b9bdb8b58dbdb9d1c9858dd60621b815250945094505050506113c6565b6000815111801561139c57508080602001905181019061139a919061174e565b155b156113af576000945092506113c6915050565b6001945092506113c6915050565b60009450925050505b94509492505050565b606060006044835110156113f6575050604080516020810190915260008082529092909150565b6000611403846020015190565b90506307b9e43360e51b6001600160e01b031982160161144257600484019350838060200190518101906114379190611810565b946001945092505050565b600060405180602001604052806000815250909250925050915091565b8060000361146c57505050565b611475826111b8565b6000611480846103e0565b9050806001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156114bd57600080fd5b505af11580156114d1573d6000803e3d6000fd5b5050505050610a4f84828585610e0b565b6001600160a01b0391909116815260200190565b60005b838110156115115781810151838201526020016114f9565b50506000910152565b600081518084526115328160208601602086016114f6565b601f01601f19169290920160200192915050565b602081526000611559602083018461151a565b9392505050565b6001600160a01b038116811461105557600080fd5b60008060006060848603121561158a57600080fd5b833561159581611560565b925060208401356115a581611560565b929592945050506040919091013590565b600080604083850312156115c957600080fd5b82356115d481611560565b946020939093013593505050565b801515811461105557600080fd5b6000806000806080858703121561160657600080fd5b843561161181611560565b9350602085013561162181611560565b9250604085013591506060850135611638816115e2565b939692955090935050565b60006020828403121561165557600080fd5b813561155981611560565b6000806040838503121561167357600080fd5b823561167e81611560565b9150602083013561168e81611560565b809150509250929050565b6000602082840312156116ab57600080fd5b815161155981611560565b600181811c908216806116ca57607f821691505b6020821081036116ea57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b8082018082111561048d57634e487b7160e01b600052601160045260246000fd5b6001600160a01b03929092168252602082015260400190565b60006020828403121561176057600080fd5b8151611559816115e2565b6001600160a01b038316815260406020820181905260009061178f9083018461151a565b949350505050565b6000602082840312156117a957600080fd5b5051919050565b6040815260006117c3604083018561151a565b82810360208401526117d5818561151a565b95945050505050565b600082516117f08184602087016114f6565b9190910192915050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561182257600080fd5b81516001600160401b038082111561183957600080fd5b818401915084601f83011261184d57600080fd5b81518181111561185f5761185f6117fa565b604051601f8201601f19908116603f01168101908382118183101715611887576118876117fa565b816040528281528760208487010111156118a057600080fd5b6118b18360208301602088016114f6565b97965050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212207192aef0c4c3281fe339e47453525e785397c640817afef172b96687472e498964736f6c63430008120033";

type MarketTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketToken__factory extends ContractFactory {
  constructor(...args: MarketTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketToken> {
    return super.deploy(
      _roleStore,
      _dataStore,
      overrides || {}
    ) as Promise<MarketToken>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, _dataStore, overrides || {});
  }
  override attach(address: string): MarketToken {
    return super.attach(address) as MarketToken;
  }
  override connect(signer: Signer): MarketToken__factory {
    return super.connect(signer) as MarketToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketTokenInterface {
    return new utils.Interface(_abi) as MarketTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketToken {
    return new Contract(address, _abi, signerOrProvider) as MarketToken;
  }
}