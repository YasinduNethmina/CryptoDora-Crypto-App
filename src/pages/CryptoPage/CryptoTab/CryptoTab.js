import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import Coin from "./Coin/Coin";

function CryptoTab() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const [cryptoTabQuery] = useQueries({
    queries: [
      {
        queryKey: ["cryptoTab"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
            )
            .then((res) => setCoins(res.data)),
      },
    ],
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  if (setCoins.length <= 0) {
    <div className="mt-20 h-full w-full animate-pulse rounded bg-[#1B2028] p-4 text-[#9e9e9e]"></div>;
  } else {
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <div className="crypto-tab mt-24 h-full justify-center rounded-xl bg-[#1B2028] dark:bg-white">
        <div className="flex items-center justify-between">
          <h1 className="p-8 text-xl font-semibold text-white dark:font-semibold dark:text-black">
            Live Market
          </h1>
          <input
            placeholder="search for crypto"
            type="search"
            className="crypto-tab-search mr-10 rounded-xl border-2 border-sky-400 bg-[#1b2028] py-1 px-4 text-[#9e9e9e] outline-none focus:border-purple-500 dark:border-[#00cccb] dark:bg-white dark:text-[#00cccb] dark:placeholder-[#00cccb] dark:shadow-lg"
            onChange={handleChange}
          />
        </div>

        <div className="crypto-tab-headings mb-6 flex justify-between text-[#9e9e9e] dark:text-black">
          <h4 className="crypto-tab-coin-text relative left-16">Coin</h4>
          <h4 className="crypto-tab-change-text relative left-16">Change(%)</h4>
          <h4 className="crypto-tab-mcap-text relative left-4">MarketCap</h4>
          <h4 className="crypto-tab-supply-text relative right-9">
            Circulating Supply
          </h4>
          <h4 className="crypto-tab-price-text relative right-12">Price</h4>
        </div>

        {filteredCoins.map((coin) => {
          return (
            <div className="w-full">
              <Coin
                id={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                image={coin.image}
                change={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
                circulationSupply={coin.circulating_supply}
                price={coin.current_price}
              />
              <button className="" onClick={handleScrollTop}></button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CryptoTab;
