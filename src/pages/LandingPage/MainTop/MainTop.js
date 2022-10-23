import React, { createContext } from "react";
import Cards from "./Cards/Cards";
import "./MainTop.scss";
import Chart from "./Chart/Chart";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import CardLoadingState from "./Cards/Card/CardLoadingState";
import Stats from "./Stats/Stats";
import { Navigate } from "react-router-dom";

export const coinPriceContext = createContext();

function MainTop() {
  const [
    statsQuery,
    ethGasQuery,
    cardsQuery,
    randomNumberQuery,
    flagCodeQuery,
    hourlyChartQuery,
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
        queryKey: ["hourlyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly"
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
    hourlyChartQuery.isLoading;

  const isError =
    statsQuery.error ||
    ethGasQuery.error ||
    cardsQuery.error ||
    randomNumberQuery.error ||
    flagCodeQuery.error ||
    hourlyChartQuery.error;

  if (isLoading)
    return (
      <div className="cards-section">
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
            <Chart hourlyChart={hourlyChartQuery.data} />
          </coinPriceContext.Provider>
        </div>
      </>
    );
  }
}

export default MainTop;
