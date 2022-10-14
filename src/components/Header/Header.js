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
      <div className="header w-full flex justify-between items-center">
        {/* Brand */}
        <Link to="/">
          <div className="brand flex justify-center items-center ml-4">
            <img
              className="brand-logo w-7 h-8 mr-2"
              src={require("../images/logo.png")} //require needs webpack to process images
              alt=""
            />
            <h1 className="brand-title text-3xl text-white font-semibold m-4">
              crypto dora
            </h1>
          </div>
        </Link>
        {/* Searchbar */}
        <div className="searchbar flex justify-center items-center">
          <input
            size={25}
            type="text"
            className="searchbar-input rounded-lg flex w-full caret-gray-500 py-2 focus:outline-none pl-4 pr-10"
            placeholder="Search your fav crypto..."
            spellCheck="false"
          />
          <button>
            <SearchIcon className="rounded-xl flex relative right-8 w-10 bg-[#1B2028] text-[#9E9E9E]" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center">
          <button className="stats-notifications ">
            <NotificationsOutlinedIcon
              className="rounded-lg bg-[#1B2028] text-[#9E9E9E]"
              style={{
                width: "2.7rem",
                height: "2.7rem",
                padding: ".5rem",
              }}
            />
          </button>
          <button className="stats-profile flex items-center ml-8 ">
            <PersonOutlineOutlinedIcon
              className="rounded-lg bg-[#9E9E9E] text-[#1b2028]"
              style={{
                width: "2.7rem",
                height: "2.7rem",
                padding: ".5rem",
              }}
            />
            <h1 className="stats-profile-name text-white ml-4">
              Vitalik Buterin
            </h1>
            <KeyboardArrowDownOutlinedIcon className="ml-4 mr-8 text-[#9e9e9e]" />
          </button>
          <label
            className="stats-theme-label flex w-20 relative bottom-3.5"
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
