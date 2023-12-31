/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RevertingCallbackReceiver,
  RevertingCallbackReceiverInterface,
} from "../../../contracts/mock/RevertingCallbackReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
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
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "value",
                    type: "address",
                  },
                ],
                internalType: "struct EventUtils.AddressKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address[]",
                    name: "value",
                    type: "address[]",
                  },
                ],
                internalType: "struct EventUtils.AddressArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.AddressItems",
            name: "addressItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                ],
                internalType: "struct EventUtils.UintKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256[]",
                    name: "value",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct EventUtils.UintArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.UintItems",
            name: "uintItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256",
                    name: "value",
                    type: "int256",
                  },
                ],
                internalType: "struct EventUtils.IntKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256[]",
                    name: "value",
                    type: "int256[]",
                  },
                ],
                internalType: "struct EventUtils.IntArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.IntItems",
            name: "intItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "value",
                    type: "bool",
                  },
                ],
                internalType: "struct EventUtils.BoolKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool[]",
                    name: "value",
                    type: "bool[]",
                  },
                ],
                internalType: "struct EventUtils.BoolArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BoolItems",
            name: "boolItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32",
                    name: "value",
                    type: "bytes32",
                  },
                ],
                internalType: "struct EventUtils.Bytes32KeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32[]",
                    name: "value",
                    type: "bytes32[]",
                  },
                ],
                internalType: "struct EventUtils.Bytes32ArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.Bytes32Items",
            name: "bytes32Items",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes",
                    name: "value",
                    type: "bytes",
                  },
                ],
                internalType: "struct EventUtils.BytesKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes[]",
                    name: "value",
                    type: "bytes[]",
                  },
                ],
                internalType: "struct EventUtils.BytesArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BytesItems",
            name: "bytesItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "value",
                    type: "string",
                  },
                ],
                internalType: "struct EventUtils.StringKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string[]",
                    name: "value",
                    type: "string[]",
                  },
                ],
                internalType: "struct EventUtils.StringArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.StringItems",
            name: "stringItems",
            type: "tuple",
          },
        ],
        internalType: "struct EventUtils.EventLogData",
        name: "",
        type: "tuple",
      },
    ],
    name: "afterDepositCancellation",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
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
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "value",
                    type: "address",
                  },
                ],
                internalType: "struct EventUtils.AddressKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address[]",
                    name: "value",
                    type: "address[]",
                  },
                ],
                internalType: "struct EventUtils.AddressArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.AddressItems",
            name: "addressItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                ],
                internalType: "struct EventUtils.UintKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256[]",
                    name: "value",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct EventUtils.UintArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.UintItems",
            name: "uintItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256",
                    name: "value",
                    type: "int256",
                  },
                ],
                internalType: "struct EventUtils.IntKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256[]",
                    name: "value",
                    type: "int256[]",
                  },
                ],
                internalType: "struct EventUtils.IntArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.IntItems",
            name: "intItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "value",
                    type: "bool",
                  },
                ],
                internalType: "struct EventUtils.BoolKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool[]",
                    name: "value",
                    type: "bool[]",
                  },
                ],
                internalType: "struct EventUtils.BoolArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BoolItems",
            name: "boolItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32",
                    name: "value",
                    type: "bytes32",
                  },
                ],
                internalType: "struct EventUtils.Bytes32KeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32[]",
                    name: "value",
                    type: "bytes32[]",
                  },
                ],
                internalType: "struct EventUtils.Bytes32ArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.Bytes32Items",
            name: "bytes32Items",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes",
                    name: "value",
                    type: "bytes",
                  },
                ],
                internalType: "struct EventUtils.BytesKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes[]",
                    name: "value",
                    type: "bytes[]",
                  },
                ],
                internalType: "struct EventUtils.BytesArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BytesItems",
            name: "bytesItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "value",
                    type: "string",
                  },
                ],
                internalType: "struct EventUtils.StringKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string[]",
                    name: "value",
                    type: "string[]",
                  },
                ],
                internalType: "struct EventUtils.StringArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.StringItems",
            name: "stringItems",
            type: "tuple",
          },
        ],
        internalType: "struct EventUtils.EventLogData",
        name: "",
        type: "tuple",
      },
    ],
    name: "afterDepositExecution",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061102f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634ef189b81461003b578063a02ba64d1461003b575b600080fd5b61004e610049366004610e6f565b610050565b005b60405162461bcd60e51b815260206004820152600560248201526432b93937b960d91b604482015260640160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156100bc576100bc610084565b60405290565b60405160e081016001600160401b03811182821017156100bc576100bc610084565b604051606081016001600160401b03811182821017156100bc576100bc610084565b60405161012081016001600160401b03811182821017156100bc576100bc610084565b604051601f8201601f191681016001600160401b038111828210171561015157610151610084565b604052919050565b80356001600160a01b038116811461017057600080fd5b919050565b60006001600160401b0382111561018e5761018e610084565b5060051b60200190565b600082601f8301126101a957600080fd5b813560206101be6101b983610175565b610129565b82815260059290921b840181019181810190868411156101dd57600080fd5b8286015b848110156101ff576101f281610159565b83529183019183016101e1565b509695505050505050565b600060c0828403121561021c57600080fd5b60405160c081016001600160401b038111828210171561023e5761023e610084565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201525092915050565b8035801515811461017057600080fd5b6000602082840312156102a557600080fd5b604051602081016001600160401b03811182821017156102c7576102c7610084565b6040529050806102d683610283565b905292915050565b600082601f8301126102ef57600080fd5b81356001600160401b0381111561030857610308610084565b61031b601f8201601f1916602001610129565b81815284602083860101111561033057600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261035e57600080fd5b8135602061036e6101b983610175565b82815260059290921b8401810191818101908684111561038d57600080fd5b8286015b848110156101ff5780356001600160401b03808211156103b15760008081fd5b908801906040828b03601f19018113156103cb5760008081fd5b6103d361009a565b87840135838111156103e55760008081fd5b6103f38d8a838801016102de565b8252509083013590828211156104095760008081fd5b6104178c8984870101610198565b818901528652505050918301918301610391565b6000604080838503121561043e57600080fd5b61044661009a565b915082356001600160401b038082111561045f57600080fd5b818501915085601f83011261047357600080fd5b813560206104836101b983610175565b82815260059290921b840181019181810190898411156104a257600080fd5b8286015b8481101561051c578035868111156104be5760008081fd5b8701808c03601f19018913156104d45760008081fd5b6104dc61009a565b85820135888111156104ee5760008081fd5b6104fc8e88838601016102de565b82525061050a8a8301610159565b818701528452509183019183016104a6565b508752508681013594508285111561053357600080fd5b61053f8886890161034d565b81870152505050505092915050565b600082601f83011261055f57600080fd5b8135602061056f6101b983610175565b828152600592831b850182019282820191908785111561058e57600080fd5b8387015b858110156106835780356001600160401b03808211156105b25760008081fd5b908901906040828c03601f19018113156105cc5760008081fd5b6105d461009a565b88840135838111156105e65760008081fd5b6105f48e8b838801016102de565b82525081840135838111156106095760008081fd5b8085019450508c603f85011261062157600092508283fd5b8884013592506106336101b984610175565b83815292861b8401820192898101908e8511156106505760008081fd5b948301945b8486101561066e5785358252948a0194908a0190610655565b828b0152508752505050928401928401610592565b5090979650505050505050565b600060408083850312156106a357600080fd5b6106ab61009a565b915082356001600160401b03808211156106c457600080fd5b818501915085601f8301126106d857600080fd5b813560206106e86101b983610175565b82815260059290921b8401810191818101908984111561070757600080fd5b8286015b84811015610779578035868111156107235760008081fd5b8701808c03601f19018913156107395760008081fd5b61074161009a565b85820135888111156107535760008081fd5b6107618e88838601016102de565b8252509089013585820152835291830191830161070b565b508752508681013594508285111561079057600080fd5b61053f8886890161054e565b600082601f8301126107ad57600080fd5b813560206107bd6101b983610175565b828152600592831b85018201928282019190878511156107dc57600080fd5b8387015b858110156106835780356001600160401b03808211156108005760008081fd5b908901906040828c03601f190181131561081a5760008081fd5b61082261009a565b88840135838111156108345760008081fd5b6108428e8b838801016102de565b82525081840135838111156108575760008081fd5b8085019450508c603f85011261086f57600092508283fd5b8884013592506108816101b984610175565b83815292861b8401820192898101908e85111561089e5760008081fd5b948301945b848610156108c3576108b486610283565b8252948a0194908a01906108a3565b828b01525087525050509284019284016107e0565b600060408083850312156108eb57600080fd5b6108f361009a565b915082356001600160401b038082111561090c57600080fd5b818501915085601f83011261092057600080fd5b813560206109306101b983610175565b82815260059290921b8401810191818101908984111561094f57600080fd5b8286015b848110156109c95780358681111561096b5760008081fd5b8701808c03601f19018913156109815760008081fd5b61098961009a565b858201358881111561099b5760008081fd5b6109a98e88838601016102de565b8252506109b78a8301610283565b81870152845250918301918301610953565b50875250868101359450828511156109e057600080fd5b61053f8886890161079c565b600060408083850312156109ff57600080fd5b610a0761009a565b915082356001600160401b0380821115610a2057600080fd5b818501915085601f830112610a3457600080fd5b81356020610a446101b983610175565b82815260059290921b84018101918181019089841115610a6357600080fd5b8286015b8481101561077957803586811115610a7f5760008081fd5b8701808c03601f1901891315610a955760008081fd5b610a9d61009a565b8582013588811115610aaf5760008081fd5b610abd8e88838601016102de565b82525090890135858201528352918301918301610a67565b600082601f830112610ae657600080fd5b81356020610af66101b983610175565b82815260059290921b84018101918181019086841115610b1557600080fd5b8286015b848110156101ff576001600160401b038135811015610b3757600080fd5b813588016040818b03601f19011215610b4f57600080fd5b610b5761009a565b8682013583811115610b6857600080fd5b610b768c89838601016102de565b825250604082013583811115610b8b57600080fd5b8083019250508a603f830112610ba057600080fd5b86820135610bb06101b982610175565b81815260059190911b830160400190888101908d831115610bd057600080fd5b604085015b83811015610c08578681351115610beb57600080fd5b610bfb8f604083358901016102de565b8352918a01918a01610bd5565b50838a0152505085525050918301918301610b19565b60006040808385031215610c3157600080fd5b610c3961009a565b915082356001600160401b0380821115610c5257600080fd5b818501915085601f830112610c6657600080fd5b81356020610c766101b983610175565b82815260059290921b84018101918181019089841115610c9557600080fd5b8286015b84811015610d2557803586811115610cb15760008081fd5b8701808c03601f1901891315610cc75760008081fd5b610ccf61009a565b8582013588811115610ce15760008081fd5b610cef8e88838601016102de565b8252508982013588811115610d045760008081fd5b610d128e88838601016102de565b8288015250845250918301918301610c99565b5087525086810135945082851115610d3c57600080fd5b61053f88868901610ad5565b600060e08284031215610d5a57600080fd5b610d626100c2565b905081356001600160401b0380821115610d7b57600080fd5b610d878583860161042b565b83526020840135915080821115610d9d57600080fd5b610da985838601610690565b60208401526040840135915080821115610dc257600080fd5b610dce85838601610690565b60408401526060840135915080821115610de757600080fd5b610df3858386016108d8565b60608401526080840135915080821115610e0c57600080fd5b610e18858386016109ec565b608084015260a0840135915080821115610e3157600080fd5b610e3d85838601610c1e565b60a084015260c0840135915080821115610e5657600080fd5b50610e6384828501610c1e565b60c08301525092915050565b600080600060608486031215610e8457600080fd5b8335925060208401356001600160401b0380821115610ea257600080fd5b8186019150610100808389031215610eb957600080fd5b610ec16100e4565b833583811115610ed057600080fd5b8401610120818b031215610ee357600080fd5b610eeb610106565b610ef482610159565b8152610f0260208301610159565b6020820152610f1360408301610159565b6040820152610f2460608301610159565b6060820152610f3560808301610159565b6080820152610f4660a08301610159565b60a0820152610f5760c08301610159565b60c082015260e082013585811115610f6e57600080fd5b610f7a8c828501610198565b60e0830152508382013585811115610f9157600080fd5b610f9d8c828501610198565b8286015250825250610fb2896020860161020a565b6020820152610fc48960e08601610293565b604082015280955050506040860135915080821115610fe257600080fd5b50610fef86828701610d48565b915050925092509256fea26469706673582212207a057e77733273c9ed118e876340cb71a39083dd128ffc345198466a7b4a2bd364736f6c63430008120033";

type RevertingCallbackReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevertingCallbackReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevertingCallbackReceiver__factory extends ContractFactory {
  constructor(...args: RevertingCallbackReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RevertingCallbackReceiver> {
    return super.deploy(overrides || {}) as Promise<RevertingCallbackReceiver>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RevertingCallbackReceiver {
    return super.attach(address) as RevertingCallbackReceiver;
  }
  override connect(signer: Signer): RevertingCallbackReceiver__factory {
    return super.connect(signer) as RevertingCallbackReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevertingCallbackReceiverInterface {
    return new utils.Interface(_abi) as RevertingCallbackReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevertingCallbackReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RevertingCallbackReceiver;
  }
}
