[perp-aggregator-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FixedNumber

# Class: FixedNumber

[\<internal\>](../modules/internal_.md).FixedNumber

A FixedNumber represents a value over its [[FixedFormat]]
 arithmetic field.

 A FixedNumber can be used to perform math, losslessly, on
 values which have decmial places.

 A FixedNumber has a fixed bit-width to store values in, and stores all
 values internally by multiplying the value by 10 raised to the power of
 %%decimals%%.

 If operations are performed that cause a value to grow too high (close to
 positive infinity) or too low (close to negative infinity), the value
 is said to //overflow//.

 For example, an 8-bit signed value, with 0 decimals may only be within
 the range ``-128`` to ``127``; so ``-128 - 1`` will overflow and become
 ``127``. Likewise, ``127 + 1`` will overflow and become ``-127``.

 Many operation have a normal and //unsafe// variant. The normal variant
 will throw a [[NumericFaultError]] on any overflow, while the //unsafe//
 variant will silently allow overflow, corrupting its value value.

 If operations are performed that cause a value to become too small
 (close to zero), the value loses precison and is said to //underflow//.

 For example, an value with 1 decimal place may store a number as small
 as ``0.1``, but the value of ``0.1 / 2`` is ``0.05``, which cannot fit
 into 1 decimal place, so underflow occurs which means precision is lost
 and the value becomes ``0``.

 Some operations have a normal and //signalling// variant. The normal
 variant will silently ignore underflow, while the //signalling// variant
 will thow a [[NumericFaultError]] on underflow.

## Table of contents

### Constructors

- [constructor](internal_.FixedNumber.md#constructor)

### Properties

- [#format](internal_.FixedNumber.md##format)
- [#tens](internal_.FixedNumber.md##tens)
- [#val](internal_.FixedNumber.md##val)
- [\_value](internal_.FixedNumber.md#_value)
- [format](internal_.FixedNumber.md#format)

### Accessors

- [decimals](internal_.FixedNumber.md#decimals)
- [signed](internal_.FixedNumber.md#signed)
- [value](internal_.FixedNumber.md#value)
- [width](internal_.FixedNumber.md#width)

### Methods

- [#add](internal_.FixedNumber.md##add)
- [#checkFormat](internal_.FixedNumber.md##checkformat)
- [#checkValue](internal_.FixedNumber.md##checkvalue)
- [#div](internal_.FixedNumber.md##div)
- [#mul](internal_.FixedNumber.md##mul)
- [#sub](internal_.FixedNumber.md##sub)
- [add](internal_.FixedNumber.md#add)
- [addUnsafe](internal_.FixedNumber.md#addunsafe)
- [ceiling](internal_.FixedNumber.md#ceiling)
- [cmp](internal_.FixedNumber.md#cmp)
- [div](internal_.FixedNumber.md#div)
- [divSignal](internal_.FixedNumber.md#divsignal)
- [divUnsafe](internal_.FixedNumber.md#divunsafe)
- [eq](internal_.FixedNumber.md#eq)
- [floor](internal_.FixedNumber.md#floor)
- [gt](internal_.FixedNumber.md#gt)
- [gte](internal_.FixedNumber.md#gte)
- [isNegative](internal_.FixedNumber.md#isnegative)
- [isZero](internal_.FixedNumber.md#iszero)
- [lt](internal_.FixedNumber.md#lt)
- [lte](internal_.FixedNumber.md#lte)
- [mul](internal_.FixedNumber.md#mul)
- [mulSignal](internal_.FixedNumber.md#mulsignal)
- [mulUnsafe](internal_.FixedNumber.md#mulunsafe)
- [round](internal_.FixedNumber.md#round)
- [sub](internal_.FixedNumber.md#sub)
- [subUnsafe](internal_.FixedNumber.md#subunsafe)
- [toFormat](internal_.FixedNumber.md#toformat)
- [toString](internal_.FixedNumber.md#tostring)
- [toUnsafeFloat](internal_.FixedNumber.md#tounsafefloat)
- [fromBytes](internal_.FixedNumber.md#frombytes)
- [fromString](internal_.FixedNumber.md#fromstring)
- [fromValue](internal_.FixedNumber.md#fromvalue)

## Constructors

### constructor

• **new FixedNumber**(`guard`, `value`, `format`): [`FixedNumber`](internal_.FixedNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `guard` | `any` |
| `value` | `bigint` |
| `format` | `any` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:281](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L281)

## Properties

### #format

• `Private` `Readonly` **#format**: [`_FixedFormat`](../modules/internal_.md#_fixedformat)

#### Defined in

[src/common/fixedNumber.ts:259](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L259)

___

### #tens

• `Private` `Readonly` **#tens**: `bigint`

#### Defined in

[src/common/fixedNumber.ts:265](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L265)

___

### #val

• `Private` **#val**: `bigint`

#### Defined in

[src/common/fixedNumber.ts:262](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L262)

___

### \_value

• `Readonly` `Private` **\_value**: `string`

This is a property so console.log shows a human-meaningful value.

#### Defined in

[src/common/fixedNumber.ts:272](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L272)

___

### format

• `Readonly` **format**: `string`

The specific fixed-point arithmetic field for this value.

#### Defined in

[src/common/fixedNumber.ts:257](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L257)

## Accessors

### decimals

• `get` **decimals**(): `number`

The number of decimal places in the fixed-point arithment field.

#### Returns

`number`

#### Defined in

[src/common/fixedNumber.ts:313](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L313)

___

### signed

• `get` **signed**(): `boolean`

If true, negative values are permitted, otherwise only
 positive values and zero are allowed.

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:299](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L299)

___

### value

• `get` **value**(): `bigint`

The value as an integer, based on the smallest unit the
 [[decimals]] allow.

#### Returns

`bigint`

#### Defined in

[src/common/fixedNumber.ts:321](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L321)

___

### width

• `get` **width**(): `number`

The number of bits available to store the value.

#### Returns

`number`

#### Defined in

[src/common/fixedNumber.ts:306](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L306)

## Methods

### #add

▸ **#add**(`o`, `safeOp?`): [`FixedNumber`](internal_.FixedNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`FixedNumber`](internal_.FixedNumber.md) |
| `safeOp?` | `string` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:356](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L356)

___

### #checkFormat

▸ **#checkFormat**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`void`

#### Defined in

[src/common/fixedNumber.ts:325](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L325)

___

### #checkValue

▸ **#checkValue**(`val`, `safeOp?`): [`FixedNumber`](internal_.FixedNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `bigint` |
| `safeOp?` | `string` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:329](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L329)

___

### #div

▸ **#div**(`o`, `safeOp?`): [`FixedNumber`](internal_.FixedNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`FixedNumber`](internal_.FixedNumber.md) |
| `safeOp?` | `string` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:438](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L438)

___

### #mul

▸ **#mul**(`o`, `safeOp?`): [`FixedNumber`](internal_.FixedNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`FixedNumber`](internal_.FixedNumber.md) |
| `safeOp?` | `string` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:400](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L400)

___

### #sub

▸ **#sub**(`o`, `safeOp?`): [`FixedNumber`](internal_.FixedNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`FixedNumber`](internal_.FixedNumber.md) |
| `safeOp?` | `string` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:378](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L378)

___

### add

▸ **add**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% added
 to %%other%%. A [[NumericFaultError]] is thrown if overflow
 occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:374](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L374)

___

### addUnsafe

▸ **addUnsafe**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% added
 to %%other%%, ignoring overflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:365](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L365)

___

### ceiling

▸ **ceiling**(): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] which is the smallest **integer**
 that is greater than or equal to %%this%%.

 The decimal component of the result will always be ``0``.

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:572](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L572)

___

### cmp

▸ **cmp**(`other`): `number`

Returns a comparison result between %%this%% and %%other%%.

 This is suitable for use in sorting, where ``-1`` implies %%this%%
 is smaller, ``1`` implies %%this%% is larger and ``0`` implies
 both are equal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`number`

#### Defined in

[src/common/fixedNumber.ts:494](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L494)

___

### div

▸ **div**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% divided
 by %%other%%, ignoring underflow (precision loss). A
 [[NumericFaultError]] is thrown if overflow occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:462](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L462)

___

### divSignal

▸ **divSignal**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% divided
 by %%other%%. A [[NumericFaultError]] is thrown if underflow
 (precision loss) occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:471](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L471)

___

### divUnsafe

▸ **divUnsafe**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% divided
 by %%other%%, ignoring underflow (precision loss). A
 [[NumericFaultError]] is thrown if overflow occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:453](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L453)

___

### eq

▸ **eq**(`other`): `boolean`

Returns true if %%other%% is equal to %%this%%.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:519](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L519)

___

### floor

▸ **floor**(): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] which is the largest **integer**
 that is less than or equal to %%this%%.

 The decimal component of the result will always be ``0``.

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:557](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L557)

___

### gt

▸ **gt**(`other`): `boolean`

Returns true if %%other%% is greater than to %%this%%.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:540](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L540)

___

### gte

▸ **gte**(`other`): `boolean`

Returns true if %%other%% is greater than or equal to %%this%%.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:547](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L547)

___

### isNegative

▸ **isNegative**(): `boolean`

Returns true if %%this%% is less than ``0``.

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:617](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L617)

___

### isZero

▸ **isZero**(): `boolean`

Returns true if %%this%% is equal to ``0``.

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:610](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L610)

___

### lt

▸ **lt**(`other`): `boolean`

Returns true if %%other%% is less than to %%this%%.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:526](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L526)

___

### lte

▸ **lte**(`other`): `boolean`

Returns true if %%other%% is less than or equal to %%this%%.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

`boolean`

#### Defined in

[src/common/fixedNumber.ts:533](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L533)

___

### mul

▸ **mul**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% multiplied
 by %%other%%. A [[NumericFaultError]] is thrown if overflow
 occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:418](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L418)

___

### mulSignal

▸ **mulSignal**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% multiplied
 by %%other%%. A [[NumericFaultError]] is thrown if overflow
 occurs or if underflow (precision loss) occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:427](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L427)

___

### mulUnsafe

▸ **mulUnsafe**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%this%% multiplied
 by %%other%%, ignoring overflow and underflow (precision loss).

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:409](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L409)

___

### round

▸ **round**(`decimals?`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the decimal component
 rounded up on ties at %%decimals%% places.

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimals?` | `number` |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:585](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L585)

___

### sub

▸ **sub**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%other%% subtracted
 from %%this%%. A [[NumericFaultError]] is thrown if overflow
 occurs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:396](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L396)

___

### subUnsafe

▸ **subUnsafe**(`other`): [`FixedNumber`](internal_.FixedNumber.md)

Returns a new [[FixedNumber]] with the result of %%other%% subtracted
 from %%this%%, ignoring overflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FixedNumber`](internal_.FixedNumber.md) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:387](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L387)

___

### toFormat

▸ **toFormat**(`format`): [`FixedNumber`](internal_.FixedNumber.md)

Return a new [[FixedNumber]] with the same value but has had
 its field set to %%format%%.

 This will throw if the value cannot fit into %%format%%.

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FixedFormat`](../modules/internal_.md#fixedformat) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:645](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L645)

___

### toString

▸ **toString**(): `string`

Returns the string representation of %%this%%.

#### Returns

`string`

#### Defined in

[src/common/fixedNumber.ts:624](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L624)

___

### toUnsafeFloat

▸ **toUnsafeFloat**(): `number`

Returns a float approximation.

 Due to IEEE 754 precission (or lack thereof), this function
 can only return an approximation and most values will contain
 rounding errors.

#### Returns

`number`

#### Defined in

[src/common/fixedNumber.ts:635](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L635)

___

### fromBytes

▸ **fromBytes**(`_value`, `_format?`): [`FixedNumber`](internal_.FixedNumber.md)

Creates a new [[FixedNumber]] with the big-endian representation
 %%value%% with %%format%%.

 This will throw a [[NumericFaultError]] if %%value%% cannot fit
 in %%format%% due to overflow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `_format?` | [`FixedFormat`](../modules/internal_.md#fixedformat) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:724](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L724)

___

### fromString

▸ **fromString**(`_value`, `_format?`): [`FixedNumber`](internal_.FixedNumber.md)

Creates a new [[FixedNumber]] for %%value%% with %%format%%.

 This will throw a [[NumericFaultError]] if %%value%% cannot fit
 in %%format%%, either due to overflow or underflow (precision loss).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |
| `_format?` | [`FixedFormat`](../modules/internal_.md#fixedformat) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:686](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L686)

___

### fromValue

▸ **fromValue**(`_value`, `_decimals?`, `_format?`): [`FixedNumber`](internal_.FixedNumber.md)

Creates a new [[FixedNumber]] for %%value%% divided by
 %%decimal%% places with %%format%%.

 This will throw a [[NumericFaultError]] if %%value%% (once adjusted
 for %%decimals%%) cannot fit in %%format%%, either due to overflow
 or underflow (precision loss).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_decimals?` | [`Numeric`](../modules/internal_.md#numeric) |
| `_format?` | [`FixedFormat`](../modules/internal_.md#fixedformat) |

#### Returns

[`FixedNumber`](internal_.FixedNumber.md)

#### Defined in

[src/common/fixedNumber.ts:657](https://github.com/RageTrade/Perp-Aggregator-SDK/blob/2bee6d6/src/common/fixedNumber.ts#L657)
