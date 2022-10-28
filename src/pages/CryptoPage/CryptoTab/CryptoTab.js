import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

function CryptoTab() {
  const [cryptoTabQuery] = useQueries({
    queries: [
      {
        queryKey: ["marketData"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
    ],
  });

  if (cryptoTabQuery.isLoading) {
    return <h1>Loading</h1>;
  } else {
    let coinImagesArray = [];
    let coinNamesArray = [];
    let coinsPriceChangePercentageArray = [];
    let coinsMarketCapArray = [];
    let coinsSupplyArray = [];
    let coinsPriceArray = [];

    for (let i = 0; i < 250; i++) {
      coinImagesArray[i] = cryptoTabQuery.data[i].image;
      coinNamesArray[i] = cryptoTabQuery.data[i].symbol;
      coinsPriceChangePercentageArray[i] =
        cryptoTabQuery.data[i].price_change_percentage_24h;
      coinsMarketCapArray[i] = cryptoTabQuery.data[i].market_cap;
      coinsSupplyArray[i] = cryptoTabQuery.data[i].circulating_supply;
      coinsPriceArray[i] = cryptoTabQuery.data[i].current_price;
    }

    return (
      <div className="mb-5 mt-24 h-full w-11/12 justify-center rounded-xl bg-[#1B2028]">
        <div className="flex items-center justify-between">
          <h1 className="p-8 text-xl font-semibold text-white">Live Market</h1>
          <button className="m-8 rounded-lg border-2 border-gray-500 px-2 py-1 text-[#9E9E9E] hover:border-gray-800 hover:bg-[#9E9E9E] hover:text-[#1b2028]">
            View More
          </button>
        </div>

        <div className="mx-8 mb-6 flex justify-between text-[#9e9e9e]">
          <h4>Coin</h4>
          <h4>Change</h4>
          <h4>MarketCap</h4>
          <h4>Circulating Supply</h4>
          <h4>Price</h4>
        </div>

        <div className="flex justify-between text-center text-white">
          <div className="flex">
            <div>
              {coinImagesArray.map((coinImg) => {
                return (
                  <img
                    src={coinImg}
                    className="mb-4 ml-4 w-6"
                    alt="coin-logo"
                  />
                );
              })}
            </div>
            <div>
              {coinNamesArray.map((coinName) => {
                return (
                  <h4 className="mb-4 ml-2">
                    {String(coinName).slice(0, 8).toUpperCase()}
                  </h4>
                );
              })}
            </div>
          </div>

          <div>
            {coinsPriceChangePercentageArray.map((coinChangeValue) => {
              if (coinChangeValue > 0) {
                return (
                  <h1 className="relative right-12 mb-4 text-green-500">
                    {coinChangeValue.toFixed(2)}%
                  </h1>
                );
              } else {
                return (
                  <h1 className="relative right-12 mb-4 text-red-500">
                    {coinChangeValue.toFixed(2)}%
                  </h1>
                );
              }
            })}
          </div>

          <div>
            {coinsMarketCapArray.map((coinMarketCapValue) => {
              return coinMarketCapValue > 10000000000 ? (
                <h1 className="relative right-12 mb-4 text-white">
                  {String(coinMarketCapValue).slice(0, 3)} B
                </h1>
              ) : (
                <h1 className="relative right-6 mb-4">
                  0{String(coinMarketCapValue).slice(0, 1)} B
                </h1>
              );
            })}
          </div>

          <div>
            {coinsSupplyArray.map((coinSupplyValue) => {
              if (coinSupplyValue > 1000000000) {
                return (
                  <h1 className="relative mb-4 text-white">
                    {Math.round(coinSupplyValue / 1000000000)}B
                  </h1>
                );
              } else {
                return (
                  <h1 className="relative mb-4 text-white">
                    {Math.round(coinSupplyValue / 1000000)}M
                  </h1>
                );
              }
            })}
          </div>

          <div className="">
            {coinsPriceArray.map((coinPrice) => {
              if (coinPrice >= 1) {
                return (
                  <h4 className="relative mb-4 pr-4 text-left">
                    ${coinPrice.toFixed(2)}
                  </h4>
                );
              } else {
                return (
                  <h4 className="relative mb-4 text-left">
                    ${coinPrice.toFixed(3)}
                  </h4>
                );
              }
            })}
          </div>
        </div>

        <button className="w-full rounded-b-lg py-2 text-white hover:bg-[#3A6FF8]">
          View More...
        </button>
      </div>
    );
  }
}

export default CryptoTab;
