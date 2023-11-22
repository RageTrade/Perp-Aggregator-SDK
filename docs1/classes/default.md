[perp-aggregator-sdk](../README.md) / [Exports](../modules.md) / default

# Class: default

## Implements

- `IRouterV1`

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [adapters](default.md#adapters)

### Methods

- [\_checkAndGetProtocolId](default.md#_checkandgetprotocolid)
- [cancelOrder](default.md#cancelorder)
- [claimFunding](default.md#claimfunding)
- [closePosition](default.md#closeposition)
- [getAllOrders](default.md#getallorders)
- [getAllOrdersForPosition](default.md#getallordersforposition)
- [getAllPositions](default.md#getallpositions)
- [getClaimHistory](default.md#getclaimhistory)
- [getCloseTradePreview](default.md#getclosetradepreview)
- [getDynamicMarketMetadata](default.md#getdynamicmarketmetadata)
- [getIdleMargins](default.md#getidlemargins)
- [getLiquidationHistory](default.md#getliquidationhistory)
- [getMarketPrices](default.md#getmarketprices)
- [getMarketsInfo](default.md#getmarketsinfo)
- [getOpenTradePreview](default.md#getopentradepreview)
- [getTotalAccuredFunding](default.md#gettotalaccuredfunding)
- [getTotalClaimableFunding](default.md#gettotalclaimablefunding)
- [getTradesHistory](default.md#gettradeshistory)
- [getUpdateMarginPreview](default.md#getupdatemarginpreview)
- [increasePosition](default.md#increaseposition)
- [supportedChains](default.md#supportedchains)
- [supportedMarkets](default.md#supportedmarkets)
- [supportedProtocols](default.md#supportedprotocols)
- [updateOrder](default.md#updateorder)
- [updatePositionMargin](default.md#updatepositionmargin)

## Constructors

### constructor

• **new default**(): [`default`](default.md)

#### Returns

[`default`](default.md)

#### Defined in

[RouterV1.ts:50](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L50)

## Properties

### adapters

• **adapters**: `Record`\<`string`, `IRouterAdapterBaseV1`\> = `{}`

#### Defined in

[RouterV1.ts:41](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L41)

## Methods

### \_checkAndGetProtocolId

▸ **_checkAndGetProtocolId**(`marketId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketId` | `string` |

#### Returns

`string`

#### Defined in

[RouterV1.ts:43](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L43)

___

### cancelOrder

▸ **cancelOrder**(`orderData`, `wallet`, `opts?`): `Promise`\<`UnsignedTransaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderData` | `CancelOrder`[] |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`UnsignedTransaction`[]\>

#### Implementation of

IRouterV1.cancelOrder

#### Defined in

[RouterV1.ts:149](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L149)

___

### claimFunding

▸ **claimFunding**(`wallet`, `opts?`): `Promise`\<`UnsignedTransaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`UnsignedTransaction`[]\>

#### Implementation of

IRouterV1.claimFunding

#### Defined in

[RouterV1.ts:191](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L191)

___

### closePosition

▸ **closePosition**(`positionInfo`, `closePositionData`, `wallet`, `opts?`): `Promise`\<`UnsignedTransaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `positionInfo` | `PositionInfo`[] |
| `closePositionData` | `ClosePositionData`[] |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`UnsignedTransaction`[]\>

#### Implementation of

IRouterV1.closePosition

#### Defined in

[RouterV1.ts:159](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L159)

___

### getAllOrders

▸ **getAllOrders**(`wallet`, `pageOptions`, `opts?`): `Promise`\<`PaginatedRes`\<`OrderInfo`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `pageOptions` | `undefined` \| `PageOptions` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`PaginatedRes`\<`OrderInfo`\>\>

#### Implementation of

IRouterV1.getAllOrders

#### Defined in

[RouterV1.ts:230](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L230)

___

### getAllOrdersForPosition

▸ **getAllOrdersForPosition**(`wallet`, `positionInfo`, `pageOptions`, `opts?`): `Promise`\<`Record`\<`string`, `PaginatedRes`\<`OrderInfo`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `positionInfo` | `PositionInfo`[] |
| `pageOptions` | `undefined` \| `PageOptions` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`Record`\<`string`, `PaginatedRes`\<`OrderInfo`\>\>\>

#### Implementation of

IRouterV1.getAllOrdersForPosition

#### Defined in

[RouterV1.ts:250](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L250)

___

### getAllPositions

▸ **getAllPositions**(`wallet`, `pageOptions`, `opts?`): `Promise`\<`PaginatedRes`\<`PositionInfo`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `pageOptions` | `undefined` \| `PageOptions` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`PaginatedRes`\<`PositionInfo`\>\>

#### Implementation of

IRouterV1.getAllPositions

#### Defined in

[RouterV1.ts:209](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L209)

___

### getClaimHistory

▸ **getClaimHistory**(`wallet`, `pageOptions`, `opts?`): `Promise`\<`PaginatedRes`\<`ClaimInfo`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `pageOptions` | `undefined` \| `PageOptions` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`PaginatedRes`\<`ClaimInfo`\>\>

#### Implementation of

IRouterV1.getClaimHistory

#### Defined in

[RouterV1.ts:54](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L54)

___

### getCloseTradePreview

▸ **getCloseTradePreview**(`wallet`, `positionInfo`, `closePositionData`, `opts?`): `Promise`\<`CloseTradePreviewInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `positionInfo` | `PositionInfo`[] |
| `closePositionData` | `ClosePositionData`[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`CloseTradePreviewInfo`[]\>

#### Implementation of

IRouterV1.getCloseTradePreview

#### Defined in

[RouterV1.ts:329](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L329)

___

### getDynamicMarketMetadata

▸ **getDynamicMarketMetadata**(`marketIds`, `opts?`): `Promise`\<`DynamicMarketMetadata`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketIds` | `string`[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`DynamicMarketMetadata`[]\>

#### Implementation of

IRouterV1.getDynamicMarketMetadata

#### Defined in

[RouterV1.ts:119](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L119)

___

### getIdleMargins

▸ **getIdleMargins**(`wallet`, `opts?`): `Promise`\<`IdleMarginInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`IdleMarginInfo`[]\>

#### Implementation of

IRouterV1.getIdleMargins

#### Defined in

[RouterV1.ts:200](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L200)

___

### getLiquidationHistory

▸ **getLiquidationHistory**(`wallet`, `pageOptions`, `opts?`): `Promise`\<`PaginatedRes`\<`LiquidationInfo`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `pageOptions` | `undefined` \| `PageOptions` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`PaginatedRes`\<`LiquidationInfo`\>\>

#### Implementation of

IRouterV1.getLiquidationHistory

#### Defined in

[RouterV1.ts:294](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L294)

___

### getMarketPrices

▸ **getMarketPrices**(`marketIds`, `opts?`): `Promise`\<`FixedNumber`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketIds` | `string`[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`FixedNumber`[]\>

#### Implementation of

IRouterV1.getMarketPrices

#### Defined in

[RouterV1.ts:99](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L99)

___

### getMarketsInfo

▸ **getMarketsInfo**(`marketIds`, `opts?`): `Promise`\<`MarketInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `marketIds` | `string`[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`MarketInfo`[]\>

#### Implementation of

IRouterV1.getMarketsInfo

#### Defined in

[RouterV1.ts:109](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L109)

___

### getOpenTradePreview

▸ **getOpenTradePreview**(`wallet`, `orderData`, `existingPos`, `opts?`): `Promise`\<`OpenTradePreviewInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `orderData` | `CreateOrder`[] |
| `existingPos` | (`undefined` \| `PositionInfo`)[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`OpenTradePreviewInfo`[]\>

#### Implementation of

IRouterV1.getOpenTradePreview

#### Defined in

[RouterV1.ts:314](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L314)

___

### getTotalAccuredFunding

▸ **getTotalAccuredFunding**(`wallet`, `opts?`): `Promise`\<`FixedNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`FixedNumber`\>

#### Implementation of

IRouterV1.getTotalAccuredFunding

#### Defined in

[RouterV1.ts:381](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L381)

___

### getTotalClaimableFunding

▸ **getTotalClaimableFunding**(`wallet`, `opts?`): `Promise`\<`FixedNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`FixedNumber`\>

#### Implementation of

IRouterV1.getTotalClaimableFunding

#### Defined in

[RouterV1.ts:372](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L372)

___

### getTradesHistory

▸ **getTradesHistory**(`wallet`, `pageOptions`, `opts?`): `Promise`\<`PaginatedRes`\<`HistoricalTradeInfo`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `pageOptions` | `undefined` \| `PageOptions` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`PaginatedRes`\<`HistoricalTradeInfo`\>\>

#### Implementation of

IRouterV1.getTradesHistory

#### Defined in

[RouterV1.ts:274](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L274)

___

### getUpdateMarginPreview

▸ **getUpdateMarginPreview**(`wallet`, `isDeposit`, `marginDelta`, `existingPos`, `opts?`): `Promise`\<`PreviewInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `string` |
| `isDeposit` | `boolean`[] |
| `marginDelta` | `AmountInfo`[] |
| `existingPos` | `PositionInfo`[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`PreviewInfo`[]\>

#### Implementation of

IRouterV1.getUpdateMarginPreview

#### Defined in

[RouterV1.ts:346](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L346)

___

### increasePosition

▸ **increasePosition**(`orderData`, `wallet`, `opts?`): `Promise`\<`UnsignedTransaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderData` | `CreateOrder`[] |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`UnsignedTransaction`[]\>

#### Implementation of

IRouterV1.increasePosition

#### Defined in

[RouterV1.ts:129](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L129)

___

### supportedChains

▸ **supportedChains**(`opts?`): `Chain`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ApiOpts` |

#### Returns

`Chain`[]

#### Implementation of

IRouterV1.supportedChains

#### Defined in

[RouterV1.ts:85](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L85)

___

### supportedMarkets

▸ **supportedMarkets**(`chains`, `opts?`): `Promise`\<`MarketInfo`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chains` | `undefined` \| `Chain`[] |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`MarketInfo`[]\>

#### Implementation of

IRouterV1.supportedMarkets

#### Defined in

[RouterV1.ts:89](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L89)

___

### supportedProtocols

▸ **supportedProtocols**(): `Protocol`[]

#### Returns

`Protocol`[]

#### Implementation of

IRouterV1.supportedProtocols

#### Defined in

[RouterV1.ts:74](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L74)

___

### updateOrder

▸ **updateOrder**(`orderData`, `wallet`, `opts?`): `Promise`\<`UnsignedTransaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orderData` | `UpdateOrder`[] |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`UnsignedTransaction`[]\>

#### Implementation of

IRouterV1.updateOrder

#### Defined in

[RouterV1.ts:139](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L139)

___

### updatePositionMargin

▸ **updatePositionMargin**(`positionInfo`, `updatePositionMarginData`, `wallet`, `opts?`): `Promise`\<`UnsignedTransaction`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `positionInfo` | `PositionInfo`[] |
| `updatePositionMarginData` | `UpdatePositionMarginData`[] |
| `wallet` | `string` |
| `opts?` | `ApiOpts` |

#### Returns

`Promise`\<`UnsignedTransaction`[]\>

#### Implementation of

IRouterV1.updatePositionMargin

#### Defined in

[RouterV1.ts:174](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/1bbc666/router/RouterV1.ts#L174)
