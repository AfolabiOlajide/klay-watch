const info = [{
    "data": {
        "address": "0x6266e51861e9a0643f2ad8c7be069de6c799d621",
        "updated_at": "2022-05-16T10:49:10.415229513Z",
        "next_update_at": "2022-05-16T10:54:10.415229553Z",
        "quote_currency": "USD",
        "chain_id": 8217,
        "items": [
            {
                "contract_decimals": 18,
                "contract_name": "Klaytn",
                "contract_ticker_symbol": "KLAY",
                "contract_address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                "supports_erc": null,
                "logo_url": "https://www.covalenthq.com/static/images/icons/display-icons/klaytn-mainnet-logo.svg",
                "last_transferred_at": null,
                "type": "cryptocurrency",
                "balance": "1312026274770944789",
                "balance_24h": null,
                "quote_rate": 0.40250254,
                "quote_rate_24h": 0.41288844,
                "quote": 0.5280939,
                "quote_24h": null,
                "nft_data": null
            },
            {
                "contract_decimals": 18,
                "contract_name": "Klanium",
                "contract_ticker_symbol": "KLIM",
                "contract_address": "0x621313c4c480ccfd64ffeb9e3ba7918324a78689",
                "supports_erc": [
                    "erc20"
                ],
                "logo_url": "https://logos.covalenthq.com/tokens/8217/0x621313c4c480ccfd64ffeb9e3ba7918324a78689.png",
                "last_transferred_at": "2022-05-08T11:30:57Z",
                "type": "cryptocurrency",
                "balance": "95000000000000000000",
                "balance_24h": null,
                "quote_rate": 5.5356923E-4,
                "quote_rate_24h": 5.783185E-4,
                "quote": 0.052589078,
                "quote_24h": null,
                "nft_data": null
            },
            {
                "contract_decimals": 0,
                "contract_name": "SheepFarm",
                "contract_ticker_symbol": "SHEP",
                "contract_address": "0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6",
                "supports_erc": [
                    "erc20",
                    "erc721"
                ],
                "logo_url": "https://logos.covalenthq.com/tokens/8217/0xa9f07b1260bb9eebcbaba66700b00fe08b61e1e6.png",
                "last_transferred_at": "2022-02-06T17:47:15Z",
                "type": "nft",
                "balance": "1",
                "balance_24h": null,
                "quote_rate": 0.0,
                "quote_rate_24h": null,
                "quote": 0.0,
                "quote_24h": null,
                "nft_data": [
                    {
                        "token_id": "77855",
                        "token_balance": "1",
                        "token_url": "https://cdn.sheepfarm.io/nft/etc/77855",
                        "supports_erc": [
                            "erc20",
                            "erc721"
                        ],
                        "token_price_wei": null,
                        "token_quote_rate_eth": null,
                        "original_owner": "0x6266e51861e9a0643f2ad8c7be069de6c799d621",
                        "external_data": {
                            "name": "Red Envelope#13677",
                            "description": "Sheepfarm in Meta-land is a P2E project where players can purchase metaverse pastures, run their own farm, raise sheep, and make a profit!",
                            "image": "https://cdn.sheepfarm.io/nft/etc/img/redenvelope.png",
                            "image_256": "https://image-proxy.svc.prod.covalenthq.com/256,fit,png/https://cdn.sheepfarm.io/nft/etc/img/redenvelope.png",
                            "image_512": "https://image-proxy.svc.prod.covalenthq.com/512,fit,png/https://cdn.sheepfarm.io/nft/etc/img/redenvelope.png",
                            "image_1024": "https://image-proxy.svc.prod.covalenthq.com/1024,fit,png/https://cdn.sheepfarm.io/nft/etc/img/redenvelope.png",
                            "animation_url": null,
                            "external_url": "https://sheepfarm.io/",
                            "attributes": [
                                {
                                    "value": "Event",
                                    "trait_type": "Category"
                                }
                            ],
                            "owner": null
                        },
                        "owner": "0x6266e51861e9a0643f2ad8c7be069de6c799d621",
                        "owner_address": null,
                        "burned": null
                    }
                ]
            }
        ],
        "pagination": null
    },
    "error": false,
    "error_message": null,
    "error_code": null
}]
console.log("code begins");

let apiData = info[0].data.items.map((data) => data);

let cryptoData = apiData.filter((data) => {
    return data.type === "cryptocurrency"
});

let nftData = apiData.filter((data) => {
    return data.type === "nft"
});

console.log("cryptoData");
console.log(cryptoData);
console.log("nftData");
console.log(nftData);
console.log("fetchedData");
fetchedData();

// const API_KEY = ckey_47958ac13e574573ab569f046e9

// https://api.covalenthq.com/v1/8217/address/0x6266e51861e9a0643f2ad8c7be069de6c799d621/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_47958ac13e574573ab569f046e9