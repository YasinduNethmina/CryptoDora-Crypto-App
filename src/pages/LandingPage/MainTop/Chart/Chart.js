import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import CurrencyDropdown from "./CurrencyDropdown/CurrencyDropdown";
import CryptoDropdown from "./CryptoDropdown/CryptoDropdown";

function Chart() {
  const [bitcoinPrice, setBitcoinPrice] = useState(" Default Value ");
  const [currencySymbol, setCurrencySymbol] = useState("usd");

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        data: [12, 19, 2, 5, 29],
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
        borderColor: "red",
      },
    ],
  };

  return (
    <>
      <div className="mt-5 h-full w-11/12 rounded-xl bg-[#1B2028]">
        <div className="flex justify-between">
          <h1 className="p-8 text-xl font-semibold text-white">Chart</h1>
          <div className="mr-8 flex items-center">
            {/* Candle Type Switch Section */}

            <button className="">
              <CandlestickChartOutlinedIcon
                style={{ width: "1.6rem", height: "1.6rem" }}
                className="mr-4 rounded-md text-[#9E9E9E] hover:text-green-400"
              />
            </button>

            {/* Currency DropDown */}
            <CurrencyDropdown
              setBitcoinPrice={setBitcoinPrice}
              setCurrencySymbol={setCurrencySymbol}
            />
          </div>
        </div>

        {/* Crypto DropDown */}
        <div className="flex items-center justify-between pl-8">
          <div className="w-1/3 justify-start">
            <CryptoDropdown />

            <h1 className="mt-2 ml-1 text-xl font-semibold text-white">
              {currencySymbol} &nbsp;
              {bitcoinPrice}
            </h1>
          </div>

          {/* Chart Switch Section */}
          <div className="flex w-2/3  justify-around">
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1h
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              4h
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1d
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1w
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1m
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="">
          <Bar data={data} />
        </div>
      </div>
    </>
  );
}

export default Chart;
