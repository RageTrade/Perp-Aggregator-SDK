[perp-aggregator-sdk](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ResolvedConfig

# Interface: ResolvedConfig

[\<internal\>](../modules/internal_.md).ResolvedConfig

Resolved Config between user defined options and DefaultConfig

**`Example`**

```ts
import { ResolvedConfig } from 'abitype'

ResolvedConfig['BigIntType']
```

## Table of contents

### Properties

- [AddressType](internal_.ResolvedConfig.md#addresstype)
- [ArrayMaxDepth](internal_.ResolvedConfig.md#arraymaxdepth)
- [BigIntType](internal_.ResolvedConfig.md#biginttype)
- [BytesType](internal_.ResolvedConfig.md#bytestype)
- [FixedArrayMaxLength](internal_.ResolvedConfig.md#fixedarraymaxlength)
- [FixedArrayMinLength](internal_.ResolvedConfig.md#fixedarrayminlength)
- [IntType](internal_.ResolvedConfig.md#inttype)
- [StrictAbiType](internal_.ResolvedConfig.md#strictabitype)

## Properties

### AddressType

• **AddressType**: \`0x$\{string}\`

TypeScript type to use for `address` values

**`Default`**

`0x${string}`

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:73

___

### ArrayMaxDepth

• **ArrayMaxDepth**: ``false``

Maximum depth for nested array types (e.g. string[][])

Note: You probably only want to set this to a specific number if parsed types are returning as `unknown`
and you want to figure out why. If you set this, you should probably also reduce `FixedArrayMaxLength`.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:58

___

### BigIntType

• **BigIntType**: `bigint`

TypeScript type to use for `int<M>` and `uint<M>` values, where `M > 48`

**`Default`**

```ts
bigint
```

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:86

___

### BytesType

• **BytesType**: `Object`

TypeScript type to use for `bytes` values

**`Default`**

```ts
{ inputs: `0x${string}`; outputs: `0x${string}`; }
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputs` | \`0x$\{string}\` | TypeScript type to use for `bytes` input values |
| `outputs` | \`0x$\{string}\` | TypeScript type to use for `bytes` output values |

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:78

___

### FixedArrayMaxLength

• **FixedArrayMaxLength**: ``99``

Upper bound for fixed array length

**`Default`**

```ts
99
```

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:68

___

### FixedArrayMinLength

• **FixedArrayMinLength**: ``1``

Lower bound for fixed array length

**`Default`**

```ts
1
```

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:63

___

### IntType

• **IntType**: `number`

TypeScript type to use for `int<M>` and `uint<M>` values, where `M <= 48`

**`Default`**

```ts
number
```

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:91

___

### StrictAbiType

• **StrictAbiType**: ``false``

When set, validates [AbiParameter](../modules/internal_.md#abiparameter)'s `type` against [AbiType](../modules/internal_.md#abitype)

Note: You probably only want to set this to `true` if parsed types are returning as `unknown`
and you want to figure out why.

**`Default`**

```ts
false
```

#### Defined in

node_modules/.pnpm/abitype@0.9.8_typescript@5.1.6/node_modules/abitype/dist/types/config.d.ts:100
