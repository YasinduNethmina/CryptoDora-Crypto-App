import React, { useEffect, useState } from "react";
import "./AddTransaction.scss";

function AddTransaction({ coinData, data, holdings }) {
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
  const [buyBtn, setBuyBtn] = useState(true);
  const [sellBtn, setSellBtn] = useState(false);

  // Hide transaction on click
  let buyEl = document.querySelector(".buy");
  let sellEl = document.querySelector(".sell");

  const handleCloseBtn = () => {
    document.querySelector(".addTransaction").classList.add("hidden");
  };

  const handleBuy = () => {
    setBuyBtn(true);
    setSellBtn(false);

    buyEl.classList.remove("bg-blue-700", "text-white", "text-blue-700");
    buyEl.classList.add("text-white", "bg-blue-700");

    sellEl.classList.remove("text-white", "bg-blue-700");
    sellEl.classList.add("text-blue-700");
  };

  const handleSell = () => {
    setSellBtn(true);
    setBuyBtn(false);

    buyEl.classList.remove("bg-blue-700", "text-white");
    buyEl.classList.add("text-blue-700");

    sellEl.classList.remove("text-blue-700");
    sellEl.classList.add("bg-blue-700", "text-white");
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
    setSpent(Number(pricePerCoin * quantity));
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
      setQuantity(Number(e.target.value));
    }
  };

  const handleDropdown = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePricePerCoin = (e) => {
    if (Number(e.target.value >= 0)) {
      setPricePerCoin(Number(e.target.value));
    }
  };

  // Child to parent pass data on click
  const handleTransaction = (e) => {
    e.preventDefault();

    if (
      spent > 0 &&
      quantity > 0 &&
      sellBtn &&
      Number(holdings[holdings.length - 1]) < Number(quantity)
    ) {
      document.querySelector(".errorQuantity").classList.remove("hidden");
    } else if (holdings.length <= 0 && sellBtn) {
      document.querySelector(".buyFirst").classList.remove("hidden");
    } else if (spent > 0 && quantity > 0) {
      data(
        image,
        coinCurrentPrice,
        change,
        pricePerCoin,
        quantity,
        spent,
        currentValue,
        profit,
        buyBtn,
        sellBtn,
        selectedOptionIndex
      );
      document.querySelector(".errorQuantity").classList.add("hidden");
      document.querySelector(".errorText").classList.add("hidden");
      document.querySelector(".buyFirst").classList.add("hidden");
      document.querySelector(".addTransaction").classList.add("hidden");
    } else {
      document.querySelector(".errorText").classList.remove("hidden");
    }
  };

  return (
    <div
      type="submit"
      className="addTransaction rounded-xl border-2 border-sky-500 bg-[#1B2028] dark:border-[#00cccb] dark:bg-white"
    >
      <div className="mx-4 flex items-center justify-between pt-4">
        <h1 className="text-2xl font-bold text-white dark:text-black">
          Add Transaction
        </h1>
        <button
          onClick={handleCloseBtn}
          className="rounded-md px-2 text-xl text-white hover:text-red-500 dark:text-green-500 dark:hover:text-red-500"
        >
          X
        </button>
      </div>

      <div className="my-4 flex justify-around">
        <button
          onClick={handleBuy}
          className="buy rounded-lg border border-blue-700 bg-blue-700 px-5 py-1 text-center text-xl font-medium text-white hover:bg-blue-800 hover:text-white"
        >
          Buy
        </button>
        <button
          onClick={handleSell}
          className="sell rounded-lg border border-blue-700 px-5 py-1 text-center text-xl font-medium text-blue-700 hover:bg-blue-800 hover:text-white"
        >
          Sell
        </button>
      </div>

      <select
        onChange={handleDropdown}
        name="coins"
        id="coins"
        className="add-transaction-dropdown mx-auto my-4 flex w-4/5 rounded-lg border-2 border-gray-700 border-l-gray-700 bg-gray-700 p-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-[#00cccb] dark:bg-white dark:font-semibold dark:text-black dark:placeholder-gray-400 dark:shadow-lg dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        {coinSymbolsArray.map((coinSymbol) => {
          return <option value={coinSymbol}>{coinSymbol.toUpperCase()}</option>;
        })}
      </select>

      <div className="mx-5 flex justify-center">
        <div className="my-4 mr-4">
          <h1 className="mb-2 dark:text-[#7e818c]">Quantity</h1>
          <input
            name="name"
            required
            onChange={handleQuantity}
            type="number"
            className="w-40 rounded-lg border-2 border-gray-700 border-l-gray-700 bg-gray-700 p-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-[#00cccb] dark:bg-white dark:font-semibold dark:text-black dark:placeholder-gray-400 dark:shadow-lg dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={quantity}
          />
        </div>

        <div className="my-4">
          <h1 className="mb-2 dark:text-[#7e818c]">Price Per Coin</h1>
          <input
            required
            name="name"
            onChange={handlePricePerCoin}
            value={pricePerCoin}
            type="number"
            className="priceCoin w-40 rounded-lg border-2 border-gray-700 border-l-gray-700 bg-gray-700 p-2.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-[#00cccb] dark:bg-white dark:font-semibold dark:text-black dark:placeholder-gray-400 dark:shadow-lg dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="mx-4 mt-4 flex justify-center pb-6">
        <div className="">
          <h1 className="text-center dark:text-[#7e818c]">Total Spent</h1>
          <input
            required
            disabled
            name="name"
            type="text"
            className="w-full rounded-lg border-2 border-gray-700 border-l-gray-700 bg-gray-700 p-2.5 px-6 py-2 pl-4 pr-2 text-center text-2xl font-bold text-white outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-[#00cccb] dark:bg-white dark:font-semibold dark:text-black dark:placeholder-gray-400 dark:shadow-lg dark:focus:border-blue-500 dark:focus:ring-blue-500 "
            placeholder="$0"
            value={`$ ${spent.toFixed(2)}`}
          />
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <button
          type="submit"
          onClick={handleTransaction}
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-800 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
        >
          <span className="relative rounded-md px-5 py-2.5 text-white transition-all duration-75 ease-in hover:font-bold group-hover:bg-opacity-0 dark:bg-blue-600">
            Add Transaction
          </span>
        </button>
      </div>
      <h1 className="errorText mb-2 hidden text-center text-red-500">
        Enter all data properly!
      </h1>
      <h1 className="errorQuantity mb-2 hidden text-center text-red-500">
        You can't sell more than you own, don't be like FTX 🤦‍♂️
      </h1>
      <h1 className="buyFirst mb-2 hidden text-center text-red-500">
        Add some coins, before selling them {`;-)`}
      </h1>
    </div>
  );
}

export default AddTransaction;
