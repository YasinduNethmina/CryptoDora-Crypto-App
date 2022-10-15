import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function Card({ logo, title, symbol, price, priceChange }) {
  let priceChangeToNumber = Number(priceChange.slice(0, 5));

  return (
    <div className="w-full bg-[#1B2028] hover:bg-[#1200] hover:border-gray-400 hover:border-4 transform hover:scale-105 hover:font-semibold transition-transform ease-in-out duration-800 rounded-xl mt-5 mx-1">
      <div className="card-heading flex items-center justify-between">
        <div className="card-heading-logo flex items-center">
          <div className="flex card-heading-logo-img justify-center items-center w-11 h-11 bg-[#31353f] rounded-xl my-7 ml-7 mr-5">
            <img className="w-6 h-6" src={logo} alt="btc" />
          </div>
          <div className="card-heading-logo-text ml-2">
            <h1 className="text-white font-semibold">{title}</h1>
            <h6 className="text-[#9E9E9E]">{symbol}</h6>
          </div>
        </div>
        {priceChangeToNumber < 0 ? (
          <ArrowDropDownIcon className="text-[#C82E2E] mr-3" />
        ) : (
          <ArrowDropUpIcon className="text-[#1ECB4F] mr-3" />
        )}
      </div>

      <div className="card-bottom flex items-center justify-between my-5 ml-7">
        <div>
          <h1 className="text-white font-semibold text-2xl">{price}</h1>

          <h4
            style={{ color: priceChangeToNumber < 0 ? "#C82E2E" : "#1ECB4F" }}
          >
            {priceChange}
          </h4>
        </div>
        {priceChangeToNumber < 0 ? (
          <TrendingDownIcon
            sx={{ fontSize: 60 }}
            className="text-[#C82E2E] relative right-2"
          />
        ) : (
          <TrendingUpIcon
            sx={{ fontSize: 60 }}
            className="text-[#1ECB4F] relative right-2"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
