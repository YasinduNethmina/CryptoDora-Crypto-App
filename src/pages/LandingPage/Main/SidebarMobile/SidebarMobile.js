import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Link } from "react-router-dom";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import "./SidebarMobile.scss";

function SidebarMobile({ active }) {
  const handleFocus = () => {
    const focussedBtn = document.querySelector(".sidebarBtn");
    focussedBtn.toggleAttribute("autofocus");
  };

  return (
    <div
      className={
        active
          ? "sidebar-mobile-div mr-5 mt-16 rounded-md bg-[#1B2028] dark:rounded-xl dark:bg-[#fff] dark:text-black"
          : "hidden"
      }
    >
      <div className="sidebar-links pt-4 text-[#9E9E9E]">
        <Link to="/">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <GridViewRoundedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Overview</h1>
          </button>
        </Link>
        <Link to="/portfolio-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <AccountBalanceWalletOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Portfolio</h1>
          </button>
        </Link>
        <Link to="/news-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <ChatOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Crypto News</h1>
          </button>
        </Link>
        <Link to="/crypto-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <CandlestickChartOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">CryptoTab</h1>
          </button>
        </Link>
        <Link to="/bubbles-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <BubbleChartIcon className="mr-5 ml-6" />
            <h1 className="text-left">Crypto Bubbles</h1>
          </button>
        </Link>
        &nbsp;
      </div>
    </div>
  );
}

export default SidebarMobile;
