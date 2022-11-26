import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import Coin from "../../../CryptoPage/CryptoTab/Coin/Coin";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Market.scss";

function Market({ list }) {
  const [search, setSearch] = useState("");

  //had to get api Data in brute force due to limited api requests
  const [weeklyChartQuery] = useQueries({
    queries: [
      {
        queryKey: ["weeklyChart"],
        queryFn: () =>
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=hourly`
            )
            .then((res) => res.data),
      },
    ],
  });

  if (weeklyChartQuery.isLoading) {
    return;
  } else {
    const handleChange = (e) => {
      setSearch(e.target.value);
    };

    //used to get filtered results from search
    let filteredCoins = list.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    let allPrices = weeklyChartQuery.data.prices;

    let allPricesMap = [];
    allPrices.map((price) => {
      allPricesMap.push(price[1]);
    });

    let labelsArray = [];
    for (let i = 0; i <= 168; i++) {
      labelsArray.push("");
    }

    const chartData = {
      labels: [...labelsArray],
      datasets: [
        {
          data: [...allPricesMap],
          fill: true,
          backgroundColor: "#3a6ff805",
          borderColor: "#2dc451",
          pointBorderColor: "transparent",
          borderWidth: 2,
          tension: 0,
        },
      ],
    };

    //chart Js options (used this in all charts)
    const options = {
      tooltips: false,

      maintainAspectRatio: false,
      plugins: {
        legend: false, // Hide legend
        tooltip: {
          enabled: false, // <-- this option disables tooltips
        },
      },
      scales: {
        y: {
          display: false, // Hide Y axis labels
        },
        x: {
          display: false, // Hide X axis labels
        },
      },
    };

    return (
      <>
        <div className="market-box mb-5 mt-4 h-full w-11/12 justify-center rounded-xl bg-[#1B2028] dark:bg-[#fff] dark:shadow-xl">
          <div className="market-header flex items-center justify-between">
            <h1 className="market-heading-text p-8 text-xl font-semibold text-white dark:m-4 dark:rounded-xl dark:bg-[#ffd910] dark:px-2 dark:py-1 dark:text-black">
              Live Market
            </h1>
            <input
              placeholder="search for crypto"
              type="search"
              className="market-search-bar mr-10 rounded-xl border-2 border-sky-400 bg-[#1b2028] py-1 px-4 text-[#9e9e9e] outline-none focus:border-purple-500 dark:rounded-xl dark:border-none dark:border-black dark:bg-[#f4f5f7] dark:py-1 dark:px-2 dark:font-semibold dark:text-black"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6 flex w-full justify-around text-[#9e9e9e] dark:font-semibold dark:text-black">
            <h4 className="market-coin-heading relative left-4">Coin</h4>
            <h4 className="market-change-heading relative left-2">Change</h4>
            <h4 className="market-cap-heading relative right-6">M.Cap</h4>
            <h4 className="market-supply-heading relative right-8">Supply</h4>
            <h4 className="market-price-heading relative right-4">Price</h4>
            <h4 className="market-chart-heading relative right-4">Chart</h4>
          </div>

          {filteredCoins.slice(0, 8).map((coin) => {
            return (
              <Link to="/crypto-tab">
                <div className="coin-list flex items-center">
                  <div className="w-10/12">
                    <Coin
                      rank={coin.market_cap_rank}
                      name={String(coin.symbol).toUpperCase()}
                      image={coin.image}
                      change={coin.price_change_percentage_24h}
                      marketCap={coin.market_cap}
                      circulationSupply={coin.circulating_supply}
                      price={coin.current_price}
                    />
                  </div>
                  <div className="marketChart mr-4 h-12 w-2/12">
                    <Line data={chartData} options={options} />
                  </div>
                </div>
              </Link>
            );
          })}

          <Link to="/crypto-tab">
            <button className="w-full rounded-b-lg py-2 text-white hover:bg-[#3A6FF8] dark:font-semibold dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white">
              View More...
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Market;
