import React, { useState, useEffect } from "react";
import "./Converter.scss";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function Converter({ data }) {
  let allData = data;
  const [leftValue, setLeftValue] = useState(1);
  const [rightValue, setRightValue] = useState(1);
  const [leftSelectedPrice, setLeftSelectedPrice] = useState(
    allData[0].current_price
  );
  const [rightSelectedPrice, setRightSelectedPrice] = useState(1);

  const handleLeftValue = (e) => {
    if (e.target.value >= 0) {
      setLeftValue(Number(e.target.value));
    }
  };
  const handleRightValue = (e) => {
    if (e.target.value >= 0) {
      setRightValue(Number(e.target.value));
    }
  };

  // Used to get index current price from the dropdown
  const leftSelectChange = (e) => {
    setLeftSelectedPrice(Number(e.target.value));
  };
  const rightSelectChange = (e) => {
    setRightSelectedPrice(Number(e.target.value));
  };

  let leftTotal = leftSelectedPrice * leftValue;
  let rightTotal = rightSelectedPrice * rightValue;

  useEffect(() => {
    setRightValue(leftTotal / rightSelectedPrice);
  }, [leftTotal, rightTotal]);

  return (
    <>
      <div className="h-96 w-full rounded-lg bg-gradient-to-b from-[#1B2028] to-[#31353F] px-4 py-2">
        <h1 className="ml-2 mt-4 mb-2 text-center text-2xl font-bold leading-relaxed tracking-wider text-white">
          Cryptocurrency <br></br> Converter
        </h1>
        <div className="flex">
          <select
            onChange={leftSelectChange}
            name="coins"
            id="coins"
            className="my-4 mr-4 flex w-1/2 cursor-pointer rounded-lg border-2 border-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none duration-100 hover:border-2 hover:border-sky-500  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            {allData.map((i) => {
              return <option value={i.current_price}>{i.name}</option>;
            })}
          </select>
          <input
            value={leftValue}
            autocomplete="off"
            name="name"
            required
            onChange={handleLeftValue}
            type="number"
            className="my-4 h-16 w-1/2 cursor-text rounded-lg border-2 border-gray-300 bg-gray-50 pl-4 pr-2 text-gray-900 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
            // value={quantity}
          />
        </div>
        <div className="my-2 flex items-center justify-center text-gray-400">
          <SwapHorizIcon
            style={{ fontSize: "40px", transform: "rotate(90deg)" }}
          />
        </div>

        <div className="flex">
          <select
            onChange={rightSelectChange}
            name="coins"
            id="coins"
            className="my-4 mr-4 flex w-1/2 cursor-pointer rounded-lg border-2 border-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            {allData.map((i) => {
              if (i.name === allData[3].name) {
                return (
                  <option selected value={i.current_price}>
                    {i.name}
                  </option>
                );
              } else {
                return <option value={i.current_price}>{i.name}</option>;
              }
            })}
          </select>
          <input
            disabled
            value={rightValue}
            autocomplete="off"
            name="name"
            required
            onChange={handleRightValue}
            type="number"
            className="my-4 h-16 w-1/2 cursor-not-allowed rounded-lg border-2 border-gray-300 bg-gray-50 pl-4 pr-2 text-gray-900  outline-none duration-100 hover:border-2 hover:border-sky-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </>
  );
}

export default Converter;
