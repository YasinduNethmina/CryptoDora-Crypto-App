import React from "react";
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
    <div className="sidebar ml-2 mr-5 mt-16 rounded-sm bg-[#1B2028]">
      <h1 className="pt-6 text-center text-lg font-semibold text-white">
        😎 Logoipsum
      </h1>
      <div className="ml-2 text-[#9E9E9E]">
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8]  hover:text-white">
          <GridViewRoundedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Overview</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <CandlestickChartOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">CryptoTab</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <AccountBalanceWalletOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Portfolio</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <DiamondOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">NFTs</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <KeyOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">DeFi</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <ChatOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Crypto News</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <TrendingUpOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Trending Coins</h1>
        </button>
        <button className="border-box mt-96 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <SettingsOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Settings</h1>
        </button>
        <button className="border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white">
          <LogoutOutlinedIcon className="mr-5 ml-6" />
          <h1 className="text-left">Logout</h1>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
