import React from "react";
import Cards from "./Cards/Cards";
import "./MainTop.scss";
import Chart from "./Chart/Chart";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import CardLoadingState from "./Cards/CardLoadingState";
import Stats from "./Cards/Stats";
import { Navigate } from "react-router-dom";

function MainTop() {
  const [statsQuery, ethGasQuery, cardsQuery, randomNumberQuery] = useQueries({
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
    ],
  });

  const isLoading =
    statsQuery.isLoading ||
    ethGasQuery.isLoading ||
    cardsQuery.isLoading ||
    randomNumberQuery.isLoading;

  const isError =
    statsQuery.error ||
    ethGasQuery.error ||
    cardsQuery.error ||
    randomNumberQuery.error;

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
          <Chart />
        </div>
      </>
    );
  }
}

export default MainTop;
