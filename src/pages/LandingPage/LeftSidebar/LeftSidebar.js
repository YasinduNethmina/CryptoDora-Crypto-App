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
import WalletIcon from "@mui/icons-material/Wallet";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { Settings } from "@mui/icons-material";

function LeftSidebar() {
  const handleFocus = () => {
    const focussedBtn = document.querySelector(".sidebarBtn");
    focussedBtn.toggleAttribute("autofocus");
  };

  // Signout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="sidebar ml-2 mr-5 mt-16 rounded-md bg-[#1B2028] dark:rounded-xl dark:bg-[#fff] dark:text-black">
      <h1 className="mr-1 pt-6 text-center text-lg font-semibold text-white dark:text-black">
        😎 Logoipsum
      </h1>
      <div className="ml-2 text-[#9E9E9E]">
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
        <Link to="/blockchain-explorer">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <TrendingUpOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Blockchain Explorer</h1>
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
        <Link to="/heatmap-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <MapIcon className="mr-5 ml-6" />
            <h1 className="text-left">Crypto Heatmap</h1>
          </button>
        </Link>
        <Link to="/wallet-tab">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <WalletIcon className="mr-5 ml-6" />
            <h1 className="text-left">Wallet</h1>
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={handleFocus}
            className="sidebarBtn border-box mt-96 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white focus:border-none focus:bg-[#3A6FF8] focus:text-[#ffff] dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <SettingsOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Settings</h1>
          </button>
        </Link>
        <Link to="/login-page">
          <button
            onClick={logout}
            className="sidebarBtn border-box mt-6 flex w-11/12 rounded py-4 hover:bg-[#3A6FF8] hover:text-white dark:font-semibold dark:text-black dark:hover:rounded-full dark:hover:bg-[#f4f5f7] dark:hover:text-[#00cccb]"
          >
            <LogoutOutlinedIcon className="mr-5 ml-6" />
            <h1 className="text-left">Logout</h1>
          </button>
        </Link>
        &nbsp;
      </div>
    </div>
  );
}

export default LeftSidebar;
