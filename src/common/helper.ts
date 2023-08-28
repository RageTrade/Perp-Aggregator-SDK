import { BigNumber, ethers } from "ethers";
import BigNumDec from "./BigNumDec";

export function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string
): keyof T | null {
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : null;
}

function keys(obj: object) {
  return Object.keys(obj) as Array<keyof Object>;
}

export function logObject(title: string, obj: object) {
  console.log(
    title,
    keys(obj).map((key) => key + ": " + (obj[key] ? obj[key].toString() : ""))
  );
}

export function getEnumEntryByValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string
): T[keyof T] | null {
  let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? myEnum[keys[0] as keyof T] : null;
}

export function toBND(input: BigNumber, decimals: number): BigNumDec {
  return BigNumDec.from(input, decimals);
}

export function toBNDSynV2(input: BigNumber): BigNumDec {
  return BigNumDec.from(input, 18);
}

export function toBNDGmxV1(input: BigNumber): BigNumDec {
  return BigNumDec.from(input, 30);
}

export function formatN(value: BigNumber, decimals: number = 18): string {
  return ethers.utils.formatUnits(value, decimals);
}
