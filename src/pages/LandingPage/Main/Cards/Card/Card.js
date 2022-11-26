import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Card({ logo, title, symbol, price, priceChange }) {
  let priceChangeToNumber = Number(priceChange.slice(0, 5)).toFixed(2);

  return (
    <>
      <div className="card duration-800 mx-1 mt-5 w-full cursor-default rounded-xl bg-[#1B2028] transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:bg-[#00cccb] dark:shadow-xl">
        <div className="card-heading flex items-center justify-between">
          <div className="flex items-center">
            <div className="card-heading-logo my-7 ml-7 mr-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#31353f] dark:bg-transparent">
              <img
                className="h-6 w-6 dark:h-10 dark:w-10"
                src={logo}
                alt="coin-logo"
              />
            </div>
            <div className="ml-2">
              <h1 className="card-heading-name font-semibold text-white dark:text-black">
                {title}
              </h1>
              <h6 className="card-heading-symbol text-[#9E9E9E] dark:rounded-lg dark:bg-[#ffd910] dark:text-center dark:text-black">
                {symbol}
              </h6>
            </div>
          </div>
          <div className="trending-up-arrow">
            {priceChangeToNumber <= 0 ? (
              <ArrowDropDownIcon className="card-price-change-arrow mr-3 text-[#C82E2E] dark:text-[#ffd910]" />
            ) : (
              <ArrowDropUpIcon className="card-price-change-arrow mr-3 text-[#1ECB4F] dark:text-[#ffd910]" />
            )}
          </div>
        </div>

        <div className="card-bottom mt-1 mb-2 ml-7 flex items-center justify-between">
          <div>
            <h1 className="card-price-text text-2xl font-semibold text-white dark:text-black">
              ${price}
            </h1>

            <h4
              className="card-price-change-percentage dark:hidden"
              style={{
                color: priceChangeToNumber <= 0 ? "#C82E2E" : "#1ECB4F",
              }}
            >
              {priceChange}
            </h4>
            <h4 className="card-price-change-percentage hidden dark:visible dark:text-white">
              {priceChange}
            </h4>
          </div>
          <div className="trending-up-arrow">
            {priceChangeToNumber <= 0 ? (
              <TrendingDownIcon
                sx={{ fontSize: 60 }}
                className="relative right-2 text-[#C82E2E] dark:text-[#ffd910]"
              />
            ) : (
              <TrendingUpIcon
                sx={{ fontSize: 60 }}
                className=" relative right-2 text-[#1ECB4F] dark:text-[#ffd910]"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
