[perp-aggregator-sdk](../README.md) / [Exports](../modules.md) / IRouterV1

# Interface: IRouterV1

## Hierarchy

- [`IRouterAdapterBaseV1`](internal_.IRouterAdapterBaseV1.md)

  ↳ **`IRouterV1`**

## Table of contents

### Methods

- [cancelOrder](IRouterV1.md#cancelorder)
- [claimFunding](IRouterV1.md#claimfunding)
- [closePosition](IRouterV1.md#closeposition)
- [getAllOrders](IRouterV1.md#getallorders)
- [getAllOrdersForPosition](IRouterV1.md#getallordersforposition)
- [getAllPositions](IRouterV1.md#getallpositions)
- [getClaimHistory](IRouterV1.md#getclaimhistory)
- [getCloseTradePreview](IRouterV1.md#getclosetradepreview)
- [getDynamicMarketMetadata](IRouterV1.md#getdynamicmarketmetadata)
- [getIdleMargins](IRouterV1.md#getidlemargins)
- [getLiquidationHistory](IRouterV1.md#getliquidationhistory)
- [getMarketPrices](IRouterV1.md#getmarketprices)
- [getMarketsInfo](IRouterV1.md#getmarketsinfo)
- [getOpenTradePreview](IRouterV1.md#getopentradepreview)
- [getTotalAccuredFunding](IRouterV1.md#gettotalaccuredfunding)
- [getTotalClaimableFunding](IRouterV1.md#gettotalclaimablefunding)
- [getTradesHistory](IRouterV1.md#gettradeshistory)
- [getUpdateMarginPreview](IRouterV1.md#getupdatemarginpreview)
- [increasePosition](IRouterV1.md#increaseposition)
- [supportedChains](IRouterV1.md#supportedchains)
- [supportedMarkets](IRouterV1.md#supportedmarkets)
- [supportedProtocols](IRouterV1.md#supportedprotocols)
- [updateOrder](IRouterV1.md#updateorder)
- [updatePositionMargin](IRouterV1.md#updatepositionmargin)

## Methods

### cancelOrder

▸ **cancelOrder**(`orderData`, `wallet`, `opts?`): `Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

Retrieve cancel order transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderData` | [`CancelOrder`](../modules/internal_.md#cancelorder)[] | Array of order data for cancelling multiple orders |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

array of cancel order transactions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[cancelOrder](internal_.IRouterAdapterBaseV1.md#cancelorder)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:312](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L312)

___

### claimFunding

▸ **claimFunding**(`wallet`, `opts?`): `Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

Retrieve claim funding transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

array of claim funding transactions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[claimFunding](internal_.IRouterAdapterBaseV1.md#claimfunding)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:350](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L350)

___

### closePosition

▸ **closePosition**(`positionInfo`, `closePositionData`, `wallet`, `opts?`): `Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

Retrieve close position transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionInfo` | [`PositionInfo`](../modules/internal_.md#positioninfo)[] | Array of existing position info |
| `closePositionData` | [`ClosePositionData`](../modules/internal_.md#closepositiondata)[] | Array of close position data |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

array of close position transactions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[closePosition](internal_.IRouterAdapterBaseV1.md#closeposition)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:322](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L322)

___

### getAllOrders

▸ **getAllOrders**(`wallet`, `pageOptions`, `opts?`): `Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`OrderInfo`](../modules/internal_.md#orderinfo)\>\>

Retrieve all orders for a wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `pageOptions` | `undefined` \| [`PageOptions`](../modules/internal_.md#pageoptions) | Pagination options |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`OrderInfo`](../modules/internal_.md#orderinfo)\>\>

paginated result of orders

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getAllOrders](internal_.IRouterAdapterBaseV1.md#getallorders)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:382](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L382)

___

### getAllOrdersForPosition

▸ **getAllOrdersForPosition**(`wallet`, `positionInfo`, `pageOptions`, `opts?`): `Promise`\<[`Record`](../modules/internal_.md#record)\<`string`, [`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`OrderInfo`](../modules/internal_.md#orderinfo)\>\>\>

Retrieve all orders for a position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `positionInfo` | [`PositionInfo`](../modules/internal_.md#positioninfo)[] | Array of existing position info |
| `pageOptions` | `undefined` \| [`PageOptions`](../modules/internal_.md#pageoptions) | Pagination options |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`Record`](../modules/internal_.md#record)\<`string`, [`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`OrderInfo`](../modules/internal_.md#orderinfo)\>\>\>

Record of paginated result of orders for each position

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getAllOrdersForPosition](internal_.IRouterAdapterBaseV1.md#getallordersforposition)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:392](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L392)

___

### getAllPositions

▸ **getAllPositions**(`wallet`, `pageOptions`, `opts?`): `Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`PositionInfo`](../modules/internal_.md#positioninfo)\>\>

Retrieve all open positions for a wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `pageOptions` | `undefined` \| [`PageOptions`](../modules/internal_.md#pageoptions) | Pagination options |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`PositionInfo`](../modules/internal_.md#positioninfo)\>\>

paginated result of open positions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getAllPositions](internal_.IRouterAdapterBaseV1.md#getallpositions)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:369](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L369)

___

### getClaimHistory

▸ **getClaimHistory**(`wallet`, `pageOptions`, `opts?`): `Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`ClaimInfo`](../modules/internal_.md#claiminfo)\>\>

Retrieve all funding fee claims for a wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `pageOptions` | `undefined` \| [`PageOptions`](../modules/internal_.md#pageoptions) | Pagination options |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`ClaimInfo`](../modules/internal_.md#claiminfo)\>\>

paginated result of claims

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getClaimHistory](internal_.IRouterAdapterBaseV1.md#getclaimhistory)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:432](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L432)

___

### getCloseTradePreview

▸ **getCloseTradePreview**(`wallet`, `positionInfo`, `closePositionData`, `opts?`): `Promise`\<[`CloseTradePreviewInfo`](../modules/internal_.md#closetradepreviewinfo)[]\>

Retrieve simulatied previews for close position orders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `positionInfo` | [`PositionInfo`](../modules/internal_.md#positioninfo)[] | Array of existing position info |
| `closePositionData` | [`ClosePositionData`](../modules/internal_.md#closepositiondata)[] | Array of close position data |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`CloseTradePreviewInfo`](../modules/internal_.md#closetradepreviewinfo)[]\>

array of simulated previews

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getCloseTradePreview](internal_.IRouterAdapterBaseV1.md#getclosetradepreview)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:461](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L461)

___

### getDynamicMarketMetadata

▸ **getDynamicMarketMetadata**(`marketIds`, `opts?`): `Promise`\<[`DynamicMarketMetadata`](../modules/internal_.md#dynamicmarketmetadata)[]\>

Retrive dynamic market metadata for given marketIds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketIds` | `string`[] | array of marketIds |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`DynamicMarketMetadata`](../modules/internal_.md#dynamicmarketmetadata)[]\>

array of dynamic market metadata

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getDynamicMarketMetadata](internal_.IRouterAdapterBaseV1.md#getdynamicmarketmetadata)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:283](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L283)

___

### getIdleMargins

▸ **getIdleMargins**(`wallet`, `opts?`): `Promise`\<[`IdleMarginInfo`](../modules/internal_.md#idlemargininfo)[]\>

Retrieve idle margins (collateral that is not being used for any position) for the given wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`IdleMarginInfo`](../modules/internal_.md#idlemargininfo)[]\>

array of idle margins

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getIdleMargins](internal_.IRouterAdapterBaseV1.md#getidlemargins)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:360](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L360)

___

### getLiquidationHistory

▸ **getLiquidationHistory**(`wallet`, `pageOptions`, `opts?`): `Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`LiquidationInfo`](../modules/internal_.md#liquidationinfo)\>\>

Retrieve all liquidations for a wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `pageOptions` | `undefined` \| [`PageOptions`](../modules/internal_.md#pageoptions) | Pagination options |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`LiquidationInfo`](../modules/internal_.md#liquidationinfo)\>\>

paginated result of liquidations

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getLiquidationHistory](internal_.IRouterAdapterBaseV1.md#getliquidationhistory)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:419](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L419)

___

### getMarketPrices

▸ **getMarketPrices**(`marketIds`, `opts?`): `Promise`\<[`FixedNumber`](../classes/internal_.FixedNumber.md)[]\>

Retrieve market prices for the market

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketIds` | `string`[] | array of marketIds |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`FixedNumber`](../classes/internal_.FixedNumber.md)[]\>

array of market prices

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getMarketPrices](internal_.IRouterAdapterBaseV1.md#getmarketprices)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:267](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L267)

___

### getMarketsInfo

▸ **getMarketsInfo**(`marketIds`, `opts?`): `Promise`\<[`MarketInfo`](../modules/internal_.md#marketinfo)[]\>

Retrieve market info for given marketIds

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `marketIds` | `string`[] | array of marketIds |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`MarketInfo`](../modules/internal_.md#marketinfo)[]\>

array of market info

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getMarketsInfo](internal_.IRouterAdapterBaseV1.md#getmarketsinfo)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:275](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L275)

___

### getOpenTradePreview

▸ **getOpenTradePreview**(`wallet`, `orderData`, `existingPos`, `opts?`): `Promise`\<[`OpenTradePreviewInfo`](../modules/internal_.md#opentradepreviewinfo)[]\>

Retrieve simulatied previews for create position orders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `orderData` | [`CreateOrder`](../modules/internal_.md#createorder)[] | Array of order data for creating multiple positions |
| `existingPos` | (`undefined` \| [`PositionInfo`](../modules/internal_.md#positioninfo))[] | Array of existing position info |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`OpenTradePreviewInfo`](../modules/internal_.md#opentradepreviewinfo)[]\>

array of simulated previews

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getOpenTradePreview](internal_.IRouterAdapterBaseV1.md#getopentradepreview)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:446](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L446)

___

### getTotalAccuredFunding

▸ **getTotalAccuredFunding**(`wallet`, `opts?`): `Promise`\<[`FixedNumber`](../classes/internal_.FixedNumber.md)\>

Retrieve total accured funding amounts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`FixedNumber`](../classes/internal_.FixedNumber.md)\>

total accured funding amount

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getTotalAccuredFunding](internal_.IRouterAdapterBaseV1.md#gettotalaccuredfunding)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:499](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L499)

___

### getTotalClaimableFunding

▸ **getTotalClaimableFunding**(`wallet`, `opts?`): `Promise`\<[`FixedNumber`](../classes/internal_.FixedNumber.md)\>

Retrieve total claimable funding amounts

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`FixedNumber`](../classes/internal_.FixedNumber.md)\>

total claimable funding amount

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getTotalClaimableFunding](internal_.IRouterAdapterBaseV1.md#gettotalclaimablefunding)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:491](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L491)

___

### getTradesHistory

▸ **getTradesHistory**(`wallet`, `pageOptions`, `opts?`): `Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`HistoricalTradeInfo`](../modules/internal_.md#historicaltradeinfo)\>\>

Retrieve all trades for a wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `pageOptions` | `undefined` \| [`PageOptions`](../modules/internal_.md#pageoptions) | Pagination options |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`PaginatedRes`](../modules/internal_.md#paginatedres)\<[`HistoricalTradeInfo`](../modules/internal_.md#historicaltradeinfo)\>\>

paginated result of trades

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getTradesHistory](internal_.IRouterAdapterBaseV1.md#gettradeshistory)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:406](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L406)

___

### getUpdateMarginPreview

▸ **getUpdateMarginPreview**(`wallet`, `isDeposit`, `marginDelta`, `existingPos`, `opts?`): `Promise`\<[`PreviewInfo`](../modules/internal_.md#previewinfo)[]\>

Retrieve simulatied previews for update position margin orders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `string` | Wallet address |
| `isDeposit` | `boolean`[] | Array of booleans indicating whether margin is being added or removed |
| `marginDelta` | [`AmountInfo`](../modules/internal_.md#amountinfo)[] | Array of margin deltas |
| `existingPos` | [`PositionInfo`](../modules/internal_.md#positioninfo)[] | Array of existing position info |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`PreviewInfo`](../modules/internal_.md#previewinfo)[]\>

array of simulated previews

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[getUpdateMarginPreview](internal_.IRouterAdapterBaseV1.md#getupdatemarginpreview)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:477](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L477)

___

### increasePosition

▸ **increasePosition**(`orderData`, `wallet`, `opts?`): `Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

Retrieve create position transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderData` | [`CreateOrder`](../modules/internal_.md#createorder)[] | Array of order data for creating multiple positions |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

array of create position transactions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[increasePosition](internal_.IRouterAdapterBaseV1.md#increaseposition)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:294](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L294)

___

### supportedChains

▸ **supportedChains**(`opts?`): [`Chain`](../modules/internal_.md#chain)[]

Retrieve list of supported chains

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

[`Chain`](../modules/internal_.md#chain)[]

list of supported chains

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[supportedChains](internal_.IRouterAdapterBaseV1.md#supportedchains)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:249](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L249)

___

### supportedMarkets

▸ **supportedMarkets**(`chains`, `opts?`): `Promise`\<[`MarketInfo`](../modules/internal_.md#marketinfo)[]\>

Retrieve list of supported markets for the given chains

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chains` | `undefined` \| [`Chain`](../modules/internal_.md#chain)[] | Chains to filter on. If undefined, returns all supported markets |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`MarketInfo`](../modules/internal_.md#marketinfo)[]\>

list of supported markets

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[supportedMarkets](internal_.IRouterAdapterBaseV1.md#supportedmarkets)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:259](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L259)

___

### supportedProtocols

▸ **supportedProtocols**(): [`Protocol`](../modules/internal_.md#protocol)[]

#### Returns

[`Protocol`](../modules/internal_.md#protocol)[]

list of supported protocols

#### Defined in

[src/interfaces/V1/IRouterV1.ts:7](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterV1.ts#L7)

___

### updateOrder

▸ **updateOrder**(`orderData`, `wallet`, `opts?`): `Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

Retrieve update position transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderData` | [`UpdateOrder`](../modules/internal_.md#updateorder)[] | Array of order data for updating multiple positions |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

array of update position transactions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[updateOrder](internal_.IRouterAdapterBaseV1.md#updateorder)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:303](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L303)

___

### updatePositionMargin

▸ **updatePositionMargin**(`positionInfo`, `updatePositionMarginData`, `wallet`, `opts?`): `Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

Retrieve add/remove collateral transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionInfo` | [`PositionInfo`](../modules/internal_.md#positioninfo)[] | Array of existing position info |
| `updatePositionMarginData` | [`UpdatePositionMarginData`](../modules/internal_.md#updatepositionmargindata)[] | Array of update position margin data |
| `wallet` | `string` | Wallet address |
| `opts?` | [`ApiOpts`](../modules/internal_.md#apiopts) | Extra Api options like bypassCache |

#### Returns

`Promise`\<[`UnsignedTransaction`](../modules/internal_.md#unsignedtransaction)[]\>

array of add/remove collateral transactions

#### Inherited from

[IRouterAdapterBaseV1](internal_.IRouterAdapterBaseV1.md).[updatePositionMargin](internal_.IRouterAdapterBaseV1.md#updatepositionmargin)

#### Defined in

[src/interfaces/V1/IRouterAdapterBaseV1.ts:337](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/interfaces/V1/IRouterAdapterBaseV1.ts#L337)
