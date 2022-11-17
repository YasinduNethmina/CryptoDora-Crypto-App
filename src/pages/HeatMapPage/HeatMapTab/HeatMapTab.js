import React, { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import Heatmap from "./Heatmap/Heatmap";

function HeatMapTab() {
  const [heatmapQuery] = useQueries({
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

  if (heatmapQuery.isLoading) {
    return (
      <div className="mt-20 h-full w-full animate-pulse rounded bg-[#1B2028] p-4 text-[#9e9e9e]"></div>
    );
  } else {
    return (
      <>
        <div className="heatmap mt-20 flex h-3/4 w-full flex-wrap ">
          <Heatmap data={heatmapQuery.data} />
        </div>
      </>
    );
  }
}

export default HeatMapTab;
