/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OrderStoreUtilsTest,
  OrderStoreUtilsTestInterface,
} from "../../../contracts/test/OrderStoreUtilsTest";

const _abi = [
  {
    inputs: [],
    name: "getEmptyOrder",
    outputs: [
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
                name: "initialCollateralToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "swapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Order.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Order.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum Order.DecreasePositionSwapType",
                name: "decreasePositionSwapType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialCollateralDeltaAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptablePrice",
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
              {
                internalType: "uint256",
                name: "minOutputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Order.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isFrozen",
                type: "bool",
              },
            ],
            internalType: "struct Order.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Order.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
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
                name: "initialCollateralToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "swapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Order.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum Order.OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "enum Order.DecreasePositionSwapType",
                name: "decreasePositionSwapType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "sizeDeltaUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialCollateralDeltaAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "triggerPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptablePrice",
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
              {
                internalType: "uint256",
                name: "minOutputAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Order.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isFrozen",
                type: "bool",
              },
            ],
            internalType: "struct Order.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Order.Props",
        name: "order",
        type: "tuple",
      },
    ],
    name: "setOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506108ed806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632a1a042214610046578063adc2db001461005b578063e23e70381461006e575b600080fd5b610059610054366004610240565b61008c565b005b6100596100693660046104b8565b61010c565b610076610147565b604051610083919061071a565b60405180910390f35b6040516374b6fe1360e01b81526001600160a01b038085166004830152602482018490528216604482015273__$9dcb75ef0bb6c4288f2ccffe7dc492c4eb$__906374b6fe13906064015b60006040518083038186803b1580156100ef57600080fd5b505af4158015610103573d6000803e3d6000fd5b50505050505050565b604051630c154e0d60e31b815273__$9dcb75ef0bb6c4288f2ccffe7dc492c4eb$__906360aa7068906100d7908690869086906004016107dc565b61014f61015c565b61015761015c565b919050565b604080516101408101909152600060608083018281526080840183905260a0840183905260c0840183905260e084018390526101008401929092526101208301528152602081016101fa60408051610140810190915280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291015290565b6001600160a01b038116811461023257600080fd5b50565b80356101578161021d565b60008060006060848603121561025557600080fd5b83356102608161021d565b92506020840135915060408401356102778161021d565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156102bb576102bb610282565b60405290565b604051606081016001600160401b03811182821017156102bb576102bb610282565b60405160e081016001600160401b03811182821017156102bb576102bb610282565b600082601f83011261031657600080fd5b813560206001600160401b038083111561033257610332610282565b8260051b604051601f19603f8301168101818110848211171561035757610357610282565b60405293845285810183019383810192508785111561037557600080fd5b83870191505b8482101561039d57813561038e8161021d565b8352918301919083019061037b565b979650505050505050565b80356008811061015757600080fd5b80356003811061015757600080fd5b600061014082840312156103d957600080fd5b6103e1610298565b90506103ec826103a8565b81526103fa602083016103b7565b602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525092915050565b8035801515811461015757600080fd5b60006060828403121561047b57600080fd5b6104836102c1565b905061048e82610459565b815261049c60208301610459565b60208201526104ad60408301610459565b604082015292915050565b6000806000606084860312156104cd57600080fd5b83356104d88161021d565b92506020840135915060408401356001600160401b03808211156104fb57600080fd5b908501906101c0828803121561051057600080fd5b6105186102c1565b82358281111561052757600080fd5b830160e0818a03121561053957600080fd5b6105416102e3565b61054a82610235565b815261055860208301610235565b602082015261056960408301610235565b604082015261057a60608301610235565b606082015261058b60808301610235565b608082015261059c60a08301610235565b60a082015260c0820135848111156105b357600080fd5b6105bf8b828501610305565b60c0830152508252506105d588602085016103c6565b60208201526105e8886101608501610469565b60408201528093505050509250925092565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156106405781516001600160a01b03168752958201959082019060010161061b565b509495945050505050565b634e487b7160e01b600052602160045260246000fd5b600881106106715761067161064b565b9052565b600381106106715761067161064b565b610690828251610661565b60208101516106a26020840182610675565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152505050565b8051151582526020808201511515908301526040908101511515910152565b60208152600082516101c0602084015260018060a01b03808251166101e085015280602083015116610200850152806040830151166102208501525060608101516107696102408501826105fa565b50608081015161077d6102608501826105fa565b5060a08101516107916102808501826105fa565b5060c0015160e06102a08401526107ac6102c0840182610607565b905060208401516107c06040850182610685565b5060408401516107d46101808501826106fb565b509392505050565b600060018060a01b0380861683528460208401526060604084015283516101c08060608601528282511661022086015282602083015116610240860152826040830151166102608601526060820151925061083b6102808601846105fa565b608082015192506108506102a08601846105fa565b60a082015192506108656102c08601846105fa565b60c0820151925060e06102e0860152610882610300860184610607565b9250602086015191506108986080860183610685565b604086015191506108ab818601836106fb565b5090969550505050505056fea2646970667358221220944f2b110d4a73a8b24b1789b80b5f84f0eedaa7bcd8091e0a7988f04d81f31864736f6c63430008120033";

type OrderStoreUtilsTestConstructorParams =
  | [linkLibraryAddresses: OrderStoreUtilsTestLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OrderStoreUtilsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class OrderStoreUtilsTest__factory extends ContractFactory {
  constructor(...args: OrderStoreUtilsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        OrderStoreUtilsTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: OrderStoreUtilsTestLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$9dcb75ef0bb6c4288f2ccffe7dc492c4eb\\$__", "g"),
      linkLibraryAddresses[
        "contracts/order/OrderStoreUtils.sol:OrderStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OrderStoreUtilsTest> {
    return super.deploy(overrides || {}) as Promise<OrderStoreUtilsTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OrderStoreUtilsTest {
    return super.attach(address) as OrderStoreUtilsTest;
  }
  override connect(signer: Signer): OrderStoreUtilsTest__factory {
    return super.connect(signer) as OrderStoreUtilsTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderStoreUtilsTestInterface {
    return new utils.Interface(_abi) as OrderStoreUtilsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderStoreUtilsTest {
    return new Contract(address, _abi, signerOrProvider) as OrderStoreUtilsTest;
  }
}

export interface OrderStoreUtilsTestLibraryAddresses {
  ["contracts/order/OrderStoreUtils.sol:OrderStoreUtils"]: string;
}
