import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart({ selectedCoins, values, quantity }) {
  let selectedCoinsWithoutDuplicates = [];
  const [selected, setSelected] = useState([]);

  console.log(quantity);

  useEffect(() => {
    // Hide chart if quantity is 0
    if (quantity.length >= 1) {
      setSelected(selectedCoinsWithoutDuplicates);
    } else {
      setSelected([]);
    }
  }, [selectedCoins]);

  const removeDuplicates = (selectedCoins) => {
    selectedCoinsWithoutDuplicates = selectedCoins.filter(
      (item, index) => selectedCoins.indexOf(item) === index
    );
  };
  removeDuplicates(selectedCoins);

  let pallet = [
    "#ef4444",
    "#0ea5e9",
    "#f97316",
    "#14b8a6",
    "#a3e635",
    "#B10DC9",
    "#eab308",
    "#f43f5e",
    "#2563eb",
    "#22c55e",
    "#94a3b8",
    "#a855f7",
    "#3D9970",
    "#ec4899",
    "#F8FFDB",
  ];

  const data = {
    labels: [...selected],
    datasets: [
      {
        data: [...values],
        fill: true,
        backgroundColor: [...pallet],
        borderColor: "transparent",
        hoverBorderColor: "#fff",
        pointBorderColor: "transparent",
      },
    ],
  };

  //chart Js options (used this in all charts)
  const options = {
    animation: true,
    animationEasing: "easeOutSine",
    percentageInnerCutout: 60,
    segmentShowStroke: false,
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
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
        },
      },
    },
  };

  return (
    <>
      <div className="dayChart h-96 w-full">
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}

export default DoughnutChart;
