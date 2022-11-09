import React, { useEffect, useState } from "react";

function AddTransaction({ coins, data }) {
  const [selectedOption, setSelectedOption] = useState("btc");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState("");
  const [quantity, setQuantity] = useState();
  const [spent, setSpent] = useState();

  // Hide transaction on click
  const handleCloseBtn = () => {
    document.querySelector(".addTransaction").classList.add("hidden");
  };

  // Add all prop data into each arrays
  let coinSymbolsArray = [];
  let coinPricesArray = [];
  for (let i = 0; i < 100; i++) {
    coinSymbolsArray[i] = coins.data[i].symbol;
    coinPricesArray[i] = coins.data[i].current_price;
  }

  // Get the index of the selected coin in the dropdown menu; used to get it's price value
  useEffect(() => {
    setSelectedOptionIndex(coinSymbolsArray.indexOf(selectedOption));
  }, [selectedOption]);

  const handleDropdown = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSpent = (e) => {
    setSpent(e.target.value);
  };

  const handlePricePerCoin = (e) => {
    setPricePerCoin(e.target.value);
  };

  const [pricePerCoin, setPricePerCoin] = useState(
    coinPricesArray[selectedOptionIndex]
  );

  // Child to parent pass data on click
  const handleTransaction = () => {
    data(selectedOption, quantity, spent, pricePerCoin);
  };

  return (
    <div className="addTransaction rounded-xl border-2 border-sky-500 bg-[#1B2028]">
      <div className="mx-4 flex items-center justify-between pt-4">
        <h1 className="text-2xl font-bold text-white">Add Transaction</h1>
        <button
          onClick={handleCloseBtn}
          className="rounded-md px-2 text-xl text-white hover:text-red-500"
        >
          X
        </button>
      </div>

      <div className="my-4 flex justify-around">
        <h4>Buy</h4>
        <h4>Sell</h4>
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
            onChange={handleQuantity}
            type="number"
            className="w-40 rounded-lg border-2 border-zinc-800 py-2 pl-2 outline-none"
            placeholder="10"
          />
        </div>

        <div className="my-4">
          <h1 className="mb-2">Price Per Coin</h1>
          <input
            onChange={handlePricePerCoin}
            value={pricePerCoin}
            type="text"
            className="priceCoin w-40 rounded-lg border-2 border-zinc-800 py-2 pl-2 outline-none"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="mx-4 mt-4 flex justify-center pb-6">
        <div className="">
          <h1 className="text-center">Total Spent</h1>
          <input
            onChange={handleSpent}
            type="number"
            className="w-full rounded-lg border-2 border-zinc-800 px-6 py-1 text-center text-2xl font-bold text-zinc-800 outline-none"
            placeholder="$0"
          />
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <button
          onClick={handleTransaction}
          className=" rounded bg-sky-500 px-2 py-2 text-white hover:bg-blue-500"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;
