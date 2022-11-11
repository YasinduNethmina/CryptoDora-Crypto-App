import React, { useEffect, useState } from "react";

function AddTransaction({ coins, data }) {
  const [selectedOption, setSelectedOption] = useState("btc");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [spent, setSpent] = useState(0.0);

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

  const [pricePerCoin, setPricePerCoin] = useState(0);

  // Get the index of the selected coin in the dropdown menu; used to get it's price value
  useEffect(() => {
    setSelectedOptionIndex(Number(coinSymbolsArray.indexOf(selectedOption)));
  }, [selectedOption]);

  useEffect(() => {
    setPricePerCoin(coinPricesArray[selectedOptionIndex]);
  }, [selectedOptionIndex]);

  const handleQuantity = (e) => {
    if (Number(e.target.value) >= 0) {
      setQuantity(Number(e.target.value));
    }
  };

  const handleDropdown = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePricePerCoin = (e) => {
    if (Number(e.target.value) >= 0) {
      setPricePerCoin(Number(e.target.value));
    }
  };

  useEffect(() => {
    setSpent(Number(pricePerCoin * quantity));
  }, [selectedOption, quantity, pricePerCoin]);

  // Child to parent pass data on click
  const handleTransaction = (e) => {
    e.preventDefault();
    if (spent > 0 || !quantity) {
      data(selectedOption, quantity, spent, pricePerCoin, selectedOptionIndex);
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
