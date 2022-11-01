import React, { useState } from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import CoinBubble from "./CoinBubble/CoinBubble";

function BubbleTab() {
  let allBubbles;
  const [bubbleQuery] = useQueries({
    queries: [
      {
        queryKey: ["marketData"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
    ],
  });

  if (bubbleQuery.isLoading) {
    return <h1>hgh</h1>;
  } else {
    allBubbles = bubbleQuery.data;

    return (
      <>
        <div className="mt-20 flex h-full w-full flex-wrap ">
          {allBubbles.map((bubble) => {
            return (
              <CoinBubble
                name={bubble.symbol}
                image={bubble.image}
                change={bubble.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default BubbleTab;
