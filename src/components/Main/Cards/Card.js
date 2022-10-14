import React from "react";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Card({ logo, title, symbol, price, priceChange, graph }) {
  return (
    <div className="w-full bg-[#1B2028] rounded-xl mt-5 mx-1">
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
        <ArrowDropUpOutlinedIcon className="text-[#1ECB4F] mr-3" />
      </div>

      <div className="card-bottom flex items-center justify-between my-5 ml-7">
        <div>
          <h1 className="text-white font-semibold text-2xl">{price}</h1>
          <h4 className="text-[#1ECB4F] mt-3">{priceChange}</h4>
        </div>
        <img src={graph} className="w-1/2 px-2" alt="" />
      </div>
    </div>
  );
}

export default Card;
