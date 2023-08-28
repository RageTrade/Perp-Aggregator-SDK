import { BigNumber, BigNumberish } from "ethers";
import { Logger } from "@ethersproject/logger";
import { version } from "../../node_modules/.pnpm/@ethersproject+bignumber@5.7.0/node_modules/@ethersproject/bignumber/src.ts/_version";
import { formatUnits } from "ethers/lib/utils";

const _constructorGuard = {};
const logger = new Logger(version);

export default class BigNumDec {
  readonly _value: BigNumber;
  readonly _decimals: number;

  constructor(constructorGuard: any, value: BigNumber, decimals: number) {
    if (constructorGuard !== _constructorGuard) {
      logger.throwError(
        "cannot call constructor directly; use BigNumber.from",
        Logger.errors.UNSUPPORTED_OPERATION,
        {
          operation: "new (BigNumDec)",
        }
      );
    }

    this._value = value;
    this._decimals = decimals;

    Object.freeze(this);
  }

  abs(): BigNumDec {
    if (this._value.toString()[0] === "-") {
      return new BigNumDec(
        _constructorGuard,
        BigNumber.from(this._value.toString().substring(1)),
        this._decimals
      );
    }
    return this;
  }

  add(other: BigNumberish): BigNumDec {
    return new BigNumDec(
      _constructorGuard,
      BigNumber.from(this._value.add(other)),
      this._decimals
    );
  }

  sub(other: BigNumberish): BigNumDec {
    return new BigNumDec(
      _constructorGuard,
      BigNumber.from(this._value.sub(other)),
      this._decimals
    );
  }

  div(other: BigNumberish): BigNumDec {
    const o = BigNumber.from(other);
    if (o.isZero()) {
      throwFault("division-by-zero", "div");
    }
    return new BigNumDec(
      _constructorGuard,
      BigNumber.from(this._value.div(other)),
      this._decimals
    );
  }

  mul(other: BigNumberish): BigNumDec {
    return new BigNumDec(
      _constructorGuard,
      BigNumber.from(this._value.mul(other)),
      this._decimals
    );
  }

  mod(other: BigNumberish): BigNumDec {
    const o = BigNumber.from(other);
    if (o.lt(0)) {
      throwFault("division-by-zero", "mod");
    }
    return new BigNumDec(
      _constructorGuard,
      BigNumber.from(this._value.mod(other)),
      this._decimals
    );
  }

  pow(other: BigNumberish): BigNumDec {
    const o = BigNumber.from(other);
    if (o.lt(0)) {
      throwFault("negative-power", "pow");
    }
    return new BigNumDec(
      _constructorGuard,
      BigNumber.from(this._value.pow(other)),
      this._decimals
    );
  }

  eq(other: BigNumberish): boolean {
    return this._value.eq(other);
  }

  lt(other: BigNumberish): boolean {
    return this._value.lt(other);
  }

  lte(other: BigNumberish): boolean {
    return this._value.lte(other);
  }

  gt(other: BigNumberish): boolean {
    return this._value.gt(other);
  }

  gte(other: BigNumberish): boolean {
    return this._value.gte(other);
  }

  isNegative(): boolean {
    return this._value.toString()[0] === "-";
  }

  isZero(): boolean {
    return this._value.isZero();
  }

  toNumber(): number {
    try {
      return this._value.toNumber();
    } catch (error) {
      throwFault("overflow", "toNumber", this.toString());
    }
  }

  toString(): string {
    return this._value.toString();
  }

  toFormatted(): string {
    return formatUnits(this._value, this._decimals);
  }

  decimals(): number {
    return this._decimals;
  }

  value(): BigNumber {
    return this._value;
  }

  ZERO(): BigNumDec {
    return new BigNumDec(_constructorGuard, BigNumber.from(0), 0);
  }

  static from(value: any, decimals: number): BigNumDec {
    return new BigNumDec(_constructorGuard, BigNumber.from(value), decimals);
  }
}

function throwFault(fault: string, operation: string, value?: any): never {
  const params: any = { fault: fault, operation: operation };
  if (value != null) {
    params.value = value;
  }

  return logger.throwError(fault, Logger.errors.NUMERIC_FAULT, params);
}
