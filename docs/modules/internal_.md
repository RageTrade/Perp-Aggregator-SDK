[perp-aggregator-sdk](../README.md) / [Exports](../modules.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Classes

- [BigNumber](../classes/internal_.BigNumber.md)
- [FixedNumber](../classes/internal_.FixedNumber.md)

### Interfaces

- [ArrayLike](../interfaces/internal_.ArrayLike.md)
- [Boolean](../interfaces/internal_.Boolean.md)
- [Hexable](../interfaces/internal_.Hexable.md)
- [IRouterAdapterBaseV1](../interfaces/internal_.IRouterAdapterBaseV1.md)
- [ResolvedConfig](../interfaces/internal_.ResolvedConfig.md)
- [Token](../interfaces/internal_.Token.md)

### Type Aliases

- [Abi](internal_.md#abi)
- [AbiConstructor](internal_.md#abiconstructor)
- [AbiError](internal_.md#abierror)
- [AbiEvent](internal_.md#abievent)
- [AbiEventParameter](internal_.md#abieventparameter)
- [AbiEventParameterToPrimitiveType](internal_.md#abieventparametertoprimitivetype)
- [AbiEventParametersToPrimitiveTypes](internal_.md#abieventparameterstoprimitivetypes)
- [AbiFallback](internal_.md#abifallback)
- [AbiFunction](internal_.md#abifunction)
- [AbiInternalType](internal_.md#abiinternaltype)
- [AbiParameter](internal_.md#abiparameter)
- [AbiParameterKind](internal_.md#abiparameterkind)
- [AbiParameterToPrimitiveType](internal_.md#abiparametertoprimitivetype)
- [AbiParametersToPrimitiveTypes](internal_.md#abiparameterstoprimitivetypes)
- [AbiReceive](internal_.md#abireceive)
- [AbiStateMutability](internal_.md#abistatemutability)
- [AbiType](internal_.md#abitype)
- [AbiTypeToPrimitiveType](internal_.md#abitypetoprimitivetype)
- [AccessList](internal_.md#accesslist)
- [AccessList](internal_.md#accesslist-1)
- [AccessListish](internal_.md#accesslistish)
- [Account](internal_.md#account)
- [AccountProof](internal_.md#accountproof)
- [AddChainParameters](internal_.md#addchainparameters)
- [AddEthereumChainParameter](internal_.md#addethereumchainparameter)
- [Address](internal_.md#address)
- [AmountInfo](internal_.md#amountinfo)
- [ApiOpts](internal_.md#apiopts)
- [AssetGateway](internal_.md#assetgateway)
- [AssetGatewayUrls](internal_.md#assetgatewayurls)
- [BigNumberish](internal_.md#bignumberish)
- [BigNumberish](internal_.md#bignumberish-1)
- [BitsTypeLookup](internal_.md#bitstypelookup)
- [Block](internal_.md#block)
- [BlockIdentifier](internal_.md#blockidentifier)
- [BlockNumber](internal_.md#blocknumber)
- [BlockPendingDependencies](internal_.md#blockpendingdependencies)
- [BlockTag](internal_.md#blocktag)
- [ByteArray](internal_.md#bytearray)
- [Bytes](internal_.md#bytes)
- [BytesLike](internal_.md#byteslike)
- [BytesLike](internal_.md#byteslike-1)
- [CallParameters](internal_.md#callparameters)
- [CallReturnType](internal_.md#callreturntype)
- [CancelOrder](internal_.md#cancelorder)
- [Chain](internal_.md#chain)
- [ChainBlockExplorer](internal_.md#chainblockexplorer)
- [ChainConfig](internal_.md#chainconfig)
- [ChainConstants](internal_.md#chainconstants)
- [ChainContract](internal_.md#chaincontract)
- [ChainEstimateFeesPerGasFnParameters](internal_.md#chainestimatefeespergasfnparameters)
- [ChainFees](internal_.md#chainfees)
- [ChainFeesFnParameters](internal_.md#chainfeesfnparameters)
- [ChainFormatter](internal_.md#chainformatter)
- [ChainFormatters](internal_.md#chainformatters)
- [ChainNativeCurrency](internal_.md#chainnativecurrency)
- [ChainRpcUrls](internal_.md#chainrpcurls)
- [ChainSerializers](internal_.md#chainserializers)
- [ClaimInfo](internal_.md#claiminfo)
- [ClaimType](internal_.md#claimtype)
- [Client](internal_.md#client)
- [ClientConfig](internal_.md#clientconfig)
- [Client\_Base](internal_.md#client_base)
- [CloseOrderType](internal_.md#closeordertype)
- [ClosePositionData](internal_.md#closepositiondata)
- [CloseTradePreviewInfo](internal_.md#closetradepreviewinfo)
- [CollateralData](internal_.md#collateraldata)
- [ContractFunctionConfig](internal_.md#contractfunctionconfig)
- [ContractFunctionResult](internal_.md#contractfunctionresult)
- [CreateBlockFilterReturnType](internal_.md#createblockfilterreturntype)
- [CreateContractEventFilterParameters](internal_.md#createcontracteventfilterparameters)
- [CreateContractEventFilterReturnType](internal_.md#createcontracteventfilterreturntype)
- [CreateEventFilterParameters](internal_.md#createeventfilterparameters)
- [CreateEventFilterReturnType](internal_.md#createeventfilterreturntype)
- [CreateOrder](internal_.md#createorder)
- [CreateOrderType](internal_.md#createordertype)
- [CreatePendingTransactionFilterReturnType](internal_.md#creatependingtransactionfilterreturntype)
- [CustomSource](internal_.md#customsource)
- [DataHexString](internal_.md#datahexstring)
- [DefaultEventParameterOptions](internal_.md#defaulteventparameteroptions)
- [DeployContractParameters](internal_.md#deploycontractparameters)
- [DeployContractReturnType](internal_.md#deploycontractreturntype)
- [DerivedRpcSchema](internal_.md#derivedrpcschema)
- [DynamicMarketMetadata](internal_.md#dynamicmarketmetadata)
- [EIP1193Parameters](internal_.md#eip1193parameters)
- [EIP1193RequestFn](internal_.md#eip1193requestfn)
- [EIP1474Methods](internal_.md#eip1474methods)
- [Error](internal_.md#error)
- [ErrorData](internal_.md#errordata)
- [EstimateContractGasParameters](internal_.md#estimatecontractgasparameters)
- [EstimateContractGasReturnType](internal_.md#estimatecontractgasreturntype)
- [EstimateFeesPerGasParameters](internal_.md#estimatefeespergasparameters)
- [EstimateFeesPerGasReturnType](internal_.md#estimatefeespergasreturntype)
- [EstimateGasParameters](internal_.md#estimategasparameters)
- [EstimateGasReturnType](internal_.md#estimategasreturntype)
- [EstimateMaxPriorityFeePerGasParameters](internal_.md#estimatemaxpriorityfeepergasparameters)
- [EstimateMaxPriorityFeePerGasReturnType](internal_.md#estimatemaxpriorityfeepergasreturntype)
- [EventParameterOptions](internal_.md#eventparameteroptions)
- [Exclude](internal_.md#exclude)
- [ExtendableProtectedActions](internal_.md#extendableprotectedactions)
- [Extended](internal_.md#extended)
- [Extract](internal_.md#extract)
- [ExtractAbiEvent](internal_.md#extractabievent)
- [ExtractAbiEventNames](internal_.md#extractabieventnames)
- [ExtractAbiEvents](internal_.md#extractabievents)
- [ExtractAbiFunction](internal_.md#extractabifunction)
- [ExtractAbiFunctionNames](internal_.md#extractabifunctionnames)
- [ExtractAbiFunctions](internal_.md#extractabifunctions)
- [ExtractChainFormatterExclude](internal_.md#extractchainformatterexclude)
- [ExtractChainFormatterParameters](internal_.md#extractchainformatterparameters)
- [ExtractChainFormatterReturnType](internal_.md#extractchainformatterreturntype)
- [FeeHistory](internal_.md#feehistory)
- [FeeValuesEIP1559](internal_.md#feevalueseip1559)
- [FeeValuesLegacy](internal_.md#feevalueslegacy)
- [FeeValuesType](internal_.md#feevaluestype)
- [Filter](internal_.md#filter)
- [Filter](internal_.md#filter-1)
- [FilterRpcSchema](internal_.md#filterrpcschema)
- [FilterType](internal_.md#filtertype)
- [FixedFormat](internal_.md#fixedformat)
- [FormattedBlock](internal_.md#formattedblock)
- [FormattedCall](internal_.md#formattedcall)
- [FormattedEstimateGas](internal_.md#formattedestimategas)
- [FormattedTransaction](internal_.md#formattedtransaction)
- [FormattedTransactionReceipt](internal_.md#formattedtransactionreceipt)
- [FormattedTransactionRequest](internal_.md#formattedtransactionrequest)
- [GenericStaticMarketMetadata](internal_.md#genericstaticmarketmetadata)
- [GetAccountParameter](internal_.md#getaccountparameter)
- [GetAddressesReturnType](internal_.md#getaddressesreturntype)
- [GetBalanceParameters](internal_.md#getbalanceparameters)
- [GetBalanceReturnType](internal_.md#getbalancereturntype)
- [GetBlockNumberParameters](internal_.md#getblocknumberparameters)
- [GetBlockNumberReturnType](internal_.md#getblocknumberreturntype)
- [GetBlockParameters](internal_.md#getblockparameters)
- [GetBlockReturnType](internal_.md#getblockreturntype)
- [GetBlockTransactionCountParameters](internal_.md#getblocktransactioncountparameters)
- [GetBlockTransactionCountReturnType](internal_.md#getblocktransactioncountreturntype)
- [GetBytecodeParameters](internal_.md#getbytecodeparameters)
- [GetBytecodeReturnType](internal_.md#getbytecodereturntype)
- [GetChain](internal_.md#getchain)
- [GetChainIdReturnType](internal_.md#getchainidreturntype)
- [GetConstructorArgs](internal_.md#getconstructorargs)
- [GetContractEventsParameters](internal_.md#getcontracteventsparameters)
- [GetContractEventsReturnType](internal_.md#getcontracteventsreturntype)
- [GetEnsAddressParameters](internal_.md#getensaddressparameters)
- [GetEnsAddressReturnType](internal_.md#getensaddressreturntype)
- [GetEnsAvatarParameters](internal_.md#getensavatarparameters)
- [GetEnsAvatarReturnType](internal_.md#getensavatarreturntype)
- [GetEnsNameParameters](internal_.md#getensnameparameters)
- [GetEnsNameReturnType](internal_.md#getensnamereturntype)
- [GetEnsResolverParameters](internal_.md#getensresolverparameters)
- [GetEnsResolverReturnType](internal_.md#getensresolverreturntype)
- [GetEnsTextParameters](internal_.md#getenstextparameters)
- [GetEnsTextReturnType](internal_.md#getenstextreturntype)
- [GetEventArgs](internal_.md#geteventargs)
- [GetFeeHistoryParameters](internal_.md#getfeehistoryparameters)
- [GetFeeHistoryReturnType](internal_.md#getfeehistoryreturntype)
- [GetFilterChangesParameters](internal_.md#getfilterchangesparameters)
- [GetFilterChangesReturnType](internal_.md#getfilterchangesreturntype)
- [GetFilterLogsParameters](internal_.md#getfilterlogsparameters)
- [GetFilterLogsReturnType](internal_.md#getfilterlogsreturntype)
- [GetFunctionArgs](internal_.md#getfunctionargs)
- [GetGasPriceReturnType](internal_.md#getgaspricereturntype)
- [GetInferredLogValues](internal_.md#getinferredlogvalues)
- [GetLogsParameters](internal_.md#getlogsparameters)
- [GetLogsReturnType](internal_.md#getlogsreturntype)
- [GetPermissionsReturnType](internal_.md#getpermissionsreturntype)
- [GetProofParameters](internal_.md#getproofparameters)
- [GetProofReturnType](internal_.md#getproofreturntype)
- [GetStorageAtParameters](internal_.md#getstorageatparameters)
- [GetStorageAtReturnType](internal_.md#getstorageatreturntype)
- [GetTopics](internal_.md#gettopics)
- [GetTransactionConfirmationsParameters](internal_.md#gettransactionconfirmationsparameters)
- [GetTransactionConfirmationsReturnType](internal_.md#gettransactionconfirmationsreturntype)
- [GetTransactionCountParameters](internal_.md#gettransactioncountparameters)
- [GetTransactionCountReturnType](internal_.md#gettransactioncountreturntype)
- [GetTransactionParameters](internal_.md#gettransactionparameters)
- [GetTransactionReceiptParameters](internal_.md#gettransactionreceiptparameters)
- [GetTransactionReceiptReturnType](internal_.md#gettransactionreceiptreturntype)
- [GetTransactionReturnType](internal_.md#gettransactionreturntype)
- [GetTransactionType](internal_.md#gettransactiontype)
- [GetTransportConfig](internal_.md#gettransportconfig)
- [GetTypedDataDomain](internal_.md#gettypeddatadomain)
- [GetTypedDataMessage](internal_.md#gettypeddatamessage)
- [GetTypedDataPrimaryType](internal_.md#gettypeddataprimarytype)
- [GetTypedDataTypes](internal_.md#gettypeddatatypes)
- [GetValue](internal_.md#getvalue)
- [GreaterThan48Bits](internal_.md#greaterthan48bits)
- [Hash](internal_.md#hash)
- [Hex](internal_.md#hex)
- [HistoricalTradeInfo](internal_.md#historicaltradeinfo)
- [IdleMarginInfo](internal_.md#idlemargininfo)
- [Index](internal_.md#index)
- [InferEventName](internal_.md#infereventname)
- [InferFunctionName](internal_.md#inferfunctionname)
- [IsNarrowable](internal_.md#isnarrowable)
- [IsNever](internal_.md#isnever)
- [IsUndefined](internal_.md#isundefined)
- [JsonRpcAccount](internal_.md#jsonrpcaccount)
- [LessThanOrEqualTo48Bits](internal_.md#lessthanorequalto48bits)
- [LiquidationInfo](internal_.md#liquidationinfo)
- [LocalAccount](internal_.md#localaccount)
- [Log](internal_.md#log)
- [LogTopic](internal_.md#logtopic)
- [LogTopicType](internal_.md#logtopictype)
- [MAXIMUM\_DEPTH](internal_.md#maximum_depth)
- [MBits](internal_.md#mbits)
- [MBytes](internal_.md#mbytes)
- [Market](internal_.md#market)
- [MarketInfo](internal_.md#marketinfo)
- [Maybe](internal_.md#maybe)
- [MaybeAbiEventName](internal_.md#maybeabieventname)
- [MaybeExtractEventArgsFromAbi](internal_.md#maybeextracteventargsfromabi)
- [MaybeRequired](internal_.md#mayberequired)
- [Merge](internal_.md#merge)
- [MulticallBatchOptions](internal_.md#multicallbatchoptions)
- [MulticallContract](internal_.md#multicallcontract)
- [MulticallContracts](internal_.md#multicallcontracts)
- [MulticallParameters](internal_.md#multicallparameters)
- [MulticallResult](internal_.md#multicallresult)
- [MulticallResults](internal_.md#multicallresults)
- [MulticallReturnType](internal_.md#multicallreturntype)
- [Narrow](internal_.md#narrow)
- [NetworkSync](internal_.md#networksync)
- [NoBits](internal_.md#nobits)
- [NoUndefined](internal_.md#noundefined)
- [Numeric](internal_.md#numeric)
- [Omit](internal_.md#omit)
- [OnBlock](internal_.md#onblock)
- [OnBlockNumberFn](internal_.md#onblocknumberfn)
- [OnBlockNumberParameter](internal_.md#onblocknumberparameter)
- [OnBlockParameter](internal_.md#onblockparameter)
- [OnTransactionsFn](internal_.md#ontransactionsfn)
- [OnTransactionsParameter](internal_.md#ontransactionsparameter)
- [OpenTradePreviewInfo](internal_.md#opentradepreviewinfo)
- [OrderAction](internal_.md#orderaction)
- [OrderData](internal_.md#orderdata)
- [OrderIdentifier](internal_.md#orderidentifier)
- [OrderInfo](internal_.md#orderinfo)
- [OrderType](internal_.md#ordertype)
- [PageOptions](internal_.md#pageoptions)
- [PaginatedRes](internal_.md#paginatedres)
- [Parameters](internal_.md#parameters)
- [Partial](internal_.md#partial)
- [Pick](internal_.md#pick)
- [PollOptions](internal_.md#polloptions)
- [PollOptions](internal_.md#polloptions-1)
- [PollOptions](internal_.md#polloptions-2)
- [PollOptions](internal_.md#polloptions-3)
- [PollOptions](internal_.md#polloptions-4)
- [PositionData](internal_.md#positiondata)
- [PositionInfo](internal_.md#positioninfo)
- [PrepareTransactionRequestParameters](internal_.md#preparetransactionrequestparameters)
- [PrepareTransactionRequestReturnType](internal_.md#preparetransactionrequestreturntype)
- [Prettify](internal_.md#prettify)
- [Pretty](internal_.md#pretty)
- [PreviewInfo](internal_.md#previewinfo)
- [PrimitiveTypeLookup](internal_.md#primitivetypelookup)
- [Proof](internal_.md#proof)
- [Protocol](internal_.md#protocol)
- [ProtocolId](internal_.md#protocolid)
- [PublicActions](internal_.md#publicactions)
- [PublicRpcSchema](internal_.md#publicrpcschema)
- [Quantity](internal_.md#quantity)
- [Range](internal_.md#range)
- [ReadContractParameters](internal_.md#readcontractparameters)
- [ReadContractReturnType](internal_.md#readcontractreturntype)
- [Record](internal_.md#record)
- [ReplacementReason](internal_.md#replacementreason)
- [ReplacementReturnType](internal_.md#replacementreturntype)
- [RequestAddressesReturnType](internal_.md#requestaddressesreturntype)
- [RequestPermissionsParameters](internal_.md#requestpermissionsparameters)
- [RequestPermissionsReturnType](internal_.md#requestpermissionsreturntype)
- [Required](internal_.md#required)
- [ResolvedAbiType](internal_.md#resolvedabitype)
- [ReturnType](internal_.md#returntype)
- [RpcBlock](internal_.md#rpcblock)
- [RpcBlockIdentifier](internal_.md#rpcblockidentifier)
- [RpcBlockNumber](internal_.md#rpcblocknumber)
- [RpcFeeHistory](internal_.md#rpcfeehistory)
- [RpcLog](internal_.md#rpclog)
- [RpcProof](internal_.md#rpcproof)
- [RpcSchema](internal_.md#rpcschema)
- [RpcSchemaOverride](internal_.md#rpcschemaoverride)
- [RpcTransaction](internal_.md#rpctransaction)
- [RpcTransactionReceipt](internal_.md#rpctransactionreceipt)
- [RpcTransactionRequest](internal_.md#rpctransactionrequest)
- [RpcUncle](internal_.md#rpcuncle)
- [SendRawTransactionParameters](internal_.md#sendrawtransactionparameters)
- [SendRawTransactionReturnType](internal_.md#sendrawtransactionreturntype)
- [SendTransactionParameters](internal_.md#sendtransactionparameters)
- [SendTransactionReturnType](internal_.md#sendtransactionreturntype)
- [SerializeTransactionFn](internal_.md#serializetransactionfn)
- [SerializedTransactionReturnType](internal_.md#serializedtransactionreturntype)
- [SignMessageParameters](internal_.md#signmessageparameters)
- [SignMessageReturnType](internal_.md#signmessagereturntype)
- [SignTransactionParameters](internal_.md#signtransactionparameters)
- [SignTransactionReturnType](internal_.md#signtransactionreturntype)
- [SignTypedDataParameters](internal_.md#signtypeddataparameters)
- [SignTypedDataReturnType](internal_.md#signtypeddatareturntype)
- [SignableMessage](internal_.md#signablemessage)
- [Signature](internal_.md#signature)
- [SimulateContractParameters](internal_.md#simulatecontractparameters)
- [SimulateContractReturnType](internal_.md#simulatecontractreturntype)
- [SolidityAddress](internal_.md#solidityaddress)
- [SolidityArray](internal_.md#solidityarray)
- [SolidityArrayWithTuple](internal_.md#solidityarraywithtuple)
- [SolidityArrayWithoutTuple](internal_.md#solidityarraywithouttuple)
- [SolidityBool](internal_.md#soliditybool)
- [SolidityBytes](internal_.md#soliditybytes)
- [SolidityFixedArrayRange](internal_.md#solidityfixedarrayrange)
- [SolidityFixedArraySizeLookup](internal_.md#solidityfixedarraysizelookup)
- [SolidityFunction](internal_.md#solidityfunction)
- [SolidityInt](internal_.md#solidityint)
- [SolidityString](internal_.md#soliditystring)
- [SolidityTuple](internal_.md#soliditytuple)
- [Status](internal_.md#status)
- [StorageProof](internal_.md#storageproof)
- [SwitchChainParameters](internal_.md#switchchainparameters)
- [Topics](internal_.md#topics)
- [TradeData](internal_.md#tradedata)
- [TradeDirection](internal_.md#tradedirection)
- [TradeOperationType](internal_.md#tradeoperationtype)
- [Transaction](internal_.md#transaction)
- [TransactionBase](internal_.md#transactionbase)
- [TransactionEIP1559](internal_.md#transactioneip1559)
- [TransactionEIP2930](internal_.md#transactioneip2930)
- [TransactionLegacy](internal_.md#transactionlegacy)
- [TransactionPendingDependencies](internal_.md#transactionpendingdependencies)
- [TransactionReceipt](internal_.md#transactionreceipt)
- [TransactionRequest](internal_.md#transactionrequest)
- [TransactionRequestBase](internal_.md#transactionrequestbase)
- [TransactionRequestEIP1559](internal_.md#transactionrequesteip1559)
- [TransactionRequestEIP2930](internal_.md#transactionrequesteip2930)
- [TransactionRequestLegacy](internal_.md#transactionrequestlegacy)
- [TransactionSerializable](internal_.md#transactionserializable)
- [TransactionSerializableBase](internal_.md#transactionserializablebase)
- [TransactionSerializableEIP1559](internal_.md#transactionserializableeip1559)
- [TransactionSerializableEIP2930](internal_.md#transactionserializableeip2930)
- [TransactionSerializableGeneric](internal_.md#transactionserializablegeneric)
- [TransactionSerializableLegacy](internal_.md#transactionserializablelegacy)
- [TransactionSerialized](internal_.md#transactionserialized)
- [TransactionSerializedEIP1559](internal_.md#transactionserializedeip1559)
- [TransactionSerializedEIP2930](internal_.md#transactionserializedeip2930)
- [TransactionSerializedGeneric](internal_.md#transactionserializedgeneric)
- [TransactionSerializedLegacy](internal_.md#transactionserializedlegacy)
- [TransactionType](internal_.md#transactiontype)
- [TransactionType](internal_.md#transactiontype-1)
- [Transport](internal_.md#transport)
- [TransportConfig](internal_.md#transportconfig)
- [TriggerData](internal_.md#triggerdata)
- [Tuple](internal_.md#tuple)
- [TypedData](internal_.md#typeddata)
- [TypedDataDefinition](internal_.md#typeddatadefinition)
- [TypedDataDomain](internal_.md#typeddatadomain)
- [TypedDataParameter](internal_.md#typeddataparameter)
- [TypedDataToPrimitiveTypes](internal_.md#typeddatatoprimitivetypes)
- [TypedDataType](internal_.md#typeddatatype)
- [Uncle](internal_.md#uncle)
- [UninstallFilterParameters](internal_.md#uninstallfilterparameters)
- [UninstallFilterReturnType](internal_.md#uninstallfilterreturntype)
- [UnionOmit](internal_.md#unionomit)
- [UnsignedTransaction](internal_.md#unsignedtransaction)
- [UpdateOrder](internal_.md#updateorder)
- [UpdatePositionMarginData](internal_.md#updatepositionmargindata)
- [ValueOf](internal_.md#valueof)
- [VerifyHashParameters](internal_.md#verifyhashparameters)
- [VerifyMessageParameters](internal_.md#verifymessageparameters)
- [VerifyMessageReturnType](internal_.md#verifymessagereturntype)
- [VerifyTypedDataParameters](internal_.md#verifytypeddataparameters)
- [VerifyTypedDataReturnType](internal_.md#verifytypeddatareturntype)
- [WaitForTransactionReceiptParameters](internal_.md#waitfortransactionreceiptparameters)
- [WaitForTransactionReceiptReturnType](internal_.md#waitfortransactionreceiptreturntype)
- [WalletActions](internal_.md#walletactions)
- [WalletPermission](internal_.md#walletpermission)
- [WalletPermissionCaveat](internal_.md#walletpermissioncaveat)
- [WalletRpcSchema](internal_.md#walletrpcschema)
- [WatchAssetParameters](internal_.md#watchassetparameters)
- [WatchAssetParams](internal_.md#watchassetparams)
- [WatchAssetReturnType](internal_.md#watchassetreturntype)
- [WatchBlockNumberParameters](internal_.md#watchblocknumberparameters)
- [WatchBlockNumberReturnType](internal_.md#watchblocknumberreturntype)
- [WatchBlocksParameters](internal_.md#watchblocksparameters)
- [WatchBlocksReturnType](internal_.md#watchblocksreturntype)
- [WatchContractEventOnLogsFn](internal_.md#watchcontracteventonlogsfn)
- [WatchContractEventOnLogsParameter](internal_.md#watchcontracteventonlogsparameter)
- [WatchContractEventParameters](internal_.md#watchcontracteventparameters)
- [WatchContractEventReturnType](internal_.md#watchcontracteventreturntype)
- [WatchEventOnLogsFn](internal_.md#watcheventonlogsfn)
- [WatchEventOnLogsParameter](internal_.md#watcheventonlogsparameter)
- [WatchEventParameters](internal_.md#watcheventparameters)
- [WatchEventReturnType](internal_.md#watcheventreturntype)
- [WatchPendingTransactionsParameters](internal_.md#watchpendingtransactionsparameters)
- [WatchPendingTransactionsReturnType](internal_.md#watchpendingtransactionsreturntype)
- [Withdrawal](internal_.md#withdrawal)
- [WriteContractParameters](internal_.md#writecontractparameters)
- [WriteContractReturnType](internal_.md#writecontractreturntype)
- [\_BuildArrayTypes](internal_.md#_buildarraytypes)
- [\_FixedFormat](internal_.md#_fixedformat)
- [\_HasUnnamedAbiParameter](internal_.md#_hasunnamedabiparameter)
- [\_HasUnnamedAbiParameter](internal_.md#_hasunnamedabiparameter-1)
- [\_TupleOf](internal_.md#_tupleof)
- [\_TypedDataParametersToAbiParameters](internal_.md#_typeddataparameterstoabiparameters)

### Variables

- [transactionType](internal_.md#transactiontype-2)

### Functions

- [Boolean](internal_.md#boolean)
- [serializeTransaction](internal_.md#serializetransaction)

## Type Aliases

### Abi

Ƭ **Abi**: readonly ([`AbiConstructor`](internal_.md#abiconstructor) \| [`AbiError`](internal_.md#abierror) \| [`AbiEvent`](internal_.md#abievent) \| [`AbiFallback`](internal_.md#abifallback) \| [`AbiFunction`](internal_.md#abifunction) \| [`AbiReceive`](internal_.md#abireceive))[]

Contract [ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html#json)

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:118

___

### AbiConstructor

Ƭ **AbiConstructor**: `Object`

ABI ["constructor"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | readonly [`AbiParameter`](internal_.md#abiparameter)[] | - |
| `payable?` | `boolean` | **`Deprecated`** use `payable` or `nonpayable` from [AbiStateMutability](internal_.md#abistatemutability) instead **`See`** https://github.com/ethereum/solidity/issues/992 |
| `stateMutability` | [`Extract`](internal_.md#extract)\<[`AbiStateMutability`](internal_.md#abistatemutability), ``"payable"`` \| ``"nonpayable"``\> | - |
| `type` | ``"constructor"`` | - |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:74

___

### AbiError

Ƭ **AbiError**: `Object`

ABI ["error"](https://docs.soliditylang.org/en/latest/abi-spec.html#errors) type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inputs` | readonly [`AbiParameter`](internal_.md#abiparameter)[] |
| `name` | `string` |
| `type` | ``"error"`` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:108

___

### AbiEvent

Ƭ **AbiEvent**: `Object`

ABI ["event"](https://docs.soliditylang.org/en/latest/abi-spec.html#events) type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `anonymous?` | `boolean` |
| `inputs` | readonly [`AbiEventParameter`](internal_.md#abieventparameter)[] |
| `name` | `string` |
| `type` | ``"event"`` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:101

___

### AbiEventParameter

Ƭ **AbiEventParameter**: [`Pretty`](internal_.md#pretty)\<[`AbiParameter`](internal_.md#abiparameter) & \{ `indexed?`: `boolean`  }\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:39

___

### AbiEventParameterToPrimitiveType

Ƭ **AbiEventParameterToPrimitiveType**\<`TAbiParameter`, `Options`, `_Type`\>: `Options`[``"EnableUnion"``] extends ``true`` ? [`LogTopicType`](internal_.md#logtopictype)\<`_Type`\> : `_Type`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiParameter` | extends [`AbiParameter`](internal_.md#abiparameter) |
| `Options` | extends [`EventParameterOptions`](internal_.md#eventparameteroptions) = [`DefaultEventParameterOptions`](internal_.md#defaulteventparameteroptions) |
| `_Type` | [`AbiParameterToPrimitiveType`](internal_.md#abiparametertoprimitivetype)\<`TAbiParameter`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:116

___

### AbiEventParametersToPrimitiveTypes

Ƭ **AbiEventParametersToPrimitiveTypes**\<`TAbiParameters`, `Options`\>: `TAbiParameters` extends readonly [] ? readonly [] : [`Filter`](internal_.md#filter-1)\<`TAbiParameters`, `Options`[``"IndexedOnly"``] extends ``true`` ? \{ `indexed`: ``true``  } : `object`\> extends infer Filtered ? [`_HasUnnamedAbiParameter`](internal_.md#_hasunnamedabiparameter)\<`Filtered`\> extends ``true`` ? readonly [...\{ [K in keyof Filtered]: AbiEventParameterToPrimitiveType\<Filtered[K], Options\> }] \| `Options`[``"Required"``] extends ``true`` ? `never` : `Filtered` extends readonly [...(infer Head extends readonly AbiParameter[]), infer \_] ? [`AbiEventParametersToPrimitiveTypes`](internal_.md#abieventparameterstoprimitivetypes)\<readonly [...\{ [K in keyof Head]: Omit\<Head[K], "name"\> }], `Options`\> : `never` : \{ [Parameter in Filtered[number] as Parameter extends Object ? Name : never]?: AbiEventParameterToPrimitiveType\<Parameter, Options\> } extends infer Mapped ? [`Prettify`](internal_.md#prettify)\<[`MaybeRequired`](internal_.md#mayberequired)\<`Mapped`, `Options`[``"Required"``] extends `boolean` ? `Options`[``"Required"``] : ``false``\>\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiParameters` | extends readonly [`AbiParameter`](internal_.md#abiparameter)[] |
| `Options` | extends [`EventParameterOptions`](internal_.md#eventparameteroptions) = [`DefaultEventParameterOptions`](internal_.md#defaulteventparameteroptions) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:121

___

### AbiFallback

Ƭ **AbiFallback**: `Object`

ABI ["fallback"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs?` | readonly [] | - |
| `payable?` | `boolean` | **`Deprecated`** use `payable` or `nonpayable` from [AbiStateMutability](internal_.md#abistatemutability) instead **`See`** https://github.com/ethereum/solidity/issues/992 |
| `stateMutability` | [`Extract`](internal_.md#extract)\<[`AbiStateMutability`](internal_.md#abistatemutability), ``"payable"`` \| ``"nonpayable"``\> | - |
| `type` | ``"fallback"`` | - |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:85

___

### AbiFunction

Ƭ **AbiFunction**: `Object`

ABI ["function"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `constant?` | `boolean` | **`Deprecated`** use `pure` or `view` from [AbiStateMutability](internal_.md#abistatemutability) instead **`See`** https://github.com/ethereum/solidity/issues/992 |
| `gas?` | `number` | **`Deprecated`** Vyper used to provide gas estimates **`See`** https://github.com/vyperlang/vyper/issues/2151 |
| `inputs` | readonly [`AbiParameter`](internal_.md#abiparameter)[] | - |
| `name` | `string` | - |
| `outputs` | readonly [`AbiParameter`](internal_.md#abiparameter)[] | - |
| `payable?` | `boolean` | **`Deprecated`** use `payable` or `nonpayable` from [AbiStateMutability](internal_.md#abistatemutability) instead **`See`** https://github.com/ethereum/solidity/issues/992 |
| `stateMutability` | [`AbiStateMutability`](internal_.md#abistatemutability) | - |
| `type` | ``"function"`` | - |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:51

___

### AbiInternalType

Ƭ **AbiInternalType**: [`ResolvedAbiType`](internal_.md#resolvedabitype) \| \`address $\{string}\` \| \`contract $\{string}\` \| \`enum $\{string}\` \| \`struct $\{string}\`

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:27

___

### AbiParameter

Ƭ **AbiParameter**: [`Pretty`](internal_.md#pretty)\<\{ `internalType?`: [`AbiInternalType`](internal_.md#abiinternaltype) ; `name?`: `string` ; `type`: [`ResolvedAbiType`](internal_.md#resolvedabitype)  } & \{ `type`: [`Exclude`](internal_.md#exclude)\<[`ResolvedAbiType`](internal_.md#resolvedabitype), [`SolidityTuple`](internal_.md#soliditytuple) \| [`SolidityArrayWithTuple`](internal_.md#solidityarraywithtuple)\>  } \| \{ `components`: readonly [`AbiParameter`](internal_.md#abiparameter)[] ; `type`: [`SolidityTuple`](internal_.md#soliditytuple) \| [`SolidityArrayWithTuple`](internal_.md#solidityarraywithtuple)  }\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:28

___

### AbiParameterKind

Ƭ **AbiParameterKind**: ``"inputs"`` \| ``"outputs"``

Kind of [AbiParameter](internal_.md#abiparameter)

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:49

___

### AbiParameterToPrimitiveType

Ƭ **AbiParameterToPrimitiveType**\<`TAbiParameter`, `TAbiParameterKind`\>: `TAbiParameter`[``"type"``] extends [`Exclude`](internal_.md#exclude)\<[`AbiType`](internal_.md#abitype), [`SolidityTuple`](internal_.md#soliditytuple) \| [`SolidityArray`](internal_.md#solidityarray)\> ? [`AbiTypeToPrimitiveType`](internal_.md#abitypetoprimitivetype)\<`TAbiParameter`[``"type"``], `TAbiParameterKind`\> : `TAbiParameter` extends \{ `components`: infer TComponents ; `type`: [`SolidityTuple`](internal_.md#soliditytuple)  } ? `TComponents` extends readonly [] ? [] : [`_HasUnnamedAbiParameter`](internal_.md#_hasunnamedabiparameter-1)\<`TComponents`\> extends ``true`` ? readonly [...\{ [K in keyof TComponents]: AbiParameterToPrimitiveType\<TComponents[K], TAbiParameterKind\> }] : \{ [Component in TComponents[number] as Component extends Object ? Component["name"] : never]: AbiParameterToPrimitiveType\<Component, TAbiParameterKind\> } : `TAbiParameter`[``"type"``] extends \`$\{infer Head}[$\{"" \| \`$\{SolidityFixedArrayRange}\`}]\` ? `TAbiParameter`[``"type"``] extends \`$\{Head}[$\{infer Size}]\` ? `Size` extends keyof [`SolidityFixedArraySizeLookup`](internal_.md#solidityfixedarraysizelookup) ? [`Tuple`](internal_.md#tuple)\<[`AbiParameterToPrimitiveType`](internal_.md#abiparametertoprimitivetype)\<[`Merge`](internal_.md#merge)\<`TAbiParameter`, \{ `type`: `Head`  }\>, `TAbiParameterKind`\>, [`SolidityFixedArraySizeLookup`](internal_.md#solidityfixedarraysizelookup)[`Size`]\> : readonly [`AbiParameterToPrimitiveType`](internal_.md#abiparametertoprimitivetype)\<[`Merge`](internal_.md#merge)\<`TAbiParameter`, \{ `type`: `Head`  }\>, `TAbiParameterKind`\>[] : `never` : [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"StrictAbiType"``] extends ``true`` ? `TAbiParameter`[``"type"``] extends infer TAbiType ? [`Error`](internal_.md#error)\<\`Unknown type '$\{TAbiType}'.\`\> : `never` : `TAbiParameter` extends \{ `components`: [`Error`](internal_.md#error)\<`string`\>  } ? `TAbiParameter`[``"components"``] : `unknown`

Converts [AbiParameter](internal_.md#abiparameter) to corresponding TypeScript primitive type.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbiParameter` | extends [`AbiParameter`](internal_.md#abiparameter) \| \{ `name`: `string` ; `type`: `unknown`  } | [AbiParameter](internal_.md#abiparameter) to convert to TypeScript representation |
| `TAbiParameterKind` | extends [`AbiParameterKind`](internal_.md#abiparameterkind) = [`AbiParameterKind`](internal_.md#abiparameterkind) | Optional [AbiParameterKind](internal_.md#abiparameterkind) to narrow by parameter type |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:48

___

### AbiParametersToPrimitiveTypes

Ƭ **AbiParametersToPrimitiveTypes**\<`TAbiParameters`, `TAbiParameterKind`\>: [`Pretty`](internal_.md#pretty)\<\{ [K in keyof TAbiParameters]: AbiParameterToPrimitiveType\<TAbiParameters[K], TAbiParameterKind\> }\>

Converts array of [AbiParameter](internal_.md#abiparameter) to corresponding TypeScript primitive types.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbiParameters` | extends readonly [`AbiParameter`](internal_.md#abiparameter)[] | Array of [AbiParameter](internal_.md#abiparameter) to convert to TypeScript representations |
| `TAbiParameterKind` | extends [`AbiParameterKind`](internal_.md#abiparameterkind) = [`AbiParameterKind`](internal_.md#abiparameterkind) | Optional [AbiParameterKind](internal_.md#abiparameterkind) to narrow by parameter type |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:91

___

### AbiReceive

Ƭ **AbiReceive**: `Object`

ABI ["receive"](https://docs.soliditylang.org/en/latest/contracts.html#receive-ether-function) type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stateMutability` | [`Extract`](internal_.md#extract)\<[`AbiStateMutability`](internal_.md#abistatemutability), ``"payable"``\> |
| `type` | ``"receive"`` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:96

___

### AbiStateMutability

Ƭ **AbiStateMutability**: ``"pure"`` \| ``"view"`` \| ``"nonpayable"`` \| ``"payable"``

State mutability for [AbiFunction](internal_.md#abifunction)

**`See`**

https://docs.soliditylang.org/en/latest/contracts.html#state-mutability

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:47

___

### AbiType

Ƭ **AbiType**: [`SolidityArray`](internal_.md#solidityarray) \| [`SolidityAddress`](internal_.md#solidityaddress) \| [`SolidityBool`](internal_.md#soliditybool) \| [`SolidityBytes`](internal_.md#soliditybytes) \| [`SolidityFunction`](internal_.md#solidityfunction) \| [`SolidityInt`](internal_.md#solidityint) \| [`SolidityString`](internal_.md#soliditystring) \| [`SolidityTuple`](internal_.md#soliditytuple)

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:25

___

### AbiTypeToPrimitiveType

Ƭ **AbiTypeToPrimitiveType**\<`TAbiType`, `TAbiParameterKind`\>: [`PrimitiveTypeLookup`](internal_.md#primitivetypelookup)\<`TAbiType`, `TAbiParameterKind`\>[`TAbiType`]

Converts [AbiType](internal_.md#abitype) to corresponding TypeScript primitive type.

Does not include full array or tuple conversion. Use [AbiParameterToPrimitiveType](internal_.md#abiparametertoprimitivetype) to fully convert arrays and tuples.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbiType` | extends [`AbiType`](internal_.md#abitype) | [AbiType](internal_.md#abitype) to convert to TypeScript representation |
| `TAbiParameterKind` | extends [`AbiParameterKind`](internal_.md#abiparameterkind) = [`AbiParameterKind`](internal_.md#abiparameterkind) | Optional [AbiParameterKind](internal_.md#abiparameterkind) to narrow by parameter type |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:13

___

### AccessList

Ƭ **AccessList**: \{ `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

node_modules/.pnpm/@ethersproject+transactions@5.7.0/node_modules/@ethersproject/transactions/lib/index.d.ts:3

___

### AccessList

Ƭ **AccessList**: \{ `address`: [`Address`](internal_.md#address) ; `storageKeys`: [`Hex`](internal_.md#hex)[]  }[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:7

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](internal_.md#accesslist) \| [`string`, `string`[]][] \| [`Record`](internal_.md#record)\<`string`, `string`[]\>

#### Defined in

node_modules/.pnpm/@ethersproject+transactions@5.7.0/node_modules/@ethersproject/transactions/lib/index.d.ts:7

___

### Account

Ƭ **Account**\<`TAddress`\>: [`JsonRpcAccount`](internal_.md#jsonrpcaccount)\<`TAddress`\> \| [`LocalAccount`](internal_.md#localaccount)\<`string`, `TAddress`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAddress` | extends [`Address`](internal_.md#address) = [`Address`](internal_.md#address) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/accounts/types.d.ts:9

___

### AccountProof

Ƭ **AccountProof**: [`Hash`](internal_.md#hash)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/proof.d.ts:3

___

### AddChainParameters

Ƭ **AddChainParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chain` | [`Chain`](internal_.md#chain) | The chain to add to the wallet. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/addChain.d.ts:8

___

### AddEthereumChainParameter

Ƭ **AddEthereumChainParameter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockExplorerUrls?` | `string`[] | - |
| `chainId` | `string` | A 0x-prefixed hexadecimal string |
| `chainName` | `string` | The chain name. |
| `iconUrls?` | `string`[] | - |
| `nativeCurrency?` | \{ `decimals`: `number` ; `name`: `string` ; `symbol`: `string`  } | Native currency for the chain. |
| `nativeCurrency.decimals` | `number` | - |
| `nativeCurrency.name` | `string` | - |
| `nativeCurrency.symbol` | `string` | - |
| `rpcUrls` | readonly `string`[] | - |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:36

___

### Address

Ƭ **Address**: [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"AddressType"``]

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:3

___

### AmountInfo

Ƭ **AmountInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `isTokenAmount` | `boolean` |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:14](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L14)

___

### ApiOpts

Ƭ **ApiOpts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassCache` | `boolean` |
| `overrideStaleTime?` | `number` |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:9](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L9)

___

### AssetGateway

Ƭ **AssetGateway**: ``"ipfs"`` \| ``"arweave"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/ens.d.ts:1

___

### AssetGatewayUrls

Ƭ **AssetGatewayUrls**: \{ [key in AssetGateway]?: string }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/ens.d.ts:2

___

### BigNumberish

Ƭ **BigNumberish**: `string` \| [`Numeric`](internal_.md#numeric)

Any type that can be used where a big number is needed.

#### Defined in

node_modules/.pnpm/ethers@6.8.0/node_modules/ethers/lib.commonjs/utils/maths.d.ts:9

___

### BigNumberish

Ƭ **BigNumberish**: [`BigNumber`](../classes/internal_.BigNumber.md) \| [`Bytes`](internal_.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

node_modules/.pnpm/@ethersproject+bignumber@5.7.0/node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:2

___

### BitsTypeLookup

Ƭ **BitsTypeLookup**: \{ [\_ in \`$\{LessThanOrEqualTo48Bits}\`]: ResolvedConfig["IntType"] } & \{ [\_ in \`$\{GreaterThan48Bits}\`]: ResolvedConfig["BigIntType"] } & \{ [\_ in NoBits]: ResolvedConfig["BigIntType"] }

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:34

___

### Block

Ƭ **Block**\<`TQuantity`, `TIncludeTransactions`, `TBlockTag`, `TTransaction`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIncludeTransactions` | extends `boolean` = `boolean` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = [`BlockTag`](internal_.md#blocktag) |
| `TTransaction` | [`Transaction`](internal_.md#transaction)\<`bigint`, `number`, `TBlockTag` extends ``"pending"`` ? ``true`` : ``false``\> |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseFeePerGas` | `TQuantity` \| ``null`` | Base fee per gas |
| `difficulty` | `TQuantity` | Difficulty for this block |
| `extraData` | [`Hex`](internal_.md#hex) | "Extra data" field of this block |
| `gasLimit` | `TQuantity` | Maximum gas allowed in this block |
| `gasUsed` | `TQuantity` | Total used gas by all transactions in this block |
| `hash` | `TBlockTag` extends ``"pending"`` ? ``null`` : [`Hash`](internal_.md#hash) | Block hash or `null` if pending |
| `logsBloom` | `TBlockTag` extends ``"pending"`` ? ``null`` : [`Hex`](internal_.md#hex) | Logs bloom filter or `null` if pending |
| `miner` | [`Address`](internal_.md#address) | Address that received this block’s mining rewards |
| `mixHash` | [`Hash`](internal_.md#hash) | Unique identifier for the block. |
| `nonce` | `TBlockTag` extends ``"pending"`` ? ``null`` : [`Hex`](internal_.md#hex) | Proof-of-work hash or `null` if pending |
| `number` | `TBlockTag` extends ``"pending"`` ? ``null`` : `TQuantity` | Block number or `null` if pending |
| `parentHash` | [`Hash`](internal_.md#hash) | Parent block hash |
| `receiptsRoot` | [`Hex`](internal_.md#hex) | Root of the this block’s receipts trie |
| `sealFields` | [`Hex`](internal_.md#hex)[] | - |
| `sha3Uncles` | [`Hash`](internal_.md#hash) | SHA3 of the uncles data in this block |
| `size` | `TQuantity` | Size of this block in bytes |
| `stateRoot` | [`Hash`](internal_.md#hash) | Root of this block’s final state trie |
| `timestamp` | `TQuantity` | Unix timestamp of when this block was collated |
| `totalDifficulty` | `TQuantity` \| ``null`` | Total difficulty of the chain until this block |
| `transactions` | `TIncludeTransactions` extends ``true`` ? `TTransaction`[] : [`Hash`](internal_.md#hash)[] | List of transaction objects or hashes |
| `transactionsRoot` | [`Hash`](internal_.md#hash) | Root of this block’s transaction trie |
| `uncles` | [`Hash`](internal_.md#hash)[] | List of uncle hashes |
| `withdrawals?` | [`Withdrawal`](internal_.md#withdrawal)[] | List of withdrawal objects |
| `withdrawalsRoot?` | [`Hex`](internal_.md#hex) | Root of the this block’s withdrawals trie |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/block.d.ts:5

___

### BlockIdentifier

Ƭ **BlockIdentifier**\<`TQuantity`\>: \{ `requireCanonical?`: `boolean`  } & \{ `blockNumber`: [`BlockNumber`](internal_.md#blocknumber)\<`TQuantity`\>  } \| \{ `blockHash`: [`Hash`](internal_.md#hash)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/block.d.ts:54

___

### BlockNumber

Ƭ **BlockNumber**\<`TQuantity`\>: `TQuantity`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/block.d.ts:64

___

### BlockPendingDependencies

Ƭ **BlockPendingDependencies**: ``"hash"`` \| ``"logsBloom"`` \| ``"nonce"`` \| ``"number"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/block.d.ts:10

___

### BlockTag

Ƭ **BlockTag**: ``"latest"`` \| ``"earliest"`` \| ``"pending"`` \| ``"safe"`` \| ``"finalized"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/block.d.ts:65

___

### ByteArray

Ƭ **ByteArray**: `Uint8Array`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/misc.d.ts:1

___

### Bytes

Ƭ **Bytes**: [`ArrayLike`](../interfaces/internal_.ArrayLike.md)\<`number`\>

#### Defined in

node_modules/.pnpm/@ethersproject+bytes@5.7.0/node_modules/@ethersproject/bytes/lib/index.d.ts:1

___

### BytesLike

Ƭ **BytesLike**: [`DataHexString`](internal_.md#datahexstring) \| `Uint8Array`

An object that can be used to represent binary data.

#### Defined in

node_modules/.pnpm/ethers@6.8.0/node_modules/ethers/lib.commonjs/utils/data.d.ts:16

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](internal_.md#bytes) \| `string`

#### Defined in

node_modules/.pnpm/@ethersproject+bytes@5.7.0/node_modules/@ethersproject/bytes/lib/index.d.ts:2

___

### CallParameters

Ƭ **CallParameters**\<`TChain`\>: [`UnionOmit`](internal_.md#unionomit)\<[`FormattedCall`](internal_.md#formattedcall)\<`TChain`\>, ``"from"``\> & \{ `account?`: [`Account`](internal_.md#account) \| [`Address`](internal_.md#address) ; `batch?`: `boolean`  } & \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/call.d.ts:22

___

### CallReturnType

Ƭ **CallReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`Hex`](internal_.md#hex) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/call.d.ts:37

___

### CancelOrder

Ƭ **CancelOrder**: [`OrderIdentifier`](internal_.md#orderidentifier) & \{ `type`: [`OrderType`](internal_.md#ordertype)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:131](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L131)

___

### Chain

Ƭ **Chain**\<`formatters`\>: [`ChainConstants`](internal_.md#chainconstants) & [`ChainConfig`](internal_.md#chainconfig)\<`formatters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `formatters` | extends [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` = [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:12

___

### ChainBlockExplorer

Ƭ **ChainBlockExplorer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `url` | `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:13

___

### ChainConfig

Ƭ **ChainConfig**\<`formatters`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `formatters` | extends [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` = [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fees?` | [`ChainFees`](internal_.md#chainfees)\<`formatters`\> | Modifies how fees are derived. |
| `formatters?` | `formatters` | Modifies how chain data structures (ie. Blocks, Transactions, etc) are formatted & typed. |
| `serializers?` | [`ChainSerializers`](internal_.md#chainserializers)\<`formatters`\> | Modifies how data (ie. Transactions) is serialized. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:69

___

### ChainConstants

Ƭ **ChainConstants**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockExplorers?` | \{ `default`: [`ChainBlockExplorer`](internal_.md#chainblockexplorer) ; `etherscan?`: [`ChainBlockExplorer`](internal_.md#chainblockexplorer)  } | Collection of block explorers |
| `blockExplorers.default` | [`ChainBlockExplorer`](internal_.md#chainblockexplorer) | - |
| `blockExplorers.etherscan?` | [`ChainBlockExplorer`](internal_.md#chainblockexplorer) | - |
| `contracts?` | \{ `[key: string]`: [`ChainContract`](internal_.md#chaincontract) \| \{ `[chainId: number]`: [`ChainContract`](internal_.md#chaincontract);  };  } & \{ `ensRegistry?`: [`ChainContract`](internal_.md#chaincontract) ; `ensUniversalResolver?`: [`ChainContract`](internal_.md#chaincontract) ; `multicall3?`: [`ChainContract`](internal_.md#chaincontract)  } | Collection of contracts |
| `id` | `number` | ID in number form |
| `name` | `string` | Human-readable name |
| `nativeCurrency` | [`ChainNativeCurrency`](internal_.md#chainnativecurrency) | Currency used by chain |
| `network` | `string` | Internal network name **`Deprecated`** will be removed in v2 - use `id` instead. |
| `rpcUrls` | \{ `[key: string]`: [`ChainRpcUrls`](internal_.md#chainrpcurls); `default`: [`ChainRpcUrls`](internal_.md#chainrpcurls) ; `public`: [`ChainRpcUrls`](internal_.md#chainrpcurls)  } | Collection of RPC endpoints |
| `rpcUrls.default` | [`ChainRpcUrls`](internal_.md#chainrpcurls) | - |
| `rpcUrls.public` | [`ChainRpcUrls`](internal_.md#chainrpcurls) | - |
| `sourceId?` | `number` | Source Chain ID (ie. the L1 chain) |
| `testnet?` | `boolean` | Flag for test networks |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:17

___

### ChainContract

Ƭ **ChainContract**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](internal_.md#address) |
| `blockCreated?` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:55

___

### ChainEstimateFeesPerGasFnParameters

Ƭ **ChainEstimateFeesPerGasFnParameters**\<`formatters`\>: \{ `type`: [`FeeValuesType`](internal_.md#feevaluestype) ; `multiply`: (`x`: `bigint`) => `bigint`  } & [`ChainFeesFnParameters`](internal_.md#chainfeesfnparameters)\<`formatters`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `formatters` | extends [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` = [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:135

___

### ChainFees

Ƭ **ChainFees**\<`formatters`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `formatters` | extends [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` = [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseFeeMultiplier?` | `number` \| (`args`: [`ChainFeesFnParameters`](internal_.md#chainfeesfnparameters)\<`formatters`\>) => `Promise`\<`number`\> \| `number` | The fee multiplier to use to account for fee fluctuations. Used in the [`estimateFeesPerGas` Action](/docs/actions/public/estimateFeesPerGas). **`Default`** ```ts 1.2 ``` |
| `defaultPriorityFee?` | `bigint` \| (`args`: [`ChainFeesFnParameters`](internal_.md#chainfeesfnparameters)\<`formatters`\>) => `Promise`\<`bigint`\> \| `bigint` | The default `maxPriorityFeePerGas` to use when a priority fee is not defined upon sending a transaction. Overrides the return value in the [`estimateMaxPriorityFeePerGas` Action](/docs/actions/public/estimateMaxPriorityFeePerGas). |
| `estimateFeesPerGas?` | (`args`: [`ChainEstimateFeesPerGasFnParameters`](internal_.md#chainestimatefeespergasfnparameters)\<`formatters`\>) => `Promise`\<[`EstimateFeesPerGasReturnType`](internal_.md#estimatefeespergasreturntype)\> \| `bigint` | Allows customization of fee per gas values (e.g. `maxFeePerGas`/`maxPriorityFeePerGas`). Overrides the return value in the [`estimateFeesPerGas` Action](/docs/actions/public/estimateFeesPerGas). |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:80

___

### ChainFeesFnParameters

Ƭ **ChainFeesFnParameters**\<`formatters`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `formatters` | extends [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` = [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | [`Prettify`](internal_.md#prettify)\<[`FormattedBlock`](internal_.md#formattedblock)\<\{ `formatters`: `formatters`  }\>\> | The latest block. |
| `client` | [`Client`](internal_.md#client)\<[`Transport`](internal_.md#transport), [`Chain`](internal_.md#chain)\> | - |
| `request?` | [`PrepareTransactionRequestParameters`](internal_.md#preparetransactionrequestparameters)\<[`Omit`](internal_.md#omit)\<[`Chain`](internal_.md#chain), ``"formatters"``\> & \{ `formatters`: `formatters`  }, [`Account`](internal_.md#account) \| `undefined`, `undefined`\> | A transaction request. This value will be undefined if the caller is outside of a transaction request context (e.g. a direct call to the `estimateFeesPerGas` Action). |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:120

___

### ChainFormatter

Ƭ **ChainFormatter**\<`type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `type` | extends `string` = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | (`args`: `any`) => `any` |
| `type` | `type` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:112

___

### ChainFormatters

Ƭ **ChainFormatters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `block?` | [`ChainFormatter`](internal_.md#chainformatter)\<``"block"``\> | Modifies how the Block structure is formatted & typed. |
| `transaction?` | [`ChainFormatter`](internal_.md#chainformatter)\<``"transaction"``\> | Modifies how the Transaction structure is formatted & typed. |
| `transactionReceipt?` | [`ChainFormatter`](internal_.md#chainformatter)\<``"transactionReceipt"``\> | Modifies how the TransactionReceipt structure is formatted & typed. |
| `transactionRequest?` | [`ChainFormatter`](internal_.md#chainformatter)\<``"transactionRequest"``\> | Modifies how the TransactionRequest structure is formatted & typed. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:102

___

### ChainNativeCurrency

Ƭ **ChainNativeCurrency**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `decimals` | `number` | - |
| `name` | `string` | - |
| `symbol` | `string` | 2-6 characters long |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:59

___

### ChainRpcUrls

Ƭ **ChainRpcUrls**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `http` | readonly `string`[] |
| `webSocket?` | readonly `string`[] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:65

___

### ChainSerializers

Ƭ **ChainSerializers**\<`formatters`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `formatters` | extends [`ChainFormatters`](internal_.md#chainformatters) \| `undefined` = `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction?` | [`SerializeTransactionFn`](internal_.md#serializetransactionfn)\<`formatters` extends [`ChainFormatters`](internal_.md#chainformatters) ? `formatters`[``"transactionRequest"``] extends [`ChainFormatter`](internal_.md#chainformatter) ? [`TransactionSerializableGeneric`](internal_.md#transactionserializablegeneric) & [`Parameters`](internal_.md#parameters)\<`formatters`[``"transactionRequest"``][``"format"``]\>[``0``] : [`TransactionSerializable`](internal_.md#transactionserializable) : [`TransactionSerializable`](internal_.md#transactionserializable)\> | Modifies how Transactions are serialized. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:116

___

### ClaimInfo

Ƭ **ClaimInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`AmountInfo`](internal_.md#amountinfo) |
| `claimType` | [`ClaimType`](internal_.md#claimtype) |
| `marketId` | [`Market`](internal_.md#market)[``"marketId"``] |
| `timestamp` | `number` |
| `token` | [`Token`](../interfaces/internal_.Token.md) |
| `txHash` | `string` |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:182](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L182)

___

### ClaimType

Ƭ **ClaimType**: ``"Funding"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:31](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L31)

___

### Client

Ƭ **Client**\<`transport`, `chain`, `account`, `rpcSchema`, `extended`\>: [`Client_Base`](internal_.md#client_base)\<`transport`, `chain`, `account`, `rpcSchema`\> & `extended` extends [`Extended`](internal_.md#extended) ? `extended` : `unknown` & \{ `extend`: \<client\>(`fn`: (`client`: [`Client`](internal_.md#client)\<`transport`, `chain`, `account`, `rpcSchema`, `extended`\>) => `client`) => [`Client`](internal_.md#client)\<`transport`, `chain`, `account`, `rpcSchema`, [`Prettify`](internal_.md#prettify)\<`client`\> & `extended` extends [`Extended`](internal_.md#extended) ? `extended` : `unknown`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `transport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |
| `chain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `account` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `rpcSchema` | extends [`RpcSchema`](internal_.md#rpcschema) \| `undefined` = `undefined` |
| `extended` | extends [`Extended`](internal_.md#extended) \| `undefined` = [`Extended`](internal_.md#extended) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/createClient.d.ts:42

___

### ClientConfig

Ƭ **ClientConfig**\<`transport`, `chain`, `accountOrAddress`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `transport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |
| `chain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `accountOrAddress` | extends [`Account`](internal_.md#account) \| [`Address`](internal_.md#address) \| `undefined` = [`Account`](internal_.md#account) \| [`Address`](internal_.md#address) \| `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account?` | `accountOrAddress` \| [`Account`](internal_.md#account) \| [`Address`](internal_.md#address) | The Account to use for the Client. This will be used for Actions that require an account as an argument. |
| `batch?` | \{ `multicall?`: `boolean` \| [`Prettify`](internal_.md#prettify)\<[`MulticallBatchOptions`](internal_.md#multicallbatchoptions)\>  } | Flags for batch settings. |
| `batch.multicall?` | `boolean` \| [`Prettify`](internal_.md#prettify)\<[`MulticallBatchOptions`](internal_.md#multicallbatchoptions)\> | Toggle to enable `eth_call` multicall aggregation. |
| `cacheTime?` | `number` | Time (in ms) that cached data will remain in memory. **`Default`** ```ts 4_000 ``` |
| `chain?` | [`Chain`](internal_.md#chain) \| `chain` | Chain for the client. |
| `key?` | `string` | A key for the client. |
| `name?` | `string` | A name for the client. |
| `pollingInterval?` | `number` | Frequency (in ms) for polling enabled actions & events. **`Default`** ```ts 4_000 ``` |
| `transport` | `transport` | The RPC transport |
| `type?` | `string` | The type of client. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/createClient.d.ts:12

___

### Client\_Base

Ƭ **Client\_Base**\<`transport`, `chain`, `account`, `rpcSchema`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `transport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |
| `chain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `account` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `rpcSchema` | extends [`RpcSchema`](internal_.md#rpcschema) \| `undefined` = `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `account` | The Account of the Client. |
| `batch?` | [`ClientConfig`](internal_.md#clientconfig)[``"batch"``] | Flags for batch settings. |
| `cacheTime` | `number` | Time (in ms) that cached data will remain in memory. |
| `chain` | `chain` | Chain for the client. |
| `key` | `string` | A key for the client. |
| `name` | `string` | A name for the client. |
| `pollingInterval` | `number` | Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds. |
| `request` | [`EIP1193RequestFn`](internal_.md#eip1193requestfn)\<`rpcSchema` extends `undefined` ? [`EIP1474Methods`](internal_.md#eip1474methods) : `rpcSchema`\> | Request function wrapped with friendly error handling |
| `transport` | [`ReturnType`](internal_.md#returntype)\<`transport`\>[``"config"``] & [`ReturnType`](internal_.md#returntype)\<`transport`\>[``"value"``] | The RPC transport |
| `type` | `string` | The type of client. |
| `uid` | `string` | A unique ID for the client. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/createClient.d.ts:45

___

### CloseOrderType

Ƭ **CloseOrderType**: ``"STOP_LOSS"`` \| ``"TAKE_PROFIT"`` \| ``"MARKET"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:21](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L21)

___

### ClosePositionData

Ƭ **ClosePositionData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `closeSize` | [`AmountInfo`](internal_.md#amountinfo) |
| `outputCollateral` | [`Token`](../interfaces/internal_.Token.md) \| `undefined` |
| `triggerData` | [`TriggerData`](internal_.md#triggerdata) \| `undefined` |
| `type` | [`CloseOrderType`](internal_.md#closeordertype) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:191](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L191)

___

### CloseTradePreviewInfo

Ƭ **CloseTradePreviewInfo**: [`PreviewInfo`](internal_.md#previewinfo) & \{ `receiveMargin`: [`AmountInfo`](internal_.md#amountinfo)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:222](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L222)

___

### CollateralData

Ƭ **CollateralData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collateral` | [`Token`](../interfaces/internal_.Token.md) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:105](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L105)

___

### ContractFunctionConfig

Ƭ **ContractFunctionConfig**\<`TAbi`, `TFunctionName`, `TAbiStateMutability`\>: \{ `abi`: [`Narrow`](internal_.md#narrow)\<`TAbi`\> ; `address`: [`Address`](internal_.md#address) ; `functionName`: [`InferFunctionName`](internal_.md#inferfunctionname)\<`TAbi`, `TFunctionName`, `TAbiStateMutability`\>  } & [`GetFunctionArgs`](internal_.md#getfunctionargs)\<`TAbi`, `TFunctionName`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |
| `TAbiStateMutability` | extends [`AbiStateMutability`](internal_.md#abistatemutability) = [`AbiStateMutability`](internal_.md#abistatemutability) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:7

___

### ContractFunctionResult

Ƭ **ContractFunctionResult**\<`TAbi`, `TFunctionName`, `TAbiFunction`, `TArgs`, `FailedToParseArgs`\>: ``true`` extends `FailedToParseArgs` ? `unknown` : `TArgs` extends readonly [] ? `void` : `TArgs` extends readonly [infer Arg] ? `Arg` : `TArgs`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |
| `TAbiFunction` | extends [`AbiFunction`](internal_.md#abifunction) & \{ `type`: ``"function"``  } = `TAbi` extends [`Abi`](internal_.md#abi) ? [`ExtractAbiFunction`](internal_.md#extractabifunction)\<`TAbi`, `TFunctionName`\> : [`AbiFunction`](internal_.md#abifunction) |
| `TArgs` | [`AbiParametersToPrimitiveTypes`](internal_.md#abiparameterstoprimitivetypes)\<`TAbiFunction`[``"outputs"``]\> |
| `FailedToParseArgs` | [`TArgs`] extends [`never`] ? ``true`` : ``false`` \| readonly `unknown`[] extends `TArgs` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:15

___

### CreateBlockFilterReturnType

Ƭ **CreateBlockFilterReturnType**: [`Filter`](internal_.md#filter)\<``"block"``\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/createBlockFilter.d.ts:7

___

### CreateContractEventFilterParameters

Ƭ **CreateContractEventFilterParameters**\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>: \{ `abi`: `TAbi` ; `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[] ; `eventName?`: [`InferEventName`](internal_.md#infereventname)\<`TAbi`, `TEventName`\> ; `fromBlock?`: `TFromBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) ; `strict?`: `TStrict` ; `toBlock?`: `TToBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag)  } & `undefined` extends `TEventName` ? \{ `args?`: `never`  } : [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbi`, `TEventName`\> extends infer TEventFilterArgs ? \{ `args?`: `TEventFilterArgs` \| `TArgs` extends `TEventFilterArgs` ? `TArgs` : `never`  } : \{ `args?`: `never`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TArgs` | extends [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbi`, `TEventName`\> \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/createContractEventFilter.d.ts:12

___

### CreateContractEventFilterReturnType

Ƭ **CreateContractEventFilterReturnType**\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>: [`Filter`](internal_.md#filter)\<``"event"``, `TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TArgs` | extends [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbi`, `TEventName`\> \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/createContractEventFilter.d.ts:30

___

### CreateEventFilterParameters

Ƭ **CreateEventFilterParameters**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>: \{ `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[] ; `fromBlock?`: `TFromBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) ; `toBlock?`: `TToBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag)  } & [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbiEvents`, `_EventName`\> extends infer TEventFilterArgs ? \{ `args`: `TEventFilterArgs` \| `_Args` extends `TEventFilterArgs` ? `_Args` : `never` ; `event`: `TAbiEvent` ; `events?`: `never` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `TAbiEvent` ; `events?`: `never` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `never` ; `events`: `TAbiEvents` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `never` ; `events?`: `never` ; `strict?`: `never`  } : \{ `args?`: `never` ; `event?`: `never` ; `events?`: `never` ; `strict?`: `never`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_EventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |
| `_Args` | extends [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbiEvents`, `_EventName`\> \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/createEventFilter.d.ts:13

___

### CreateEventFilterReturnType

Ƭ **CreateEventFilterReturnType**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>: [`Prettify`](internal_.md#prettify)\<[`Filter`](internal_.md#filter)\<``"event"``, `TAbiEvents`, `_EventName`, `_Args`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_EventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |
| `_Args` | extends [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbiEvents`, `_EventName`\> \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/createEventFilter.d.ts:55

___

### CreateOrder

Ƭ **CreateOrder**: [`OrderData`](internal_.md#orderdata) & [`CollateralData`](internal_.md#collateraldata) & \{ `slippage`: `number` \| `undefined` ; `type`: [`CreateOrderType`](internal_.md#createordertype)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:114](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L114)

___

### CreateOrderType

Ƭ **CreateOrderType**: ``"LIMIT"`` \| ``"MARKET"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:19](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L19)

___

### CreatePendingTransactionFilterReturnType

Ƭ **CreatePendingTransactionFilterReturnType**: [`Filter`](internal_.md#filter)\<``"transaction"``\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/createPendingTransactionFilter.d.ts:7

___

### CustomSource

Ƭ **CustomSource**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | [`Address`](internal_.md#address) |
| `signMessage` | (`{ message }`: \{ `message`: [`SignableMessage`](internal_.md#signablemessage)  }) => `Promise`\<[`Hash`](internal_.md#hash)\> |
| `signTransaction` | \<TTransactionSerializable\>(`transaction`: `TTransactionSerializable`, `args?`: \{ `serializer?`: [`SerializeTransactionFn`](internal_.md#serializetransactionfn)\<`TTransactionSerializable`\>  }) => `Promise`\<[`IsNarrowable`](internal_.md#isnarrowable)\<[`TransactionSerialized`](internal_.md#transactionserialized)\<[`GetTransactionType`](internal_.md#gettransactiontype)\<`TTransactionSerializable`\>\>, [`Hash`](internal_.md#hash)\> extends ``true`` ? [`TransactionSerialized`](internal_.md#transactionserialized)\<[`GetTransactionType`](internal_.md#gettransactiontype)\<`TTransactionSerializable`\>\> : [`Hash`](internal_.md#hash)\> |
| `signTypedData` | \<TTypedData, TPrimaryType\>(`typedData`: [`TypedDataDefinition`](internal_.md#typeddatadefinition)\<`TTypedData`, `TPrimaryType`\>) => `Promise`\<[`Hash`](internal_.md#hash)\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/accounts/types.d.ts:11

___

### DataHexString

Ƭ **DataHexString**: `string`

A [[HexString]] whose length is even, which ensures it is a valid
 representation of binary data.

#### Defined in

node_modules/.pnpm/ethers@6.8.0/node_modules/ethers/lib.commonjs/utils/data.d.ts:5

___

### DefaultEventParameterOptions

Ƭ **DefaultEventParameterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `EnableUnion` | ``true`` |
| `IndexedOnly` | ``true`` |
| `Required` | ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:97

___

### DeployContractParameters

Ƭ **DeployContractParameters**\<`TAbi`, `TChain`, `TAccount`, `TChainOverride`\>: [`UnionOmit`](internal_.md#unionomit)\<[`SendTransactionParameters`](internal_.md#sendtransactionparameters)\<`TChain`, `TAccount`, `TChainOverride`\>, ``"accessList"`` \| ``"chain"`` \| ``"to"`` \| ``"data"``\> & \{ `abi`: `TAbi` ; `bytecode`: [`Hex`](internal_.md#hex)  } & [`GetChain`](internal_.md#getchain)\<`TChain`, `TChainOverride`\> & [`GetConstructorArgs`](internal_.md#getconstructorargs)\<`TAbi`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/deployContract.d.ts:12

___

### DeployContractReturnType

Ƭ **DeployContractReturnType**: [`SendTransactionReturnType`](internal_.md#sendtransactionreturntype)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/deployContract.d.ts:16

___

### DerivedRpcSchema

Ƭ **DerivedRpcSchema**\<`TRpcSchema`, `TRpcSchemaOverride`\>: `TRpcSchemaOverride` extends [`RpcSchemaOverride`](internal_.md#rpcschemaoverride) ? [`TRpcSchemaOverride` & \{ `Method`: `string`  }] : `TRpcSchema`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRpcSchema` | extends [`RpcSchema`](internal_.md#rpcschema) \| `undefined` |
| `TRpcSchemaOverride` | extends [`RpcSchemaOverride`](internal_.md#rpcschemaoverride) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:1244

___

### DynamicMarketMetadata

Ƭ **DynamicMarketMetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `availableLiquidityLong` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `availableLiquidityShort` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `longBorrowRate` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `longFundingRate` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `oiLong` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `oiShort` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `shortBorrowRate` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `shortFundingRate` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:74](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L74)

___

### EIP1193Parameters

Ƭ **EIP1193Parameters**\<`TRpcSchema`\>: `TRpcSchema` extends [`RpcSchema`](internal_.md#rpcschema) ? \{ [K in keyof TRpcSchema]: Prettify\<Object & (TRpcSchema[K] extends TRpcSchema[number] ? TRpcSchema[K]["Parameters"] extends undefined ? Object : Object : never)\> }[`number`] : \{ `method`: `string` ; `params?`: `unknown`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRpcSchema` | extends [`RpcSchema`](internal_.md#rpcschema) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:1232

___

### EIP1193RequestFn

Ƭ **EIP1193RequestFn**\<`TRpcSchema`\>: \<TRpcSchemaOverride, TParameters, _ReturnType\>(`args`: `TParameters`) => `Promise`\<`_ReturnType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRpcSchema` | extends [`RpcSchema`](internal_.md#rpcschema) \| `undefined` = `undefined` |

#### Type declaration

▸ \<`TRpcSchemaOverride`, `TParameters`, `_ReturnType`\>(`args`): `Promise`\<`_ReturnType`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TRpcSchemaOverride` | extends [`RpcSchemaOverride`](internal_.md#rpcschemaoverride) \| `undefined` = `undefined` |
| `TParameters` | extends [`EIP1193Parameters`](internal_.md#eip1193parameters)\<[`DerivedRpcSchema`](internal_.md#derivedrpcschema)\<`TRpcSchema`, `TRpcSchemaOverride`\>\> = [`EIP1193Parameters`](internal_.md#eip1193parameters)\<[`DerivedRpcSchema`](internal_.md#derivedrpcschema)\<`TRpcSchema`, `TRpcSchemaOverride`\>\> |
| `_ReturnType` | [`DerivedRpcSchema`](internal_.md#derivedrpcschema)\<`TRpcSchema`, `TRpcSchemaOverride`\> extends [`RpcSchema`](internal_.md#rpcschema) ? [`Extract`](internal_.md#extract)\<[`DerivedRpcSchema`](internal_.md#derivedrpcschema)\<`TRpcSchema`, `TRpcSchemaOverride`\>[`number`], \{ `Method`: `TParameters`[``"method"``]  }\>[``"ReturnType"``] : `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `TParameters` |

##### Returns

`Promise`\<`_ReturnType`\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:1247

___

### EIP1474Methods

Ƭ **EIP1474Methods**: [...PublicRpcSchema, ...WalletRpcSchema]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:6

___

### Error

Ƭ **Error**\<`T`\>: `T` extends `string` ? [\`Error: $\{T}\`] : \{ [K in keyof T]: T[K] extends infer Message extends string ? \`Error: $\{Message}\` : never }

Prints custom error message

**`Example`**

```ts
type Result = Error<'Custom error message'>
//   ^? type Result = ['Error: Custom error message']
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `string` \| `string`[] | Error message |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/types.d.ts:11

___

### ErrorData

Ƭ **ErrorData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errMsg` | `string` |
| `isError` | `boolean` |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:203](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L203)

___

### EstimateContractGasParameters

Ƭ **EstimateContractGasParameters**\<`TAbi`, `TFunctionName`, `TChain`, `TAccount`\>: [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`TAbi`, `TFunctionName`, ``"payable"`` \| ``"nonpayable"``\> & [`UnionOmit`](internal_.md#unionomit)\<[`EstimateGasParameters`](internal_.md#estimategasparameters)\<`TChain`, `TAccount`\>, ``"data"`` \| ``"to"`` \| ``"value"``\> & [`GetValue`](internal_.md#getvalue)\<`TAbi`, `TFunctionName`, [`EstimateGasParameters`](internal_.md#estimategasparameters)\<`TChain`\> extends [`EstimateGasParameters`](internal_.md#estimategasparameters) ? [`EstimateGasParameters`](internal_.md#estimategasparameters)\<`TChain`\>[``"value"``] : [`EstimateGasParameters`](internal_.md#estimategasparameters)[``"value"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateContractGas.d.ts:12

___

### EstimateContractGasReturnType

Ƭ **EstimateContractGasReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateContractGas.d.ts:13

___

### EstimateFeesPerGasParameters

Ƭ **EstimateFeesPerGasParameters**\<`chain`, `chainOverride`, `type`\>: \{ `type?`: `type` \| [`FeeValuesType`](internal_.md#feevaluestype)  } & [`GetChain`](internal_.md#getchain)\<`chain`, `chainOverride`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `chain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `chainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `type` | extends [`FeeValuesType`](internal_.md#feevaluestype) = [`FeeValuesType`](internal_.md#feevaluestype) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateFeesPerGas.d.ts:12

___

### EstimateFeesPerGasReturnType

Ƭ **EstimateFeesPerGasReturnType**\<`type`\>: `type` extends ``"legacy"`` ? [`FeeValuesLegacy`](internal_.md#feevalueslegacy) : `never` \| `type` extends ``"eip1559"`` ? [`FeeValuesEIP1559`](internal_.md#feevalueseip1559) : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `type` | extends [`FeeValuesType`](internal_.md#feevaluestype) = [`FeeValuesType`](internal_.md#feevaluestype) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateFeesPerGas.d.ts:23

___

### EstimateGasParameters

Ƭ **EstimateGasParameters**\<`TChain`, `TAccount`\>: [`UnionOmit`](internal_.md#unionomit)\<[`FormattedEstimateGas`](internal_.md#formattedestimategas)\<`TChain`\>, ``"from"``\> & [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateGas.d.ts:15

___

### EstimateGasReturnType

Ƭ **EstimateGasReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateGas.d.ts:27

___

### EstimateMaxPriorityFeePerGasParameters

Ƭ **EstimateMaxPriorityFeePerGasParameters**\<`chain`, `chainOverride`\>: [`GetChain`](internal_.md#getchain)\<`chain`, `chainOverride`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `chain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `chainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateMaxPriorityFeePerGas.d.ts:14

___

### EstimateMaxPriorityFeePerGasReturnType

Ƭ **EstimateMaxPriorityFeePerGasReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateMaxPriorityFeePerGas.d.ts:15

___

### EventParameterOptions

Ƭ **EventParameterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `EnableUnion?` | `boolean` |
| `IndexedOnly?` | `boolean` |
| `Required?` | `boolean` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:92

___

### Exclude

Ƭ **Exclude**\<`T`, `U`\>: `T` extends `U` ? `never` : `T`

Exclude from T those types that are assignable to U

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1606

___

### ExtendableProtectedActions

Ƭ **ExtendableProtectedActions**: [`Pick`](internal_.md#pick)\<[`PublicActions`](internal_.md#publicactions), ``"call"`` \| ``"createContractEventFilter"`` \| ``"createEventFilter"`` \| ``"estimateContractGas"`` \| ``"estimateGas"`` \| ``"getBlock"`` \| ``"getBlockNumber"`` \| ``"getChainId"`` \| ``"getContractEvents"`` \| ``"getEnsText"`` \| ``"getFilterChanges"`` \| ``"getGasPrice"`` \| ``"getLogs"`` \| ``"getTransaction"`` \| ``"getTransactionCount"`` \| ``"getTransactionReceipt"`` \| ``"prepareTransactionRequest"`` \| ``"readContract"`` \| ``"sendRawTransaction"`` \| ``"simulateContract"`` \| ``"uninstallFilter"`` \| ``"watchBlockNumber"`` \| ``"watchContractEvent"``\> & [`Pick`](internal_.md#pick)\<[`WalletActions`](internal_.md#walletactions), ``"sendTransaction"`` \| ``"writeContract"``\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/createClient.d.ts:41

___

### Extended

Ƭ **Extended**: [`Prettify`](internal_.md#prettify)\<\{ [K in keyof Client\_Base]?: undefined } & \{ `[key: string]`: `unknown`;  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/createClient.d.ts:69

___

### Extract

Ƭ **Extract**\<`T`, `U`\>: `T` extends `U` ? `T` : `never`

Extract from T those types that are assignable to U

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1611

___

### ExtractAbiEvent

Ƭ **ExtractAbiEvent**\<`TAbi`, `TEventName`\>: [`Extract`](internal_.md#extract)\<[`ExtractAbiEvents`](internal_.md#extractabievents)\<`TAbi`\>, \{ `name`: `TEventName`  }\>

Extracts [AbiEvent](internal_.md#abievent) with name from [Abi](internal_.md#abi).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) | [Abi](internal_.md#abi) to extract [AbiEvent](internal_.md#abievent) from |
| `TEventName` | extends [`ExtractAbiEventNames`](internal_.md#extractabieventnames)\<`TAbi`\> | String name of event to extract from [Abi](internal_.md#abi) |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:154

___

### ExtractAbiEventNames

Ƭ **ExtractAbiEventNames**\<`TAbi`\>: [`ExtractAbiEvents`](internal_.md#extractabievents)\<`TAbi`\>[``"name"``]

Extracts all [AbiEvent](internal_.md#abievent) names from [Abi](internal_.md#abi).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) | [Abi](internal_.md#abi) to extract event names from |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:146

___

### ExtractAbiEvents

Ƭ **ExtractAbiEvents**\<`TAbi`\>: [`Extract`](internal_.md#extract)\<`TAbi`[`number`], \{ `type`: ``"event"``  }\>

Extracts all [AbiEvent](internal_.md#abievent) types from [Abi](internal_.md#abi).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) | [Abi](internal_.md#abi) to extract events from |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:137

___

### ExtractAbiFunction

Ƭ **ExtractAbiFunction**\<`TAbi`, `TFunctionName`, `TAbiStateMutability`\>: [`Extract`](internal_.md#extract)\<[`ExtractAbiFunctions`](internal_.md#extractabifunctions)\<`TAbi`, `TAbiStateMutability`\>, \{ `name`: `TFunctionName`  }\>

Extracts [AbiFunction](internal_.md#abifunction) with name from [Abi](internal_.md#abi).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) | [Abi](internal_.md#abi) to extract [AbiFunction](internal_.md#abifunction) from |
| `TFunctionName` | extends [`ExtractAbiFunctionNames`](internal_.md#extractabifunctionnames)\<`TAbi`\> | String name of function to extract from [Abi](internal_.md#abi) |
| `TAbiStateMutability` | extends [`AbiStateMutability`](internal_.md#abistatemutability) = [`AbiStateMutability`](internal_.md#abistatemutability) | [AbiStateMutability](internal_.md#abistatemutability) to filter by |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:128

___

### ExtractAbiFunctionNames

Ƭ **ExtractAbiFunctionNames**\<`TAbi`, `TAbiStateMutability`\>: [`ExtractAbiFunctions`](internal_.md#extractabifunctions)\<`TAbi`, `TAbiStateMutability`\>[``"name"``]

Extracts all [AbiFunction](internal_.md#abifunction) names from [Abi](internal_.md#abi).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) | [Abi](internal_.md#abi) to extract function names from |
| `TAbiStateMutability` | extends [`AbiStateMutability`](internal_.md#abistatemutability) = [`AbiStateMutability`](internal_.md#abistatemutability) | [AbiStateMutability](internal_.md#abistatemutability) to filter by |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:119

___

### ExtractAbiFunctions

Ƭ **ExtractAbiFunctions**\<`TAbi`, `TAbiStateMutability`\>: [`Extract`](internal_.md#extract)\<`TAbi`[`number`], \{ `stateMutability`: `TAbiStateMutability` ; `type`: ``"function"``  }\>

Extracts all [AbiFunction](internal_.md#abifunction) types from [Abi](internal_.md#abi).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) | [Abi](internal_.md#abi) to extract functions from |
| `TAbiStateMutability` | extends [`AbiStateMutability`](internal_.md#abistatemutability) = [`AbiStateMutability`](internal_.md#abistatemutability) | [AbiStateMutability](internal_.md#abistatemutability) to filter by |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:108

___

### ExtractChainFormatterExclude

Ƭ **ExtractChainFormatterExclude**\<`chain`, `type`\>: `chain` extends \{ `formatters?`: infer \_Formatters  } ? `_Formatters`[`type`] extends \{ `exclude`: infer Exclude  } ? [`Extract`](internal_.md#extract)\<`Exclude`, `string`[]\>[`number`] : ``""`` : ``""``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `chain` | extends \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` |
| `type` | extends keyof [`ChainFormatters`](internal_.md#chainformatters) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:148

___

### ExtractChainFormatterParameters

Ƭ **ExtractChainFormatterParameters**\<`chain`, `type`, `fallback`\>: `chain` extends \{ `formatters?`: infer \_Formatters  } ? `_Formatters`[`type`] extends [`ChainFormatter`](internal_.md#chainformatter) ? [`Parameters`](internal_.md#parameters)\<`_Formatters`[`type`][``"format"``]\>[``0``] : `fallback` : `fallback`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `chain` | extends \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` |
| `type` | extends keyof [`ChainFormatters`](internal_.md#chainformatters) |
| `fallback` | `fallback` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:155

___

### ExtractChainFormatterReturnType

Ƭ **ExtractChainFormatterReturnType**\<`chain`, `type`, `fallback`\>: `chain` extends \{ `formatters?`: infer \_Formatters  } ? `_Formatters`[`type`] extends [`ChainFormatter`](internal_.md#chainformatter) ? [`ReturnType`](internal_.md#returntype)\<`_Formatters`[`type`][``"format"``]\> : `fallback` : `fallback`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `chain` | extends \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` |
| `type` | extends keyof [`ChainFormatters`](internal_.md#chainformatters) |
| `fallback` | `fallback` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:160

___

### FeeHistory

Ƭ **FeeHistory**\<`TQuantity`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseFeePerGas` | `TQuantity`[] | An array of block base fees per gas (in wei). This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-1559 blocks. |
| `gasUsedRatio` | `number`[] | An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit. |
| `oldestBlock` | `TQuantity` | Lowest number block of the returned range. |
| `reward?` | `TQuantity`[][] | An array of effective priority fees (in wei) per gas data points from a single block. All zeroes are returned if the block is empty. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/fee.d.ts:1

___

### FeeValuesEIP1559

Ƭ **FeeValuesEIP1559**\<`TQuantity`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasPrice?` | `never` | Base fee per gas. |
| `maxFeePerGas` | `TQuantity` | Total fee per gas in wei (gasPrice/baseFeePerGas + maxPriorityFeePerGas). |
| `maxPriorityFeePerGas` | `TQuantity` | Max priority fee per gas (in wei). |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/fee.d.ts:20

___

### FeeValuesLegacy

Ƭ **FeeValuesLegacy**\<`TQuantity`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasPrice` | `TQuantity` | Base fee per gas. |
| `maxFeePerGas?` | `never` | - |
| `maxPriorityFeePerGas?` | `never` | - |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/fee.d.ts:14

___

### FeeValuesType

Ƭ **FeeValuesType**: ``"legacy"`` \| ``"eip1559"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/fee.d.ts:29

___

### Filter

Ƭ **Filter**\<`TFilterType`, `TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>: \{ `id`: [`Hex`](internal_.md#hex) ; `request`: [`EIP1193RequestFn`](internal_.md#eip1193requestfn)\<[`FilterRpcSchema`](internal_.md#filterrpcschema)\> ; `type`: `TFilterType`  } & `TFilterType` extends ``"event"`` ? \{ `fromBlock?`: `TFromBlock` ; `toBlock?`: `TToBlock`  } & `TAbi` extends [`Abi`](internal_.md#abi) ? `undefined` extends `TEventName` ? \{ `abi`: `TAbi` ; `args?`: `never` ; `eventName?`: `never` ; `strict`: `TStrict`  } : `TArgs` extends [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbi`, `TEventName`\> ? \{ `abi`: `TAbi` ; `args`: `TArgs` ; `eventName`: `TEventName` ; `strict`: `TStrict`  } : \{ `abi`: `TAbi` ; `args?`: `never` ; `eventName`: `TEventName` ; `strict`: `TStrict`  } : \{ `abi?`: `never` ; `args?`: `never` ; `eventName?`: `never` ; `strict?`: `never`  } : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFilterType` | extends [`FilterType`](internal_.md#filtertype) = ``"event"`` |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `undefined` |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TArgs` | extends [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbi`, `TEventName`\> \| `undefined` = [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbi`, `TEventName`\> |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/filter.d.ts:11

___

### Filter

Ƭ **Filter**\<`T`, `P`, `Acc`\>: `T` extends readonly [infer F, ...(infer Rest extends readonly unknown[])] ? [`F`] extends [`P`] ? [`Filter`](internal_.md#filter-1)\<`Rest`, `P`, [...Acc, `F`]\> : [`Filter`](internal_.md#filter-1)\<`Rest`, `P`, `Acc`\> : readonly [...Acc]

Filters out all members of T that are not P

**`Example`**

```ts
type Result = Filter<['a', 'b', 'c'], 'b'>
//   ^? type Result = ['a', 'c']
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends readonly `unknown`[] | Items to filter |
| `P` | `P` | Type to filter out |
| `Acc` | extends readonly `unknown`[] = [] | - |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:12

___

### FilterRpcSchema

Ƭ **FilterRpcSchema**: [`Filter`](internal_.md#filter-1)\<[`PublicRpcSchema`](internal_.md#publicrpcschema), \{ `Method`: ``"eth_getFilterLogs"`` \| ``"eth_getFilterChanges"`` \| ``"eth_uninstallFilter"``  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/filter.d.ts:8

___

### FilterType

Ƭ **FilterType**: ``"transaction"`` \| ``"block"`` \| ``"event"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/filter.d.ts:7

___

### FixedFormat

Ƭ **FixedFormat**: `number` \| `string` \| \{ `decimals?`: `number` ; `signed?`: `boolean` ; `width?`: `number`  }

A description of a fixed-point arithmetic field.

 When specifying the fixed format, the values override the default of
 a ``fixed128x18``, which implies a signed 128-bit value with 18
 decimals of precision.

 The alias ``fixed`` and ``ufixed`` can be used for ``fixed128x18`` and
 ``ufixed128x18`` respectively.

 When a fixed format string begins with a ``u``, it indicates the field
 is unsigned, so any negative values will overflow. The first number
 indicates the bit-width and the second number indicates the decimal
 precision.

 When a ``number`` is used for a fixed format, it indicates the number
 of decimal places, and the default width and signed-ness will be used.

 The bit-width must be byte aligned and the decimals can be at most 80.

#### Defined in

[src/common/fixedNumber.ts:93](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/common/fixedNumber.ts#L93)

___

### FormattedBlock

Ƭ **FormattedBlock**\<`TChain`, `TIncludeTransactions`, `TBlockTag`, `_FormatterReturnType`, `_ExcludedPendingDependencies`, `_Formatted`, `_Transactions`\>: [`Omit`](internal_.md#omit)\<`_Formatted`, ``"transactions"``\> & \{ `transactions`: `_Transactions`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` = \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` |
| `TIncludeTransactions` | extends `boolean` = `boolean` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = [`BlockTag`](internal_.md#blocktag) |
| `_FormatterReturnType` | [`ExtractChainFormatterReturnType`](internal_.md#extractchainformatterreturntype)\<`TChain`, ``"block"``, [`Block`](internal_.md#block)\<`bigint`, `TIncludeTransactions`\>\> |
| `_ExcludedPendingDependencies` | extends `string` = [`BlockPendingDependencies`](internal_.md#blockpendingdependencies) & [`ExtractChainFormatterExclude`](internal_.md#extractchainformatterexclude)\<`TChain`, ``"block"``\> |
| `_Formatted` | [`Omit`](internal_.md#omit)\<`_FormatterReturnType`, [`BlockPendingDependencies`](internal_.md#blockpendingdependencies)\> & \{ [K in \_ExcludedPendingDependencies]: never } & [`Pick`](internal_.md#pick)\<[`Block`](internal_.md#block)\<`bigint`, `TIncludeTransactions`, `TBlockTag`\>, [`BlockPendingDependencies`](internal_.md#blockpendingdependencies)\> |
| `_Transactions` | `TIncludeTransactions` extends ``true`` ? [`Prettify`](internal_.md#prettify)\<[`FormattedTransaction`](internal_.md#formattedtransaction)\<`TChain`, `TBlockTag`\>\>[] : [`Hash`](internal_.md#hash)[] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/block.d.ts:11

___

### FormattedCall

Ƭ **FormattedCall**\<`TChain`\>: [`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChain`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/call.d.ts:21

___

### FormattedEstimateGas

Ƭ **FormattedEstimateGas**\<`TChain`\>: [`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChain`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/estimateGas.d.ts:14

___

### FormattedTransaction

Ƭ **FormattedTransaction**\<`TChain`, `TBlockTag`, `_FormatterReturnType`, `_ExcludedPendingDependencies`\>: [`UnionOmit`](internal_.md#unionomit)\<`_FormatterReturnType`, [`TransactionPendingDependencies`](internal_.md#transactionpendingdependencies)\> & \{ [K in \_ExcludedPendingDependencies]: never } & [`Pick`](internal_.md#pick)\<[`Transaction`](internal_.md#transaction)\<`bigint`, `number`, `TBlockTag` extends ``"pending"`` ? ``true`` : ``false``\>, [`TransactionPendingDependencies`](internal_.md#transactionpendingdependencies)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` = \{ `formatters?`: [`Chain`](internal_.md#chain)[``"formatters"``]  } \| `undefined` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = [`BlockTag`](internal_.md#blocktag) |
| `_FormatterReturnType` | [`ExtractChainFormatterReturnType`](internal_.md#extractchainformatterreturntype)\<`TChain`, ``"transaction"``, [`Transaction`](internal_.md#transaction)\> |
| `_ExcludedPendingDependencies` | extends `string` = [`TransactionPendingDependencies`](internal_.md#transactionpendingdependencies) & [`ExtractChainFormatterExclude`](internal_.md#extractchainformatterexclude)\<`TChain`, ``"transaction"``\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/transaction.d.ts:10

___

### FormattedTransactionReceipt

Ƭ **FormattedTransactionReceipt**\<`TChain`\>: [`ExtractChainFormatterReturnType`](internal_.md#extractchainformatterreturntype)\<`TChain`, ``"transactionReceipt"``, [`TransactionReceipt`](internal_.md#transactionreceipt)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/transactionReceipt.d.ts:6

___

### FormattedTransactionRequest

Ƭ **FormattedTransactionRequest**\<`TChain`\>: [`ExtractChainFormatterParameters`](internal_.md#extractchainformatterparameters)\<`TChain`, ``"transactionRequest"``, [`TransactionRequest`](internal_.md#transactionrequest)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/transactionRequest.d.ts:6

___

### GenericStaticMarketMetadata

Ƭ **GenericStaticMarketMetadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxLeverage` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `minInitialMargin` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `minLeverage` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `minPositionSize` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:48](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L48)

___

### GetAccountParameter

Ƭ **GetAccountParameter**\<`TAccount`\>: [`IsUndefined`](internal_.md#isundefined)\<`TAccount`\> extends ``true`` ? \{ `account`: [`Account`](internal_.md#account) \| [`Address`](internal_.md#address)  } : \{ `account?`: [`Account`](internal_.md#account) \| [`Address`](internal_.md#address)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/account.d.ts:4

___

### GetAddressesReturnType

Ƭ **GetAddressesReturnType**: [`Address`](internal_.md#address)[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/getAddresses.d.ts:9

___

### GetBalanceParameters

Ƭ **GetBalanceParameters**: \{ `address`: [`Address`](internal_.md#address)  } & \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBalance.d.ts:9

___

### GetBalanceReturnType

Ƭ **GetBalanceReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBalance.d.ts:21

___

### GetBlockNumberParameters

Ƭ **GetBlockNumberParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheTime?` | `number` | Time (in ms) that cached block number will remain in memory. |
| `maxAge?` | `number` | **`Deprecated`** use `cacheTime` instead. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBlockNumber.d.ts:6

___

### GetBlockNumberReturnType

Ƭ **GetBlockNumberReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBlockNumber.d.ts:12

___

### GetBlockParameters

Ƭ **GetBlockParameters**\<`TIncludeTransactions`, `TBlockTag`\>: \{ `includeTransactions?`: `TIncludeTransactions`  } & \{ `blockHash?`: [`Hash`](internal_.md#hash) ; `blockNumber?`: `never` ; `blockTag?`: `never`  } \| \{ `blockHash?`: `never` ; `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockHash?`: `never` ; `blockNumber?`: `never` ; `blockTag?`: `TBlockTag` \| [`BlockTag`](internal_.md#blocktag)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIncludeTransactions` | extends `boolean` = ``false`` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBlock.d.ts:12

___

### GetBlockReturnType

Ƭ **GetBlockReturnType**\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>: [`FormattedBlock`](internal_.md#formattedblock)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TIncludeTransactions` | extends `boolean` = ``false`` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBlock.d.ts:34

___

### GetBlockTransactionCountParameters

Ƭ **GetBlockTransactionCountParameters**: \{ `blockHash?`: [`Hash`](internal_.md#hash) ; `blockNumber?`: `never` ; `blockTag?`: `never`  } \| \{ `blockHash?`: `never` ; `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockHash?`: `never` ; `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBlockTransactionCount.d.ts:10

___

### GetBlockTransactionCountReturnType

Ƭ **GetBlockTransactionCountReturnType**: `number`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBlockTransactionCount.d.ts:26

___

### GetBytecodeParameters

Ƭ **GetBytecodeParameters**: \{ `address`: [`Address`](internal_.md#address)  } & \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  } \| \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBytecode.d.ts:10

___

### GetBytecodeReturnType

Ƭ **GetBytecodeReturnType**: [`Hex`](internal_.md#hex) \| `undefined`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getBytecode.d.ts:19

___

### GetChain

Ƭ **GetChain**\<`chain`, `chainOverride`\>: [`IsUndefined`](internal_.md#isundefined)\<`chain`\> extends ``true`` ? \{ `chain`: `chainOverride` \| ``null``  } : \{ `chain?`: `chainOverride` \| ``null``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `chain` | extends [`Chain`](internal_.md#chain) \| `undefined` |
| `chainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/chain.d.ts:165

___

### GetChainIdReturnType

Ƭ **GetChainIdReturnType**: `number`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getChainId.d.ts:8

___

### GetConstructorArgs

Ƭ **GetConstructorArgs**\<`TAbi`, `TAbiConstructor`, `TArgs`, `FailedToParseArgs`\>: ``true`` extends `FailedToParseArgs` ? \{ `args?`: readonly `unknown`[]  } : `TArgs` extends readonly [] ? \{ `args?`: `never`  } : \{ `args`: `TArgs`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] |
| `TAbiConstructor` | extends [`AbiConstructor`](internal_.md#abiconstructor) = `TAbi` extends [`Abi`](internal_.md#abi) ? [`Extract`](internal_.md#extract)\<`TAbi`[`number`], \{ `type`: ``"constructor"``  }\> : [`AbiConstructor`](internal_.md#abiconstructor) |
| `TArgs` | [`AbiParametersToPrimitiveTypes`](internal_.md#abiparameterstoprimitivetypes)\<`TAbiConstructor`[``"inputs"``]\> |
| `FailedToParseArgs` | [`TArgs`] extends [`never`] ? ``true`` : ``false`` \| readonly `unknown`[] extends `TArgs` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:46

___

### GetContractEventsParameters

Ƭ **GetContractEventsParameters**\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>: \{ `abi`: `TAbi` ; `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[] ; `args?`: `TEventName` extends `string` ? [`GetEventArgs`](internal_.md#geteventargs)\<`TAbi`, `TEventName`\> : `undefined` ; `eventName?`: [`InferEventName`](internal_.md#infereventname)\<`TAbi`, `TEventName`\> ; `strict?`: `TStrict`  } & \{ `blockHash?`: `never` ; `fromBlock?`: `TFromBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) ; `toBlock?`: `TToBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag)  } \| \{ `blockHash?`: [`Hash`](internal_.md#hash) ; `fromBlock?`: `never` ; `toBlock?`: `never`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = readonly `unknown`[] |
| `TEventName` | extends `string` \| `undefined` = `string` \| `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getContractEvents.d.ts:12

___

### GetContractEventsReturnType

Ƭ **GetContractEventsReturnType**\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`, `_Pending`\>: [`Log`](internal_.md#log)\<`bigint`, `number`, `_Pending`, `undefined`, `TStrict`, `TAbi`, `TEventName`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = readonly `unknown`[] |
| `TEventName` | extends `string` \| `undefined` = `string` \| `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_Pending` | extends `boolean` = `TFromBlock` extends ``"pending"`` ? ``true`` : ``false`` \| `TToBlock` extends ``"pending"`` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getContractEvents.d.ts:37

___

### GetEnsAddressParameters

Ƭ **GetEnsAddressParameters**: [`Prettify`](internal_.md#prettify)\<[`Pick`](internal_.md#pick)\<[`ReadContractParameters`](internal_.md#readcontractparameters), ``"blockNumber"`` \| ``"blockTag"``\> & \{ `coinType?`: `number` ; `name`: `string` ; `universalResolverAddress?`: [`Address`](internal_.md#address)  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsAddress.d.ts:15

___

### GetEnsAddressReturnType

Ƭ **GetEnsAddressReturnType**: [`Address`](internal_.md#address) \| ``null``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsAddress.d.ts:23

___

### GetEnsAvatarParameters

Ƭ **GetEnsAvatarParameters**: [`Prettify`](internal_.md#prettify)\<[`Omit`](internal_.md#omit)\<[`GetEnsTextParameters`](internal_.md#getenstextparameters), ``"key"``\> & \{ `gatewayUrls?`: [`AssetGatewayUrls`](internal_.md#assetgatewayurls)  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsAvatar.d.ts:9

___

### GetEnsAvatarReturnType

Ƭ **GetEnsAvatarReturnType**: `string` \| ``null``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsAvatar.d.ts:13

___

### GetEnsNameParameters

Ƭ **GetEnsNameParameters**: [`Prettify`](internal_.md#prettify)\<[`Pick`](internal_.md#pick)\<[`ReadContractParameters`](internal_.md#readcontractparameters), ``"blockNumber"`` \| ``"blockTag"``\> & \{ `address`: [`Address`](internal_.md#address) ; `universalResolverAddress?`: [`Address`](internal_.md#address)  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsName.d.ts:11

___

### GetEnsNameReturnType

Ƭ **GetEnsNameReturnType**: `string` \| ``null``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsName.d.ts:17

___

### GetEnsResolverParameters

Ƭ **GetEnsResolverParameters**: [`Prettify`](internal_.md#prettify)\<[`Pick`](internal_.md#pick)\<[`ReadContractParameters`](internal_.md#readcontractparameters), ``"blockNumber"`` \| ``"blockTag"``\> & \{ `name`: `string` ; `universalResolverAddress?`: [`Address`](internal_.md#address)  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsResolver.d.ts:11

___

### GetEnsResolverReturnType

Ƭ **GetEnsResolverReturnType**: [`Address`](internal_.md#address)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsResolver.d.ts:17

___

### GetEnsTextParameters

Ƭ **GetEnsTextParameters**: [`Prettify`](internal_.md#prettify)\<[`Pick`](internal_.md#pick)\<[`ReadContractParameters`](internal_.md#readcontractparameters), ``"blockNumber"`` \| ``"blockTag"``\> & \{ `key`: `string` ; `name`: `string` ; `universalResolverAddress?`: [`Address`](internal_.md#address)  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsText.d.ts:13

___

### GetEnsTextReturnType

Ƭ **GetEnsTextReturnType**: `string` \| ``null``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/ens/getEnsText.d.ts:21

___

### GetEventArgs

Ƭ **GetEventArgs**\<`TAbi`, `TEventName`, `TConfig`, `TAbiEvent`, `TArgs`, `FailedToParseArgs`\>: ``true`` extends `FailedToParseArgs` ? readonly `unknown`[] \| [`Record`](internal_.md#record)\<`string`, `unknown`\> : `TArgs`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] |
| `TEventName` | extends `string` |
| `TConfig` | extends [`EventParameterOptions`](internal_.md#eventparameteroptions) = [`DefaultEventParameterOptions`](internal_.md#defaulteventparameteroptions) |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) & \{ `type`: ``"event"``  } = `TAbi` extends [`Abi`](internal_.md#abi) ? [`ExtractAbiEvent`](internal_.md#extractabievent)\<`TAbi`, `TEventName`\> : [`AbiEvent`](internal_.md#abievent) & \{ `type`: ``"event"``  } |
| `TArgs` | [`AbiEventParametersToPrimitiveTypes`](internal_.md#abieventparameterstoprimitivetypes)\<`TAbiEvent`[``"inputs"``], `TConfig`\> |
| `FailedToParseArgs` | [`TArgs`] extends [`never`] ? ``true`` : ``false`` \| readonly `unknown`[] extends `TArgs` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:72

___

### GetFeeHistoryParameters

Ƭ **GetFeeHistoryParameters**: \{ `blockCount`: `number` ; `rewardPercentiles`: `number`[]  } & \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  } \| \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getFeeHistory.d.ts:9

___

### GetFeeHistoryReturnType

Ƭ **GetFeeHistoryReturnType**: [`FeeHistory`](internal_.md#feehistory)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getFeeHistory.d.ts:30

___

### GetFilterChangesParameters

Ƭ **GetFilterChangesParameters**\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFilterType` | extends [`FilterType`](internal_.md#filtertype) = [`FilterType`](internal_.md#filtertype) |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `undefined` |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](internal_.md#filter)\<`TFilterType`, `TAbi`, `TEventName`, `any`, `TStrict`, `TFromBlock`, `TToBlock`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getFilterChanges.d.ts:13

___

### GetFilterChangesReturnType

Ƭ **GetFilterChangesReturnType**\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`, `_AbiEvent`, `_Pending`\>: `TFilterType` extends ``"event"`` ? [`Log`](internal_.md#log)\<`bigint`, `number`, `_Pending`, `_AbiEvent`, `TStrict`, `TAbi`, `TEventName`\>[] : [`Hash`](internal_.md#hash)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFilterType` | extends [`FilterType`](internal_.md#filtertype) = [`FilterType`](internal_.md#filtertype) |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `undefined` |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_AbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `TAbi` extends [`Abi`](internal_.md#abi) ? `TEventName` extends `string` ? [`ExtractAbiEvent`](internal_.md#extractabievent)\<`TAbi`, `TEventName`\> : `undefined` : `undefined` |
| `_Pending` | extends `boolean` = `TFromBlock` extends ``"pending"`` ? ``true`` : ``false`` \| `TToBlock` extends ``"pending"`` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getFilterChanges.d.ts:16

___

### GetFilterLogsParameters

Ƭ **GetFilterLogsParameters**\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `undefined` |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](internal_.md#filter)\<``"event"``, `TAbi`, `TEventName`, `any`, `TStrict`, `TFromBlock`, `TToBlock`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getFilterLogs.d.ts:12

___

### GetFilterLogsReturnType

Ƭ **GetFilterLogsReturnType**\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`, `_AbiEvent`, `_Pending`\>: [`Log`](internal_.md#log)\<`bigint`, `number`, `_Pending`, `_AbiEvent`, `TStrict`, `TAbi`, `TEventName`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `undefined` |
| `TEventName` | extends `string` \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_AbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `TAbi` extends [`Abi`](internal_.md#abi) ? `TEventName` extends `string` ? [`ExtractAbiEvent`](internal_.md#extractabievent)\<`TAbi`, `TEventName`\> : `undefined` : `undefined` |
| `_Pending` | extends `boolean` = `TFromBlock` extends ``"pending"`` ? ``true`` : ``false`` \| `TToBlock` extends ``"pending"`` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getFilterLogs.d.ts:15

___

### GetFunctionArgs

Ƭ **GetFunctionArgs**\<`TAbi`, `TFunctionName`, `TAbiFunction`, `TArgs`, `FailedToParseArgs`\>: ``true`` extends `FailedToParseArgs` ? \{ `args?`: readonly `unknown`[]  } : `TArgs` extends readonly [] ? \{ `args?`: `never`  } : \{ `args`: `TArgs`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] |
| `TFunctionName` | extends `string` |
| `TAbiFunction` | extends [`AbiFunction`](internal_.md#abifunction) = `TAbi` extends [`Abi`](internal_.md#abi) ? [`ExtractAbiFunction`](internal_.md#extractabifunction)\<`TAbi`, `TFunctionName`\> : [`AbiFunction`](internal_.md#abifunction) |
| `TArgs` | [`AbiParametersToPrimitiveTypes`](internal_.md#abiparameterstoprimitivetypes)\<`TAbiFunction`[``"inputs"``]\> |
| `FailedToParseArgs` | [`TArgs`] extends [`never`] ? ``true`` : ``false`` \| readonly `unknown`[] extends `TArgs` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:34

___

### GetGasPriceReturnType

Ƭ **GetGasPriceReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getGasPrice.d.ts:7

___

### GetInferredLogValues

Ƭ **GetInferredLogValues**\<`TAbiEvent`, `TAbi`, `TEventName`, `TStrict`, `_EventNames`\>: `TAbi` extends [`Abi`](internal_.md#abi) ? `TEventName` extends `string` ? \{ `args`: [`GetEventArgs`](internal_.md#geteventargs)\<`TAbi`, `TEventName`, \{ `EnableUnion`: ``false`` ; `IndexedOnly`: ``false`` ; `Required`: `TStrict` extends `boolean` ? `TStrict` : ``false``  }\> ; `eventName`: `TEventName` ; `topics`: [`GetTopics`](internal_.md#gettopics)\<`TAbiEvent`, `TAbi`, `TEventName`\>  } : \{ [TName in \_EventNames]: Object }[`_EventNames`] : \{ `topics`: [[`Hex`](internal_.md#hex), ...Hex[]] \| []  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TEventName` | extends `string` \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? `TAbiEvent`[``"name"``] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `_EventNames` | extends `string` = `TAbi` extends [`Abi`](internal_.md#abi) ? [`Abi`](internal_.md#abi) extends `TAbi` ? `string` : [`ExtractAbiEventNames`](internal_.md#extractabieventnames)\<`TAbi`\> : `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/log.d.ts:29

___

### GetLogsParameters

Ƭ **GetLogsParameters**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`\>: \{ `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[]  } & \{ `args?`: [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbiEvents`, `_EventName`\> ; `event`: `TAbiEvent` ; `events?`: `never` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `never` ; `events`: `TAbiEvents` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `never` ; `events?`: `never` ; `strict?`: `never`  } & \{ `blockHash?`: `never` ; `fromBlock?`: `TFromBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) ; `toBlock?`: `TToBlock` \| [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag)  } \| \{ `blockHash?`: [`Hash`](internal_.md#hash) ; `fromBlock?`: `never` ; `toBlock?`: `never`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_EventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getLogs.d.ts:15

___

### GetLogsReturnType

Ƭ **GetLogsReturnType**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Pending`\>: [`Log`](internal_.md#log)\<`bigint`, `number`, `_Pending`, `TAbiEvent`, `TStrict`, `TAbiEvents`, `_EventName`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TFromBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `TToBlock` | extends [`BlockNumber`](internal_.md#blocknumber) \| [`BlockTag`](internal_.md#blocktag) \| `undefined` = `undefined` |
| `_EventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |
| `_Pending` | extends `boolean` = `TFromBlock` extends ``"pending"`` ? ``true`` : ``false`` \| `TToBlock` extends ``"pending"`` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getLogs.d.ts:53

___

### GetPermissionsReturnType

Ƭ **GetPermissionsReturnType**: [`WalletPermission`](internal_.md#walletpermission)[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/getPermissions.d.ts:8

___

### GetProofParameters

Ƭ **GetProofParameters**: \{ `address`: [`Address`](internal_.md#address) ; `storageKeys`: [`Hash`](internal_.md#hash)[]  } & \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getProof.d.ts:12

___

### GetProofReturnType

Ƭ **GetProofReturnType**: [`Proof`](internal_.md#proof)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getProof.d.ts:29

___

### GetStorageAtParameters

Ƭ **GetStorageAtParameters**: \{ `address`: [`Address`](internal_.md#address) ; `slot`: [`Hex`](internal_.md#hex)  } & \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  } \| \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getStorageAt.d.ts:10

___

### GetStorageAtReturnType

Ƭ **GetStorageAtReturnType**: [`Hex`](internal_.md#hex) \| `undefined`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getStorageAt.d.ts:20

___

### GetTopics

Ƭ **GetTopics**\<`TAbiEvent`, `TAbi`, `TEventName`, `_AbiEvent`, `_Args`, `_FailedToParseArgs`\>: ``true`` extends `_FailedToParseArgs` ? [[`Hex`](internal_.md#hex), ...Hex[]] \| [] : `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`Topics`](internal_.md#topics)\<`TAbiEvent`[``"inputs"``]\> : `_AbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`Topics`](internal_.md#topics)\<`_AbiEvent`[``"inputs"``]\> : [[`Hex`](internal_.md#hex), ...Hex[]] \| []

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`TAbiEvent`] |
| `TEventName` | extends `string` \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? `TAbiEvent`[``"name"``] : `undefined` |
| `_AbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `TAbi` extends [`Abi`](internal_.md#abi) ? `TEventName` extends `string` ? [`ExtractAbiEvent`](internal_.md#extractabievent)\<`TAbi`, `TEventName`\> : `undefined` : `undefined` |
| `_Args` | `_AbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`AbiEventParametersToPrimitiveTypes`](internal_.md#abieventparameterstoprimitivetypes)\<`_AbiEvent`[``"inputs"``]\> : `never` |
| `_FailedToParseArgs` | [`_Args`] extends [`never`] ? ``true`` : ``false`` \| readonly `unknown`[] extends `_Args` ? ``true`` : ``false`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/log.d.ts:28

___

### GetTransactionConfirmationsParameters

Ƭ **GetTransactionConfirmationsParameters**\<`TChain`\>: \{ `hash`: [`Hash`](internal_.md#hash) ; `transactionReceipt?`: `never`  } \| \{ `hash?`: `never` ; `transactionReceipt`: [`FormattedTransactionReceipt`](internal_.md#formattedtransactionreceipt)\<`TChain`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransactionConfirmations.d.ts:9

___

### GetTransactionConfirmationsReturnType

Ƭ **GetTransactionConfirmationsReturnType**: `bigint`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransactionConfirmations.d.ts:18

___

### GetTransactionCountParameters

Ƭ **GetTransactionCountParameters**: \{ `address`: [`Address`](internal_.md#address)  } & \{ `blockNumber?`: `bigint` ; `blockTag?`: `never`  } \| \{ `blockNumber?`: `never` ; `blockTag?`: [`BlockTag`](internal_.md#blocktag)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransactionCount.d.ts:11

___

### GetTransactionCountReturnType

Ƭ **GetTransactionCountReturnType**: `number`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransactionCount.d.ts:23

___

### GetTransactionParameters

Ƭ **GetTransactionParameters**\<`TBlockTag`\>: \{ `blockHash`: [`Hash`](internal_.md#hash) ; `blockNumber?`: `never` ; `blockTag?`: `never` ; `hash?`: `never` ; `index`: `number`  } \| \{ `blockHash?`: `never` ; `blockNumber`: `bigint` ; `blockTag?`: `never` ; `hash?`: `never` ; `index`: `number`  } \| \{ `blockHash?`: `never` ; `blockNumber?`: `never` ; `blockTag`: `TBlockTag` \| [`BlockTag`](internal_.md#blocktag) ; `hash?`: `never` ; `index`: `number`  } \| \{ `blockHash?`: `never` ; `blockNumber?`: `never` ; `blockTag?`: `never` ; `hash`: [`Hash`](internal_.md#hash) ; `index?`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransaction.d.ts:10

___

### GetTransactionReceiptParameters

Ƭ **GetTransactionReceiptParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | [`Hash`](internal_.md#hash) | The hash of the transaction. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransactionReceipt.d.ts:9

___

### GetTransactionReceiptReturnType

Ƭ **GetTransactionReceiptReturnType**\<`TChain`\>: [`FormattedTransactionReceipt`](internal_.md#formattedtransactionreceipt)\<`TChain`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransactionReceipt.d.ts:13

___

### GetTransactionReturnType

Ƭ **GetTransactionReturnType**\<`TChain`, `TBlockTag`\>: [`FormattedTransaction`](internal_.md#formattedtransaction)\<`TChain`, `TBlockTag`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/getTransaction.d.ts:42

___

### GetTransactionType

Ƭ **GetTransactionType**\<`TTransactionSerializable`\>: `TTransactionSerializable` extends [`TransactionSerializableLegacy`](internal_.md#transactionserializablelegacy) ? ``"legacy"`` : `never` \| `TTransactionSerializable` extends [`TransactionSerializableEIP1559`](internal_.md#transactionserializableeip1559) ? ``"eip1559"`` : `never` \| `TTransactionSerializable` extends [`TransactionSerializableEIP2930`](internal_.md#transactionserializableeip2930) ? ``"eip2930"`` : `never` \| `TTransactionSerializable` extends [`TransactionSerializableGeneric`](internal_.md#transactionserializablegeneric) ? `TTransactionSerializable`[``"type"``] : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransactionSerializable` | extends [`TransactionSerializable`](internal_.md#transactionserializable) = [`TransactionSerializable`](internal_.md#transactionserializable) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/transaction/getTransactionType.d.ts:4

___

### GetTransportConfig

Ƭ **GetTransportConfig**\<`TTransport`\>: [`ReturnType`](internal_.md#returntype)\<`TTransport`\>[``"config"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransport` | extends [`Transport`](internal_.md#transport) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transport.d.ts:2

___

### GetTypedDataDomain

Ƭ **GetTypedDataDomain**\<`TTypedData`, `TPrimaryType`, `TSchema`, `TDomain`\>: `TPrimaryType` extends ``"EIP712Domain"`` ? \{ `domain`: `TDomain`  } : \{ `domain?`: `TDomain`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key_1: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |
| `TSchema` | `TTypedData` extends [`TypedData`](internal_.md#typeddata) ? [`TypedDataToPrimitiveTypes`](internal_.md#typeddatatoprimitivetypes)\<`TTypedData`\> : \{ `[key_2: string]`: `any`;  } |
| `TDomain` | `TSchema` extends \{ `EIP712Domain`: infer Domain  } ? `Domain` : [`TypedDataDomain`](internal_.md#typeddatadomain) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/typedData.d.ts:7

___

### GetTypedDataMessage

Ƭ **GetTypedDataMessage**\<`TTypedData`, `TPrimaryType`, `TSchema`, `TMessage`\>: `TPrimaryType` extends ``"EIP712Domain"`` ? {} : \{ `[key_3: string]`: `any`;  } extends `TMessage` ? \{ `message`: \{ `[key_4: string]`: `unknown`;  }  } : \{ `message`: `TMessage`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key_1: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |
| `TSchema` | `TTypedData` extends [`TypedData`](internal_.md#typeddata) ? [`TypedDataToPrimitiveTypes`](internal_.md#typeddatatoprimitivetypes)\<`TTypedData`\> : \{ `[key_2: string]`: `any`;  } |
| `TMessage` | `TSchema`[`TPrimaryType` extends keyof `TSchema` ? `TPrimaryType` : keyof `TSchema`] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/typedData.d.ts:18

___

### GetTypedDataPrimaryType

Ƭ **GetTypedDataPrimaryType**\<`TTypedData`, `TPrimaryType`\>: `TTypedData` extends [`TypedData`](internal_.md#typeddata) ? keyof `TTypedData` extends infer AbiFunctionNames ? `AbiFunctionNames` \| `TPrimaryType` extends `AbiFunctionNames` ? `TPrimaryType` : `never` \| [`TypedData`](internal_.md#typeddata) extends `TTypedData` ? `string` : `never` \| ``"EIP712Domain"`` : `never` : `TPrimaryType`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/typedData.d.ts:37

___

### GetTypedDataTypes

Ƭ **GetTypedDataTypes**\<`TTypedData`, `TPrimaryType`\>: `TPrimaryType` extends ``"EIP712Domain"`` ? \{ `types?`: `TTypedData`  } : \{ `types`: `TTypedData`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/typedData.d.ts:40

___

### GetValue

Ƭ **GetValue**\<`TAbi`, `TFunctionName`, `TValueType`, `TAbiFunction`, `_Narrowable`\>: `_Narrowable` extends ``true`` ? `TAbiFunction`[``"stateMutability"``] extends ``"payable"`` ? \{ `value?`: [`NoUndefined`](internal_.md#noundefined)\<`TValueType`\>  } : `TAbiFunction`[``"payable"``] extends ``true`` ? \{ `value?`: [`NoUndefined`](internal_.md#noundefined)\<`TValueType`\>  } : \{ `value?`: `never`  } : \{ `value?`: `TValueType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] |
| `TFunctionName` | extends `string` |
| `TValueType` | [`TransactionRequest`](internal_.md#transactionrequest)[``"value"``] |
| `TAbiFunction` | extends [`AbiFunction`](internal_.md#abifunction) = `TAbi` extends [`Abi`](internal_.md#abi) ? [`ExtractAbiFunction`](internal_.md#extractabifunction)\<`TAbi`, `TFunctionName`\> : [`AbiFunction`](internal_.md#abifunction) |
| `_Narrowable` | extends `boolean` = [`IsNarrowable`](internal_.md#isnarrowable)\<`TAbi`, [`Abi`](internal_.md#abi)\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:18

___

### GreaterThan48Bits

Ƭ **GreaterThan48Bits**: [`Exclude`](internal_.md#exclude)\<[`MBits`](internal_.md#mbits), ``8`` \| ``16`` \| ``24`` \| ``32`` \| ``40`` \| ``48`` \| ``""``\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:31

___

### Hash

Ƭ **Hash**: \`0x$\{string}\`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/misc.d.ts:3

___

### Hex

Ƭ **Hex**: \`0x$\{string}\`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/misc.d.ts:2

___

### HistoricalTradeInfo

Ƭ **HistoricalTradeInfo**: [`TradeData`](internal_.md#tradedata) & [`CollateralData`](internal_.md#collateraldata) & \{ `collateralPrice`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `indexPrice`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `keeperFeesPaid`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `operationType`: [`TradeOperationType`](internal_.md#tradeoperationtype) ; `positionFee`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `realizedPnl`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `timestamp`: `number` ; `txHash`: `string`  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:157](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L157)

___

### IdleMarginInfo

Ƭ **IdleMarginInfo**: [`CollateralData`](internal_.md#collateraldata) & \{ `amount`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `marketId`: [`Market`](internal_.md#market)[``"marketId"``]  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:226](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L226)

___

### Index

Ƭ **Index**: \`0x$\{string}\`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:7

___

### InferEventName

Ƭ **InferEventName**\<`TAbi`, `TEventName`\>: `TAbi` extends [`Abi`](internal_.md#abi) ? [`ExtractAbiEventNames`](internal_.md#extractabieventnames)\<`TAbi`\> extends infer AbiEventNames ? `AbiEventNames` \| `TEventName` extends `AbiEventNames` ? `TEventName` : `never` : `never` : `TEventName`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TEventName` | extends `string` \| `undefined` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:30

___

### InferFunctionName

Ƭ **InferFunctionName**\<`TAbi`, `TFunctionName`, `TAbiStateMutability`\>: `TAbi` extends [`Abi`](internal_.md#abi) ? [`ExtractAbiFunctionNames`](internal_.md#extractabifunctionnames)\<`TAbi`, `TAbiStateMutability`\> extends infer AbiFunctionNames ? `AbiFunctionNames` \| `TFunctionName` extends `AbiFunctionNames` ? `TFunctionName` : `never` \| [`Abi`](internal_.md#abi) extends `TAbi` ? `string` : `never` : `never` : `TFunctionName`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` \| `undefined` = `string` |
| `TAbiStateMutability` | extends [`AbiStateMutability`](internal_.md#abistatemutability) = [`AbiStateMutability`](internal_.md#abistatemutability) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:31

___

### IsNarrowable

Ƭ **IsNarrowable**\<`T`, `U`\>: [`IsNever`](internal_.md#isnever)\<`T` extends `U` ? ``true`` : ``false`` & `U` extends `T` ? ``false`` : ``true``\> extends ``true`` ? ``false`` : ``true``

**`Description`**

Checks if T can be narrowed further than U

**`Example`**

```ts
type Result = IsNarrowable<'foo', string>
//   ^? true
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type to check |
| `U` | Type to against |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:21

___

### IsNever

Ƭ **IsNever**\<`T`\>: [`T`] extends [`never`] ? ``true`` : ``false``

**`Description`**

Checks if T is `never`

**`Example`**

```ts
type Result = IsNever<never>
//   ^? type Result = true
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type to check |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:29

___

### IsUndefined

Ƭ **IsUndefined**\<`T`\>: [`undefined`] extends [`T`] ? ``true`` : ``false``

**`Description`**

Checks if T is `undefined`

**`Example`**

```ts
type Result = IsUndefined<undefined>
//   ^? type Result = true
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type to check |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:53

___

### JsonRpcAccount

Ƭ **JsonRpcAccount**\<`TAddress`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAddress` | extends [`Address`](internal_.md#address) = [`Address`](internal_.md#address) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `TAddress` |
| `type` | ``"json-rpc"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/accounts/types.d.ts:23

___

### LessThanOrEqualTo48Bits

Ƭ **LessThanOrEqualTo48Bits**: [`Exclude`](internal_.md#exclude)\<[`MBits`](internal_.md#mbits), [`GreaterThan48Bits`](internal_.md#greaterthan48bits) \| ``""``\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:32

___

### LiquidationInfo

Ƭ **LiquidationInfo**: [`CollateralData`](internal_.md#collateraldata) & \{ `direction`: [`TradeDirection`](internal_.md#tradedirection) ; `liqudationLeverage`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `liquidationFees`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `liquidationPrice`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `marketId`: [`Market`](internal_.md#market)[``"marketId"``] ; `realizedPnl`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `remainingCollateral`: [`AmountInfo`](internal_.md#amountinfo) ; `sizeClosed`: [`AmountInfo`](internal_.md#amountinfo) ; `timestamp`: `number` ; `txHash`: `string` \| `undefined`  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:169](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L169)

___

### LocalAccount

Ƭ **LocalAccount**\<`TSource`, `TAddress`\>: [`CustomSource`](internal_.md#customsource) & \{ `address`: `TAddress` ; `publicKey`: [`Hex`](internal_.md#hex) ; `source`: `TSource` ; `type`: ``"local"``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSource` | extends `string` = ``"custom"`` |
| `TAddress` | extends [`Address`](internal_.md#address) = [`Address`](internal_.md#address) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/accounts/types.d.ts:27

___

### Log

Ƭ **Log**\<`TQuantity`, `TIndex`, `TPending`, `TAbiEvent`, `TStrict`, `TAbi`, `TEventName`\>: \{ `address`: [`Address`](internal_.md#address) ; `blockHash`: `TPending` extends ``true`` ? ``null`` : [`Hash`](internal_.md#hash) ; `blockNumber`: `TPending` extends ``true`` ? ``null`` : `TQuantity` ; `data`: [`Hex`](internal_.md#hex) ; `logIndex`: `TPending` extends ``true`` ? ``null`` : `TIndex` ; `removed`: `boolean` ; `transactionHash`: `TPending` extends ``true`` ? ``null`` : [`Hash`](internal_.md#hash) ; `transactionIndex`: `TPending` extends ``true`` ? ``null`` : `TIndex`  } & [`GetInferredLogValues`](internal_.md#getinferredlogvalues)\<`TAbiEvent`, `TAbi`, `TEventName`, `TStrict`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TPending` | extends `boolean` = `boolean` |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TEventName` | extends `string` \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? `TAbiEvent`[``"name"``] : `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/log.d.ts:4

___

### LogTopic

Ƭ **LogTopic**: [`Hex`](internal_.md#hex) \| [`Hex`](internal_.md#hex)[] \| ``null``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/misc.d.ts:4

___

### LogTopicType

Ƭ **LogTopicType**\<`TPrimitiveType`, `TTopic`\>: `TTopic` extends [`Hex`](internal_.md#hex) ? `TPrimitiveType` : `TTopic` extends [`Hex`](internal_.md#hex)[] ? `TPrimitiveType`[] : `TTopic` extends ``null`` ? ``null`` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPrimitiveType` | [`Hex`](internal_.md#hex) |
| `TTopic` | extends [`LogTopic`](internal_.md#logtopic) = [`LogTopic`](internal_.md#logtopic) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:112

___

### MAXIMUM\_DEPTH

Ƭ **MAXIMUM\_DEPTH**: ``20``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/multicall.d.ts:3

___

### MBits

Ƭ **MBits**: ``""`` \| ``8`` \| ``16`` \| ``24`` \| ``32`` \| ``40`` \| ``48`` \| ``56`` \| ``64`` \| ``72`` \| ``80`` \| ``88`` \| ``96`` \| ``104`` \| ``112`` \| ``120`` \| ``128`` \| ``136`` \| ``144`` \| ``152`` \| ``160`` \| ``168`` \| ``176`` \| ``184`` \| ``192`` \| ``200`` \| ``208`` \| ``216`` \| ``224`` \| ``232`` \| ``240`` \| ``248`` \| ``256``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:5

___

### MBytes

Ƭ **MBytes**: ``""`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``12`` \| ``13`` \| ``14`` \| ``15`` \| ``16`` \| ``17`` \| ``18`` \| ``19`` \| ``20`` \| ``21`` \| ``22`` \| ``23`` \| ``24`` \| ``25`` \| ``26`` \| ``27`` \| ``28`` \| ``29`` \| ``30`` \| ``31`` \| ``32``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:4

___

### Market

Ƭ **Market**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](internal_.md#chain) |
| `indexToken` | [`Token`](../interfaces/internal_.Token.md) |
| `longCollateral` | [`Token`](../interfaces/internal_.Token.md)[] |
| `marketId` | `string` |
| `marketSymbol` | `string` |
| `shortCollateral` | [`Token`](../interfaces/internal_.Token.md)[] |
| `supportedOrderActions` | [`Record`](internal_.md#record)\<[`OrderAction`](internal_.md#orderaction), [`Boolean`](internal_.md#boolean)\> |
| `supportedOrderTypes` | [`Record`](internal_.md#record)\<[`OrderType`](internal_.md#ordertype), [`Boolean`](internal_.md#boolean)\> |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:37](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L37)

___

### MarketInfo

Ƭ **MarketInfo**: [`Market`](internal_.md#market) & [`GenericStaticMarketMetadata`](internal_.md#genericstaticmarketmetadata) & [`Protocol`](internal_.md#protocol)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:85](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L85)

___

### Maybe

Ƭ **Maybe**\<`T`\>: `T` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/common/tokens.ts:3](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/common/tokens.ts#L3)

___

### MaybeAbiEventName

Ƭ **MaybeAbiEventName**\<`TAbiEvent`\>: `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? `TAbiEvent`[``"name"``] : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:27

___

### MaybeExtractEventArgsFromAbi

Ƭ **MaybeExtractEventArgsFromAbi**\<`TAbi`, `TEventName`\>: `TAbi` extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] ? `TEventName` extends `string` ? [`GetEventArgs`](internal_.md#geteventargs)\<`TAbi`, `TEventName`\> : `undefined` : `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] \| `undefined` |
| `TEventName` | extends `string` \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:28

___

### MaybeRequired

Ƭ **MaybeRequired**\<`T`, `TRequired`\>: `TRequired` extends ``true`` ? [`Required`](internal_.md#required)\<`T`\> : `T`

**`Description`**

Makes attributes on the type T required if TRequired is true.

**`Example`**

```ts
MaybeRequired<{ a: string, b?: number }, true>
=> { a: string, b: number }

MaybeRequired<{ a: string, b?: number }, false>
=> { a: string, b?: number }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TRequired` | extends `boolean` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:79

___

### Merge

Ƭ **Merge**\<`Object1`, `Object2`\>: [`Omit`](internal_.md#omit)\<`Object1`, keyof `Object2`\> & `Object2`

Merges two object types into new type

**`Example`**

```ts
type Result = Merge<{ foo: string }, { foo: number; bar: string }>
//   ^? type Result = { foo: number; bar: string }
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `Object1` | Object to merge into |
| `Object2` | Object to merge and override keys from Object1 |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/types.d.ts:83

___

### MulticallBatchOptions

Ƭ **MulticallBatchOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `batchSize?` | `number` | The maximum size (in bytes) for each calldata chunk. **`Default`** ```ts 1_024 ``` |
| `wait?` | `number` | The maximum number of milliseconds to wait before sending a batch. **`Default`** ```ts 0 ``` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/createClient.d.ts:74

___

### MulticallContract

Ƭ **MulticallContract**\<`TAbi`, `TFunctionName`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) \| readonly `unknown`[] |
| `TFunctionName` | extends [`ExtractAbiFunctionNames`](internal_.md#extractabifunctionnames)\<`TAbi` extends [`Abi`](internal_.md#abi) ? `TAbi` : [`Abi`](internal_.md#abi), ``"pure"`` \| ``"view"``\> = `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `abi` | `TAbi` |
| `functionName` | `TFunctionName` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/multicall.d.ts:4

___

### MulticallContracts

Ƭ **MulticallContracts**\<`TContracts`, `TProperties`, `Result`, `Depth`\>: `Depth`[``"length"``] extends [`MAXIMUM_DEPTH`](internal_.md#maximum_depth) ? [`ContractFunctionConfig`](internal_.md#contractfunctionconfig) & `TProperties`[] : `TContracts` extends [] ? [] : `TContracts` extends [infer Head] ? [...Result, [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`Head`[``"abi"``], `Head`[``"functionName"``]\> & `TProperties`] : `TContracts` extends [infer Head, ...(infer Tail extends readonly MulticallContract[])] ? [`MulticallContracts`](internal_.md#multicallcontracts)\<[...Tail], `TProperties`, [...Result, [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`Head`[``"abi"``], `Head`[``"functionName"``]\> & `TProperties`], [...Depth, ``1``]\> : `unknown`[] extends `TContracts` ? `TContracts` : `TContracts` extends [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<infer TAbi, infer TFunctionName\>[] ? [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`TAbi`, `TFunctionName`\> & `TProperties`[] : [`ContractFunctionConfig`](internal_.md#contractfunctionconfig) & `TProperties`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContracts` | extends readonly [`MulticallContract`](internal_.md#multicallcontract)[] |
| `TProperties` | extends [`Record`](internal_.md#record)\<`string`, `any`\> = `object` |
| `Result` | extends `any`[] = [] |
| `Depth` | extends readonly `number`[] = [] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/multicall.d.ts:8

___

### MulticallParameters

Ƭ **MulticallParameters**\<`TContracts`, `TAllowFailure`\>: [`Pick`](internal_.md#pick)\<[`CallParameters`](internal_.md#callparameters), ``"blockNumber"`` \| ``"blockTag"``\> & \{ `allowFailure?`: `TAllowFailure` ; `batchSize?`: `number` ; `contracts`: [`Narrow`](internal_.md#narrow)\<readonly [...MulticallContracts\<TContracts\>]\> ; `multicallAddress?`: [`Address`](internal_.md#address)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContracts` | extends [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)[] = [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)[] |
| `TAllowFailure` | extends `boolean` = ``true`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/multicall.d.ts:14

___

### MulticallResult

Ƭ **MulticallResult**\<`Result`, `TAllowFailure`\>: `TAllowFailure` extends ``true`` ? \{ `error?`: `undefined` ; `result`: `Result` ; `status`: ``"success"``  } \| \{ `error`: `Error` ; `result?`: `undefined` ; `status`: ``"failure"``  } : `Result`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Result` | `Result` |
| `TAllowFailure` | extends `boolean` = ``true`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/multicall.d.ts:23

___

### MulticallResults

Ƭ **MulticallResults**\<`TContracts`, `TAllowFailure`, `Result`, `Depth`\>: `Depth`[``"length"``] extends [`MAXIMUM_DEPTH`](internal_.md#maximum_depth) ? [`MulticallResult`](internal_.md#multicallresult)\<[`ContractFunctionResult`](internal_.md#contractfunctionresult), `TAllowFailure`\>[] : `TContracts` extends [] ? [] : `TContracts` extends [infer Head] ? [...Result, [`MulticallResult`](internal_.md#multicallresult)\<[`ContractFunctionResult`](internal_.md#contractfunctionresult)\<`Head`[``"abi"``], `Head`[``"functionName"``]\>, `TAllowFailure`\>] : `TContracts` extends [infer Head, ...(infer Tail extends readonly MulticallContract[])] ? [`MulticallResults`](internal_.md#multicallresults)\<[...Tail], `TAllowFailure`, [...Result, [`MulticallResult`](internal_.md#multicallresult)\<[`ContractFunctionResult`](internal_.md#contractfunctionresult)\<`Head`[``"abi"``], `Head`[``"functionName"``]\>, `TAllowFailure`\>], [...Depth, ``1``]\> : `TContracts` extends [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<infer TAbi, infer TFunctionName\>[] ? [`MulticallResult`](internal_.md#multicallresult)\<[`ContractFunctionResult`](internal_.md#contractfunctionresult)\<`TAbi`, `TFunctionName`\>, `TAllowFailure`\>[] : [`MulticallResult`](internal_.md#multicallresult)\<[`ContractFunctionResult`](internal_.md#contractfunctionresult), `TAllowFailure`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContracts` | extends readonly [`MulticallContract`](internal_.md#multicallcontract)[] |
| `TAllowFailure` | extends `boolean` = ``true`` |
| `Result` | extends `any`[] = [] |
| `Depth` | extends readonly `number`[] = [] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/multicall.d.ts:32

___

### MulticallReturnType

Ƭ **MulticallReturnType**\<`TContracts`, `TAllowFailure`\>: [`MulticallResults`](internal_.md#multicallresults)\<`TContracts`, `TAllowFailure`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContracts` | extends [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)[] = [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)[] |
| `TAllowFailure` | extends `boolean` = ``true`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/multicall.d.ts:21

___

### Narrow

Ƭ **Narrow**\<`TType`\>: `unknown` extends `TType` ? `unknown` : `never` \| `TType` extends `Function` ? `TType` : `never` \| `TType` extends `bigint` \| `boolean` \| `number` \| `string` ? `TType` : `never` \| `TType` extends [] ? [] : `never` \| \{ [K in keyof TType]: Narrow\<TType[K]\> }

Infers embedded primitive type of any type

**`Param`**

Type to infer

**`Example`**

```ts
type Result = Narrow<['foo', 'bar', 1]>
```

#### Type parameters

| Name |
| :------ |
| `TType` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/narrow.d.ts:10

___

### NetworkSync

Ƭ **NetworkSync**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentBlock` | [`Quantity`](internal_.md#quantity) | The current block number |
| `highestBlock` | [`Quantity`](internal_.md#quantity) | Number of latest block on the network |
| `startingBlock` | [`Quantity`](internal_.md#quantity) | Block number at which syncing started |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:51

___

### NoBits

Ƭ **NoBits**: [`Exclude`](internal_.md#exclude)\<[`MBits`](internal_.md#mbits), [`GreaterThan48Bits`](internal_.md#greaterthan48bits) \| [`LessThanOrEqualTo48Bits`](internal_.md#lessthanorequalto48bits)\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:33

___

### NoUndefined

Ƭ **NoUndefined**\<`T`\>: `T` extends `undefined` ? `never` : `T`

**`Description`**

Constructs a type by excluding `undefined` from `T`.

**`Example`**

```ts
NoUndefined<string | undefined>
=> string
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:134

___

### Numeric

Ƭ **Numeric**: `number` \| `bigint`

Any type that can be used where a numeric value is needed.

#### Defined in

node_modules/.pnpm/ethers@6.8.0/node_modules/ethers/lib.commonjs/utils/maths.d.ts:5

___

### Omit

Ƭ **Omit**\<`T`, `K`\>: [`Pick`](internal_.md#pick)\<`T`, [`Exclude`](internal_.md#exclude)\<keyof `T`, `K`\>\>

Construct a type with the properties of T except for those in type K.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `any` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1616

___

### OnBlock

Ƭ **OnBlock**\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>: (`block`: [`OnBlockParameter`](internal_.md#onblockparameter)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>, `prevBlock`: [`OnBlockParameter`](internal_.md#onblockparameter)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\> \| `undefined`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |
| `TIncludeTransactions` | extends `boolean` = ``false`` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Type declaration

▸ (`block`, `prevBlock`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `block` | [`OnBlockParameter`](internal_.md#onblockparameter)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\> |
| `prevBlock` | [`OnBlockParameter`](internal_.md#onblockparameter)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\> \| `undefined` |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlocks.d.ts:11

___

### OnBlockNumberFn

Ƭ **OnBlockNumberFn**: (`blockNumber`: [`OnBlockNumberParameter`](internal_.md#onblocknumberparameter), `prevBlockNumber`: [`OnBlockNumberParameter`](internal_.md#onblocknumberparameter) \| `undefined`) => `void`

#### Type declaration

▸ (`blockNumber`, `prevBlockNumber`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | [`OnBlockNumberParameter`](internal_.md#onblocknumberparameter) |
| `prevBlockNumber` | [`OnBlockNumberParameter`](internal_.md#onblocknumberparameter) \| `undefined` |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlockNumber.d.ts:9

___

### OnBlockNumberParameter

Ƭ **OnBlockNumberParameter**: [`GetBlockNumberReturnType`](internal_.md#getblocknumberreturntype)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlockNumber.d.ts:8

___

### OnBlockParameter

Ƭ **OnBlockParameter**\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>: [`GetBlockReturnType`](internal_.md#getblockreturntype)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |
| `TIncludeTransactions` | extends `boolean` = ``false`` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlocks.d.ts:10

___

### OnTransactionsFn

Ƭ **OnTransactionsFn**: (`transactions`: [`OnTransactionsParameter`](internal_.md#ontransactionsparameter)) => `void`

#### Type declaration

▸ (`transactions`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `transactions` | [`OnTransactionsParameter`](internal_.md#ontransactionsparameter) |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchPendingTransactions.d.ts:10

___

### OnTransactionsParameter

Ƭ **OnTransactionsParameter**: [`Hash`](internal_.md#hash)[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchPendingTransactions.d.ts:9

___

### OpenTradePreviewInfo

Ƭ **OpenTradePreviewInfo**: [`PreviewInfo`](internal_.md#previewinfo) & \{ `priceImpact`: [`FixedNumber`](../classes/internal_.FixedNumber.md)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:218](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L218)

___

### OrderAction

Ƭ **OrderAction**: ``"CREATE"`` \| ``"UPDATE"`` \| ``"CANCEL"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:25](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L25)

___

### OrderData

Ƭ **OrderData**: [`TradeData`](internal_.md#tradedata) & \{ `triggerData`: [`TriggerData`](internal_.md#triggerdata) \| `undefined`  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:101](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L101)

___

### OrderIdentifier

Ƭ **OrderIdentifier**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `marketId` | [`Market`](internal_.md#market)[``"marketId"``] |
| `orderId` | `string` |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:109](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L109)

___

### OrderInfo

Ƭ **OrderInfo**: [`OrderData`](internal_.md#orderdata) & [`OrderIdentifier`](internal_.md#orderidentifier) & \{ `orderType`: [`OrderType`](internal_.md#ordertype)  } & [`CollateralData`](internal_.md#collateraldata) & \{ `protocolId`: [`ProtocolId`](internal_.md#protocolid)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:125](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L125)

___

### OrderType

Ƭ **OrderType**: [`CreateOrderType`](internal_.md#createordertype) \| [`CloseOrderType`](internal_.md#closeordertype)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:23](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L23)

___

### PageOptions

Ƭ **PageOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `limit` | `number` |
| `skip` | `number` |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:231](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L231)

___

### PaginatedRes

Ƭ **PaginatedRes**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxItemsCount` | `number` |
| `result` | `T`[] |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:236](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L236)

___

### Parameters

Ƭ **Parameters**\<`T`\>: `T` extends (...`args`: infer P) => `any` ? `P` : `never`

Obtain the parameters of a function type in a tuple

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1626

___

### Partial

Ƭ **Partial**\<`T`\>: \{ [P in keyof T]?: T[P] }

Make all properties in T optional

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1571

___

### Pick

Ƭ **Pick**\<`T`, `K`\>: \{ [P in K]: T[P] }

From T, pick a set of properties whose keys are in the union K

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1592

___

### PollOptions

Ƭ **PollOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitMissed?` | `boolean` | Whether or not to emit the missed block numbers to the callback. |
| `emitOnBegin?` | `boolean` | Whether or not to emit the latest block number to the callback when the subscription opens. |
| `pollingInterval?` | `number` | Polling frequency (in ms). Defaults to Client's pollingInterval config. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlockNumber.d.ts:10

___

### PollOptions

Ƭ **PollOptions**\<`TIncludeTransactions`, `TBlockTag`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TIncludeTransactions` | extends `boolean` = ``false`` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockTag?` | `TBlockTag` \| [`BlockTag`](internal_.md#blocktag) | The block tag. Defaults to "latest". |
| `emitMissed?` | `boolean` | Whether or not to emit the missed blocks to the callback. |
| `emitOnBegin?` | `boolean` | Whether or not to emit the block to the callback when the subscription opens. |
| `includeTransactions?` | `TIncludeTransactions` | Whether or not to include transaction data in the response. |
| `pollingInterval?` | `number` | Polling frequency (in ms). Defaults to the client's pollingInterval config. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlocks.d.ts:12

___

### PollOptions

Ƭ **PollOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `batch?` | `boolean` | Whether or not the transaction hashes should be batched on each invocation. **`Default`** ```ts true ``` |
| `pollingInterval?` | `number` | Polling frequency (in ms). Defaults to Client's pollingInterval config. **`Default`** ```ts client.pollingInterval ``` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchContractEvent.d.ts:11

___

### PollOptions

Ƭ **PollOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `batch?` | `boolean` | Whether or not the transaction hashes should be batched on each invocation. **`Default`** ```ts true ``` |
| `pollingInterval?` | `number` | Polling frequency (in ms). Defaults to Client's pollingInterval config. **`Default`** ```ts client.pollingInterval ``` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchEvent.d.ts:11

___

### PollOptions

Ƭ **PollOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `batch?` | `boolean` | Whether or not the transaction hashes should be batched on each invocation. **`Default`** ```ts true ``` |
| `pollingInterval?` | `number` | Polling frequency (in ms). Defaults to Client's pollingInterval config. **`Default`** ```ts client.pollingInterval ``` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchPendingTransactions.d.ts:11

___

### PositionData

Ƭ **PositionData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessibleMargin` | [`AmountInfo`](internal_.md#amountinfo) |
| `avgEntryPrice` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `collateral` | [`Token`](../interfaces/internal_.Token.md) |
| `cumulativeFunding` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `direction` | [`TradeDirection`](internal_.md#tradedirection) |
| `indexToken` | [`Token`](../interfaces/internal_.Token.md) |
| `leverage` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `liquidationPrice` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |
| `margin` | [`AmountInfo`](internal_.md#amountinfo) |
| `marketId` | [`Market`](internal_.md#market)[``"marketId"``] |
| `posId` | `string` |
| `size` | [`AmountInfo`](internal_.md#amountinfo) |
| `unrealizedPnl` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:135](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L135)

___

### PositionInfo

Ƭ **PositionInfo**: [`PositionData`](internal_.md#positiondata) & \{ `protocolId`: [`ProtocolId`](internal_.md#protocolid)  } & \{ `metadata`: `any`  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:151](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L151)

___

### PrepareTransactionRequestParameters

Ƭ **PrepareTransactionRequestParameters**\<`TChain`, `TAccount`, `TChainOverride`\>: [`UnionOmit`](internal_.md#unionomit)\<[`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChainOverride` extends [`Chain`](internal_.md#chain) ? `TChainOverride` : `TChain`\>, ``"from"``\> & [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & [`GetChain`](internal_.md#getchain)\<`TChain`, `TChainOverride`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/prepareTransactionRequest.d.ts:16

___

### PrepareTransactionRequestReturnType

Ƭ **PrepareTransactionRequestReturnType**\<`TChain`, `TAccount`, `TChainOverride`\>: [`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChainOverride` extends [`Chain`](internal_.md#chain) ? `TChainOverride` : `TChain`\> & [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & [`GetChain`](internal_.md#getchain)\<`TChain`, `TChainOverride`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/prepareTransactionRequest.d.ts:17

___

### Prettify

Ƭ **Prettify**\<`T`\>: \{ [K in keyof T]: T[K] } & {}

**`Description`**

Combines members of an intersection into a readable type.

**`See`**

[https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg](https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg)

**`Example`**

```ts
Prettify<{ a: string } & { b: string } & { c: number, d: bigint }>
=> { a: string, b: string, c: number, d: bigint }
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:158

___

### Pretty

Ƭ **Pretty**\<`T`\>: \{ [K in keyof T]: T[K] } & `unknown`

Combines members of an intersection into a readable type.

**`Link`**

https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg

**`Example`**

```ts
type Result = Pretty<{ a: string } | { b: string } | { c: number, d: bigint }>
//   ^? type Result = { a: string; b: string; c: number; d: bigint }
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/types.d.ts:105

___

### PreviewInfo

Ƭ **PreviewInfo**: [`CollateralData`](internal_.md#collateraldata) & \{ `avgEntryPrice`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `fee`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `leverage`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `liqudationPrice`: [`FixedNumber`](../classes/internal_.FixedNumber.md) ; `margin`: [`AmountInfo`](internal_.md#amountinfo) ; `marketId`: [`Market`](internal_.md#market)[``"marketId"``] ; `size`: [`AmountInfo`](internal_.md#amountinfo)  } & [`ErrorData`](internal_.md#errordata)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:208](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L208)

___

### PrimitiveTypeLookup

Ƭ **PrimitiveTypeLookup**\<`TAbiType`, `TAbiParameterKind`\>: \{ [\_ in SolidityAddress]: ResolvedConfig["AddressType"] } & \{ [\_ in SolidityBool]: boolean } & \{ [\_ in SolidityBytes]: ResolvedConfig["BytesType"][TAbiParameterKind] } & \{ [\_ in SolidityFunction]: \`$\{ResolvedConfig["AddressType"]}$\{string}\` } & \{ [\_ in SolidityInt]: TAbiType extends \`$\{"u" \| ""}int$\{infer TBits}\` ? TBits extends keyof BitsTypeLookup ? BitsTypeLookup[TBits] : Error\<"Unknown bits value."\> : Error\<"Unknown 'SolidityInt' format."\> } & \{ [\_ in SolidityString]: string } & \{ [\_ in SolidityTuple]: Record\<string, unknown\> } & \{ [\_ in SolidityArray]: readonly unknown[] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiType` | extends [`AbiType`](internal_.md#abitype) |
| `TAbiParameterKind` | extends [`AbiParameterKind`](internal_.md#abiparameterkind) = [`AbiParameterKind`](internal_.md#abiparameterkind) |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:14

___

### Proof

Ƭ **Proof**\<`TQuantity`, `TIndex`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountProof` | [`AccountProof`](internal_.md#accountproof)[] |
| `address` | [`Address`](internal_.md#address) |
| `balance` | `TQuantity` |
| `codeHash` | [`Hash`](internal_.md#hash) |
| `nonce` | `TIndex` |
| `storageHash` | [`Hash`](internal_.md#hash) |
| `storageProof` | [`StorageProof`](internal_.md#storageproof)\<`TQuantity`\>[] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/proof.d.ts:9

___

### Protocol

Ƭ **Protocol**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `protocolId` | [`ProtocolId`](internal_.md#protocolid) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:33](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L33)

___

### ProtocolId

Ƭ **ProtocolId**: ``"GMXV1"`` \| ``"SYNTHETIXV2"`` \| ``"PERV2"`` \| ``"GMXV2"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:27](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L27)

___

### PublicActions

Ƭ **PublicActions**\<`TTransport`, `TChain`, `TAccount`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `call` | (`parameters`: [`CallParameters`](internal_.md#callparameters)\<`TChain`\>) => `Promise`\<[`CallReturnType`](internal_.md#callreturntype)\> |
| `createBlockFilter` | () => `Promise`\<[`CreateBlockFilterReturnType`](internal_.md#createblockfilterreturntype)\> |
| `createContractEventFilter` | \<TAbi, TEventName, TArgs, TStrict, TFromBlock, TToBlock\>(`args`: [`CreateContractEventFilterParameters`](internal_.md#createcontracteventfilterparameters)\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<[`CreateContractEventFilterReturnType`](internal_.md#createcontracteventfilterreturntype)\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>\> |
| `createEventFilter` | \<TAbiEvent, TAbiEvents, TStrict, TFromBlock, TToBlock, _EventName, _Args\>(`args?`: [`CreateEventFilterParameters`](internal_.md#createeventfilterparameters)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>) => `Promise`\<[`CreateEventFilterReturnType`](internal_.md#createeventfilterreturntype)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>\> |
| `createPendingTransactionFilter` | () => `Promise`\<[`CreatePendingTransactionFilterReturnType`](internal_.md#creatependingtransactionfilterreturntype)\> |
| `estimateContractGas` | \<TChain, TAbi, TFunctionName\>(`args`: [`EstimateContractGasParameters`](internal_.md#estimatecontractgasparameters)\<`TAbi`, `TFunctionName`, `TChain`, `TAccount`\>) => `Promise`\<[`EstimateContractGasReturnType`](internal_.md#estimatecontractgasreturntype)\> |
| `estimateFeesPerGas` | \<TChainOverride, TType\>(`args?`: [`EstimateFeesPerGasParameters`](internal_.md#estimatefeespergasparameters)\<`TChain`, `TChainOverride`, `TType`\>) => `Promise`\<[`EstimateFeesPerGasReturnType`](internal_.md#estimatefeespergasreturntype)\> |
| `estimateGas` | (`args`: [`EstimateGasParameters`](internal_.md#estimategasparameters)\<`TChain`, `TAccount`\>) => `Promise`\<[`EstimateGasReturnType`](internal_.md#estimategasreturntype)\> |
| `estimateMaxPriorityFeePerGas` | \<TChainOverride\>(`args?`: [`EstimateMaxPriorityFeePerGasParameters`](internal_.md#estimatemaxpriorityfeepergasparameters)\<`TChain`, `TChainOverride`\>) => `Promise`\<[`EstimateMaxPriorityFeePerGasReturnType`](internal_.md#estimatemaxpriorityfeepergasreturntype)\> |
| `getBalance` | (`args`: [`GetBalanceParameters`](internal_.md#getbalanceparameters)) => `Promise`\<[`GetBalanceReturnType`](internal_.md#getbalancereturntype)\> |
| `getBlock` | \<TIncludeTransactions, TBlockTag\>(`args?`: [`GetBlockParameters`](internal_.md#getblockparameters)\<`TIncludeTransactions`, `TBlockTag`\>) => `Promise`\<[`GetBlockReturnType`](internal_.md#getblockreturntype)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\>\> |
| `getBlockNumber` | (`args?`: [`GetBlockNumberParameters`](internal_.md#getblocknumberparameters)) => `Promise`\<[`GetBlockNumberReturnType`](internal_.md#getblocknumberreturntype)\> |
| `getBlockTransactionCount` | (`args?`: [`GetBlockTransactionCountParameters`](internal_.md#getblocktransactioncountparameters)) => `Promise`\<[`GetBlockTransactionCountReturnType`](internal_.md#getblocktransactioncountreturntype)\> |
| `getBytecode` | (`args`: [`GetBytecodeParameters`](internal_.md#getbytecodeparameters)) => `Promise`\<[`GetBytecodeReturnType`](internal_.md#getbytecodereturntype)\> |
| `getChainId` | () => `Promise`\<[`GetChainIdReturnType`](internal_.md#getchainidreturntype)\> |
| `getContractEvents` | \<TAbi, TEventName, TStrict, TFromBlock, TToBlock\>(`args`: [`GetContractEventsParameters`](internal_.md#getcontracteventsparameters)\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<[`GetContractEventsReturnType`](internal_.md#getcontracteventsreturntype)\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\> |
| `getEnsAddress` | (`args`: [`GetEnsAddressParameters`](internal_.md#getensaddressparameters)) => `Promise`\<[`GetEnsAddressReturnType`](internal_.md#getensaddressreturntype)\> |
| `getEnsAvatar` | (`args`: [`GetEnsAvatarParameters`](internal_.md#getensavatarparameters)) => `Promise`\<[`GetEnsAvatarReturnType`](internal_.md#getensavatarreturntype)\> |
| `getEnsName` | (`args`: [`GetEnsNameParameters`](internal_.md#getensnameparameters)) => `Promise`\<[`GetEnsNameReturnType`](internal_.md#getensnamereturntype)\> |
| `getEnsResolver` | (`args`: [`GetEnsResolverParameters`](internal_.md#getensresolverparameters)) => `Promise`\<[`GetEnsResolverReturnType`](internal_.md#getensresolverreturntype)\> |
| `getEnsText` | (`args`: [`GetEnsTextParameters`](internal_.md#getenstextparameters)) => `Promise`\<[`GetEnsTextReturnType`](internal_.md#getenstextreturntype)\> |
| `getFeeHistory` | (`args`: [`GetFeeHistoryParameters`](internal_.md#getfeehistoryparameters)) => `Promise`\<[`GetFeeHistoryReturnType`](internal_.md#getfeehistoryreturntype)\> |
| `getFilterChanges` | \<TFilterType, TAbi, TEventName, TStrict, TFromBlock, TToBlock\>(`args`: [`GetFilterChangesParameters`](internal_.md#getfilterchangesparameters)\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<[`GetFilterChangesReturnType`](internal_.md#getfilterchangesreturntype)\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\> |
| `getFilterLogs` | \<TAbi, TEventName, TStrict, TFromBlock, TToBlock\>(`args`: [`GetFilterLogsParameters`](internal_.md#getfilterlogsparameters)\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<[`GetFilterLogsReturnType`](internal_.md#getfilterlogsreturntype)\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\> |
| `getGasPrice` | () => `Promise`\<[`GetGasPriceReturnType`](internal_.md#getgaspricereturntype)\> |
| `getLogs` | \<TAbiEvent, TAbiEvents, TStrict, TFromBlock, TToBlock\>(`args?`: [`GetLogsParameters`](internal_.md#getlogsparameters)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>) => `Promise`\<[`GetLogsReturnType`](internal_.md#getlogsreturntype)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>\> |
| `getProof` | (`args`: [`GetProofParameters`](internal_.md#getproofparameters)) => `Promise`\<[`GetProofReturnType`](internal_.md#getproofreturntype)\> |
| `getStorageAt` | (`args`: [`GetStorageAtParameters`](internal_.md#getstorageatparameters)) => `Promise`\<[`GetStorageAtReturnType`](internal_.md#getstorageatreturntype)\> |
| `getTransaction` | \<TBlockTag\>(`args`: [`GetTransactionParameters`](internal_.md#gettransactionparameters)\<`TBlockTag`\>) => `Promise`\<[`GetTransactionReturnType`](internal_.md#gettransactionreturntype)\<`TChain`, `TBlockTag`\>\> |
| `getTransactionConfirmations` | (`args`: [`GetTransactionConfirmationsParameters`](internal_.md#gettransactionconfirmationsparameters)\<`TChain`\>) => `Promise`\<[`GetTransactionConfirmationsReturnType`](internal_.md#gettransactionconfirmationsreturntype)\> |
| `getTransactionCount` | (`args`: [`GetTransactionCountParameters`](internal_.md#gettransactioncountparameters)) => `Promise`\<[`GetTransactionCountReturnType`](internal_.md#gettransactioncountreturntype)\> |
| `getTransactionReceipt` | (`args`: [`GetTransactionReceiptParameters`](internal_.md#gettransactionreceiptparameters)) => `Promise`\<[`GetTransactionReceiptReturnType`](internal_.md#gettransactionreceiptreturntype)\<`TChain`\>\> |
| `multicall` | \<TContracts, TAllowFailure\>(`args`: [`MulticallParameters`](internal_.md#multicallparameters)\<`TContracts`, `TAllowFailure`\>) => `Promise`\<[`MulticallReturnType`](internal_.md#multicallreturntype)\<`TContracts`, `TAllowFailure`\>\> |
| `prepareTransactionRequest` | \<TChainOverride\>(`args`: [`PrepareTransactionRequestParameters`](internal_.md#preparetransactionrequestparameters)\<`TChain`, `TAccount`, `TChainOverride`\>) => `Promise`\<[`PrepareTransactionRequestReturnType`](internal_.md#preparetransactionrequestreturntype)\> |
| `readContract` | \<TAbi, TFunctionName\>(`args`: [`ReadContractParameters`](internal_.md#readcontractparameters)\<`TAbi`, `TFunctionName`\>) => `Promise`\<[`ReadContractReturnType`](internal_.md#readcontractreturntype)\<`TAbi`, `TFunctionName`\>\> |
| `sendRawTransaction` | (`args`: [`SendRawTransactionParameters`](internal_.md#sendrawtransactionparameters)) => `Promise`\<[`SendRawTransactionReturnType`](internal_.md#sendrawtransactionreturntype)\> |
| `simulateContract` | \<TAbi, TFunctionName, TChainOverride\>(`args`: [`SimulateContractParameters`](internal_.md#simulatecontractparameters)\<`TAbi`, `TFunctionName`, `TChain`, `TChainOverride`\>) => `Promise`\<[`SimulateContractReturnType`](internal_.md#simulatecontractreturntype)\<`TAbi`, `TFunctionName`, `TChain`, `TChainOverride`\>\> |
| `uninstallFilter` | (`args`: [`UninstallFilterParameters`](internal_.md#uninstallfilterparameters)) => `Promise`\<[`UninstallFilterReturnType`](internal_.md#uninstallfilterreturntype)\> |
| `verifyMessage` | (`args`: [`VerifyMessageParameters`](internal_.md#verifymessageparameters)) => `Promise`\<[`VerifyMessageReturnType`](internal_.md#verifymessagereturntype)\> |
| `verifyTypedData` | (`args`: [`VerifyTypedDataParameters`](internal_.md#verifytypeddataparameters)) => `Promise`\<[`VerifyTypedDataReturnType`](internal_.md#verifytypeddatareturntype)\> |
| `waitForTransactionReceipt` | (`args`: [`WaitForTransactionReceiptParameters`](internal_.md#waitfortransactionreceiptparameters)\<`TChain`\>) => `Promise`\<[`WaitForTransactionReceiptReturnType`](internal_.md#waitfortransactionreceiptreturntype)\<`TChain`\>\> |
| `watchBlockNumber` | (`args`: [`WatchBlockNumberParameters`](internal_.md#watchblocknumberparameters)) => [`WatchBlockNumberReturnType`](internal_.md#watchblocknumberreturntype) |
| `watchBlocks` | \<TIncludeTransactions, TBlockTag\>(`args`: [`WatchBlocksParameters`](internal_.md#watchblocksparameters)\<`TTransport`, `TChain`, `TIncludeTransactions`, `TBlockTag`\>) => [`WatchBlocksReturnType`](internal_.md#watchblocksreturntype) |
| `watchContractEvent` | \<TAbi, TEventName, TStrict\>(`args`: [`WatchContractEventParameters`](internal_.md#watchcontracteventparameters)\<`TAbi`, `TEventName`, `TStrict`\>) => [`WatchContractEventReturnType`](internal_.md#watchcontracteventreturntype) |
| `watchEvent` | \<TAbiEvent, TAbiEvents, TStrict\>(`args`: [`WatchEventParameters`](internal_.md#watcheventparameters)\<`TAbiEvent`, `TAbiEvents`, `TStrict`\>) => [`WatchEventReturnType`](internal_.md#watcheventreturntype) |
| `watchPendingTransactions` | (`args`: [`WatchPendingTransactionsParameters`](internal_.md#watchpendingtransactionsparameters)\<`TTransport`\>) => [`WatchPendingTransactionsReturnType`](internal_.md#watchpendingtransactionsreturntype) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/decorators/public.d.ts:56

___

### PublicRpcSchema

Ƭ **PublicRpcSchema**: [\{ `Method`: ``"web3_clientVersion"`` ; `Parameters?`: `undefined` ; `ReturnType`: `string`  }, \{ `Method`: ``"web3_sha3"`` ; `Parameters`: [data: Hash] ; `ReturnType`: `string`  }, \{ `Method`: ``"net_listening"`` ; `Parameters?`: `undefined` ; `ReturnType`: `boolean`  }, \{ `Method`: ``"net_peerCount"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"net_version"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_blockNumber"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_call"`` ; `Parameters`: [transaction: Partial\<RpcTransactionRequest\>] \| [transaction: Partial\<RpcTransactionRequest\>, block: RpcBlockNumber \| BlockTag \| RpcBlockIdentifier] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"eth_chainId"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_coinbase"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Address`](internal_.md#address)  }, \{ `Method`: ``"eth_estimateGas"`` ; `Parameters`: [transaction: RpcTransactionRequest] \| [transaction: RpcTransactionRequest, block: RpcBlockNumber \| BlockTag] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_feeHistory"`` ; `Parameters`: [blockCount: Quantity, newestBlock: RpcBlockNumber \| BlockTag, rewardPercentiles: number[] \| undefined] ; `ReturnType`: [`RpcFeeHistory`](internal_.md#rpcfeehistory)  }, \{ `Method`: ``"eth_gasPrice"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_getBalance"`` ; `Parameters`: [address: Address, block: RpcBlockNumber \| BlockTag \| RpcBlockIdentifier] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_getBlockByHash"`` ; `Parameters`: [hash: Hash, includeTransactionObjects: boolean] ; `ReturnType`: [`RpcBlock`](internal_.md#rpcblock) \| ``null``  }, \{ `Method`: ``"eth_getBlockByNumber"`` ; `Parameters`: [block: RpcBlockNumber \| BlockTag, includeTransactionObjects: boolean] ; `ReturnType`: [`RpcBlock`](internal_.md#rpcblock) \| ``null``  }, \{ `Method`: ``"eth_getBlockTransactionCountByHash"`` ; `Parameters`: [hash: Hash] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_getBlockTransactionCountByNumber"`` ; `Parameters`: [block: RpcBlockNumber \| BlockTag] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_getCode"`` ; `Parameters`: [address: Address, block: RpcBlockNumber \| BlockTag \| RpcBlockIdentifier] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"eth_getFilterChanges"`` ; `Parameters`: [filterId: Quantity] ; `ReturnType`: [`RpcLog`](internal_.md#rpclog)[] \| [`Hex`](internal_.md#hex)[]  }, \{ `Method`: ``"eth_getFilterLogs"`` ; `Parameters`: [filterId: Quantity] ; `ReturnType`: [`RpcLog`](internal_.md#rpclog)[]  }, \{ `Method`: ``"eth_getLogs"`` ; `Parameters`: [\{ `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[] ; `topics?`: [`LogTopic`](internal_.md#logtopic)[]  } & \{ `blockHash?`: `never` ; `fromBlock?`: [`RpcBlockNumber`](internal_.md#rpcblocknumber) \| [`BlockTag`](internal_.md#blocktag) ; `toBlock?`: [`RpcBlockNumber`](internal_.md#rpcblocknumber) \| [`BlockTag`](internal_.md#blocktag)  } \| \{ `blockHash?`: [`Hash`](internal_.md#hash) ; `fromBlock?`: `never` ; `toBlock?`: `never`  }] ; `ReturnType`: [`RpcLog`](internal_.md#rpclog)[]  }, \{ `Method`: ``"eth_getProof"`` ; `Parameters`: [address: Address, storageKeys: Hash[], block: RpcBlockNumber \| BlockTag] ; `ReturnType`: [`RpcProof`](internal_.md#rpcproof)  }, \{ `Method`: ``"eth_getStorageAt"`` ; `Parameters`: [address: Address, index: Quantity, block: RpcBlockNumber \| BlockTag \| RpcBlockIdentifier] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"eth_getTransactionByBlockHashAndIndex"`` ; `Parameters`: [hash: Hash, index: Quantity] ; `ReturnType`: [`RpcTransaction`](internal_.md#rpctransaction) \| ``null``  }, \{ `Method`: ``"eth_getTransactionByBlockNumberAndIndex"`` ; `Parameters`: [block: RpcBlockNumber \| BlockTag, index: Quantity] ; `ReturnType`: [`RpcTransaction`](internal_.md#rpctransaction) \| ``null``  }, \{ `Method`: ``"eth_getTransactionByHash"`` ; `Parameters`: [hash: Hash] ; `ReturnType`: [`RpcTransaction`](internal_.md#rpctransaction) \| ``null``  }, \{ `Method`: ``"eth_getTransactionCount"`` ; `Parameters`: [address: Address, block: RpcBlockNumber \| BlockTag \| RpcBlockIdentifier] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_getTransactionReceipt"`` ; `Parameters`: [hash: Hash] ; `ReturnType`: [`RpcTransactionReceipt`](internal_.md#rpctransactionreceipt) \| ``null``  }, \{ `Method`: ``"eth_getUncleByBlockHashAndIndex"`` ; `Parameters`: [hash: Hash, index: Quantity] ; `ReturnType`: [`RpcUncle`](internal_.md#rpcuncle) \| ``null``  }, \{ `Method`: ``"eth_getUncleByBlockNumberAndIndex"`` ; `Parameters`: [block: RpcBlockNumber \| BlockTag, index: Quantity] ; `ReturnType`: [`RpcUncle`](internal_.md#rpcuncle) \| ``null``  }, \{ `Method`: ``"eth_getUncleCountByBlockHash"`` ; `Parameters`: [hash: Hash] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_getUncleCountByBlockNumber"`` ; `Parameters`: [block: RpcBlockNumber \| BlockTag] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_maxPriorityFeePerGas"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_newBlockFilter"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_newFilter"`` ; `Parameters`: [filter: Object] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_newPendingTransactionFilter"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_protocolVersion"`` ; `Parameters?`: `undefined` ; `ReturnType`: `string`  }, \{ `Method`: ``"eth_sendRawTransaction"`` ; `Parameters`: [signedTransaction: Hex] ; `ReturnType`: [`Hash`](internal_.md#hash)  }, \{ `Method`: ``"eth_uninstallFilter"`` ; `Parameters`: [filterId: Quantity] ; `ReturnType`: `boolean`  }]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:84

___

### Quantity

Ƭ **Quantity**: \`0x$\{string}\`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:8

___

### Range

Ƭ **Range**\<`Start`, `Stop`, `Result`, `Padding`, `Current`\>: `Current` extends `Stop` ? `Current` extends `Start` ? [`Current`] : `Result` extends [] ? [] : [...Result, `Current`] : `Current` extends `Start` ? [`Range`](internal_.md#range)\<`Start`, `Stop`, [`Current`], `Padding`\> : `Result` extends [] ? [`Range`](internal_.md#range)\<`Start`, `Stop`, [], [...Padding, ``0``]\> : [`Range`](internal_.md#range)\<`Start`, `Stop`, [...Result, `Current`], `Padding`\>

Creates range between two positive numbers using [tail recursion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types).

**`Example`**

```ts
type Result = Range<1, 3>
//   ^? type Result = [1, 2, 3]
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Start` | extends `number` | Number to start range |
| `Stop` | extends `number` | Number to end range |
| `Result` | extends `number`[] = [] | - |
| `Padding` | extends ``0``[] = [] | - |
| `Current` | extends `number` = [...Padding, ...Result][``"length"``] & `number` | - |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/types.d.ts:119

___

### ReadContractParameters

Ƭ **ReadContractParameters**\<`TAbi`, `TFunctionName`\>: [`Pick`](internal_.md#pick)\<[`CallParameters`](internal_.md#callparameters), ``"account"`` \| ``"blockNumber"`` \| ``"blockTag"``\> & [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`TAbi`, `TFunctionName`, ``"view"`` \| ``"pure"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/readContract.d.ts:10

___

### ReadContractReturnType

Ƭ **ReadContractReturnType**\<`TAbi`, `TFunctionName`\>: [`ContractFunctionResult`](internal_.md#contractfunctionresult)\<`TAbi`, `TFunctionName`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/readContract.d.ts:11

___

### Record

Ƭ **Record**\<`K`, `T`\>: \{ [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1599

___

### ReplacementReason

Ƭ **ReplacementReason**: ``"cancelled"`` \| ``"replaced"`` \| ``"repriced"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/waitForTransactionReceipt.d.ts:12

___

### ReplacementReturnType

Ƭ **ReplacementReturnType**\<`TChain`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason` | [`ReplacementReason`](internal_.md#replacementreason) |
| `replacedTransaction` | [`Transaction`](internal_.md#transaction) |
| `transaction` | [`Transaction`](internal_.md#transaction) |
| `transactionReceipt` | [`GetTransactionReceiptReturnType`](internal_.md#gettransactionreceiptreturntype)\<`TChain`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/waitForTransactionReceipt.d.ts:13

___

### RequestAddressesReturnType

Ƭ **RequestAddressesReturnType**: [`Address`](internal_.md#address)[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/requestAddresses.d.ts:8

___

### RequestPermissionsParameters

Ƭ **RequestPermissionsParameters**: [`Prettify`](internal_.md#prettify)\<\{ `eth_accounts`: [`Record`](internal_.md#record)\<`string`, `any`\>  } & \{ `[key: string]`: [`Record`](internal_.md#record)\<`string`, `any`\>;  }\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/requestPermissions.d.ts:9

___

### RequestPermissionsReturnType

Ƭ **RequestPermissionsReturnType**: [`WalletPermission`](internal_.md#walletpermission)[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/requestPermissions.d.ts:14

___

### Required

Ƭ **Required**\<`T`\>: \{ [P in keyof T]-?: T[P] }

Make all properties in T required

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1578

___

### ResolvedAbiType

Ƭ **ResolvedAbiType**: [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"StrictAbiType"``] extends ``true`` ? [`AbiType`](internal_.md#abitype) : `string`

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:26

___

### ReturnType

Ƭ **ReturnType**\<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:1636

___

### RpcBlock

Ƭ **RpcBlock**\<`TBlockTag`, `TIncludeTransactions`, `TTransaction`\>: [`Block`](internal_.md#block)\<[`Quantity`](internal_.md#quantity), `TIncludeTransactions`, `TBlockTag`, `TTransaction`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = [`BlockTag`](internal_.md#blocktag) |
| `TIncludeTransactions` | extends `boolean` = `boolean` |
| `TTransaction` | [`RpcTransaction`](internal_.md#rpctransaction)\<`TBlockTag` extends ``"pending"`` ? ``true`` : ``false``\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:11

___

### RpcBlockIdentifier

Ƭ **RpcBlockIdentifier**: [`BlockIdentifier`](internal_.md#blockidentifier)\<[`Quantity`](internal_.md#quantity)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:13

___

### RpcBlockNumber

Ƭ **RpcBlockNumber**: [`BlockNumber`](internal_.md#blocknumber)\<[`Quantity`](internal_.md#quantity)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:12

___

### RpcFeeHistory

Ƭ **RpcFeeHistory**: [`FeeHistory`](internal_.md#feehistory)\<[`Quantity`](internal_.md#quantity)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:15

___

### RpcLog

Ƭ **RpcLog**: [`Log`](internal_.md#log)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:17

___

### RpcProof

Ƭ **RpcProof**: [`Proof`](internal_.md#proof)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:18

___

### RpcSchema

Ƭ **RpcSchema**: readonly \{ `Method`: `string` ; `Parameters?`: `unknown` ; `ReturnType`: `unknown`  }[]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:1226

___

### RpcSchemaOverride

Ƭ **RpcSchemaOverride**: [`Omit`](internal_.md#omit)\<[`RpcSchema`](internal_.md#rpcschema)[`number`], ``"Method"``\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:1231

___

### RpcTransaction

Ƭ **RpcTransaction**\<`TPending`\>: [`UnionOmit`](internal_.md#unionomit)\<[`TransactionLegacy`](internal_.md#transactionlegacy)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), `TPending`, ``"0x0"``\> \| [`TransactionEIP2930`](internal_.md#transactioneip2930)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), `TPending`, ``"0x1"``\> \| [`TransactionEIP1559`](internal_.md#transactioneip1559)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), `TPending`, ``"0x2"``\>, ``"typeHex"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPending` | extends `boolean` = `boolean` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:21

___

### RpcTransactionReceipt

Ƭ **RpcTransactionReceipt**: [`TransactionReceipt`](internal_.md#transactionreceipt)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), [`Status`](internal_.md#status), [`TransactionType`](internal_.md#transactiontype-1)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:19

___

### RpcTransactionRequest

Ƭ **RpcTransactionRequest**: [`TransactionRequestLegacy`](internal_.md#transactionrequestlegacy)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), ``"0x0"``\> \| [`TransactionRequestEIP2930`](internal_.md#transactionrequesteip2930)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), ``"0x1"``\> \| [`TransactionRequestEIP1559`](internal_.md#transactionrequesteip1559)\<[`Quantity`](internal_.md#quantity), [`Index`](internal_.md#index), ``"0x2"``\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:20

___

### RpcUncle

Ƭ **RpcUncle**: [`Uncle`](internal_.md#uncle)\<[`Quantity`](internal_.md#quantity)\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:14

___

### SendRawTransactionParameters

Ƭ **SendRawTransactionParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedTransaction` | [`TransactionSerialized`](internal_.md#transactionserialized) | The signed serialized tranasction. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/sendRawTransaction.d.ts:8

___

### SendRawTransactionReturnType

Ƭ **SendRawTransactionReturnType**: [`Hash`](internal_.md#hash)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/sendRawTransaction.d.ts:14

___

### SendTransactionParameters

Ƭ **SendTransactionParameters**\<`TChain`, `TAccount`, `TChainOverride`\>: [`UnionOmit`](internal_.md#unionomit)\<[`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChainOverride` extends [`Chain`](internal_.md#chain) ? `TChainOverride` : `TChain`\>, ``"from"``\> & [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & [`GetChain`](internal_.md#getchain)\<`TChain`, `TChainOverride`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/sendTransaction.d.ts:20

___

### SendTransactionReturnType

Ƭ **SendTransactionReturnType**: [`Hash`](internal_.md#hash)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/sendTransaction.d.ts:21

___

### SerializeTransactionFn

Ƭ **SerializeTransactionFn**\<`TTransactionSerializable`\>: typeof [`serializeTransaction`](internal_.md#serializetransaction)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransactionSerializable` | extends [`TransactionSerializable`](internal_.md#transactionserializable) = [`TransactionSerializable`](internal_.md#transactionserializable) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/transaction/serializeTransaction.d.ts:12

___

### SerializedTransactionReturnType

Ƭ **SerializedTransactionReturnType**\<`TTransactionSerializable`, `TTransactionType`\>: [`TransactionSerialized`](internal_.md#transactionserialized)\<`TTransactionType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransactionSerializable` | extends [`TransactionSerializable`](internal_.md#transactionserializable) = [`TransactionSerializable`](internal_.md#transactionserializable) |
| `TTransactionType` | extends [`TransactionType`](internal_.md#transactiontype) = [`GetTransactionType`](internal_.md#gettransactiontype)\<`TTransactionSerializable`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/transaction/serializeTransaction.d.ts:11

___

### SignMessageParameters

Ƭ **SignMessageParameters**\<`TAccount`\>: [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & \{ `message`: [`SignableMessage`](internal_.md#signablemessage)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/signMessage.d.ts:12

___

### SignMessageReturnType

Ƭ **SignMessageReturnType**: [`Hex`](internal_.md#hex)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/signMessage.d.ts:15

___

### SignTransactionParameters

Ƭ **SignTransactionParameters**\<`TChain`, `TAccount`, `TChainOverride`\>: [`UnionOmit`](internal_.md#unionomit)\<[`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChainOverride` extends [`Chain`](internal_.md#chain) ? `TChainOverride` : `TChain`\>, ``"from"``\> & [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & [`GetChain`](internal_.md#getchain)\<`TChain`, `TChainOverride`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/signTransaction.d.ts:17

___

### SignTransactionReturnType

Ƭ **SignTransactionReturnType**: [`TransactionSerialized`](internal_.md#transactionserialized)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/signTransaction.d.ts:18

___

### SignTypedDataParameters

Ƭ **SignTypedDataParameters**\<`TTypedData`, `TPrimaryType`, `TAccount`\>: [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & [`TypedDataDefinition`](internal_.md#typeddatadefinition)\<`TTypedData`, `TPrimaryType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/signTypedData.d.ts:17

___

### SignTypedDataReturnType

Ƭ **SignTypedDataReturnType**: [`Hex`](internal_.md#hex)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/signTypedData.d.ts:20

___

### SignableMessage

Ƭ **SignableMessage**: `string` \| \{ `raw`: [`Hex`](internal_.md#hex) \| [`ByteArray`](internal_.md#bytearray)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/misc.d.ts:5

___

### Signature

Ƭ **Signature**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `r` | [`Hex`](internal_.md#hex) |
| `s` | [`Hex`](internal_.md#hex) |
| `v` | `bigint` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/misc.d.ts:9

___

### SimulateContractParameters

Ƭ **SimulateContractParameters**\<`TAbi`, `TFunctionName`, `TChain`, `TChainOverride`\>: \{ `chain?`: `TChainOverride` ; `dataSuffix?`: [`Hex`](internal_.md#hex)  } & [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`TAbi`, `TFunctionName`, ``"payable"`` \| ``"nonpayable"``\> & [`UnionOmit`](internal_.md#unionomit)\<[`CallParameters`](internal_.md#callparameters)\<`TChainOverride` extends [`Chain`](internal_.md#chain) ? `TChainOverride` : `TChain`\>, ``"batch"`` \| ``"to"`` \| ``"data"`` \| ``"value"``\> & [`GetValue`](internal_.md#getvalue)\<`TAbi`, `TFunctionName`, [`CallParameters`](internal_.md#callparameters)\<`TChain`\> extends [`CallParameters`](internal_.md#callparameters) ? [`CallParameters`](internal_.md#callparameters)\<`TChain`\>[``"value"``] : [`CallParameters`](internal_.md#callparameters)[``"value"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `any` |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/simulateContract.d.ts:15

___

### SimulateContractReturnType

Ƭ **SimulateContractReturnType**\<`TAbi`, `TFunctionName`, `TChain`, `TChainOverride`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | [`UnionOmit`](internal_.md#unionomit)\<[`WriteContractParameters`](internal_.md#writecontractparameters)\<`TAbi`, `TFunctionName`, `TChain`, `undefined`, `TChainOverride`\>, ``"chain"`` \| ``"functionName"``\> & \{ `chain`: `TChainOverride` ; `functionName`: `TFunctionName`  } & [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`TAbi`, `TFunctionName`, ``"payable"`` \| ``"nonpayable"``\> |
| `result` | [`ContractFunctionResult`](internal_.md#contractfunctionresult)\<`TAbi`, `TFunctionName`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/simulateContract.d.ts:20

___

### SolidityAddress

Ƭ **SolidityAddress**: ``"address"``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:6

___

### SolidityArray

Ƭ **SolidityArray**: [`SolidityArrayWithoutTuple`](internal_.md#solidityarraywithouttuple) \| [`SolidityArrayWithTuple`](internal_.md#solidityarraywithtuple)

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:24

___

### SolidityArrayWithTuple

Ƭ **SolidityArrayWithTuple**: [`_BuildArrayTypes`](internal_.md#_buildarraytypes)\<[`SolidityTuple`](internal_.md#soliditytuple)\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:23

___

### SolidityArrayWithoutTuple

Ƭ **SolidityArrayWithoutTuple**: [`_BuildArrayTypes`](internal_.md#_buildarraytypes)\<[`SolidityAddress`](internal_.md#solidityaddress) \| [`SolidityBool`](internal_.md#soliditybool) \| [`SolidityBytes`](internal_.md#soliditybytes) \| [`SolidityFunction`](internal_.md#solidityfunction) \| [`SolidityInt`](internal_.md#solidityint) \| [`SolidityString`](internal_.md#soliditystring)\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:22

___

### SolidityBool

Ƭ **SolidityBool**: ``"bool"``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:7

___

### SolidityBytes

Ƭ **SolidityBytes**: \`bytes$\{MBytes}\`

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:8

___

### SolidityFixedArrayRange

Ƭ **SolidityFixedArrayRange**: [`Range`](internal_.md#range)\<[`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"FixedArrayMinLength"``], [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"FixedArrayMaxLength"``]\>[`number`]

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:13

___

### SolidityFixedArraySizeLookup

Ƭ **SolidityFixedArraySizeLookup**: \{ [Prop in SolidityFixedArrayRange as \`$\{Prop}\`]: Prop }

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:14

___

### SolidityFunction

Ƭ **SolidityFunction**: ``"function"``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:9

___

### SolidityInt

Ƭ **SolidityInt**: \`$\{"u" \| ""}int$\{MBits}\`

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:12

___

### SolidityString

Ƭ **SolidityString**: ``"string"``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:10

___

### SolidityTuple

Ƭ **SolidityTuple**: ``"tuple"``

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:11

___

### Status

Ƭ **Status**: ``"0x0"`` \| ``"0x1"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:9

___

### StorageProof

Ƭ **StorageProof**\<`TQuantity`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | [`Hash`](internal_.md#hash) |
| `proof` | [`Hash`](internal_.md#hash)[] |
| `value` | `TQuantity` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/proof.d.ts:4

___

### SwitchChainParameters

Ƭ **SwitchChainParameters**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`Chain`](internal_.md#chain)[``"id"``] | ID of Chain to switch to |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/switchChain.d.ts:8

___

### Topics

Ƭ **Topics**\<`THead`, `TBase`\>: `THead` extends readonly [infer \_Head, ...(infer Tail extends AbiEvent["inputs"])] ? `_Head` extends \{ `indexed`: ``true``  } ? [[`Hex`](internal_.md#hex), ...Topics\<Tail\>] : [`Topics`](internal_.md#topics)\<`Tail`\> : `TBase`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THead` | extends [`AbiEvent`](internal_.md#abievent)[``"inputs"``] |
| `TBase` | [[`Hex`](internal_.md#hex)] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/log.d.ts:22

___

### TradeData

Ƭ **TradeData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `direction` | [`TradeDirection`](internal_.md#tradedirection) |
| `marginDelta` | [`AmountInfo`](internal_.md#amountinfo) |
| `marketId` | [`Market`](internal_.md#market)[``"marketId"``] |
| `sizeDelta` | [`AmountInfo`](internal_.md#amountinfo) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:94](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L94)

___

### TradeDirection

Ƭ **TradeDirection**: ``"LONG"`` \| ``"SHORT"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:87](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L87)

___

### TradeOperationType

Ƭ **TradeOperationType**: ``"Open Long"`` \| ``"Close Long"`` \| ``"Open Short"`` \| ``"Close Short"`` \| ``"Long"`` \| ``"Short"``

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:29](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L29)

___

### Transaction

Ƭ **Transaction**\<`TQuantity`, `TIndex`, `TPending`\>: [`TransactionLegacy`](internal_.md#transactionlegacy)\<`TQuantity`, `TIndex`, `TPending`\> \| [`TransactionEIP2930`](internal_.md#transactioneip2930)\<`TQuantity`, `TIndex`, `TPending`\> \| [`TransactionEIP1559`](internal_.md#transactioneip1559)\<`TQuantity`, `TIndex`, `TPending`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TPending` | extends `boolean` = `boolean` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:87

___

### TransactionBase

Ƭ **TransactionBase**\<`TQuantity`, `TIndex`, `TPending`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TPending` | extends `boolean` = `boolean` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockHash` | `TPending` extends ``true`` ? ``null`` : [`Hash`](internal_.md#hash) | Hash of block containing this transaction or `null` if pending |
| `blockNumber` | `TPending` extends ``true`` ? ``null`` : `TQuantity` | Number of block containing this transaction or `null` if pending |
| `from` | [`Address`](internal_.md#address) | Transaction sender |
| `gas` | `TQuantity` | Gas provided for transaction execution |
| `hash` | [`Hash`](internal_.md#hash) | Hash of this transaction |
| `input` | [`Hex`](internal_.md#hex) | Contract code or a hashed method call |
| `nonce` | `TIndex` | Unique number identifying this transaction |
| `r` | [`Hex`](internal_.md#hex) | ECDSA signature r |
| `s` | [`Hex`](internal_.md#hex) | ECDSA signature s |
| `to` | [`Address`](internal_.md#address) \| ``null`` | Transaction recipient or `null` if deploying a contract |
| `transactionIndex` | `TPending` extends ``true`` ? ``null`` : `TIndex` | Index of this transaction in the block or `null` if pending |
| `typeHex` | [`Hex`](internal_.md#hex) \| ``null`` | The type represented as hex. |
| `v` | `TQuantity` | ECDSA recovery ID |
| `value` | `TQuantity` | Value in wei sent with this transaction |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:42

___

### TransactionEIP1559

Ƭ **TransactionEIP1559**\<`TQuantity`, `TIndex`, `TPending`, `TType`\>: [`TransactionBase`](internal_.md#transactionbase)\<`TQuantity`, `TIndex`, `TPending`\> & [`FeeValuesEIP1559`](internal_.md#feevalueseip1559)\<`TQuantity`\> & \{ `accessList`: [`AccessList`](internal_.md#accesslist-1) ; `chainId`: `TIndex` ; `type`: `TType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TPending` | extends `boolean` = `boolean` |
| `TType` | ``"eip1559"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:82

___

### TransactionEIP2930

Ƭ **TransactionEIP2930**\<`TQuantity`, `TIndex`, `TPending`, `TType`\>: [`TransactionBase`](internal_.md#transactionbase)\<`TQuantity`, `TIndex`, `TPending`\> & [`FeeValuesLegacy`](internal_.md#feevalueslegacy)\<`TQuantity`\> & \{ `accessList`: [`AccessList`](internal_.md#accesslist-1) ; `chainId`: `TIndex` ; `type`: `TType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TPending` | extends `boolean` = `boolean` |
| `TType` | ``"eip2930"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:77

___

### TransactionLegacy

Ƭ **TransactionLegacy**\<`TQuantity`, `TIndex`, `TPending`, `TType`\>: [`TransactionBase`](internal_.md#transactionbase)\<`TQuantity`, `TIndex`, `TPending`\> & [`FeeValuesLegacy`](internal_.md#feevalueslegacy)\<`TQuantity`\> & \{ `accessList?`: `never` ; `chainId?`: `TIndex` ; `type`: `TType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TPending` | extends `boolean` = `boolean` |
| `TType` | ``"legacy"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:72

___

### TransactionPendingDependencies

Ƭ **TransactionPendingDependencies**: ``"blockHash"`` \| ``"blockNumber"`` \| ``"transactionIndex"``

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/transaction.d.ts:9

___

### TransactionReceipt

Ƭ **TransactionReceipt**\<`TQuantity`, `TIndex`, `TStatus`, `TType`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TStatus` | ``"success"`` \| ``"reverted"`` |
| `TType` | [`TransactionType`](internal_.md#transactiontype) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockHash` | [`Hash`](internal_.md#hash) | Hash of block containing this transaction |
| `blockNumber` | `TQuantity` | Number of block containing this transaction |
| `contractAddress` | [`Address`](internal_.md#address) \| ``null`` | Address of new contract or `null` if no contract was created |
| `cumulativeGasUsed` | `TQuantity` | Gas used by this and all preceding transactions in this block |
| `effectiveGasPrice` | `TQuantity` | Pre-London, it is equal to the transaction's gasPrice. Post-London, it is equal to the actual gas price paid for inclusion. |
| `from` | [`Address`](internal_.md#address) | Transaction sender |
| `gasUsed` | `TQuantity` | Gas used by this transaction |
| `logs` | [`Log`](internal_.md#log)\<`TQuantity`, `TIndex`, ``false``\>[] | List of log objects generated by this transaction |
| `logsBloom` | [`Hex`](internal_.md#hex) | Logs bloom filter |
| `status` | `TStatus` | `success` if this transaction was successful or `reverted` if it failed |
| `to` | [`Address`](internal_.md#address) \| ``null`` | Transaction recipient or `null` if deploying a contract |
| `transactionHash` | [`Hash`](internal_.md#hash) | Hash of this transaction |
| `transactionIndex` | `TIndex` | Index of this transaction in the block |
| `type` | `TType` | Transaction type |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:12

___

### TransactionRequest

Ƭ **TransactionRequest**\<`TQuantity`, `TIndex`\>: [`TransactionRequestLegacy`](internal_.md#transactionrequestlegacy)\<`TQuantity`, `TIndex`\> \| [`TransactionRequestEIP2930`](internal_.md#transactionrequesteip2930)\<`TQuantity`, `TIndex`\> \| [`TransactionRequestEIP1559`](internal_.md#transactionrequesteip1559)\<`TQuantity`, `TIndex`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:114

___

### TransactionRequestBase

Ƭ **TransactionRequestBase**\<`TQuantity`, `TIndex`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | [`Hex`](internal_.md#hex) | Contract code or a hashed method call with encoded args |
| `from` | [`Address`](internal_.md#address) | Transaction sender |
| `gas?` | `TQuantity` | Gas provided for transaction execution |
| `nonce?` | `TIndex` | Unique number identifying this transaction |
| `to?` | [`Address`](internal_.md#address) \| ``null`` | Transaction recipient |
| `value?` | `TQuantity` | Value in wei sent with this transaction |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:88

___

### TransactionRequestEIP1559

Ƭ **TransactionRequestEIP1559**\<`TQuantity`, `TIndex`, `TTransactionType`\>: [`TransactionRequestBase`](internal_.md#transactionrequestbase)\<`TQuantity`, `TIndex`\> & [`Partial`](internal_.md#partial)\<[`FeeValuesEIP1559`](internal_.md#feevalueseip1559)\<`TQuantity`\>\> & \{ `accessList?`: [`AccessList`](internal_.md#accesslist-1) ; `type?`: `TTransactionType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TTransactionType` | ``"eip1559"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:110

___

### TransactionRequestEIP2930

Ƭ **TransactionRequestEIP2930**\<`TQuantity`, `TIndex`, `TTransactionType`\>: [`TransactionRequestBase`](internal_.md#transactionrequestbase)\<`TQuantity`, `TIndex`\> & [`Partial`](internal_.md#partial)\<[`FeeValuesLegacy`](internal_.md#feevalueslegacy)\<`TQuantity`\>\> & \{ `accessList?`: [`AccessList`](internal_.md#accesslist-1) ; `type?`: `TTransactionType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TTransactionType` | ``"eip2930"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:106

___

### TransactionRequestLegacy

Ƭ **TransactionRequestLegacy**\<`TQuantity`, `TIndex`, `TTransactionType`\>: [`TransactionRequestBase`](internal_.md#transactionrequestbase)\<`TQuantity`, `TIndex`\> & [`Partial`](internal_.md#partial)\<[`FeeValuesLegacy`](internal_.md#feevalueslegacy)\<`TQuantity`\>\> & \{ `accessList?`: `never` ; `type?`: `TTransactionType`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |
| `TTransactionType` | ``"legacy"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:102

___

### TransactionSerializable

Ƭ **TransactionSerializable**\<`TQuantity`, `TIndex`\>: [`TransactionSerializableLegacy`](internal_.md#transactionserializablelegacy)\<`TQuantity`, `TIndex`\> \| [`TransactionSerializableEIP2930`](internal_.md#transactionserializableeip2930)\<`TQuantity`, `TIndex`\> \| [`TransactionSerializableEIP1559`](internal_.md#transactionserializableeip1559)\<`TQuantity`, `TIndex`\> \| [`TransactionSerializableGeneric`](internal_.md#transactionserializablegeneric)\<`TQuantity`, `TIndex`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:146

___

### TransactionSerializableBase

Ƭ **TransactionSerializableBase**\<`TQuantity`, `TIndex`\>: [`Omit`](internal_.md#omit)\<[`TransactionRequestBase`](internal_.md#transactionrequestbase)\<`TQuantity`, `TIndex`\>, ``"from"``\> & [`Partial`](internal_.md#partial)\<[`Signature`](internal_.md#signature)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:120

___

### TransactionSerializableEIP1559

Ƭ **TransactionSerializableEIP1559**\<`TQuantity`, `TIndex`\>: [`TransactionSerializableBase`](internal_.md#transactionserializablebase)\<`TQuantity`, `TIndex`\> & [`Partial`](internal_.md#partial)\<[`FeeValuesEIP1559`](internal_.md#feevalueseip1559)\<`TQuantity`\>\> & \{ `accessList?`: [`AccessList`](internal_.md#accesslist-1) ; `chainId`: `number` ; `type?`: ``"eip1559"`` ; `yParity?`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:132

___

### TransactionSerializableEIP2930

Ƭ **TransactionSerializableEIP2930**\<`TQuantity`, `TIndex`\>: [`TransactionSerializableBase`](internal_.md#transactionserializablebase)\<`TQuantity`, `TIndex`\> & [`Partial`](internal_.md#partial)\<[`FeeValuesLegacy`](internal_.md#feevalueslegacy)\<`TQuantity`\>\> & \{ `accessList?`: [`AccessList`](internal_.md#accesslist-1) ; `chainId`: `number` ; `type?`: ``"eip2930"`` ; `yParity?`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:126

___

### TransactionSerializableGeneric

Ƭ **TransactionSerializableGeneric**\<`TQuantity`, `TIndex`\>: [`TransactionSerializableBase`](internal_.md#transactionserializablebase)\<`TQuantity`, `TIndex`\> & \{ `accessList?`: [`AccessList`](internal_.md#accesslist-1) ; `chainId?`: `number` ; `gasPrice?`: `TQuantity` ; `maxFeePerGas?`: `TQuantity` ; `maxPriorityFeePerGas?`: `TQuantity` ; `type`: `string`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:138

___

### TransactionSerializableLegacy

Ƭ **TransactionSerializableLegacy**\<`TQuantity`, `TIndex`\>: [`TransactionSerializableBase`](internal_.md#transactionserializablebase)\<`TQuantity`, `TIndex`\> & [`Partial`](internal_.md#partial)\<[`FeeValuesLegacy`](internal_.md#feevalueslegacy)\<`TQuantity`\>\> & \{ `accessList?`: `never` ; `chainId?`: `number` ; `type?`: ``"legacy"``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIndex` | `number` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:121

___

### TransactionSerialized

Ƭ **TransactionSerialized**\<`TType`\>: `TType` extends ``"eip1559"`` ? [`TransactionSerializedEIP1559`](internal_.md#transactionserializedeip1559) : `TType` extends ``"eip2930"`` ? [`TransactionSerializedEIP2930`](internal_.md#transactionserializedeip2930) : `TType` extends ``"legacy"`` ? [`TransactionSerializedLegacy`](internal_.md#transactionserializedlegacy) : [`TransactionSerializedGeneric`](internal_.md#transactionserializedgeneric)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends [`TransactionType`](internal_.md#transactiontype) = ``"legacy"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:119

___

### TransactionSerializedEIP1559

Ƭ **TransactionSerializedEIP1559**: \`0x02$\{string}\`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:115

___

### TransactionSerializedEIP2930

Ƭ **TransactionSerializedEIP2930**: \`0x01$\{string}\`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:116

___

### TransactionSerializedGeneric

Ƭ **TransactionSerializedGeneric**: [`Hex`](internal_.md#hex)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:118

___

### TransactionSerializedLegacy

Ƭ **TransactionSerializedLegacy**: [`Hex`](internal_.md#hex)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:117

___

### TransactionType

Ƭ **TransactionType**: [`ValueOf`](internal_.md#valueof)\<typeof [`transactionType`](internal_.md#transactiontype-2)\> \| `string` & {}

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/transaction.d.ts:11

___

### TransactionType

Ƭ **TransactionType**: ``"0x0"`` \| ``"0x1"`` \| ``"0x2"`` \| `string` & {}

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/rpc.d.ts:10

___

### Transport

Ƭ **Transport**\<`TType`, `TRpcAttributes`, `TEIP1193RequestFn`\>: \<TChain\>(`{ chain, }`: \{ `chain?`: `TChain` ; `pollingInterval?`: [`ClientConfig`](internal_.md#clientconfig)[``"pollingInterval"``] ; `retryCount?`: [`TransportConfig`](internal_.md#transportconfig)[``"retryCount"``] ; `timeout?`: [`TransportConfig`](internal_.md#transportconfig)[``"timeout"``]  }) => \{ `config`: [`TransportConfig`](internal_.md#transportconfig)\<`TType`\> ; `request`: `TEIP1193RequestFn` ; `value?`: `TRpcAttributes`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `string` = `string` |
| `TRpcAttributes` | [`Record`](internal_.md#record)\<`string`, `any`\> |
| `TEIP1193RequestFn` | extends [`EIP1193RequestFn`](internal_.md#eip1193requestfn) = [`EIP1193RequestFn`](internal_.md#eip1193requestfn) |

#### Type declaration

▸ \<`TChain`\>(`{ chain, }`): `Object`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `{ chain, }` | `Object` |
| `{ chain, }.chain?` | `TChain` |
| `{ chain, }.pollingInterval?` | [`ClientConfig`](internal_.md#clientconfig)[``"pollingInterval"``] |
| `{ chain, }.retryCount?` | [`TransportConfig`](internal_.md#transportconfig)[``"retryCount"``] |
| `{ chain, }.timeout?` | [`TransportConfig`](internal_.md#transportconfig)[``"timeout"``] |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `config` | [`TransportConfig`](internal_.md#transportconfig)\<`TType`\> |
| `request` | `TEIP1193RequestFn` |
| `value?` | `TRpcAttributes` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/transports/createTransport.d.ts:21

___

### TransportConfig

Ƭ **TransportConfig**\<`TType`, `TEIP1193RequestFn`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `string` = `string` |
| `TEIP1193RequestFn` | extends [`EIP1193RequestFn`](internal_.md#eip1193requestfn) = [`EIP1193RequestFn`](internal_.md#eip1193requestfn) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the transport. |
| `name` | `string` | The name of the transport. |
| `request` | `TEIP1193RequestFn` | The JSON-RPC request function that matches the EIP-1193 request spec. |
| `retryCount?` | `number` | The max number of times to retry. |
| `retryDelay?` | `number` | The base delay (in ms) between retries. |
| `timeout?` | `number` | The timeout (in ms) for requests. |
| `type` | `TType` | The type of the transport. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/transports/createTransport.d.ts:5

___

### TriggerData

Ƭ **TriggerData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `triggerAboveThreshold` | `boolean` |
| `triggerPrice` | [`FixedNumber`](../classes/internal_.FixedNumber.md) |

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:89](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L89)

___

### Tuple

Ƭ **Tuple**\<`Type`, `Size`\>: `Size` extends `Size` ? `number` extends `Size` ? `Type`[] : [`_TupleOf`](internal_.md#_tupleof)\<`Type`, `Size`, []\> : `never`

Create tuple of Type type with Size size

**`Example`**

```ts
type Result = Tuple<string, 2>
//   ^? type Result = [string, string]
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Type` | `Type` | Type of tuple |
| `Size` | extends `number` | Size of tuple |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/types.d.ts:145

___

### TypedData

Ƭ **TypedData**: [`Pretty`](internal_.md#pretty)\<[`Record`](internal_.md#record)\<`string`, readonly [`TypedDataParameter`](internal_.md#typeddataparameter)[]\> & \{ [\_ in TypedDataType]?: never }\>

[EIP-712](https://eips.ethereum.org/EIPS/eip-712#definition-of-typed-structured-data-%F0%9D%95%8A) Typed Data Specification

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:134

___

### TypedDataDefinition

Ƭ **TypedDataDefinition**\<`TTypedData`, `TPrimaryType`\>: \{ `primaryType`: [`GetTypedDataPrimaryType`](internal_.md#gettypeddataprimarytype)\<`TTypedData`, `TPrimaryType`\>  } & [`GetTypedDataMessage`](internal_.md#gettypeddatamessage)\<`TTypedData`, `TPrimaryType`\> & [`GetTypedDataTypes`](internal_.md#gettypeddatatypes)\<`TTypedData`, `TPrimaryType`\> & [`GetTypedDataDomain`](internal_.md#gettypeddatadomain)\<`TTypedData`, `TPrimaryType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/typedData.d.ts:2

___

### TypedDataDomain

Ƭ **TypedDataDomain**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chainId?` | `number` |
| `name?` | `string` |
| `salt?` | [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"BytesType"``][``"outputs"``] |
| `verifyingContract?` | [`Address`](internal_.md#address) |
| `version?` | `string` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:119

___

### TypedDataParameter

Ƭ **TypedDataParameter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`TypedDataType`](internal_.md#typeddatatype) \| keyof [`TypedData`](internal_.md#typeddata) \| \`$\{keyof TypedData}[$\{string \| ""}]\` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:127

___

### TypedDataToPrimitiveTypes

Ƭ **TypedDataToPrimitiveTypes**\<`TTypedData`, `TAbiParameterKind`, `TKeyReferences`\>: \{ [K in keyof TTypedData]: \{ [K2 in TTypedData[K][number] as K2["name"]]: K2["type"] extends K ? Error\<\`Cannot convert self-referencing struct '$\{K2["type"]}' to primitive type.\`\> : K2["type"] extends keyof TTypedData ? K2["type"] extends keyof TKeyReferences ? Error\<\`Circular reference detected. '$\{K2["type"]}' is a circular reference.\`\> : TypedDataToPrimitiveTypes\<Exclude\<TTypedData, K\>, TAbiParameterKind, TKeyReferences & \{ [\_ in K2["type"] \| K]: true }\>[K2["type"]] : K2["type"] extends \`$\{infer TType extends keyof TTypedData & string}[$\{infer Tail}]\` ? AbiParameterToPrimitiveType\<Object, TAbiParameterKind\> : K2["type"] extends TypedDataType ? AbiParameterToPrimitiveType\<K2, TAbiParameterKind\> : Error\<\`Cannot convert unknown type '$\{K2["type"]}' to primitive type.\`\> } }

Converts TTypedData to corresponding TypeScript primitive types.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) | [TypedData](internal_.md#typeddata) to convert |
| `TAbiParameterKind` | extends [`AbiParameterKind`](internal_.md#abiparameterkind) = [`AbiParameterKind`](internal_.md#abiparameterkind) | Optional [AbiParameterKind](internal_.md#abiparameterkind) to narrow by parameter type |
| `TKeyReferences` | extends \{ `[_: string]`: `unknown`;  } \| `unknown` = `unknown` | - |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:203

___

### TypedDataType

Ƭ **TypedDataType**: [`Exclude`](internal_.md#exclude)\<[`AbiType`](internal_.md#abitype), [`SolidityFunction`](internal_.md#solidityfunction) \| [`SolidityTuple`](internal_.md#soliditytuple) \| [`SolidityArrayWithTuple`](internal_.md#solidityarraywithtuple) \| ``"int"`` \| ``"uint"``\>

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:126

___

### Uncle

Ƭ **Uncle**\<`TQuantity`, `TIncludeTransactions`, `TBlockTag`, `TTransaction`\>: [`Block`](internal_.md#block)\<`TQuantity`, `TIncludeTransactions`, `TBlockTag`, `TTransaction`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TQuantity` | `bigint` |
| `TIncludeTransactions` | extends `boolean` = `boolean` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = [`BlockTag`](internal_.md#blocktag) |
| `TTransaction` | [`Transaction`](internal_.md#transaction)\<`bigint`, `number`, `TBlockTag` extends ``"pending"`` ? ``true`` : ``false``\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/block.d.ts:66

___

### UninstallFilterParameters

Ƭ **UninstallFilterParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](internal_.md#filter)\<`any`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/uninstallFilter.d.ts:7

___

### UninstallFilterReturnType

Ƭ **UninstallFilterReturnType**: `boolean`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/uninstallFilter.d.ts:10

___

### UnionOmit

Ƭ **UnionOmit**\<`T`, `K`\>: `T` extends `any` ? [`Omit`](internal_.md#omit)\<`T`, `K`\> : `never`

**`Description`**

Construct a type with the properties of union type T except for those in type K.

**`Example`**

```ts
type Result = UnionOmit<{ a: string, b: number } | { a: string, b: undefined, c: number }, 'a'>
=> { b: number } | { b: undefined, c: number }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `any` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:141

___

### UnsignedTransaction

Ƭ **UnsignedTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | [`AccessListish`](internal_.md#accesslistish) |
| `chainId?` | `number` |
| `data?` | [`BytesLike`](internal_.md#byteslike-1) |
| `gasLimit?` | [`BigNumberish`](internal_.md#bignumberish-1) |
| `gasPrice?` | [`BigNumberish`](internal_.md#bignumberish-1) |
| `maxFeePerGas?` | [`BigNumberish`](internal_.md#bignumberish-1) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](internal_.md#bignumberish-1) |
| `nonce?` | `number` |
| `to?` | `string` |
| `type?` | `number` \| ``null`` |
| `value?` | [`BigNumberish`](internal_.md#bignumberish-1) |

#### Defined in

node_modules/.pnpm/@ethersproject+transactions@5.7.0/node_modules/@ethersproject/transactions/lib/index.d.ts:13

___

### UpdateOrder

Ƭ **UpdateOrder**: [`OrderData`](internal_.md#orderdata) & [`OrderIdentifier`](internal_.md#orderidentifier) & \{ `orderType`: [`OrderType`](internal_.md#ordertype)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:120](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L120)

___

### UpdatePositionMarginData

Ƭ **UpdatePositionMarginData**: [`CollateralData`](internal_.md#collateraldata) & \{ `isDeposit`: `boolean` ; `margin`: [`AmountInfo`](internal_.md#amountinfo)  }

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:198](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/interfaces/V1/IRouterAdapterBaseV1.ts#L198)

___

### ValueOf

Ƭ **ValueOf**\<`T`\>: `T`[keyof `T`]

**`Description`**

Creates a type that extracts the values of T.

**`Example`**

```ts
ValueOf<{ a: string, b: number }>
=> string | number
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/utils.d.ts:186

___

### VerifyHashParameters

Ƭ **VerifyHashParameters**: [`Pick`](internal_.md#pick)\<[`CallParameters`](internal_.md#callparameters), ``"blockNumber"`` \| ``"blockTag"``\> & \{ `address`: [`Address`](internal_.md#address) ; `hash`: [`Hex`](internal_.md#hex) ; `signature`: [`Hex`](internal_.md#hex) \| [`ByteArray`](internal_.md#bytearray)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/verifyHash.d.ts:12

___

### VerifyMessageParameters

Ƭ **VerifyMessageParameters**: [`Omit`](internal_.md#omit)\<[`VerifyHashParameters`](internal_.md#verifyhashparameters), ``"hash"``\> & \{ `address`: [`Address`](internal_.md#address) ; `message`: [`SignableMessage`](internal_.md#signablemessage) ; `signature`: [`Hex`](internal_.md#hex) \| [`ByteArray`](internal_.md#bytearray)  }

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/verifyMessage.d.ts:9

___

### VerifyMessageReturnType

Ƭ **VerifyMessageReturnType**: `boolean`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/verifyMessage.d.ts:17

___

### VerifyTypedDataParameters

Ƭ **VerifyTypedDataParameters**\<`TTypedData`, `TPrimaryType`\>: [`Omit`](internal_.md#omit)\<[`VerifyHashParameters`](internal_.md#verifyhashparameters), ``"hash"``\> & [`TypedDataDefinition`](internal_.md#typeddatadefinition)\<`TTypedData`, `TPrimaryType`\> & \{ `address`: [`Address`](internal_.md#address) ; `signature`: [`Hex`](internal_.md#hex) \| [`ByteArray`](internal_.md#bytearray)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) \| \{ `[key: string]`: `unknown`;  } = [`TypedData`](internal_.md#typeddata) |
| `TPrimaryType` | extends `string` = `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/verifyTypedData.d.ts:10

___

### VerifyTypedDataReturnType

Ƭ **VerifyTypedDataReturnType**: `boolean`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/verifyTypedData.d.ts:18

___

### WaitForTransactionReceiptParameters

Ƭ **WaitForTransactionReceiptParameters**\<`TChain`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmations?` | `number` | The number of confirmations (blocks that have passed) to wait before resolving. **`Default`** ```ts 1 ``` |
| `hash` | [`Hash`](internal_.md#hash) | The hash of the transaction. |
| `onReplaced?` | (`response`: [`ReplacementReturnType`](internal_.md#replacementreturntype)\<`TChain`\>) => `void` | Optional callback to emit if the transaction has been replaced. |
| `pollingInterval?` | `number` | Polling frequency (in ms). Defaults to the client's pollingInterval config. **`Default`** ```ts client.pollingInterval ``` |
| `timeout?` | `number` | Optional timeout (in milliseconds) to wait before stopping polling. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/waitForTransactionReceipt.d.ts:20

___

### WaitForTransactionReceiptReturnType

Ƭ **WaitForTransactionReceiptReturnType**\<`TChain`\>: [`GetTransactionReceiptReturnType`](internal_.md#gettransactionreceiptreturntype)\<`TChain`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/waitForTransactionReceipt.d.ts:19

___

### WalletActions

Ƭ **WalletActions**\<`TChain`, `TAccount`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addChain` | (`args`: [`AddChainParameters`](internal_.md#addchainparameters)) => `Promise`\<`void`\> |
| `deployContract` | \<TAbi, TChainOverride\>(`args`: [`DeployContractParameters`](internal_.md#deploycontractparameters)\<`TAbi`, `TChain`, `TAccount`, `TChainOverride`\>) => `Promise`\<[`DeployContractReturnType`](internal_.md#deploycontractreturntype)\> |
| `getAddresses` | () => `Promise`\<[`GetAddressesReturnType`](internal_.md#getaddressesreturntype)\> |
| `getChainId` | () => `Promise`\<[`GetChainIdReturnType`](internal_.md#getchainidreturntype)\> |
| `getPermissions` | () => `Promise`\<[`GetPermissionsReturnType`](internal_.md#getpermissionsreturntype)\> |
| `prepareTransactionRequest` | \<TChainOverride\>(`args`: [`PrepareTransactionRequestParameters`](internal_.md#preparetransactionrequestparameters)\<`TChain`, `TAccount`, `TChainOverride`\>) => `Promise`\<[`PrepareTransactionRequestReturnType`](internal_.md#preparetransactionrequestreturntype)\> |
| `requestAddresses` | () => `Promise`\<[`RequestAddressesReturnType`](internal_.md#requestaddressesreturntype)\> |
| `requestPermissions` | (`args`: [`RequestPermissionsParameters`](internal_.md#requestpermissionsparameters)) => `Promise`\<[`RequestPermissionsReturnType`](internal_.md#requestpermissionsreturntype)\> |
| `sendRawTransaction` | (`args`: [`SendRawTransactionParameters`](internal_.md#sendrawtransactionparameters)) => `Promise`\<[`SendRawTransactionReturnType`](internal_.md#sendrawtransactionreturntype)\> |
| `sendTransaction` | \<TChainOverride\>(`args`: [`SendTransactionParameters`](internal_.md#sendtransactionparameters)\<`TChain`, `TAccount`, `TChainOverride`\>) => `Promise`\<[`SendTransactionReturnType`](internal_.md#sendtransactionreturntype)\> |
| `signMessage` | (`args`: [`SignMessageParameters`](internal_.md#signmessageparameters)\<`TAccount`\>) => `Promise`\<[`SignMessageReturnType`](internal_.md#signmessagereturntype)\> |
| `signTransaction` | \<TChainOverride\>(`args`: [`SignTransactionParameters`](internal_.md#signtransactionparameters)\<`TChain`, `TAccount`, `TChainOverride`\>) => `Promise`\<[`SignTransactionReturnType`](internal_.md#signtransactionreturntype)\> |
| `signTypedData` | \<TTypedData, TPrimaryType\>(`args`: [`SignTypedDataParameters`](internal_.md#signtypeddataparameters)\<`TTypedData`, `TPrimaryType`, `TAccount`\>) => `Promise`\<[`SignTypedDataReturnType`](internal_.md#signtypeddatareturntype)\> |
| `switchChain` | (`args`: [`SwitchChainParameters`](internal_.md#switchchainparameters)) => `Promise`\<`void`\> |
| `watchAsset` | (`args`: [`WatchAssetParameters`](internal_.md#watchassetparameters)) => `Promise`\<[`WatchAssetReturnType`](internal_.md#watchassetreturntype)\> |
| `writeContract` | \<TAbi, TFunctionName, TChainOverride\>(`args`: [`WriteContractParameters`](internal_.md#writecontractparameters)\<`TAbi`, `TFunctionName`, `TChain`, `TAccount`, `TChainOverride`\>) => `Promise`\<[`WriteContractReturnType`](internal_.md#writecontractreturntype)\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/clients/decorators/wallet.d.ts:22

___

### WalletPermission

Ƭ **WalletPermission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `caveats` | [`WalletPermissionCaveat`](internal_.md#walletpermissioncaveat)[] |
| `date` | `number` |
| `id` | `string` |
| `invoker` | \`http://$\{string}\` \| \`https://$\{string}\` |
| `parentCapability` | ``"eth_accounts"`` \| `string` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:63

___

### WalletPermissionCaveat

Ƭ **WalletPermissionCaveat**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `value` | `any` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:59

___

### WalletRpcSchema

Ƭ **WalletRpcSchema**: [\{ `Method`: ``"eth_accounts"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Address`](internal_.md#address)[]  }, \{ `Method`: ``"eth_chainId"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_estimateGas"`` ; `Parameters`: [transaction: RpcTransactionRequest] \| [transaction: RpcTransactionRequest, block: RpcBlockNumber \| BlockTag] ; `ReturnType`: [`Quantity`](internal_.md#quantity)  }, \{ `Method`: ``"eth_requestAccounts"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`Address`](internal_.md#address)[]  }, \{ `Method`: ``"eth_sendTransaction"`` ; `Parameters`: [transaction: RpcTransactionRequest] ; `ReturnType`: [`Hash`](internal_.md#hash)  }, \{ `Method`: ``"eth_sendRawTransaction"`` ; `Parameters`: [signedTransaction: Hex] ; `ReturnType`: [`Hash`](internal_.md#hash)  }, \{ `Method`: ``"eth_sign"`` ; `Parameters`: [address: Address, data: Hex] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"eth_signTransaction"`` ; `Parameters`: [request: RpcTransactionRequest] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"eth_signTypedData_v4"`` ; `Parameters`: [address: Address, message: string] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"eth_syncing"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`NetworkSync`](internal_.md#networksync) \| ``false``  }, \{ `Method`: ``"personal_sign"`` ; `Parameters`: [data: Hex, address: Address] ; `ReturnType`: [`Hex`](internal_.md#hex)  }, \{ `Method`: ``"wallet_addEthereumChain"`` ; `Parameters`: [chain: AddEthereumChainParameter] ; `ReturnType`: ``null``  }, \{ `Method`: ``"wallet_getPermissions"`` ; `Parameters?`: `undefined` ; `ReturnType`: [`WalletPermission`](internal_.md#walletpermission)[]  }, \{ `Method`: ``"wallet_requestPermissions"`` ; `Parameters`: [permissions: Object] ; `ReturnType`: [`WalletPermission`](internal_.md#walletpermission)[]  }, \{ `Method`: ``"wallet_switchEthereumChain"`` ; `Parameters`: [chain: Object] ; `ReturnType`: ``null``  }, \{ `Method`: ``"wallet_watchAsset"`` ; `Parameters`: [`WatchAssetParams`](internal_.md#watchassetparams) ; `ReturnType`: `boolean`  }]

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:1011

___

### WatchAssetParameters

Ƭ **WatchAssetParameters**: [`WatchAssetParams`](internal_.md#watchassetparams)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/watchAsset.d.ts:8

___

### WatchAssetParams

Ƭ **WatchAssetParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | \{ `address`: `string` ; `decimals`: `number` ; `image?`: `string` ; `symbol`: `string`  } | - |
| `options.address` | `string` | The address of the token contract |
| `options.decimals` | `number` | The number of token decimals |
| `options.image?` | `string` | A string url of the token logo |
| `options.symbol` | `string` | A ticker symbol or shorthand, up to 11 characters |
| `type` | ``"ERC20"`` | Token type. |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/eip1193.d.ts:70

___

### WatchAssetReturnType

Ƭ **WatchAssetReturnType**: `boolean`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/watchAsset.d.ts:9

___

### WatchBlockNumberParameters

Ƭ **WatchBlockNumberParameters**\<`TTransport`\>: \{ `onBlockNumber`: [`OnBlockNumberFn`](internal_.md#onblocknumberfn) ; `onError?`: (`error`: `Error`) => `void`  } & [`GetTransportConfig`](internal_.md#gettransportconfig)\<`TTransport`\>[``"type"``] extends ``"webSocket"`` ? \{ `emitMissed?`: `never` ; `emitOnBegin?`: `never` ; `poll?`: ``false`` ; `pollingInterval?`: `never`  } \| [`PollOptions`](internal_.md#polloptions) & \{ `poll`: ``true``  } : [`PollOptions`](internal_.md#polloptions) & \{ `poll?`: ``true``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlockNumber.d.ts:18

___

### WatchBlockNumberReturnType

Ƭ **WatchBlockNumberReturnType**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlockNumber.d.ts:34

___

### WatchBlocksParameters

Ƭ **WatchBlocksParameters**\<`TTransport`, `TChain`, `TIncludeTransactions`, `TBlockTag`\>: \{ `onBlock`: [`OnBlock`](internal_.md#onblock)\<`TChain`, `TIncludeTransactions`, `TBlockTag`\> ; `onError?`: (`error`: `Error`) => `void`  } & [`GetTransportConfig`](internal_.md#gettransportconfig)\<`TTransport`\>[``"type"``] extends ``"webSocket"`` ? \{ `blockTag?`: `never` ; `emitMissed?`: `never` ; `emitOnBegin?`: `never` ; `includeTransactions?`: `never` ; `poll?`: ``false`` ; `pollingInterval?`: `never`  } \| [`PollOptions`](internal_.md#polloptions-1)\<`TIncludeTransactions`, `TBlockTag`\> & \{ `poll?`: ``true``  } : [`PollOptions`](internal_.md#polloptions-1)\<`TIncludeTransactions`, `TBlockTag`\> & \{ `poll?`: ``true``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |
| `TIncludeTransactions` | extends `boolean` = ``false`` |
| `TBlockTag` | extends [`BlockTag`](internal_.md#blocktag) = ``"latest"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlocks.d.ts:24

___

### WatchBlocksReturnType

Ƭ **WatchBlocksReturnType**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchBlocks.d.ts:42

___

### WatchContractEventOnLogsFn

Ƭ **WatchContractEventOnLogsFn**\<`TAbi`, `TEventName`, `TStrict`\>: (`logs`: [`WatchContractEventOnLogsParameter`](internal_.md#watchcontracteventonlogsparameter)\<`TAbi`, `TEventName`, `TStrict`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = readonly `unknown`[] |
| `TEventName` | extends `string` = `string` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |

#### Type declaration

▸ (`logs`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `logs` | [`WatchContractEventOnLogsParameter`](internal_.md#watchcontracteventonlogsparameter)\<`TAbi`, `TEventName`, `TStrict`\> |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchContractEvent.d.ts:24

___

### WatchContractEventOnLogsParameter

Ƭ **WatchContractEventOnLogsParameter**\<`TAbi`, `TEventName`, `TStrict`\>: `TAbi` extends [`Abi`](internal_.md#abi) ? [`Log`](internal_.md#log)\<`bigint`, `number`, ``false``, [`ExtractAbiEvent`](internal_.md#extractabievent)\<`TAbi`, `TEventName`\>, `TStrict`\>[] : [`Log`](internal_.md#log)[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = readonly `unknown`[] |
| `TEventName` | extends `string` = `string` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchContractEvent.d.ts:23

___

### WatchContractEventParameters

Ƭ **WatchContractEventParameters**\<`TAbi`, `TEventName`, `TStrict`\>: \{ `abi`: `TAbi` ; `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[] ; `args?`: [`GetEventArgs`](internal_.md#geteventargs)\<`TAbi`, `TEventName`\> ; `eventName?`: [`InferEventName`](internal_.md#infereventname)\<`TAbi`, `TEventName`\> ; `onError?`: (`error`: `Error`) => `void` ; `onLogs`: [`WatchContractEventOnLogsFn`](internal_.md#watchcontracteventonlogsfn)\<`TAbi`, `TEventName`, `TStrict`\> ; `strict?`: `TStrict`  } & [`GetTransportConfig`](internal_.md#gettransportconfig)\<[`Transport`](internal_.md#transport)\>[``"type"``] extends ``"webSocket"`` ? \{ `batch?`: `never` ; `poll?`: ``false`` ; `pollingInterval?`: `never`  } \| [`PollOptions`](internal_.md#polloptions-2) & \{ `poll?`: ``true``  } : [`PollOptions`](internal_.md#polloptions-2) & \{ `poll?`: ``true``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = readonly `unknown`[] |
| `TEventName` | extends `string` = `string` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchContractEvent.d.ts:25

___

### WatchContractEventReturnType

Ƭ **WatchContractEventReturnType**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchContractEvent.d.ts:59

___

### WatchEventOnLogsFn

Ƭ **WatchEventOnLogsFn**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `_EventName`\>: (`logs`: [`WatchEventOnLogsParameter`](internal_.md#watcheventonlogsparameter)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `_EventName`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `_EventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |

#### Type declaration

▸ (`logs`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `logs` | [`WatchEventOnLogsParameter`](internal_.md#watcheventonlogsparameter)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `_EventName`\> |

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchEvent.d.ts:24

___

### WatchEventOnLogsParameter

Ƭ **WatchEventOnLogsParameter**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TEventName`\>: [`Log`](internal_.md#log)\<`bigint`, `number`, ``false``, `TAbiEvent`, `TStrict`, `TAbiEvents`, `TEventName`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `TEventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchEvent.d.ts:23

___

### WatchEventParameters

Ƭ **WatchEventParameters**\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `_EventName`\>: \{ `address?`: [`Address`](internal_.md#address) \| [`Address`](internal_.md#address)[] ; `onError?`: (`error`: `Error`) => `void` ; `onLogs`: [`WatchEventOnLogsFn`](internal_.md#watcheventonlogsfn)\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `_EventName`\>  } & [`GetTransportConfig`](internal_.md#gettransportconfig)\<[`Transport`](internal_.md#transport)\>[``"type"``] extends ``"webSocket"`` ? \{ `batch?`: `never` ; `poll?`: ``false`` ; `pollingInterval?`: `never`  } \| [`PollOptions`](internal_.md#polloptions-3) & \{ `poll?`: ``true``  } : [`PollOptions`](internal_.md#polloptions-3) & \{ `poll?`: ``true``  } & \{ `args?`: [`MaybeExtractEventArgsFromAbi`](internal_.md#maybeextracteventargsfromabi)\<`TAbiEvents`, `_EventName`\> ; `event`: `TAbiEvent` ; `events?`: `never` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `never` ; `events?`: `TAbiEvents` ; `strict?`: `TStrict`  } \| \{ `args?`: `never` ; `event?`: `never` ; `events?`: `never` ; `strict?`: `never`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiEvent` | extends [`AbiEvent`](internal_.md#abievent) \| `undefined` = `undefined` |
| `TAbiEvents` | extends readonly [`AbiEvent`](internal_.md#abievent)[] \| readonly `unknown`[] \| `undefined` = `TAbiEvent` extends [`AbiEvent`](internal_.md#abievent) ? [`TAbiEvent`] : `undefined` |
| `TStrict` | extends `boolean` \| `undefined` = `undefined` |
| `_EventName` | extends `string` \| `undefined` = [`MaybeAbiEventName`](internal_.md#maybeabieventname)\<`TAbiEvent`\> |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchEvent.d.ts:25

___

### WatchEventReturnType

Ƭ **WatchEventReturnType**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchEvent.d.ts:72

___

### WatchPendingTransactionsParameters

Ƭ **WatchPendingTransactionsParameters**\<`TTransport`\>: \{ `onError?`: (`error`: `Error`) => `void` ; `onTransactions`: [`OnTransactionsFn`](internal_.md#ontransactionsfn)  } & [`GetTransportConfig`](internal_.md#gettransportconfig)\<`TTransport`\>[``"type"``] extends ``"webSocket"`` ? \{ `batch?`: `never` ; `poll?`: ``false`` ; `pollingInterval?`: `never`  } \| [`PollOptions`](internal_.md#polloptions-4) & \{ `poll?`: ``true``  } : [`PollOptions`](internal_.md#polloptions-4) & \{ `poll?`: ``true``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransport` | extends [`Transport`](internal_.md#transport) = [`Transport`](internal_.md#transport) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchPendingTransactions.d.ts:23

___

### WatchPendingTransactionsReturnType

Ƭ **WatchPendingTransactionsReturnType**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/public/watchPendingTransactions.d.ts:45

___

### Withdrawal

Ƭ **Withdrawal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | [`Hex`](internal_.md#hex) |
| `amount` | [`Hex`](internal_.md#hex) |
| `index` | [`Hex`](internal_.md#hex) |
| `validatorIndex` | [`Hex`](internal_.md#hex) |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/withdrawal.d.ts:2

___

### WriteContractParameters

Ƭ **WriteContractParameters**\<`TAbi`, `TFunctionName`, `TChain`, `TAccount`, `TChainOverride`\>: [`ContractFunctionConfig`](internal_.md#contractfunctionconfig)\<`TAbi`, `TFunctionName`, ``"payable"`` \| ``"nonpayable"``\> & [`GetAccountParameter`](internal_.md#getaccountparameter)\<`TAccount`\> & [`GetChain`](internal_.md#getchain)\<`TChain`, `TChainOverride`\> & [`UnionOmit`](internal_.md#unionomit)\<[`FormattedTransactionRequest`](internal_.md#formattedtransactionrequest)\<`TChainOverride` extends [`Chain`](internal_.md#chain) ? `TChainOverride` : `TChain`\>, ``"from"`` \| ``"to"`` \| ``"data"`` \| ``"value"``\> & [`GetValue`](internal_.md#getvalue)\<`TAbi`, `TFunctionName`, [`SendTransactionParameters`](internal_.md#sendtransactionparameters)\<`TChain`, `TAccount`, `TChainOverride`\> extends [`SendTransactionParameters`](internal_.md#sendtransactionparameters) ? [`SendTransactionParameters`](internal_.md#sendtransactionparameters)\<`TChain`, `TAccount`, `TChainOverride`\>[``"value"``] : [`SendTransactionParameters`](internal_.md#sendtransactionparameters)[``"value"``]\> & \{ `dataSuffix?`: [`Hex`](internal_.md#hex)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbi` | extends [`Abi`](internal_.md#abi) \| readonly `unknown`[] = [`Abi`](internal_.md#abi) |
| `TFunctionName` | extends `string` = `string` |
| `TChain` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) |
| `TAccount` | extends [`Account`](internal_.md#account) \| `undefined` = [`Account`](internal_.md#account) \| `undefined` |
| `TChainOverride` | extends [`Chain`](internal_.md#chain) \| `undefined` = [`Chain`](internal_.md#chain) \| `undefined` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/writeContract.d.ts:15

___

### WriteContractReturnType

Ƭ **WriteContractReturnType**: [`SendTransactionReturnType`](internal_.md#sendtransactionreturntype)

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/actions/wallet/writeContract.d.ts:19

___

### \_BuildArrayTypes

Ƭ **\_BuildArrayTypes**\<`T`, `Depth`\>: [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"ArrayMaxDepth"``] extends ``false`` ? \`$\{T}[$\{string}]\` : `Depth`[``"length"``] extends [`ResolvedConfig`](../interfaces/internal_.ResolvedConfig.md)[``"ArrayMaxDepth"``] ? `T` : `T` extends \`$\{any}[$\{SolidityFixedArrayRange \| ""}]\` ? [`_BuildArrayTypes`](internal_.md#_buildarraytypes)\<`T` \| \`$\{T}[$\{SolidityFixedArrayRange \| ""}]\`, [...Depth, ``1``]\> : [`_BuildArrayTypes`](internal_.md#_buildarraytypes)\<\`$\{T}[$\{SolidityFixedArrayRange \| ""}]\`, [...Depth, ``1``]\>

Recursively build arrays up to maximum depth
or use a more broad type when maximum depth is switched "off"

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `Depth` | extends readonly `number`[] = [] |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/abi.d.ts:21

___

### \_FixedFormat

Ƭ **\_FixedFormat**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | `number` |
| `name` | `string` |
| `signed` | `boolean` |
| `width` | `number` |

#### Defined in

[src/common/fixedNumber.ts:130](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/583c661/src/common/fixedNumber.ts#L130)

___

### \_HasUnnamedAbiParameter

Ƭ **\_HasUnnamedAbiParameter**\<`TAbiParameters`\>: `TAbiParameters` extends readonly [infer Head, ...(infer Tail extends readonly AbiParameter[])] ? `Head` extends \{ `name`: `string`  } ? `Head`[``"name"``] extends ``""`` ? ``true`` : [`_HasUnnamedAbiParameter`](internal_.md#_hasunnamedabiparameter)\<`Tail`\> : ``true`` : ``false``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiParameters` | extends readonly [`AbiParameter`](internal_.md#abiparameter)[] |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/types/contract.d.ts:103

___

### \_HasUnnamedAbiParameter

Ƭ **\_HasUnnamedAbiParameter**\<`TAbiParameters`\>: `TAbiParameters` extends readonly [infer Head, ...(infer Tail extends readonly AbiParameter[])] ? `Head` extends \{ `name`: `string`  } ? `Head`[``"name"``] extends ``""`` ? ``true`` : [`_HasUnnamedAbiParameter`](internal_.md#_hasunnamedabiparameter-1)\<`Tail`\> : ``true`` : ``false``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAbiParameters` | extends readonly [`AbiParameter`](internal_.md#abiparameter)[] |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:78

___

### \_TupleOf

Ƭ **\_TupleOf**\<`TNumber`, `TSize`, `R`\>: `R`[``"length"``] extends `TSize` ? `R` : [`_TupleOf`](internal_.md#_tupleof)\<`TNumber`, `TSize`, readonly [`TNumber`, ...R]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNumber` | `TNumber` |
| `TSize` | extends `number` |
| `R` | extends readonly `unknown`[] |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/types.d.ts:146

___

### \_TypedDataParametersToAbiParameters

Ƭ **\_TypedDataParametersToAbiParameters**\<`TTypedDataParameters`, `TTypedData`, `TKeyReferences`\>: \{ [K in keyof TTypedDataParameters]: TTypedDataParameters[K] extends infer TTypedDataParameter extends Object ? TTypedDataParameter["type"] extends keyof TTypedData & string ? Object : TTypedDataParameter["type"] extends \`$\{infer TType extends keyof TTypedData & string}[$\{infer Tail}]\` ? Object : TTypedDataParameter : never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTypedDataParameters` | extends readonly [`TypedDataParameter`](internal_.md#typeddataparameter)[] |
| `TTypedData` | extends [`TypedData`](internal_.md#typeddata) |
| `TKeyReferences` | extends \{ `[_: string]`: `unknown`;  } \| `unknown` = `unknown` |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/utils.d.ts:218

## Variables

### transactionType

• `Const` **transactionType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0x0` | ``"legacy"`` |
| `0x1` | ``"eip2930"`` |
| `0x2` | ``"eip1559"`` |

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/formatters/transaction.d.ts:17

## Functions

### Boolean

▸ **Boolean**\<`T`\>(`value?`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `T` |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.1.6/node_modules/typescript/lib/lib.es5.d.ts:553

___

### serializeTransaction

▸ **serializeTransaction**\<`TTransactionSerializable`\>(`transaction`, `signature?`): [`SerializedTransactionReturnType`](internal_.md#serializedtransactionreturntype)\<`TTransactionSerializable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TTransactionSerializable` | extends [`TransactionSerializable`](internal_.md#transactionserializable) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `TTransactionSerializable` |
| `signature?` | [`Signature`](internal_.md#signature) |

#### Returns

[`SerializedTransactionReturnType`](internal_.md#serializedtransactionreturntype)\<`TTransactionSerializable`\>

#### Defined in

node_modules/.pnpm/viem@1.18.1_typescript@5.1.6/node_modules/viem/_types/utils/transaction/serializeTransaction.d.ts:14
