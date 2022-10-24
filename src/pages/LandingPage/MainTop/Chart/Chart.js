import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import CurrencyDropdown from "./CurrencyDropdown/CurrencyDropdown";
import CryptoDropdown from "./CryptoDropdown/CryptoDropdown";
import "./Chart.scss";

function Chart({
  dailyChart,
  weeklyChart,
  monthlyChart,
  threeMonthChart,
  maxChart,
}) {
  const [bitcoinPrice, setBitcoinPrice] = useState(" Default Value ");
  const [currencySymbol, setCurrencySymbol] = useState("usd");

  let dailyChartMap = dailyChart.prices.map((price) => {
    return price[1]; //price[1] because it's the one returns the value
  });

  let weeklyChartMap = weeklyChart.prices.map((price) => {
    return price[1]; //price[1] because it's the one returns the value
  });

  let monthlyChartMap = monthlyChart.prices.map((price) => {
    return price[1]; //price[1] because it's the one returns the value
  });

  let threeMonthChartMap = threeMonthChart.prices.map((price) => {
    return price[1];
  });

  let maxChartMap = maxChart.prices.map((price) => {
    return price[1];
  });

  let allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let oneDayArray = []; //store 24 hours
  let oneWeekArray = [
    //store 7 days with empty arrays, to display all 168 data
    "Sunday",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Monday",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Tuesday",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Wednesday",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Thursday",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Friday",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Saturday",
  ];
  let oneMonthArray = [];
  let threeMonthArray = [];
  let maxArray = [];

  const startDate = new Date();

  //Hourly Chart configuration
  let startTime = startDate.getHours();
  for (let i = 0; i < 24; i++) {
    if (i % 2 === 0) {
      oneDayArray.push(startTime);
      startTime++;
    } else if (startTime >= 23) {
      startTime = 0;
    } else {
      oneDayArray.push("");
    }
  }

  //used to add zeros and beautify the time
  let newOneDayArray = oneDayArray.map((hour) => {
    if (hour < 10 && hour >= 1) {
      return "0" + hour + ":00";
    } else if (hour <= 0) {
      return "";
    } else {
      return hour + ":00";
    }
  });

  //one month
  let dateModulo = startDate.getDate();
  for (let i = 0; i <= 720; i++) {
    if (i === 0) {
      oneMonthArray.push(allMonths[[startDate.getMonth() - 1]]);
    } else if (i === 720) {
      oneMonthArray.push(allMonths[[startDate.getMonth()]]);
    } else if (i % 48 === 0 && dateModulo < 30) {
      oneMonthArray.push((dateModulo += 2));
    } else if (i % 48 === 0) {
      dateModulo = 0;
      oneMonthArray.push((dateModulo += 2));
    } else {
      oneMonthArray.push(""); //used to add fake empty strings to fill out 720 count of labels
    }
  }

  //3 month
  for (let i = 0; i <= 90; i++) {
    if (i === 0) {
      threeMonthArray.push(allMonths[startDate.getMonth() - 3]);
    } else if (i === 30) {
      threeMonthArray.push(allMonths[startDate.getMonth() - 2]);
    } else if (i === 60) {
      threeMonthArray.push(allMonths[startDate.getMonth() - 1]);
    } else if (i === 90) {
      threeMonthArray.push(allMonths[startDate.getMonth()]);
    } else {
      threeMonthArray.push("");
    }
  }

  //max
  let yearValue = new Date().getFullYear() - 9;
  for (let i = 0; i <= 3650; i++) {
    if (i % 365 === 0) {
      maxArray.push(yearValue++);
    } else {
      maxArray.push("");
    }
  }

  //Chart Js Config
  const oneDayData = {
    labels: [...newOneDayArray],
    datasets: [
      {
        data: [...dailyChartMap],
        fill: true,
        backgroundColor: "#3a6ff805",
        borderColor: "#3A6FF8",
        pointBorderColor: "transparent",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  console.log("day", ...oneDayArray);

  const oneWeekData = {
    labels: [...oneWeekArray],
    datasets: [
      {
        data: [...weeklyChartMap],
        fill: true,
        backgroundColor: "#3a6ff805",
        borderColor: "#3A6FF8",
        pointBorderColor: "transparent",
        borderWidth: 2,
        tension: 0,
      },
    ],
  };

  const oneMonthData = {
    labels: [...oneMonthArray],
    datasets: [
      {
        data: [...monthlyChartMap],
        fill: true,
        backgroundColor: "#3a6ff805",
        borderColor: "#3A6FF8",
        pointBorderColor: "transparent",
        borderWidth: 2,
        tension: 0,
      },
    ],
  };

  const threeMonthData = {
    labels: [...threeMonthArray],
    datasets: [
      {
        data: [...threeMonthChartMap],
        fill: true,
        backgroundColor: "#3a6ff805",
        borderColor: "#3A6FF8",
        pointBorderColor: "transparent",
        borderWidth: 2,
        tension: 0,
      },
    ],
  };

  const maxData = {
    labels: [...maxArray],
    datasets: [
      {
        data: [...maxChartMap],
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

        ticks: {
          autoSkip: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
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
          <div className="mx-6 flex items-center">
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

            <h1 className="ml-1 text-xl font-semibold text-white">
              {currencySymbol} &nbsp;
              {bitcoinPrice}
            </h1>
          </div>

          {/* Chart Switch Section */}
          <div className="mr-5 flex w-2/3 justify-around">
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1d
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1w
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              1m
            </button>
            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              3m
            </button>

            <button className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-[#3A6FF8] hover:text-[#ffff]">
              max
            </button>
          </div>
        </div>
        {/* Chart */}
        <div className="my-5 mx-5">
          <Line data={oneDayData} options={options} />
        </div>
        <div className="my-5 mx-5">
          <Line data={oneWeekData} options={options} />
        </div>
        <div className="my-5 mx-5">
          <Line data={oneMonthData} options={options} />
        </div>
        <div className="my-5 mx-5">
          <Line data={threeMonthData} options={options} />
        </div>
        <div className="my-5 mx-5">
          <Line data={maxData} options={options} />
        </div>
      </div>
    </>
  );
}

export default Chart;
