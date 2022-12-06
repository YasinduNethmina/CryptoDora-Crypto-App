import React, { useEffect } from "react";
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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  if (bubbleQuery.isLoading) {
    return (
      <div className="mt-20 h-full w-full animate-pulse rounded bg-[#1B2028] p-4"></div>
    );
  } else {
    allBubbles = bubbleQuery.data;

    return (
      <>
        <div className="mt-20 flex h-full w-full flex-wrap">
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
