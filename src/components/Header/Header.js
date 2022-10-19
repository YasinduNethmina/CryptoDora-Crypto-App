import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Header() {
  return (
    <>
      <div className="header flex w-full items-center justify-between">
        {/* Brand */}
        <Link to="/">
          <div className="brand ml-4 flex items-center justify-center">
            <img
              className="brand-logo mr-2 h-8 w-7"
              src={require("../images/logo.png")} //require needs webpack to process images
              alt=""
            />
            <h1 className="brand-title m-4 text-3xl font-semibold text-white">
              crypto dora
            </h1>
          </div>
        </Link>
        {/* Searchbar */}
        <div className="searchbar flex items-center justify-center">
          <input
            size={25}
            type="text"
            className="searchbar-input flex w-full rounded-lg py-2 pl-4 pr-10 caret-gray-500 focus:outline-none"
            placeholder="Search your fav crypto..."
            spellCheck="false"
          />
          <button>
            <SearchIcon className="relative right-8 flex w-10 rounded-xl bg-[#1B2028] text-[#9E9E9E]" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center justify-center">
          <button className="stats-notifications ">
            <NotificationsOutlinedIcon
              className="rounded-lg bg-[#1B2028] text-[#9E9E9E] hover:bg-[#9E9E9E] hover:text-[#1b2028]"
              style={{
                width: "2.7rem",
                height: "2.7rem",
                padding: ".5rem",
              }}
            />
          </button>
          <button className="stats-profile ml-8 flex items-center ">
            <PersonOutlineOutlinedIcon
              className="rounded-lg bg-[#9E9E9E] text-[#1b2028] hover:bg-[#1b2028] hover:text-[#9E9E9E]"
              style={{
                width: "2.7rem",
                height: "2.7rem",
                padding: ".5rem",
              }}
            />
            <h1 className="stats-profile-name ml-4 text-white transition hover:text-[#9E9E9E]">
              Vitalik Buterin
            </h1>
            <KeyboardArrowDownOutlinedIcon className="ml-4 mr-8 text-[#9e9e9e]" />
          </button>
          <label
            className="stats-theme-label relative bottom-3.5 flex w-20"
            htmlFor="theme-change"
          >
            <input
              type="checkbox"
              id="theme-change"
              className="stats-theme-input opacity-0"
            />
            <span className="stats-theme-slider cursor-pointer" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Header;
