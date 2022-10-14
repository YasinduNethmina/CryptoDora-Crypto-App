import React from "react";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

function Card({ logo, title, symbol }) {
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
      <div className="card-bottom"></div>
    </div>
  );
}

export default Card;
