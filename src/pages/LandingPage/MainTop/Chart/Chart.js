import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoney from "@mui/icons-material/AttachMoney";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import Dropdown from "./Dropdown";

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
              className="mr-4 rounded-md text-[#9E9E9E] hover:text-green-400"
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
          <Dropdown
            func={currencyDropDown}
            logo1={
              <AttachMoney className="my-2 mr-2 rounded-full bg-[#FFC01E] text-gray-900" />
            }
            logo2={
              <EuroIcon className="my-2 mr-2 rounded-full bg-red-400 text-gray-900" />
            }
            logo3={
              <CurrencyYenIcon className="my-2 mr-2 rounded-full bg-blue-400 text-gray-900" />
            }
            currencyName1="USD"
            currencyName2="EUR"
            currencyName3="Yen"
          />
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

          {/* Crypto DropDown */}
          <div className="relative bottom-10 left-12">
            <Dropdown
              func={cryptoDropDown}
              currencyName1="BTC"
              currencyName2="ETH"
              currencyName3="SOL"
            />
          </div>
          <h1 className="text-xl font-semibold text-white">19,257</h1>
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
  );
}

export default Chart;
