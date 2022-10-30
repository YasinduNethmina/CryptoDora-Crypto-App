import React, { createContext } from "react";
import Cards from "./Cards/Cards";
import "./Main.scss";
import Chart from "./Chart/Chart";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import CardLoadingState from "./Cards/Card/CardLoadingState";
import Stats from "./Stats/Stats";
import { Navigate } from "react-router-dom";
import ChartLoadingState from "./Chart/ChartLoadingState";
import Market from "./Market/Market";
import News from "./News/News";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Partners from "./Partners/Partners";
import NewsLoadingState from "./News/NewsLoadingState/NewsLoadingState";

export const coinPriceContext = createContext();

function Main() {
  const [
    statsQuery,
    ethGasQuery,
    cardsQuery,
    randomNumberQuery,
    flagCodeQuery,
    dailyChartQuery,
    weeklyChartQuery,
    monthlyChartQuery,
    threeMonthChartQuery,
    maxChartQuery,
    marketQuery,
    newsQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ["stats"],
        queryFn: () =>
          axios
            .get("https://api.coingecko.com/api/v3/global")
            .then((res) => res.data),
      },
      {
        queryKey: ["ethGas"],
        queryFn: () =>
          axios
            .get("https://ethgasstation.info/api/ethgasAPI.json?")
            .then((res) => res.data),
      },
      {
        queryKey: ["cards"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cripple%2Cdogecoin%2Ccardano%2Cpolkadot%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=2"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["randomNumber"],
        queryFn: () =>
          axios
            .get("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=1")
            .then((res) => res.data),
      },
      {
        queryKey: ["flag"],
        queryFn: () =>
          axios.get("http://ip-api.com/json").then((res) => res.data),
      },
      {
        queryKey: ["dailyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["weeklyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=hourly"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["monthlyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=hourly"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["threeMonthChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=90&interval=daily"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["maxChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["market"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["news"],
        queryFn: () =>
          axios
            .get(
              "https://newsapi.org/v2/everything?language=en&from=2022-10-20&to=2024-01-01&domains=coindesk.com&sortBy=popularity&pageSize=30&apiKey=56591b716be3406fa65c0b587fbd74c0"
            )
            .then((res) => res.data),
      },
    ],
  });

  const isLoading =
    statsQuery.isLoading ||
    ethGasQuery.isLoading ||
    cardsQuery.isLoading ||
    randomNumberQuery.isLoading ||
    flagCodeQuery.isLoading ||
    dailyChartQuery.isLoading ||
    weeklyChartQuery.isLoading ||
    monthlyChartQuery.isLoading ||
    threeMonthChartQuery.isLoading ||
    maxChartQuery.isLoading ||
    marketQuery.isLoading ||
    newsQuery.isLoading;

  const isError =
    statsQuery.error ||
    ethGasQuery.error ||
    cardsQuery.error ||
    randomNumberQuery.error ||
    flagCodeQuery.error ||
    dailyChartQuery.error ||
    weeklyChartQuery.error ||
    monthlyChartQuery.error ||
    threeMonthChartQuery.error ||
    maxChartQuery.error ||
    marketQuery.error ||
    newsQuery.error;

  if (isLoading)
    return (
      <div className="cards-section overflow-hidden">
        <Stats loadingState={isLoading ? true : false} />
        {/* Cards Loading State */}
        <div className="cards flex justify-between">
          <CardLoadingState
            img={require("../../../assets/images/loading-state-bar.png")}
          />
          <CardLoadingState
            img={require("../../../assets/images/loading-state-bar.png")}
          />
          <CardLoadingState
            img={require("../../../assets/images/loading-state-bar.png")}
          />
        </div>
        <ChartLoadingState />
        <NewsLoadingState />
      </div>
    );
  else if (isError) return <Navigate to="*" />;
  else {
    return (
      <>
        <Cards
          stats={statsQuery.data.data}
          gas={ethGasQuery.data}
          cards={cardsQuery.data}
          randomNumber={randomNumberQuery}
        />
        <div className="flex justify-center">
          <coinPriceContext.Provider
            value={[cardsQuery.data, flagCodeQuery.data]} //used to get btc price for currencydropdown
          >
            <Chart
              dailyChart={dailyChartQuery.data}
              weeklyChart={weeklyChartQuery.data}
              monthlyChart={monthlyChartQuery.data}
              threeMonthChart={threeMonthChartQuery.data}
              maxChart={maxChartQuery.data}
            />
          </coinPriceContext.Provider>
        </div>
        <div className="flex justify-center">
          <Market list={marketQuery.data} />
        </div>
        <News newsData={newsQuery.data} />

        {/* Show More button */}
        <div className="my-10 flex justify-center">
          {" "}
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show More <ExpandMoreIcon />
          </button>
        </div>

        {/* Partners */}
        <div>
          <Partners />
        </div>
      </>
    );
  }
}

export default Main;
