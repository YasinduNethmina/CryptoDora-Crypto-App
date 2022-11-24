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
      <div className="h-screen w-full rounded-lg dark:relative dark:top-6">
        <img
          className="newsImg rounded-t-2xl object-cover"
          src={require("../../../../assets/images/converter.jpg")}
          alt="converter-background"
        />
        <h1 className="converter-title ml-2 mb-2 text-center text-3xl font-bold leading-relaxed tracking-wider text-white dark:text-[#00cccb]">
          Cryptocurrency <br></br> Converter
        </h1>
        <div className="converter-input-1 flex">
          <select
            onChange={leftSelectChange}
            name="coins"
            id="coins"
            className="my-4 mr-4 flex h-12 w-1/2 cursor-pointer rounded-lg border-2 border-gray-600 border-l-gray-700 bg-gray-700 p-1.5 text-sm text-white placeholder-gray-400 outline-none duration-100 focus:border-blue-500 focus:ring-blue-500 dark:border-2 dark:border-gray-100  dark:bg-gray-50 dark:text-gray-900 dark:shadow-lg dark:outline-none dark:hover:border-2 dark:hover:border-sky-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
            className="my-4 mr-4 flex h-12 w-1/2 cursor-pointer rounded-lg border-2 border-gray-600 border-l-gray-700 bg-gray-700 p-1.5 text-sm text-white placeholder-gray-400 outline-none duration-100 focus:border-blue-500 focus:ring-blue-500 dark:border-2 dark:border-gray-100  dark:bg-gray-50 dark:text-gray-900 dark:shadow-lg dark:outline-none dark:hover:border-2 dark:hover:border-sky-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            // value={quantity}
          />
        </div>
        <div className="converter-icon flex items-center justify-center text-gray-400 dark:text-[#00cccb]">
          <SwapHorizIcon
            style={{ fontSize: "2rem", transform: "rotate(90deg)" }}
          />
        </div>

        <div className="converter-input-2 flex">
          <select
            onChange={rightSelectChange}
            name="coins"
            id="coins"
            className="my-4 mr-4 flex h-12 w-1/2 cursor-pointer rounded-lg border-2 border-gray-600 border-l-gray-700 bg-gray-700 p-1.5 text-sm text-white placeholder-gray-400 outline-none duration-100 focus:border-blue-500 focus:ring-blue-500 dark:border-2 dark:border-gray-100  dark:bg-gray-50 dark:text-gray-900 dark:shadow-lg dark:outline-none dark:hover:border-2 dark:hover:border-sky-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
            className="my-4 mr-4 flex h-12 w-1/2 cursor-not-allowed rounded-lg border-2 border-gray-600 border-l-gray-700 bg-gray-700 p-1.5 text-sm text-white placeholder-gray-400 outline-none duration-100 focus:border-blue-500 focus:ring-blue-500 dark:border-2 dark:border-gray-100  dark:bg-gray-50 dark:text-gray-900 dark:shadow-lg dark:outline-none dark:hover:border-2 dark:hover:border-sky-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
      </div>
    </>
  );
}

export default Converter;
