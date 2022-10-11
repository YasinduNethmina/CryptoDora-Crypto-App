import React, { useState } from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Header() {
  return (
    <div className="header flex justify-between items-center w-full px-10">
      {/* Brand Logo */}
      <div className="header-brand flex justify-center items-center">
        <img
          className="header-brand-logo w-7 h-8 m-2"
          src={require("../images/logo.png")} //require needs webpack to process images
          alt=""
        />
        <h1 className="header-brand-title text-3xl text-white font-semibold">
          crypto dora
        </h1>
      </div>
      {/* Searchbar */}
      <div className="header-searchbar flex justify-center items-center">
        <input
          size={40}
          type="text"
          className="header-searchbar-searchfield rounded-xl  caret-gray-500 pr-10 pl-5 py-2 my-3 focus:outline-none"
          placeholder="Search your fav crypto..."
          spellcheck="false"
        />
        <i className="header-searchbar-searchIcon p-1 rounded-full relative right-10">
          <SearchIcon
            style={{
              color: "#9E9E9E",
              backgroundColor: "#1B2028",
              width: "2rem",
              height: "2rem",
              padding: ".2rem",
            }}
          />
        </i>
      </div>
      {/* Stats */}
      <div className="header-stats flex justify-right items-center">
        <button className="header-stats-notifications mx-3">
          <NotificationsOutlinedIcon
            className="rounded-lg"
            style={{
              color: "#9E9E9E",
              backgroundColor: "#1B2028",
              width: "2.7rem",
              height: "2.7rem",
              padding: ".5rem",
            }}
          />
        </button>
        <button className="header-stats-profile ml-3">
          <PersonOutlineOutlinedIcon
            className="rounded-lg"
            style={{
              color: "#1B2028",
              backgroundColor: "#9E9E9E",
              width: "2.5rem",
              height: "2.5rem",
              padding: ".5rem",
            }}
          />
        </button>
        <h1 className="header-stats-profile-name text-white mx-3">
          Courteney Henry
        </h1>
        <KeyboardArrowDownOutlinedIcon
          style={{
            color: "#9E9E9E",
          }}
        />
        <div className="header-stats-theme flex"></div>
      </div>
    </div>
  );
}

export default Header;
