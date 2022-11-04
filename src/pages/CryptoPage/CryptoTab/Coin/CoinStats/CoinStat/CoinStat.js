import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import CoinChart from "./CoinChart/CoinChart";
import CoinHeader from "./CoinHeader/CoinHeader";
import CardLoadingState from "../../../../../LandingPage/Main/Cards/Card/CardLoadingState";

function CoinStat({ coin }) {
  const [
    coinStatQuery,
    dailyChartQuery,
    weeklyChartQuery,
    monthlyChartQuery,
    threeMonthChartQuery,
    maxChartQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ["marketData"],
        queryFn: () =>
          axios
            .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
            .then((res) => res.data),
      },
      {
        queryKey: ["dailyChart"],
        queryFn: () =>
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1&interval=hourly`
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["weeklyChart"],
        queryFn: () =>
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7&interval=hourly`
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["monthlyChart"],
        queryFn: () =>
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=30&interval=hourly`
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["threeMonthChart"],
        queryFn: () =>
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=90&interval=daily`
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["maxChart"],
        queryFn: () =>
          axios
            .get(
              `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=max&interval=daily`
            )
            .then((res) => res.data),
      },
    ],
  });

  if (
    coinStatQuery.isLoading ||
    dailyChartQuery.isLoading ||
    weeklyChartQuery.isLoading ||
    monthlyChartQuery.isLoading ||
    threeMonthChartQuery.isLoading ||
    maxChartQuery.isLoading
  ) {
    return (
      <>
        <div className="mt-20">
          <div className="my-2">
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-20 flex">
          {<CoinHeader coin={coin} coinStats={coinStatQuery.data} />}
          <CoinChart
            coin={coin}
            dailyChart={dailyChartQuery.data}
            weeklyChart={weeklyChartQuery.data}
            monthlyChart={monthlyChartQuery.data}
            threeMonthChart={threeMonthChartQuery.data}
            maxChart={maxChartQuery.data}
          />
        </div>
      </>
    );
  }
}

export default CoinStat;
