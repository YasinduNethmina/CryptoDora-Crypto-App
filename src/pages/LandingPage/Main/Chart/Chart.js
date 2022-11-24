import React, { useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import CurrencyDropdown from "./CurrencyDropdown/CurrencyDropdown";
import CryptoDropdown from "./CryptoDropdown/CryptoDropdown";
import "./Chart.scss";

function Chart({
  //api data passed as props
  dailyChart,
  weeklyChart,
  monthlyChart,
  threeMonthChart,
  maxChart,
  cards,
  flags,
}) {
  //bitcoin current value assigned into this
  const [bitcoinPrice, setBitcoinPrice] = useState();

  //currency symbol gets from the api whenever the currency changes
  const [currencySymbol, setCurrencySymbol] = useState("usd");

  //All chart data mapping (received from api)
  let dailyChartMap = dailyChart.prices.map((price) => {
    return price[1]; //price[1] because it's the one returns the actual value
  });

  let weeklyChartMap = weeklyChart.prices.map((price) => {
    return price[1];
  });

  let monthlyChartMap = monthlyChart.prices.map((price) => {
    return price[1];
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

  let allWeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let oneDayArray = []; //store 24 hours that receieves from the loop
  let oneWeekArray = [];

  let oneMonthArray = [];
  let threeMonthArray = [];
  let maxArray = [];

  const startDate = new Date();

  //oneDay array chart labels setup
  let startTime = startDate.getHours();
  for (let i = 0; i <= 20; i++) {
    if (i === 0) {
      oneDayArray.push("Now");
    } else if (i % 2 === 0) {
      if (startTime <= 2) {
        oneDayArray.push("Yesterday");
        oneDayArray.push("");
        startTime = 22;
        oneDayArray.push(startTime);
        oneDayArray.push("");
        startTime -= 2;
        oneDayArray.push(startTime);
      } else {
        startTime -= 2;
        oneDayArray.push(startTime);
      }
    } else {
      oneDayArray.push("");
    }
  }

  //used to add zeros and beautify the time in oneDay array (then returned and passed the new values in newOneDayArray to chart)
  let newOneDayArray = oneDayArray.map((hour) => {
    if (hour < 10 && hour >= 1) {
      return "0" + hour + ":00";
    } else if (hour <= 0) {
      return "";
    } else if (hour >= 10 && hour <= 23) {
      return hour + ":00";
    } else {
      return hour;
    }
  });

  //oneWeek array chart labels setup
  let day = startDate.getDay();
  for (let i = 0; i <= 168; i++) {
    if (i === 168) {
      oneWeekArray.push("Today");
    }
    if (i % 24 === 0 && day <= 5 && i < 168) {
      oneWeekArray.push(allWeekDays[day]);
      day++;
    } else if (i % 24 === 0 && day === 6 && i < 168) {
      oneWeekArray.push(allWeekDays[day]);
      day = 0;
    } else {
      oneWeekArray.push("");
    }
  }

  //oneMonth array chart labels setup
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

  //threeMonth array chart labels setup
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

  //max array chart labels setup
  let yearValue = new Date().getFullYear() - 9;
  for (let i = 0; i <= 3650; i++) {
    if (i % 365 === 0) {
      maxArray.push(yearValue++);
    } else {
      maxArray.push("");
    }
  }

  //Chart Js data
  const oneDayData = {
    labels: [...newOneDayArray.reverse()],
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

  //chart Js options (used this in all charts)
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

  //chart button handlers
  const handleDayChart = () => {
    document.querySelector(".dayChart").classList.remove("hidden");
    document.querySelector(".oneWeekChart").classList.add("hidden");
    document.querySelector(".oneMonthChart").classList.add("hidden");
    document.querySelector(".threeMonthChart").classList.add("hidden");
    document.querySelector(".maxChart").classList.add("hidden");
  };

  const handleWeekChart = () => {
    document.querySelector(".dayChart").classList.add("hidden");
    document.querySelector(".oneWeekChart").classList.remove("hidden");
    document.querySelector(".oneMonthChart").classList.add("hidden");
    document.querySelector(".threeMonthChart").classList.add("hidden");
    document.querySelector(".maxChart").classList.add("hidden");
  };

  const handleMonthChart = () => {
    document.querySelector(".dayChart").classList.add("hidden");
    document.querySelector(".oneWeekChart").classList.add("hidden");
    document.querySelector(".oneMonthChart").classList.remove("hidden");
    document.querySelector(".threeMonthChart").classList.add("hidden");
    document.querySelector(".maxChart").classList.add("hidden");
  };

  const handleThreeMonthChart = () => {
    document.querySelector(".dayChart").classList.add("hidden");
    document.querySelector(".oneWeekChart").classList.add("hidden");
    document.querySelector(".oneMonthChart").classList.add("hidden");
    document.querySelector(".threeMonthChart").classList.remove("hidden");
    document.querySelector(".maxChart").classList.add("hidden");
  };

  const handleMaxChart = () => {
    document.querySelector(".dayChart").classList.add("hidden");
    document.querySelector(".oneWeekChart").classList.add("hidden");
    document.querySelector(".oneMonthChart").classList.add("hidden");
    document.querySelector(".threeMonthChart").classList.add("hidden");
    document.querySelector(".maxChart").classList.remove("hidden");
  };

  //activeRef used to focus the chart button
  const activeRef = useRef(null);
  useEffect(() => {
    activeRef.current.focus();
  }, []);

  return (
    <>
      <div className="chart-box mt-5 h-full w-11/12 rounded-xl bg-[#1B2028] dark:bg-[#fff] dark:text-black dark:shadow-lg">
        <div className="chart-header flex justify-between">
          <h1 className="p-8 text-xl font-semibold text-white dark:m-4 dark:rounded-xl dark:bg-[#ffd910] dark:px-2 dark:py-1 dark:font-semibold dark:text-black">
            Chart
          </h1>
          <div className="mx-6 flex items-center">
            {/* Candle Type Switch Section */}

            <button className="">
              <CandlestickChartOutlinedIcon
                style={{ width: "1.6rem", height: "1.6rem" }}
                className="mr-4 rounded-md text-[#9E9E9E] hover:text-green-400 dark:m-2 dark:rounded-full dark:text-[#00cccb]"
              />
            </button>

            {/* Currency DropDown */}
            <CurrencyDropdown
              cards={cards}
              flags={flags}
              setBitcoinPrice={setBitcoinPrice}
              setCurrencySymbol={setCurrencySymbol}
            />
          </div>
        </div>
        {/* Crypto DropDown */}
        <div className="flex items-center justify-between pl-8">
          <div className="crypto-dropdown w-1/3 justify-start">
            <CryptoDropdown />

            <h1 className="chart-price ml-1 text-xl font-semibold text-white dark:mt-2 dark:text-[#00cccb]">
              {currencySymbol} &nbsp;
              {bitcoinPrice}
            </h1>
          </div>

          {/* Chart Switch Section */}
          <div className="chart-buttons mr-5 flex w-2/3 justify-around">
            <button
              className="chart-btn h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-[#00cccb] dark:font-semibold dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-[#fff]"
              onClick={handleDayChart}
            >
              1d
            </button>
            <button
              className="chart-btn focus-border-none h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] focus:outline-none dark:border-[#00cccb] dark:font-semibold dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-[#fff]"
              onClick={handleWeekChart}
              ref={activeRef}
            >
              1w
            </button>
            <button
              className="chart-btn h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-[#00cccb] dark:font-semibold dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-[#fff]"
              onClick={handleMonthChart}
            >
              1m
            </button>
            <button
              className="chart-btn h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-[#00cccb] dark:font-semibold dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-[#fff]"
              onClick={handleThreeMonthChart}
            >
              3m
            </button>

            <button
              className="chart-btn h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-[#00cccb] dark:font-semibold dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-[#fff]"
              onClick={handleMaxChart}
            >
              max
            </button>
          </div>
        </div>
        {/* Chart */}
        <div className="dayChart my-5 mx-5 hidden">
          <Line data={oneDayData} options={options} />
        </div>
        <div className="oneWeekChart my-5 mx-5 dark:text-black">
          <Line data={oneWeekData} options={options} />
        </div>
        <div className="oneMonthChart my-5 mx-5 hidden">
          <Line data={oneMonthData} options={options} />
        </div>
        <div className="threeMonthChart my-5 mx-5 hidden">
          <Line data={threeMonthData} options={options} />
        </div>
        <div className="maxChart my-5 mx-5 hidden">
          <Line data={maxData} options={options} />
        </div>
      </div>
    </>
  );
}

export default Chart;
