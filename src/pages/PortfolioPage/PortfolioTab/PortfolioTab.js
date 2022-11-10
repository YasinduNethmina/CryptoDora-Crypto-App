import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddTransaction from "./AddTransaction/AddTransaction";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import DeleteIcon from "@mui/icons-material/Delete";

function PortfolioTab() {
  const [symbolArray, setSymbolArray] = useState([]);
  const [quantityArray, setQuantityArray] = useState([]);
  const [spentArray, setSpentArray] = useState([]);
  const [priceArray, setPriceArray] = useState([]);
  const [coinIndexArray, setCoinIndexArray] = useState([]);

  // Used to get data from child components (AddTransaction)
  const dataFromChild = (symbol, quantity, spent, price, coinIndex) => {
    setSymbolArray((prev) => [...prev, symbol]);
    setQuantityArray((prev) => [...prev, quantity]);
    setSpentArray((prev) => [...prev, spent]);
    setPriceArray((prev) => [...prev, price]);
    setCoinIndexArray((prev) => [...prev, coinIndex]);
  };

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

  if (coinsQuery.isLoading) {
    return;
  } else if (coinsQuery.error) {
    return;
  } else {
    // Store all required prices of all added transactions
    let filteredCoinPrices = [];
    coinIndexArray.map((i) => {
      filteredCoinPrices.push(coinsQuery.data[i].current_price);
    });

    // Store all required price change values of all added transactions
    let filtered24Change = [];
    coinIndexArray.map((i) => {
      filtered24Change.push(coinsQuery.data[i].price_change_percentage_24h);
    });

    //Store all required profit loss values of all added transactions
    let profitArray = [];
    coinIndexArray.map((i) => {
      let quantity = Number(quantityArray[i]);
      let coinPrice = Number(coinsQuery.data[i].current_price);
      let profit = coinPrice * quantity - spentArray[i];
      profitArray.push(profit);
    });

    const handleDelete = () => {
      let elVal = Number(document.querySelector(".deleteBtn").value);

      let symbolRemoveIndex = symbolArray.indexOf(elVal);
      let quantityRemoveIndex = quantityArray.indexOf(elVal);
      let spentRemoveIndex = spentArray.indexOf(elVal);
      let priceRemoveIndex = priceArray.indexOf(elVal);
      let removeIndex = coinIndexArray.indexOf(elVal);

      setSymbolArray(symbolArray.splice(symbolRemoveIndex, 1));
      setQuantityArray(quantityArray.slice(quantityRemoveIndex, 1));
      setSpentArray(spentArray.slice(spentRemoveIndex, 1));
      setPriceArray(priceArray.slice(priceRemoveIndex, 1));
      setCoinIndexArray(coinIndexArray.slice(removeIndex, 1));
    };

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
              <div className="">
                <h6>Name</h6>
                {symbolArray.map((symbol) => {
                  return (
                    <h4 className="mt-4 text-white">
                      {String(symbol.toUpperCase())}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6 className="ml-4">Price</h6>
                {filteredCoinPrices.map((price) => {
                  return <h4 className="mt-4 text-white">${price}</h4>;
                })}
              </div>

              <div>
                <h6>24h Change(%)</h6>
                {filtered24Change.map((change) => {
                  return (
                    <h4
                      className={
                        change > 0
                          ? "mt-4 mr-4 text-center text-green-500"
                          : "mt-4 mr-4 text-center text-red-500"
                      }
                    >
                      {change.toFixed(2)}%
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Holdings</h6>
                {quantityArray.map((quantity) => {
                  return (
                    <h4 className="mt-4 mr-2 text-center text-white">
                      {quantity}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>AVG. Buy Price</h6>
                {priceArray.map((price) => {
                  return <h4 className="ml-4 mt-4 text-white">${price}</h4>;
                })}
              </div>

              <div>
                <h6>Profit/Loss</h6>
                {profitArray.map((profit) => {
                  return (
                    <h4
                      className={
                        Number(profit) >= 0
                          ? "relative right-1 mt-4 mr-1 text-green-500"
                          : "relative right-1 mt-4 text-red-500"
                      }
                    >
                      ${Number(profit).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Actions</h6>
                {coinIndexArray.map((index) => {
                  return (
                    <div>
                      <button
                        onClick={handleDelete}
                        value={index}
                        className="deleteBtn mt-3 ml-5 text-red-500 transition-all hover:scale-125 hover:animate-pulse"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioTab;
