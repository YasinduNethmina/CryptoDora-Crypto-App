import React from "react";
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

  if (heatmapQuery.isLoading) {
    return;
  } else {
    return (
      <>
        <div className="heatmap mt-20 flex h-screen w-full flex-wrap ">
          <Heatmap />
        </div>
      </>
    );
  }
}

export default HeatMapTab;
