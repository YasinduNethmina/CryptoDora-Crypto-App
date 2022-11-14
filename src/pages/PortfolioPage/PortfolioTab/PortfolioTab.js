import React, { useEffect, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddTransaction from "./AddTransaction/AddTransaction";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import PortfolioChart from "./PortfolioChart";

function PortfolioTab() {
  const [coinsQuery] = useQueries({
    queries: [
      {
        // Used to get coin data
        queryKey: ["coinsData"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
    ],
  });

  // All States
  const [pricePerCoin, setPricePerCoin] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [spent, setSpent] = useState([]);
  const [image, setImage] = useState([]);
  const [change, setChange] = useState([]);
  const [coinCurrentPrice, setCoinCurrentPrice] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);
  const [profit, setProfit] = useState([]);
  const [count, setCount] = useState([]);
  const [total, setTotal] = useState();
  const [selectedCoin, setSelectedCoin] = useState([]);

  // Arrays
  let imageArray = image;
  let priceArray = pricePerCoin;
  let changeArray = change;
  let quantityArray = quantity;
  let spentArray = spent;
  let currentPriceArray = coinCurrentPrice;
  let currentValueArray = currentValue;
  let profitArray = profit;
  let countArray = count;
  let indexArray = selectedOptionIndex;
  let coinNamesArray = [];

  // used to get the total from all coins current valuation
  let initialValue = 0;
  const totalVar = currentValueArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  // Update total whenever new value added
  useEffect(() => {
    setTotal(totalVar);
  }, [currentValueArray]);

  // Used to get data from child components (AddTransaction)
  const dataFromChild = (
    img,
    coinCurrentPrice,
    change,
    pricePerCoin,
    quantity,
    spent,
    currentValue,
    profit,
    buyBtn,
    sellBtn,
    coinId
  ) => {
    let indexNumber = Number(imageArray.indexOf(img));

    // Only add new line of coins if the coin doesnt exist
    if (image.indexOf(img) === -1) {
      setSelectedOptionIndex((prev) => [...prev, coinId]);
      setPricePerCoin((prev) => [...prev, pricePerCoin]);
      setSelectedOption((prev) => [...prev, selectedOption]);
      setChange((prev) => [...prev, change]);
      setQuantity((prev) => [...prev, Number(quantity)]);
      setSpent((prev) => [...prev, spent]);
      setImage((prev) => [...prev, img]);
      setCoinCurrentPrice((prev) => [...prev, coinCurrentPrice]);
      setCurrentValue((prev) => [...prev, currentValue]);
      setProfit((prev) => [...prev, profit]);

      // Used to set count array (it's used to setup delete buttons of each coin rows)
      if (countArray.length <= 0) {
        countArray.push(0);
      } else {
        countArray.push(Number(countArray.length - 1) + 1);
        setCount(countArray);
      }
    } else {
      // If coin already exists and it's a buy transaction then add values
      if (buyBtn) {
        priceArray[indexNumber] =
          (Number(priceArray[indexNumber]) + Number(pricePerCoin)) / 2;

        quantityArray[indexNumber] =
          Number(quantityArray[indexNumber]) + Number(quantity);

        spentArray[indexNumber] =
          Number(spentArray[indexNumber]) + Number(spent);

        currentValueArray[indexNumber] =
          Number(currentValueArray[indexNumber]) + Number(currentValue);

        profitArray[indexNumber] =
          Number(profitArray[indexNumber]) + Number(profit);

        setQuantity([...quantityArray]);
        setSpent([...spentArray]);
        setCurrentValue([...currentValueArray]);
      } else if (sellBtn) {
        // If coin already exists and it's a sell transaction then substract values
        priceArray[indexNumber] =
          (Number(priceArray[indexNumber]) + Number(pricePerCoin)) / 2;

        quantityArray[indexNumber] =
          Number(quantityArray[indexNumber]) - Number(quantity);

        spentArray[indexNumber] =
          Number(priceArray[indexNumber]) * quantityArray[indexNumber];

        currentValueArray[indexNumber] =
          Number(currentValueArray[indexNumber]) - Number(currentValue);

        profitArray[indexNumber] =
          Number(profitArray[indexNumber]) - Number(profit);

        setQuantity([...quantityArray]);
        setSpent([...spentArray]);
        setCurrentValue([...currentValueArray]);

        //used to fix the bug of not removing the last item
        if (quantityArray[indexNumber] === 0) {
          let removeIndex = quantityArray.indexOf(0);

          indexArray.splice(removeIndex, 1);
          setSelectedOptionIndex([...indexArray]);

          quantityArray.splice(removeIndex, 1);
          setQuantity([...quantityArray]);

          priceArray.splice(removeIndex, 1);
          setPricePerCoin([...priceArray]);

          spentArray.splice(removeIndex, 1);
          setSpent([...spentArray]);

          currentPriceArray.splice(removeIndex, 1);
          setCoinCurrentPrice([...currentPriceArray]);

          imageArray.splice(removeIndex, 1);
          setImage([...imageArray]);

          changeArray.splice(removeIndex, 1);
          setChange([...changeArray]);

          currentValueArray.splice(removeIndex, 1);
          setCurrentValue([...currentValueArray]);

          profitArray.splice(removeIndex, 1);
          setProfit([...profitArray]);

          changeArray.splice(removeIndex, 1);
          setChange([...changeArray]);

          countArray.splice(removeIndex, 1);
          setCount([...countArray]);
        }
      }
    }
  };

  useEffect(() => {
    setSelectedCoin(
      coinNamesArray[selectedOptionIndex[selectedOptionIndex.length - 1]]
    );
  }, [selectedOptionIndex]);

  const handleTransactionMenu = () => {
    document.querySelector(".addTransaction").classList.remove("hidden");
  };

  // Remove coin rows on click
  const handleDeleteBtn = (count) => {
    let indexValue = priceArray[count];
    let index = priceArray.indexOf(indexValue);

    indexArray.splice(index, 1);
    priceArray.splice(index, 1);
    imageArray.splice(index, 1);
    currentPriceArray.splice(index, 1);
    changeArray.splice(index, 1);
    quantityArray.splice(index, 1);
    spentArray.splice(index, 1);
    currentValueArray.splice(index, 1);
    profitArray.splice(index, 1);
    countArray.splice(index, 1);

    setPricePerCoin([...priceArray]);
    setImage([...imageArray]);
    setCoinCurrentPrice([...currentPriceArray]);
    setChange([...changeArray]);
    setQuantity([...quantityArray]);
    setSpent([...spentArray]);
    setCurrentValue([...currentValueArray]);
    setProfit([...profitArray]);
    setCount([...countArray]);
    setSelectedOptionIndex([...indexArray]);
  };

  if (coinsQuery.isLoading) {
    return;
  } else {
    for (let i = 0; i < 100; i++) {
      coinNamesArray[i] = coinsQuery.data[i].id;
    }

    return (
      <>
        <div className="h-full w-full rounded bg-[#1B2028] p-4 text-[#9e9e9e]">
          <div className="addTransaction fixed left-1/3 z-40 flex hidden justify-center">
            <AddTransaction
              coinData={coinsQuery}
              data={dataFromChild}
              holdings={quantity}
            />
          </div>

          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="ml-4">
              <h4>Current Balance</h4>
              <div className="flex items-center py-2">
                <h1 className="mr-4 text-4xl font-bold text-white">
                  $ {Number(total).toFixed(2)}
                </h1>
                <h4 className="rounded bg-green-500 py-1 pl-1 pr-2 text-center text-white">
                  <ArrowDropUpIcon /> 25.67%
                </h4>
              </div>
              <div className="flex items-center">
                <h4 className="text-green-600">+$301.93</h4>
                <h4 className="ml-4 rounded-lg border-2 px-2 text-white">
                  24h
                </h4>
              </div>
            </div>

            {/* Add crypto button */}
            <div>
              <button
                onClick={handleTransactionMenu}
                className="mr-4 rounded-lg bg-green-500 px-2 py-3 font-semibold text-white hover:bg-green-600"
              >
                <AddCircleIcon />
                &nbsp; Add Crypto
              </button>
            </div>
          </div>

          {/* Chart / Allocation / Stats Buttons */}
          <div className="ml-4 mt-8 flex text-white">
            <button className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700">
              Chart
            </button>
            <button className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700">
              Allocation
            </button>
            <button className="rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700">
              Statistics
            </button>
          </div>

          <div className="mt-4 h-72 bg-green-500">
            <PortfolioChart coin={selectedCoin} />
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-semibold text-white">Your Assets</h1>

            <div className="mt-4 flex h-2 justify-between">
              <div>
                <h6>Coin</h6>
                <div className="mt-4">
                  {image.map((img) => {
                    return (
                      <>
                        <img
                          className="mb-4 h-8 w-8 rounded-full"
                          src={img}
                          alt="coin-logo"
                        />
                      </>
                    );
                  })}
                </div>
              </div>

              <div>
                <h6 className="ml-4">Price</h6>
                {coinCurrentPrice.map((price) => {
                  return <h4 className="mt-6 text-white">${price}</h4>;
                })}
              </div>

              <div>
                <h6>24h Change(%)</h6>
                {change.map((change) => {
                  return (
                    <h4
                      className={
                        change > 0
                          ? "mt-6 mr-4 text-center text-green-500"
                          : "mt-6 mr-4 text-center text-red-500"
                      }
                    >
                      {change.toFixed(2)}%
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>AVG. Buy Price</h6>
                {pricePerCoin.map((price) => {
                  return (
                    <h4 className="ml-4 mt-6 text-white">
                      ${Number(price).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Holdings</h6>
                {quantity.map((quantity) => {
                  return (
                    <h4 className="mt-6 mr-2 text-center text-white">
                      {quantity}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Total Spent</h6>
                {spent.map((spentValue) => {
                  return (
                    <h4
                      className={
                        Number(spentValue) >= 0
                          ? "relative right-1 mt-6 mr-1 text-green-500"
                          : "relative right-1 mt-6 text-red-500"
                      }
                    >
                      ${Number(spentValue).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Current Value</h6>
                {currentValue.map((price) => {
                  return (
                    <h4
                      className={
                        profit >= 0
                          ? "relative right-1 mt-6 mr-1 text-green-500"
                          : "relative right-1 mt-6 text-red-500"
                      }
                    >
                      ${Number(price).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Profit/Loss</h6>
                {profit.map((profit) => {
                  return (
                    <h4
                      className={
                        Number(profit) >= 0
                          ? "relative right-1 mt-6 mr-1 text-green-500"
                          : "relative right-1 mt-6 text-red-500"
                      }
                    >
                      ${Number(profit).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6>Actions</h6>

                {count.map((count) => {
                  return (
                    <div>
                      <button
                        onClick={() => handleDeleteBtn(count)}
                        key={count}
                        className={`deleteBtn mt-6 ml-5 text-red-500 transition-all hover:scale-125 hover:animate-pulse`}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioTab;
