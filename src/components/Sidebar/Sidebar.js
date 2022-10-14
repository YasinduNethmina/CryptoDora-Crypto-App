import React from "react";
import "./Sidebar.scss";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Sidebar() {
  return (
    <div className="sidebar w-64 bg-[#1B2028] ml-2 mr-4 rounded-sm">
      <h1 className="font-semibold text-lg text-white text-center pt-6">
        😎 Logoipsum
      </h1>
      <div className="text-[#9E9E9E] ml-2">
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box py-4 mt-6">
          <GridViewRoundedIcon className="mr-5 ml-10" />
          <h1 className="text-left">Overview</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <CandlestickChartOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">CryptoTab</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <AccountBalanceWalletOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">Portfolio</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <DiamondOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">NFTs</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <KeyOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">DeFi</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <ChatOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">Crypto News</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <TrendingUpOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">Trending Coins</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-96">
          <SettingsOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">Settings</h1>
        </button>
        <button className="flex hover:bg-[#3A6FF8] hover:text-white rounded w-60 border-box pr-24 py-4 mt-6">
          <LogoutOutlinedIcon className="mr-5 ml-10" />
          <h1 className="text-left">Logout</h1>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
