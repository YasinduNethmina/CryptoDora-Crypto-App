import React, { useState, useEffect } from "react";
import axios from "axios";

function PortfolioChart({ coin }) {
  const [marketData, setMarketData] = useState([]);
  const [monthlyPricesArray, setMonthlyPricesArray] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then((res) => {
        setMarketData(res.data.prices);
      });
  }, [coin]);

  let monthlyPricesVar = [];
  for (let i = 0; i < 30; i++) {
    monthlyPricesVar[i] = marketData[i];
  }

  const handleMonthlyPrices = () => {
    setMonthlyPricesArray((prev) => [...prev, monthlyPricesVar]);
  };

  handleMonthlyPrices();

  console.log(monthlyPricesArray);

  return (
    <div>
      <h1 className="text-white">{coin}</h1>
    </div>
  );
}

export default PortfolioChart;
