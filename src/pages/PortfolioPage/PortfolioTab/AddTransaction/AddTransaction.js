import React, { useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

function AddTransaction({ coinData, data }) {
  const [pricePerCoin, setPricePerCoin] = useState(0);
  const [selectedOption, setSelectedOption] = useState("btc");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [spent, setSpent] = useState(0.0);
  const [image, setImage] = useState(null);
  const [change, setChange] = useState(0);
  const [coinCurrentPrice, setCoinCurrentPrice] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [profit, setProfit] = useState(0);
  const [count, setCount] = useState(0);

  // Hide transaction on click
  const handleCloseBtn = () => {
    document.querySelector(".addTransaction").classList.add("hidden");
  };

  let coinSymbolsArray = [];
  let coinPricesArray = [];
  let coinImagesArray = [];
  let coinChangesArray = [];

  useEffect(() => {
    setSelectedOptionIndex(coinSymbolsArray.indexOf(selectedOption));
  }, [selectedOption]);

  useEffect(() => {
    setPricePerCoin(coinPricesArray[selectedOptionIndex]);
    setImage(coinImagesArray[selectedOptionIndex]);
    setChange(coinChangesArray[selectedOptionIndex]);
    setCoinCurrentPrice(coinPricesArray[selectedOptionIndex]);
  }, [selectedOptionIndex]);

  useEffect(() => {
    setSpent(pricePerCoin * quantity);
    setCurrentValue(Number(coinCurrentPrice) * Number(quantity));
  }, [quantity, pricePerCoin, coinCurrentPrice]);

  useEffect(() => {
    setProfit(Number(currentValue) - Number(spent));
  }, [spent, currentValue]);

  // Add all prop data into each arrays

  for (let i = 0; i < 100; i++) {
    coinSymbolsArray[i] = coinData.data[i].symbol;
    coinPricesArray[i] = coinData.data[i].current_price;
    coinImagesArray[i] = coinData.data[i].image;
    coinChangesArray[i] = coinData.data[i].price_change_percentage_24h;
  }

  const handleQuantity = (e) => {
    if (e.target.value >= 0) {
      setQuantity(e.target.value);
    }
  };

  const handleDropdown = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePricePerCoin = (e) => {
    if (e.target.value >= 0) {
      setPricePerCoin(e.target.value);
    }
  };

  // Child to parent pass data on click
  const handleTransaction = (e) => {
    e.preventDefault();
    setCount(count + 1);
    if (spent > 0 || !quantity) {
      data(
        image,
        coinCurrentPrice,
        change,
        pricePerCoin,
        quantity,
        spent,
        currentValue,
        profit,
        count
      );
      document.querySelector(".addTransaction").classList.add("hidden");
    } else {
      document.querySelector(".errorText").classList.remove("hidden");
    }
  };

  return (
    <form
      type="submit"
      className="addTransaction rounded-xl border-2 border-sky-500 bg-[#1B2028]"
    >
      <div className="mx-4 flex items-center justify-between pt-4">
        <h1 className="text-2xl font-bold text-white">Add Transaction</h1>
        <button
          onClick={handleCloseBtn}
          className="rounded-md px-2 text-xl text-white hover:text-red-500"
        >
          X
        </button>
      </div>

      <select
        onChange={handleDropdown}
        name="coins"
        id="coins"
        className="my-4 mx-auto flex w-4/5 justify-center rounded-lg border-2 border-zinc-800 py-2 px-4 outline-none"
      >
        {coinSymbolsArray.map((coinSymbol) => {
          return <option value={coinSymbol}>{coinSymbol.toUpperCase()}</option>;
        })}
      </select>

      <div className="flex justify-center">
        <div className="my-4 mr-4">
          <h1 className="mb-2">Quantity</h1>
          <input
            name="name"
            required
            onChange={handleQuantity}
            type="number"
            className="w-40 rounded-lg border-2 border-zinc-800 py-2 pl-2 outline-none"
            value={quantity}
          />
        </div>

        <div className="my-4">
          <h1 className="mb-2">Price Per Coin</h1>
          <input
            required
            name="name"
            onChange={handlePricePerCoin}
            value={pricePerCoin}
            type="number"
            className="priceCoin w-40 rounded-lg border-2 border-zinc-800 py-2 pl-2 outline-none"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="mx-4 mt-4 flex justify-center pb-6">
        <div className="">
          <h1 className="text-center">Total Spent</h1>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-lg border-2 border-zinc-800 px-6 py-1 text-center text-2xl font-bold text-zinc-800 outline-none"
            placeholder="$0"
            value={`$ ${spent.toFixed(2)}`}
          />
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <button
          type="submit"
          onClick={handleTransaction}
          className=" rounded bg-sky-500 px-2 py-2 text-white hover:bg-blue-500"
        >
          Add Transaction
        </button>
      </div>
      <h1 className="errorText mb-2 hidden text-center text-red-500">
        Enter all data properly!
      </h1>
    </form>
  );
}

export default AddTransaction;
