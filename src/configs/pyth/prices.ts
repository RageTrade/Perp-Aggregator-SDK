import type { PriceFeed } from "@pythnetwork/pyth-evm-js";
import { EvmPriceServiceConnection } from "@pythnetwork/pyth-evm-js";
import { BigNumber, ethers } from "ethers";

const connection = new EvmPriceServiceConnection(
  "https://xc-mainnet.pyth.network"
);

// https://pyth.network/developers/price-feed-ids
const feedIdsByToken: Record<string, string> = {
  sUSD: "",
  USDC: "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
  "USDC.e": "eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
  WETH: "ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  ETH: "ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  BTC: "c9d8b075a5c69303365ae23633d4e085199bf5c520a3b90fed1322a0342ffc33",
  LINK: "8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221",
  UNI: "78d185a741d07edb3412b09008b7c5cfb9bbbd7d568bf00ba737b456ba171501",
  USDT: "2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
  DAI: "b0948a5e5313200c632b51bb5ca32f6de0d36e9950a942d19751e833f70dabfd",
  ARB: "3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5",
  FRAX: "c3d5d8d6d17081b3d0bbca6e2fa3a6704bb9a9561d9f9e1dc52db47629f862ad",
};

const priceIds = Object.values(feedIdsByToken).filter((id) => !!id);

const UnitPrice = {
  decimals: 8,
  formatted: "1",
  value: BigNumber.from(100000000),
};

let feeds: PriceFeed[] | undefined;

export type BigNumDecimals = {
  decimals: number;
  formatted: string;
  value: BigNumber;
};

export async function getTokenPrice(token: string): Promise<BigNumDecimals> {
  if (!feeds) {
    feeds = await connection.getLatestPriceFeeds(priceIds);
  }

  if (token === "sUSD") return UnitPrice;

  const feed = feeds?.find((f) => f.id === feedIdsByToken[token]);

  if (!feed) throw new Error(`Feed not found for ${token}`);

  const { expo, price } = feed.getPriceUnchecked();

  const decimals = Math.abs(expo);
  const value = BigNumber.from(price);

  return {
    decimals,
    value,
    formatted: ethers.utils.formatUnits(value, decimals),
  };
}

export async function getTokenPrice18(token: string): Promise<BigNumber> {
  const tokenPrice = await getTokenPrice(token);
  return tokenPrice.value.mul(BigNumber.from(10).pow(18 - tokenPrice.decimals));
}
