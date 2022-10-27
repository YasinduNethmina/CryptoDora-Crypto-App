import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Card({ logo, title, symbol, price, priceChange }) {
  let priceChangeToNumber = Number(priceChange.slice(0, 5)).toFixed(2);

  return (
    <>
      <div className="duration-800 mx-1 mt-5 w-full cursor-default rounded-xl bg-[#1B2028] transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
        <div className="card-heading flex items-center justify-between">
          <div className="card-heading-logo flex items-center">
            <div className="card-heading-logo-img my-7 ml-7 mr-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#31353f]">
              <img className="h-6 w-6" src={logo} alt="coin-logo" />
            </div>
            <div className="card-heading-logo-text ml-2">
              <h1 className="font-semibold text-white">{title}</h1>
              <h6 className="text-[#9E9E9E]">{symbol}</h6>
            </div>
          </div>
          {priceChangeToNumber <= 0 ? (
            <ArrowDropDownIcon className="mr-3 text-[#C82E2E]" />
          ) : (
            <ArrowDropUpIcon className="mr-3 text-[#1ECB4F]" />
          )}
        </div>

        <div className="card-bottom mt-1 mb-2 ml-7 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">${price}</h1>

            <h4
              style={{
                color: priceChangeToNumber <= 0 ? "#C82E2E" : "#1ECB4F",
              }}
            >
              {priceChange}
            </h4>
          </div>
          {priceChangeToNumber <= 0 ? (
            <TrendingDownIcon
              sx={{ fontSize: 60 }}
              className="relative right-2 text-[#C82E2E]"
            />
          ) : (
            <TrendingUpIcon
              sx={{ fontSize: 60 }}
              className="relative right-2 text-[#1ECB4F]"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
