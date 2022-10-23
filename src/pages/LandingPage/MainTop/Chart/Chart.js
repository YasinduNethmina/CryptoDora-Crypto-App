import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import CurrencyDropdown from "./CurrencyDropdown/CurrencyDropdown";
import CryptoDropdown from "./CryptoDropdown/CryptoDropdown";

function Chart({ hourlyChart }) {
  const [bitcoinPrice, setBitcoinPrice] = useState(" Default Value ");
  const [currencySymbol, setCurrencySymbol] = useState("usd");

  let hourlyChartMap = hourlyChart.prices.map((price) => {
    return price[1]; //price[1] because it's the one returns the value
  });

  let timeArray = []; //store all hours
  let startTime = new Date().getHours(); //now time

  //Chart Hours Configuration
  for (let i = 0; i < 24; i++) {
    if (startTime < 10) {
      timeArray[i] = `0${startTime}:00`;
      startTime++;
    } else if (startTime >= 10 && startTime < 24) {
      timeArray[i] = `${startTime}:00`;
      startTime++;
    } else if (startTime === 24) {
      startTime = 0;
      timeArray[i] = `0${startTime}:00`;
      startTime++;
    }
  }

  //Chart Js Config
  const data = {
    labels: [...timeArray],
    datasets: [
      {
        data: [...hourlyChartMap],
        fill: true,
        backgroundColor: "#3a6ff805",
        borderColor: "#3A6FF8",
        pointBorderColor: "transparent",
        borderWidth: 2,
        tension: 0,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
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

            <h1 className=" ml-1 text-xl font-semibold text-white">
              {currencySymbol} &nbsp;
              {bitcoinPrice}
            </h1>
          </div>

          {/* Chart Switch Section */}
          <div className="flex w-2/3 justify-around">
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
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Chart;
