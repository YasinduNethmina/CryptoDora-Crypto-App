import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PortfolioChart({ totalArray }) {
  let totalArraySpread = [0];
  totalArray.map((i) => {
    totalArraySpread.push(...i);
  });

  let labelsArray = [];
  for (let i = 0; i < totalArraySpread.length; i++) {
    labelsArray[i] = i;
  }

  const data = {
    labels: [...labelsArray],
    datasets: [
      {
        data: [...totalArraySpread],
        fill: true,
        backgroundColor: "#3a6ff810",
        borderColor: "#3A6FF8",
        pointBorderColor: "transparent",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  //chart Js options (used this in all charts)
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
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
      <div className="dayChart h-72 w-full">
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default PortfolioChart;
