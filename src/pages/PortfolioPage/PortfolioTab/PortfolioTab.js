import React, { useEffect, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddTransaction from "./AddTransaction/AddTransaction";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import DeleteIcon from "@mui/icons-material/Delete";
import PortfolioChart from "../PortfolioTab/PortfolioChart/PortfolioChart";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import PaidIcon from "@mui/icons-material/Paid";

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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

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
  const [totalArray, setTotalArray] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [bestPerformer, setBestPerformer] = useState();
  const [worstPerformer, setWorstPerformer] = useState();

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
  let selectedCoinsArray = selectedCoins;
  let coinNamesArray = [];
  let totalArrayVar = [];
  let bestPerformerValue = Math.max(...profitArray);
  let bestPerformerIndex = profitArray.indexOf(bestPerformerValue);
  let worstPerformerValue = Math.min(...profitArray);
  let worstPerformerIndex = profitArray.indexOf(worstPerformerValue);
  let initialValue = 0;

  // used to get the total from all coins current valuation
  const totalVar = currentValueArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  // Used to display total profit
  const profitDisplay = profitArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  // Update total whenever new value added
  useEffect(
    () => {
      setTotal(totalVar);
      setTotalProfit(profitDisplay);
      if (profitDisplay <= 0) {
        setTotalPercentage(0);
      }

      // Used to get statistics
      setBestPerformer([
        imageArray[bestPerformerIndex],
        profitArray[bestPerformerIndex],
      ]);
      setWorstPerformer([
        imageArray[worstPerformerIndex],
        profitArray[worstPerformerIndex],
      ]);
    },
    [currentValueArray],
    [total],
    quantity
  );

  useEffect(
    () => {
      let newTotal = profitDisplay + total;
      if (total >= 0) {
        totalArrayVar.push(total);
      }
      if (totalArrayVar.length >= 1) {
        setTotalArray((prev) => [...prev, totalArrayVar]);
      }
      if (total > 0) {
        setTotalPercentage(((newTotal - total) / total) * 100);
      }
    },
    [total],
    quantity
  );

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

        if (spentArray[indexNumber] <= 0) {
          selectedCoinsArray.pop();
        }

        setSelectedCoins([...selectedCoinsArray]);
        setQuantity([...quantityArray]);
        setSpent([...spentArray]);
        setCurrentValue([...currentValueArray]);

        //used to fix the bug of not removing the last item
        if (quantityArray[indexNumber] === 0) {
          let removeIndex = quantityArray.indexOf(0);

          selectedCoinsArray.splice(removeIndex, 1);
          setSelectedCoins([...selectedCoinsArray]);

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

  // Used to get the names of the added coins
  useEffect(() => {
    if (indexArray?.length >= 1) {
      setSelectedCoins((prev) => [
        ...prev,
        coinNamesArray[indexArray[indexArray.length - 1]]
          .charAt(0)
          .toUpperCase() +
          coinNamesArray[indexArray[indexArray.length - 1]].slice(1),
      ]);
    }
  }, [selectedOptionIndex]);

  const handleTransactionMenu = () => {
    document.querySelector(".addTransaction").classList.remove("hidden");
  };

  const handleChart = () => {
    document.querySelector(".doughnutChart").classList.add("hidden");
    document.querySelector(".statistics").classList.add("hidden");
    document.querySelector(".lineChart").classList.remove("hidden");
  };

  const handleAllocation = () => {
    document.querySelector(".lineChart").classList.add("hidden");
    document.querySelector(".statistics").classList.add("hidden");
    document.querySelector(".doughnutChart").classList.remove("hidden");
  };

  const handleStatistics = () => {
    document.querySelector(".lineChart").classList.add("hidden");
    document.querySelector(".doughnutChart").classList.add("hidden");
    document.querySelector(".statistics").classList.remove("hidden");
  };

  // Remove coin rows on click
  const handleDeleteBtn = (count) => {
    let indexValue = priceArray[count];
    let index = priceArray.indexOf(indexValue);

    indexArray.splice(index, 1);
    selectedCoinsArray.splice(index, 1);
    priceArray.splice(index, 1);
    imageArray.splice(index, 1);
    currentPriceArray.splice(index, 1);
    changeArray.splice(index, 1);
    quantityArray.splice(index, 1);
    spentArray.splice(index, 1);
    currentValueArray.splice(index, 1);
    profitArray.splice(index, 1);
    countArray.splice(index, 1);

    setSelectedCoins([...selectedCoinsArray]);
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
    return (
      <div className="h-full w-full animate-pulse rounded bg-[#1B2028] p-4 text-[#9e9e9e]"></div>
    );
  } else {
    // Store all top 100 coins in coinNamesArray
    for (let i = 0; i < 100; i++) {
      coinNamesArray[i] = coinsQuery.data[i].id;
    }

    return (
      <>
        <div className="portfolio-section h-full w-full rounded bg-[#1B2028] p-4 text-[#9e9e9e] dark:bg-white">
          <div className="addTransaction z-40 mx-auto hidden">
            <AddTransaction
              coinData={coinsQuery}
              data={dataFromChild}
              holdings={quantity}
            />
          </div>

          {/* Header Section */}
          <div className="flex items-center justify-between dark:bg-white">
            <div className="ml-4">
              <h4 className="portfolio-balance-text dark:text-black">
                Current Balance
              </h4>
              <div className="flex items-center py-2">
                <h1 className="portfolio-total mr-4 text-4xl font-bold text-white dark:text-black">
                  {total <= 0
                    ? "---"
                    : Number(total).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                </h1>
                <h4
                  className={
                    Number(totalPercentage) >= 0
                      ? "change-percentage rounded bg-green-500 py-1 pl-1 pr-2 text-center text-white"
                      : "change-percentage rounded bg-red-500 py-1 pl-1 pr-2 text-center text-white"
                  }
                >
                  {totalPercentage >= 0 ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}{" "}
                  {Number(totalPercentage).toFixed(2)}%
                </h4>
              </div>
              <div className="price-change-text flex items-center">
                <h4
                  className={
                    totalProfit >= 0
                      ? "price-change-text text-green-600 dark:text-green-500"
                      : "price-change-text text-red-600"
                  }
                >
                  ${totalProfit.toFixed(2)}
                </h4>
                <h4 className="price-change-label ml-4 rounded-lg border-2 px-2 text-white dark:border-black dark:text-black">
                  24h
                </h4>
              </div>
            </div>

            {/* Add crypto button */}
            <div className="">
              <button
                onClick={handleTransactionMenu}
                className="add-crypto-btn mr-4 rounded-lg bg-green-500 px-2 py-3 font-semibold text-white hover:bg-green-600 dark:bg-[#ffd910] dark:text-black"
              >
                <AddCircleIcon />
                &nbsp; Add Crypto
              </button>
            </div>
          </div>

          {/* Chart / Allocation / Stats Buttons */}
          <div className="portfolio-info-btns ml-4 mt-8 flex text-white">
            <button
              onClick={handleChart}
              className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700 dark:bg-[#00cccb] dark:hover:bg-sky-500 dark:hover:font-semibold"
            >
              Chart
            </button>
            <button
              onClick={handleAllocation}
              className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700 dark:bg-[#00cccb] dark:hover:bg-sky-500 dark:hover:font-semibold"
            >
              Allocation
            </button>
            <button
              onClick={handleStatistics}
              className="mr-2 rounded-lg bg-purple-500 px-4 py-1 hover:bg-purple-700 dark:bg-[#00cccb] dark:hover:bg-sky-500 dark:hover:font-semibold"
            >
              Statistics
            </button>
          </div>

          {/* Chart */}
          <div className="lineChart mt-4 h-72">
            <PortfolioChart totalArray={totalArray} />
          </div>

          <div className="doughnutChart hidden">
            {/* Allocation */}
            {total === 0 ? (
              <h1 className="mt-8 text-center text-xl text-red-500">
                Add at least one coin to see allocation data...
              </h1>
            ) : (
              <div className="doughnut-chart mt-4 h-96">
                <DoughnutChart
                  selectedCoins={selectedCoins}
                  values={currentValueArray}
                  quantity={quantityArray}
                />
              </div>
            )}
          </div>

          {/* Statistics */}
          <div className="statistics hidden">
            {/* Statistics */}
            {selectedCoins?.length < 2 ? (
              <h1 className="mt-8 text-center text-xl text-red-500">
                Add 2 more coins with different profit values to see
                statistics...
              </h1>
            ) : (
              <div className={"mt-4 flex  justify-around"}>
                {/* All Time Profit */}
                <div className="all-time-profit duration-800 mr-4 mt-2 h-20 cursor-pointer rounded-xl  bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:border-2 dark:border-black dark:bg-[#ffd910]">
                  <div className="all-time-profit-inner mx-4 flex items-center justify-center">
                    <div className="all-time-profit-inner-2 mt-4 flex items-center text-left">
                      <div className="stats-symbol-logo mr-2">
                        <PaidIcon
                          className="paid-icon"
                          style={{
                            color: "#0ea5e9",
                            fontSize: "2.8rem",
                          }}
                        />
                      </div>
                      <div>
                        <h1 className="all-time-profit-text text-[#9e9e9e] dark:text-black">
                          All Time Profit
                        </h1>

                        <div className="flex justify-center">
                          <h4
                            className={
                              totalProfit >= 0
                                ? "arrow-icon ml-2 text-green-500"
                                : "arrow-icon ml-2 text-red-500"
                            }
                          >
                            {"$" + Number(totalProfit).toFixed(2)}{" "}
                            {totalProfit < 0 ? (
                              <ArrowDropDownIcon />
                            ) : (
                              <ArrowDropUpIcon />
                            )}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Performer */}
                <div className="best-performer-outer duration-800 mr-4 mt-2 h-20 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:border-2 dark:border-black dark:bg-[#ffd910]">
                  <div className="best-performer-inner mx-4 flex items-center justify-center">
                    <img
                      className="stats-coin-logo mr-2 mt-4 w-10"
                      src={bestPerformer[0]}
                      alt="coin-logo"
                    />
                    <div className="mt-4 text-left">
                      <h1 className="best-performer-text stats-text text-[#9e9e9e] dark:text-black">
                        Best Performer
                      </h1>
                      <div className="flex justify-center">
                        <h4
                          className={
                            bestPerformer[1] >= 0
                              ? "mr-2 text-green-500"
                              : "mr-2 text-red-500"
                          }
                        >
                          {"$" + Number(bestPerformer[1]).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Worst Performer */}
                <div className="worst-performer-outer duration-800 mr-4 mt-2 h-20 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:border-2 dark:border-black dark:bg-[#ffd910]">
                  <div className="worst-performer-inner mx-4 flex items-center justify-center">
                    <img
                      className="stats-coin-logo mr-2 mt-4 w-10"
                      src={worstPerformer[0]}
                      alt="coin-logo"
                    />
                    <div className="mt-4 text-left">
                      <h1 className="stats-text text-[#9e9e9e] dark:text-black">
                        Worst Performer
                      </h1>
                      <div className="flex justify-center">
                        <h4
                          className={
                            worstPerformer[1] >= 0
                              ? "mr-2 text-green-500"
                              : "mr-2 text-red-500"
                          }
                        >
                          {"$" + Number(worstPerformer[1]).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h1 className="portfolio-your-assets-text text-2xl font-semibold text-white dark:text-black">
              Your Assets
            </h1>

            <div className="mt-4 flex justify-between dark:text-black">
              <div className="dark:font-semibold">
                <h6 className="portfolio-coin-text">Coin</h6>
                <div className="mt-4">
                  {image.map((img) => {
                    return (
                      <>
                        <img
                          className="portfolio-coin-logo mb-4 h-8 w-8 rounded-full"
                          src={img}
                          alt="coin-logo"
                        />
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="portfolio-price">
                <h6 className="ml-4 dark:font-semibold">Price</h6>
                {coinCurrentPrice.map((price) => {
                  return (
                    <h4 className="mt-6 text-center text-white dark:text-black">
                      ${price}
                    </h4>
                  );
                })}
              </div>

              <div className="portfolio-change-percentage">
                <h6 className="dark:font-semibold">24h Change(%)</h6>
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

              <div className="portfolio-buy-price">
                <h6 className="dark:font-semibold">AVG. Buy Price</h6>
                {pricePerCoin.map((price) => {
                  return (
                    <h4 className="mt-6 text-center text-white dark:text-black">
                      ${Number(price).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div className="portfolio-holdings">
                <h6 className="dark:font-semibold">Holdings</h6>
                {quantity.map((quantity) => {
                  return (
                    <h4 className="mt-6 mr-2 text-center text-white dark:text-black">
                      {quantity}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6 className="portfolio-spent-text dark:font-semibold">
                  Total Spent
                </h6>
                {spent.map((spentValue) => {
                  return (
                    <h4
                      className={
                        Number(spentValue) >= 0
                          ? "mt-6 mr-1 text-center text-green-500"
                          : "mt-6 text-center text-red-500"
                      }
                    >
                      ${Number(spentValue).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6 className="portfolio-current-value-text dark:font-semibold">
                  Current Value
                </h6>
                {currentValue.map((price) => {
                  return (
                    <h4
                      className={
                        profit >= 0
                          ? "mt-6 mr-1 text-center text-green-500"
                          : "mt-6 text-center text-red-500"
                      }
                    >
                      ${Number(price).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div className="portfolio-profit-loss">
                <h6 className="ml-2 dark:font-semibold">Profit/Loss</h6>
                {profit.map((profit) => {
                  return (
                    <h4
                      className={
                        Number(profit) >= 0
                          ? "mt-6 text-center text-green-500"
                          : "mt-6 text-center text-red-500"
                      }
                    >
                      ${Number(profit).toFixed(2)}
                    </h4>
                  );
                })}
              </div>

              <div>
                <h6 className="portfolio-actions-text dark:font-semibold">
                  Actions
                </h6>

                {count.map((count) => {
                  return (
                    <div className="">
                      <button
                        onClick={() => handleDeleteBtn(count)}
                        key={count}
                        className={`deleteBtn mt-5 ml-5 text-red-500 transition-all hover:scale-125 hover:animate-pulse`}
                      >
                        <DeleteIcon style={{ fontSize: "1.775rem" }} />
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
