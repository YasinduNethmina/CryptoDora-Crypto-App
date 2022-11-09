import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddTransaction from "./AddTransaction/AddTransaction";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

function PortfolioTab() {
  const [symbol, setSymbol] = useState();
  const [quantity, setQuantity] = useState();
  const [spent, setSpent] = useState();
  const [price, setPrice] = useState();
  const [coinsQuery] = useQueries({
    queries: [
      {
        queryKey: ["coinsData"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
    ],
  });

  const handleTransactionMenu = () => {
    document.querySelector(".addTransaction").classList.remove("hidden");
  };

  // Used to get data from child components (AddTransaction)
  const dataFromChild = (symbol, quantity, spent, price) => {
    setSymbol(symbol);
    setQuantity(quantity);
    setSpent(spent);
    setPrice(price);
  };
  console.log(symbol, quantity, spent, price);

  if (coinsQuery.isLoading) {
    return;
  } else {
    return (
      <>
        <div className="h-full w-full rounded bg-[#1B2028] p-4 text-[#9e9e9e]">
          <div className="addTransaction fixed left-1/3 flex hidden justify-center">
            <AddTransaction coins={coinsQuery} data={dataFromChild} />
          </div>

          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="ml-4">
              <h4>Current Balance</h4>
              <div className="flex items-center py-2">
                <h1 className="mr-4 text-4xl font-bold text-white">
                  $ 1,474.91
                </h1>
                <h4 className="rounded bg-green-500 py-1 pl-1 pr-2 text-center text-white">
                  <ArrowDropUpIcon /> 25.67%
                </h4>
              </div>
              <div className="flex items-center">
                <h4 className="text-green-600">+$301.93</h4>
                <h4 className="ml-4 rounded-lg border-2 px-2 text-white">
                  24h
                </h4>
              </div>
            </div>

            {/* Add crypto button */}
            <div>
              <button
                onClick={handleTransactionMenu}
                className="mr-4 rounded-lg bg-green-500 px-2 py-3 font-semibold text-white hover:bg-green-600"
              >
                <AddCircleIcon />
                &nbsp; Add Crypto
              </button>
            </div>
          </div>

          {/* Chart / Allocation / Stats Buttons */}
          <div className="ml-4 mt-8 flex text-white">
            <button className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700">
              Chart
            </button>
            <button className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700">
              Allocation
            </button>
            <button className="rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700">
              Statistics
            </button>
          </div>

          <div className="mt-4 h-72 bg-green-500"></div>
          <div className="mt-6">
            <h1 className="text-2xl font-semibold text-white">Your Assets</h1>

            {/* Name Tags */}
            <div className="mt-4 flex justify-between">
              <div>
                <h6>Name</h6>
              </div>

              <div>
                <h6>Price</h6>
              </div>

              <div>
                <h6>24h Change(%)</h6>
              </div>

              <div>
                <h6>Holdings</h6>
              </div>

              <div>
                <h6>AVG. Buy Price</h6>
              </div>

              <div>
                <h6>Profit/Loss</h6>
              </div>

              <div>
                <h6>Actions</h6>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioTab;
