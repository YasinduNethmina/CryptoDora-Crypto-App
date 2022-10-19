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
    <div className="w-11/12 h-full bg-[#1B2028] rounded-xl mt-5">
      <div className="flex justify-between">
        <h1 className="text-xl text-white font-semibold p-8">Chart</h1>
        <div className="flex mt-7 mr-8 items-start">
          {/* Candle Type Switch Section */}
          <button className="">
            <CandlestickChartOutlinedIcon
              style={{ width: "1.6rem", height: "1.6rem" }}
              className="text-[#9E9E9E] hover:text-[#E4E4E4] rounded-md mr-4"
            />
          </button>

          {/* Currency Switch Section */}
          <button
            onClick={handleCurrencyDropDown}
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="flex justify-between w-24 h-8 text-[#9E9E9E] hover:text-[#E4E4E4] rounded-md"
          >
            <AttachMoneyIcon className="bg-[#FFC01E] text-gray-900 rounded-full" />
            <h1 className="mx-2">USD</h1>
            <ArrowDropDownIcon />
          </button>

          {/* Currency DropDown */}
          <div
            className={
              currencyDropDown
                ? "hidden"
                : "visible flex flex-col absolute right-76 ml-6 mt-10 rounded-md bg-[#31353f] focus:border-none text-[#9E9E9E] px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            }
          >
            <button className="hover:bg-[#3A6FF8] hover:text-white hover:rounded px-4">
              <AttachMoney className="bg-[#FFC01E] text-gray-900 rounded-full mr-2 my-2" />
              USD
            </button>
            <button className="hover:bg-[#3A6FF8] hover:text-white hover:rounded px-4">
              <EuroIcon className="bg-blue-400 text-gray-900 rounded-full mr-2 my-2" />
              EUR
            </button>
            <button className="hover:bg-[#3A6FF8] hover:text-white hover:rounded px-4">
              <CurrencyYenIcon className="bg-red-400 text-gray-900 rounded-full mr-2 my-2" />
              Yen
            </button>
          </div>
        </div>
      </div>

      {/* Crypto Switch Section */}
      <div className="flex justify-between items-center pl-8">
        <div className="w-1/3">
          <button onClick={handleCryptoDropDown}>
            <h4 className="text-[#9E9E9E] hover:text-[#E4E4E4] mb-1">
              Bitcoin/BTC <ArrowDropDownIcon />
            </h4>
          </button>
          <div
            className={
              cryptoDropDown
                ? "hidden"
                : "visible flex flex-col absolute right-76 ml-6 mt-10 rounded-md bg-[#31353f] focus:border-none text-[#9E9E9E] px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            }
          >
            <button className="hover:bg-[#3A6FF8] hover:text-white hover:rounded px-4">
              <CurrencyBitcoinIcon className="bg-[#FFC01E] text-gray-900 rounded-full mr-2 my-2" />
              BTC
            </button>
            <button className="hover:bg-[#3A6FF8] hover:text-white hover:rounded px-4">
              <EuroIcon className="bg-blue-400 text-gray-900 rounded-full mr-2 my-2" />
              ETH
            </button>
            <button className="hover:bg-[#3A6FF8] hover:text-white hover:rounded px-4">
              <CurrencyYenIcon className="bg-red-400 text-gray-900 rounded-full mr-2 my-2" />
              Yen
            </button>
          </div>
          <h1 className="text-white font-semibold text-xl">19,257</h1>
        </div>

        {/* Chart Switch Section */}
        <div className="w-2/3 flex  justify-around">
          <button className="text-[#E4E4E4] hover:text-[#ffff] bg-[#3A6FF8] hover:bg-sky-700 rounded-full w-16 h-8">
            1h
          </button>
          <button className="text-[#E4E4E4] hover:text-[#ffff] bg-[#3A6FF8] hover:bg-sky-700 rounded-full w-16 h-8">
            4h
          </button>
          <button className="text-[#E4E4E4] hover:text-[#ffff] bg-[#3A6FF8] hover:bg-sky-700 rounded-full w-16 h-8">
            1d
          </button>
          <button className="text-[#E4E4E4] hover:text-[#ffff] bg-[#3A6FF8] hover:bg-sky-700 rounded-full w-16 h-8">
            1w
          </button>
          <button className="text-[#E4E4E4] hover:text-[#ffff] bg-[#3A6FF8] hover:bg-sky-700 rounded-full w-16 h-8">
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
