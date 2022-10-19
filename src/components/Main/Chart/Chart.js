import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoney from "@mui/icons-material/AttachMoney";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

function Chart() {
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

  const [currencyDropDown, setCurrencyDropDown] = useState(true);
  const [cryptoDropDown, setCryptoDropDown] = useState(true);

  const handleCurrencyDropDown = () => {
    setCurrencyDropDown(!currencyDropDown);
  };

  const handleCryptoDropDown = () => {
    setCryptoDropDown(!cryptoDropDown);
  };

  return (
    <div className="mt-5 h-full w-11/12 rounded-xl bg-[#1B2028]">
      <div className="flex justify-between">
        <h1 className="p-8 text-xl font-semibold text-white">Chart</h1>
        <div className="mt-7 mr-8 flex items-start">
          {/* Candle Type Switch Section */}
          <button className="">
            <CandlestickChartOutlinedIcon
              style={{ width: "1.6rem", height: "1.6rem" }}
              className="mr-4 rounded-md text-[#9E9E9E] hover:text-[#E4E4E4]"
            />
          </button>

          {/* Currency Switch Section */}
          <button
            onClick={handleCurrencyDropDown}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="flex h-8 w-24 justify-between rounded-md text-[#9E9E9E] hover:text-[#E4E4E4]"
          >
            <AttachMoneyIcon className="rounded-full bg-[#FFC01E] text-gray-900" />
            <h1 className="mx-2">USD</h1>
            <ArrowDropDownIcon />
          </button>

          {/* Currency DropDown */}
          <div
            className={
              currencyDropDown
                ? "hidden"
                : "right-76 visible absolute ml-6 mt-10 flex flex-col rounded-md bg-[#31353f] px-4 py-2 text-sm font-medium text-[#9E9E9E] shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            }
          >
            <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
              <AttachMoney className="my-2 mr-2 rounded-full bg-[#FFC01E] text-gray-900" />
              USD
            </button>
            <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
              <EuroIcon className="my-2 mr-2 rounded-full bg-blue-400 text-gray-900" />
              EUR
            </button>
            <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
              <CurrencyYenIcon className="my-2 mr-2 rounded-full bg-red-400 text-gray-900" />
              Yen
            </button>
          </div>
        </div>
      </div>

      {/* Crypto Switch Section */}
      <div className="flex items-center justify-between pl-8">
        <div className="w-1/3">
          <button onClick={handleCryptoDropDown}>
            <h4 className="mb-1 text-[#9E9E9E] hover:text-[#E4E4E4]">
              Bitcoin/BTC <ArrowDropDownIcon />
            </h4>
          </button>
          <div
            className={
              cryptoDropDown
                ? "hidden"
                : "right-76 visible absolute ml-6 mt-10 flex flex-col rounded-md bg-[#31353f] px-4 py-2 text-sm font-medium text-[#9E9E9E] shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            }
          >
            <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
              <CurrencyBitcoinIcon className="my-2 mr-2 rounded-full bg-[#FFC01E] text-gray-900" />
              BTC
            </button>
            <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
              <EuroIcon className="my-2 mr-2 rounded-full bg-blue-400 text-gray-900" />
              ETH
            </button>
            <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
              <CurrencyYenIcon className="my-2 mr-2 rounded-full bg-red-400 text-gray-900" />
              SOL
            </button>
          </div>
          <h1 className="text-xl font-semibold text-white">19,257</h1>
        </div>

        {/* Chart Switch Section */}
        <div className="flex w-2/3  justify-around">
          <button className="h-8 w-16 rounded-full bg-[#3A6FF8] text-[#E4E4E4] hover:bg-sky-700 hover:text-[#ffff]">
            1h
          </button>
          <button className="h-8 w-16 rounded-full bg-[#3A6FF8] text-[#E4E4E4] hover:bg-sky-700 hover:text-[#ffff]">
            4h
          </button>
          <button className="h-8 w-16 rounded-full bg-[#3A6FF8] text-[#E4E4E4] hover:bg-sky-700 hover:text-[#ffff]">
            1d
          </button>
          <button className="h-8 w-16 rounded-full bg-[#3A6FF8] text-[#E4E4E4] hover:bg-sky-700 hover:text-[#ffff]">
            1w
          </button>
          <button className="h-8 w-16 rounded-full bg-[#3A6FF8] text-[#E4E4E4] hover:bg-sky-700 hover:text-[#ffff]">
            1m
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="">
        <Bar data={data} />
      </div>
    </div>
  );
}

export default Chart;
