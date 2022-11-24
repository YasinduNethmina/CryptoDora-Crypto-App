import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchResults from "./SearchResults/SearchResults";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Notifications from "./Notifications/Notifictions";
import { auth } from "../../../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // Signout
  const logout = async () => {
    await signOut(auth);
  };

  const [coinsData, setCoinsData] = useState({
    name: [],
    rank: [],
    symbol: [],
    img: [],
  });

  const [searchValue, setSearchValue] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  //all specific array store search data input
  let coinNameArray = [];
  let coinSymbolArray = [];
  let coinMarketCapRankArray = [];
  let coinImageArray = [];

  //gets search input
  const handleSearchResults = async (e) => {
    setSearchValue(e.target.value);
    document.getElementById("search-input").value = searchValue;
    //whenever input value changes react query updates the result from api
    await refetch();

    //gets api data and assign it to allCoins
    let allCoins = data.data.coins;

    //push all api data to each array (added here because values need to get update whenever value changes)
    await allCoins.map((coin) => {
      coinNameArray.push(coin.name);
      coinMarketCapRankArray.push(coin.market_cap_rank);
      coinSymbolArray.push(coin.symbol);
      coinImageArray.push(coin.large);
    });

    //add all those values to setCoinsData state as an object (all array values, bcz variables as props doesn't update when it passes to child element, so have to use state for this)
    await setCoinsData({
      name: coinNameArray,
      rank: coinMarketCapRankArray,
      symbol: coinSymbolArray,
      img: coinImageArray,
    });

    //hide or show search results ui
    if (searchValue?.length >= 3) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const handleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  //get search data from api when search input value changes
  const { data, isLoading, refetch } = useQuery(["searchResult"], () => {
    return axios.get(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="header notifications fixed z-50 flex w-full items-center justify-between dark:bg-[#F0F0F0] dark:text-black">
        {/* Brand */}
        <Link to="/">
          <div className="brand flex items-center justify-center">
            <h1 className="brand-title m-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-3xl font-semibold text-transparent">
              crypto dora
            </h1>
          </div>
        </Link>
        {/* Searchbar */}
        <div className="searchbar ml-20 flex items-center justify-center dark:rounded-full dark:bg-[#fff] dark:text-black dark:shadow-lg">
          <input
            value={searchValue}
            id="search-input"
            size={25}
            type="search"
            className="searchbar-input dark:placeholder-bg-white placeholder-text-[#9e9e9e] flex w-full rounded-lg bg-[#1b2028] py-2 pl-4 pr-10 text-[#9E9E9E] caret-gray-500 focus:outline-none dark:rounded-full dark:bg-[#fff] dark:font-semibold dark:text-[#00cccb] dark:placeholder-[#00cccb]"
            placeholder="Search your fav crypto..."
            spellCheck="false"
            autoComplete="off"
            onChange={handleSearchResults}
          />
          <button>
            <SearchIcon className="relative right-8 flex w-10 rounded-xl bg-[#1B2028] text-[#9E9E9E] dark:bg-[#fff] dark:font-semibold dark:text-black dark:hover:text-[#00cccb]" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center justify-center rounded-full">
          <button className="stats-notifications dark:rounded-full dark:bg-[#fff] dark:text-black dark:shadow-lg">
            <NotificationsOutlinedIcon
              className="rounded-lg bg-[#1B2028] text-[#9E9E9E] hover:bg-[#9E9E9E] hover:text-[#1b2028] dark:rounded-full dark:bg-[#fff] dark:text-black dark:hover:text-[#00cccb]"
              onClick={handleNotifications}
              style={{
                width: "2.7rem",
                height: "2.7rem",
                padding: ".5rem",
              }}
            />
          </button>
          {user !== null ? (
            <div className="flex">
              <button className="stats-profile ml-8 flex items-center dark:rounded-full">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    className="h-11 w-11 rounded-lg"
                    alt="user-pic"
                  />
                ) : (
                  <PersonOutlineOutlinedIcon
                    className="rounded-lg bg-[#9E9E9E] text-[#1b2028] hover:bg-[#1b2028] hover:text-[#9E9E9E] dark:rounded-full dark:text-black dark:hover:text-[#00cccb]"
                    style={{
                      width: "2.7rem",
                      height: "2.7rem",
                      padding: ".5rem",
                    }}
                  />
                )}
                <h1 className="stats-profile-name ml-4 text-white transition hover:text-[#9E9E9E] dark:font-semibold dark:text-black dark:hover:text-[#00cccb]">
                  {user?.displayName ? user?.displayName : user.email}
                </h1>
                <KeyboardArrowDownOutlinedIcon className="ml-4 mr-2 text-[#9e9e9e] dark:font-semibold dark:text-black dark:hover:text-[#00cccb]" />
              </button>

              <button
                onClick={logout}
                className="header-signout mr-4 flex items-center text-white hover:text-[#9E9E9E] dark:font-semibold dark:text-black  dark:hover:text-[#00cccb]"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/signup-page">
              <button className="stats-profile ml-8 flex items-center">
                <PersonOutlineOutlinedIcon
                  className="rounded-lg bg-[#9E9E9E] text-[#1b2028] hover:bg-[#1b2028] hover:text-[#9E9E9E] dark:rounded-full dark:bg-[#fff] dark:shadow-lg dark:hover:text-[#00cccb]"
                  style={{
                    width: "2.7rem",
                    height: "2.7rem",
                    padding: ".5rem",
                  }}
                />
                <h1 className="ml-4 text-white transition hover:text-[#9E9E9E]  dark:bg-[#F0F0F0] dark:px-2 dark:py-1 dark:font-semibold dark:text-black  dark:hover:text-[#00cccb]">
                  Signup or Login
                </h1>

                <KeyboardArrowDownOutlinedIcon className=" ml-4 mr-8 text-[#9e9e9e] dark:bg-[#F0F0F0] dark:text-black dark:hover:text-[#00cccb]" />
              </button>
            </Link>
          )}

          <label
            className="stats-theme-label relative bottom-3.5 flex w-20"
            htmlFor="theme-change"
          >
            <input
              onClick={handleTheme}
              type="checkbox"
              id="theme-change"
              className="stats-theme-input opacity-0"
            />
            <span className="stats-theme-slider cursor-pointer" />
          </label>
        </div>
      </div>

      <div className="fixed right-16 z-40 flex w-full justify-center">
        {/* search results ui */}
        <SearchResults
          coins={coinsData}
          loading={isLoading}
          showSearchResults={showSearchResults}
        />
      </div>
      <div
        className={
          showNotifications
            ? "notificationsTab fixed right-60 top-20 w-60"
            : "fixed right-60 top-16 hidden w-60"
        }
      >
        <Notifications />
      </div>
    </>
  );
}

export default Header;
