import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";

//had to make the chart component twice due to iterate error, (was not able to fix it yet!)
function CoinChart({
  coin,
  coinStats,
  dailyChart,
  weeklyChart,
  monthlyChart,
  threeMonthChart,
  maxChart,
}) {
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

  //chart Js options (used this in all charts)
  const options = {
    animation: {
      duration: 0,
    },
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

  //activeRef used to focus the chart button
  const activeRef = useRef(null);
  useEffect(() => {
    activeRef.current.focus();
  }, []);

  return (
    <>
      <div className="coin-chart rounded-xl bg-[#1B2028] dark:bg-white dark:shadow-lg">
        <h4 className="ml-6 mt-10 pt-4 text-2xl font-bold text-white dark:text-black">
          {String(coin).toUpperCase().slice(0, 1) + String(coin).slice(1)} Chart
        </h4>
        {/* Crypto DropDown */}
        <div className="flex justify-around pt-4">
          {/* Chart Switch Section */}

          <button
            className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-2 dark:border-[#00cccb] dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-white"
            onClick={handleDayChart}
          >
            1d
          </button>
          <button
            className="focus-border-none h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] focus:outline-none dark:border-2 dark:border-[#00cccb] dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-white"
            onClick={handleWeekChart}
            ref={activeRef}
          >
            1w
          </button>
          <button
            className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-2 dark:border-[#00cccb] dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-white"
            onClick={handleMonthChart}
          >
            1m
          </button>
          <button
            className="h-8 w-16 rounded-full border-2 border-sky-400 text-[#E4E4E4] hover:border-none hover:bg-sky-600 hover:text-[#ffff] focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:border-2 dark:border-[#00cccb] dark:text-black dark:hover:bg-[#00cccb] dark:hover:text-white dark:focus:bg-[#00cccb] dark:focus:text-white"
            onClick={handleThreeMonthChart}
          >
            3m
          </button>
        </div>
        {/* Chart */}
        <div className="dayChart my-5 mx-5 hidden">
          <Line data={oneDayData} options={options} />
        </div>
        <div className="oneWeekChart my-5 mx-5">
          <Line data={oneWeekData} options={options} />
        </div>
        <div className="oneMonthChart my-5 mx-5 hidden">
          <Line data={oneMonthData} options={options} />
        </div>
        <div className="threeMonthChart my-5 mx-5 hidden">
          <Line data={threeMonthData} options={options} />
        </div>
      </div>

      <div className="chart-ad">
        <a href="https://monkeyempire.net/" target="_blank" rel="noreferrer">
          <img
            src={require("../../../../../../../assets/images/advertisement.gif")}
            alt="Advertisement"
            className="h-40 w-full object-fill px-4"
          ></img>
          <h6 className="mt-2 text-center text-sm text-[#9e9e9e] dark:text-black">
            (Advertisement)
          </h6>
        </a>
      </div>
    </>
  );
}

export default CoinChart;
