import { FixedNumber } from "ethers-v6";
import PerennialV2Service from "./src/exchanges/perennialv2";
import { CreateOrder, TradeDirection } from "./src/interfaces/V1/RouterV1";
import { Address, createWalletClient, http, zeroAddress } from "viem";
import { arbitrum } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

async function main() {
    const service = new PerennialV2Service(zeroAddress)
    const supportedMarkets = await service.supportedMarkets(undefined)
    const dynamicMarketMetadata = await service.getDynamicMarketMetadata(supportedMarkets[0].marketId)
    console.log({supportedMarkets})
    console.log({marketId: supportedMarkets[0].marketId, dynamicMarketMetadata})
    //log all fixed number values
    Object.keys(dynamicMarketMetadata).forEach((key) => {
        const value = dynamicMarketMetadata[key as keyof typeof dynamicMarketMetadata]
            console.log(`${key}: ${value.toString()}`)
    })

    console.log({marketId: supportedMarkets[0].marketId, price: (await service.getMarketPrice(supportedMarkets[0].marketId)).toString()})

    const marketId = supportedMarkets[0].marketId

    const txnWithMetadata = await service.createIncreaseOrder(marketId, {
        direction: "LONG" as TradeDirection,
        sizeDelta: {amount:FixedNumber.fromString(".02",18), isTokenAmount: true},
        marginDelta: {amount: FixedNumber.fromString("20",6), isTokenAmount: true},

    } as CreateOrder)

    const account = privateKeyToAccount("0x7502d76f8e637a15002036780bd34410894442df462481a532fd5f2305851f1b")
    console.log({accountAddress:account.address})
    //create wallet and send txnWithMetadata
    const walletClient = createWalletClient({
        account,
        transport: http(),
        chain: arbitrum
    })

    console.log({txnWithMetadata})

    const hash = await walletClient.sendTransaction({
        to: txnWithMetadata[0].tx.to as Address,
        data: txnWithMetadata[0].tx.data as `0x${string}`,
    })
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});