import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import MapIcon from "@mui/icons-material/Map";

function LeftSidebar() {
  const handleFocus = () => {
    const focussedBtn = document.querySelector(".sidebarBtn");
    focussedBtn.toggleAttribute("autofocus");
  };

  return (
    <div className="sidebar ml-2 mr-5 mt-16 rounded-md bg-[#1B2028]">
      <h1 className="pt-6 text-center text-lg font-semibold text-white">
        😎 Logoipsum
      </h1>
      <div className="ml-2 text-[#9E9E9E]">
        <Link to="/">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8]  hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff]"
          >
            <GridViewRoundedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Overview</h1>
          </button>
        </Link>
        <Link to="/crypto-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff]"
          >
            <CandlestickChartOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">CryptoTab</h1>
          </button>
        </Link>
        <button
          onClick={handleFocus}
          className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff]"
        >
          <AccountBalanceWalletOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Portfolio</h1>
        </button>
        <Link to="/bubbles-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff]"
          >
            <BubbleChartIcon className="mr-5 ml-6" />
            <h1 className="text-left">Crypto Bubbles</h1>
          </button>
        </Link>
        <Link to="/heat-map">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff]"
          >
            <MapIcon className="mr-5 ml-6" />
            <h1 className="text-left">Heatmap</h1>
          </button>
        </Link>
        <button
          onClick={handleFocus}
          className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white"
        >
          <ChatOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Crypto News</h1>
        </button>
        <button
          onClick={handleFocus}
          className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white"
        >
          <TrendingUpOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Trending Coins</h1>
        </button>
        <button
          onClick={handleFocus}
          className="sidebarBtn border-box mt-96 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white"
        >
          <SettingsOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Settings</h1>
        </button>
        <button
          onClick={handleFocus}
          className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white"
        >
          <LogoutOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Logout</h1>
        </button>
        &nbsp;
      </div>
    </div>
  );
}

export default LeftSidebar;
