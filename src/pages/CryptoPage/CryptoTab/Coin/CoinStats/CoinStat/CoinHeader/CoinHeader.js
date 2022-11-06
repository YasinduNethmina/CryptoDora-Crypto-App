import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LinkIcon from "@mui/icons-material/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeIcon from "@mui/icons-material/Code";

function CoinHeader({ coinStats, coin }) {
  let circulationSupplyPercentage =
    String(
      Math.round(
        (coinStats.market_data.circulating_supply /
          coinStats.market_data.total_supply) *
          100
      )
    ) + "%";

  return (
    <>
      <div className="mr-4 w-1/3 items-center rounded-xl bg-[#1B2028] text-center text-[#9E9E9E]">
        <Link to="/crypto-tab">
          <button className="goBackBtn mr-10 mt-4 mb-4 text-left hover:text-white">
            Crypto Tab
            <ArrowForwardIosIcon
              style={{ fontSize: ".85rem" }}
              className="text-[#9E9E9E]"
            />
            {coinStats.name}
          </button>
        </Link>

        {/* Head */}
        <div className="mt-6 flex items-center justify-between">
          <div className="ml-4 flex">
            {" "}
            <img
              className="h-8 w-8"
              src={coinStats.image.large}
              alt="coin-logo"
            />
            <h1 className="mx-4 text-2xl font-semibold text-white">
              {String(coinStats.name).slice(0, 20)}
            </h1>
            <h4 className="mr-4 flex items-center rounded-md bg-[#4e4e4e] px-2 font-bold text-[#c3c3c3]">
              {String(coinStats.symbol).toUpperCase()}
            </h4>
          </div>
          <div className="mr-4 cursor-pointer">
            <StarIcon className="mr-4  hover:text-yellow-400" />
            <IosShareIcon className="hover:text-green-500" />
          </div>
        </div>

        {/* Tags */}
        <div className="mx-4 mt-4 flex flex-wrap items-center text-sm">
          <h4 className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-2 py-1 text-center text-sm font-semibold text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700">
            Rank #{coinStats.market_cap_rank}
          </h4>

          <h4 className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-2 py-1 text-center text-sm font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800">
            Coin
          </h4>

          <h4 className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 text-center text-sm font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800">
            3.5M Watchlists
          </h4>
        </div>

        {/* Price */}
        <div className="mt-8 flex w-full flex-wrap justify-center">
          <h1 className="mr-4 text-3xl font-bold text-white shadow-cyan-500 transition duration-150 ease-in-out hover:text-green-300">
            ${coinStats.market_data.current_price.usd.toFixed(2)}
          </h1>
          {coinStats.market_data.price_change_percentage_24h > 0 ? (
            <h4 className="flex items-center justify-center rounded-xl bg-green-500 px-2 font-semibold text-white">
              <ArrowDropUpIcon className="text-white" />{" "}
              {coinStats.market_data.price_change_percentage_24h.toFixed(2)}%
            </h4>
          ) : (
            <h4 className="flex items-center justify-center rounded-xl bg-red-500 px-2 font-semibold text-white">
              <ArrowDropDown className="text-white" />{" "}
              {coinStats.market_data.price_change_percentage_24h.toFixed(2)}%
            </h4>
          )}
        </div>

        {/* Low High */}
        <div className="mt-8 mb-20">
          <div className="flex justify-around">
            <h4 className="text-gray-200 transition duration-150 ease-in-out hover:text-gray-300">
              Low: {coinStats.market_data.low_24h.usd.toFixed(2)}
            </h4>
            <h4 className="text-gray-200 transition duration-150 ease-in-out  hover:text-gray-300">
              High: {coinStats.market_data.high_24h.usd.toFixed(2)}
            </h4>
          </div>

          {/* MarketCap */}
          <div className="mx-4 mt-8 flex items-center justify-center">
            <h4 className="mr-2 text-center transition duration-150 ease-in-out hover:text-gray-300">
              M.Cap:{" "}
              {Math.round(coinStats.market_data.market_cap.usd).toLocaleString(
                "us-US",
                { style: "currency", currency: "USD" }
              )}
            </h4>

            {coinStats.market_data.market_cap_change_percentage_24h_in_currency
              .usd > 0 ? (
              <h4 className="flex h-8 items-center px-2 text-green-500">
                <ArrowDropUpIcon />
                {coinStats.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                  2
                )}
                %
              </h4>
            ) : (
              <h4 className="flex h-8 items-center px-2 text-red-500">
                <ArrowDropDown />
                {coinStats.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                  2
                )}
                %
              </h4>
            )}
          </div>

          {/* Fully Diluted Valuation */}
          <div className="mt-8 flex items-center justify-center">
            <h4 className="text-center transition duration-150 ease-in-out hover:text-gray-300">
              Fully Diluted Valuation:{" "}
              {Math.round(
                coinStats.market_data.fully_diluted_valuation.usd
              ).toLocaleString("us-US", { style: "currency", currency: "USD" })}
            </h4>
          </div>

          {/* Circulating Supply */}
          <div className="mt-8 ml-6">
            <h4 className="mr-6 text-center transition duration-150 ease-in-out hover:text-gray-300">
              Circulating Supply: {coinStats.market_data.circulating_supply}{" "}
              {coinStats.symbol.toUpperCase()} ({circulationSupplyPercentage})
            </h4>

            {/* Circulation Supply Bar */}
            <div className="mr-6 mt-4 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2.5 rounded-full bg-blue-600"
                style={{ width: circulationSupplyPercentage }}
              ></div>
            </div>
          </div>
        </div>

        {/* Links */}

        <div className="mb-2 flex flex-wrap justify-center">
          {/* Homepage */}
          <a
            href={coinStats.links.homepage[0]}
            target="_blank"
            rel="noreferrer"
            className="gple-600 group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              <LinkIcon className="rotate-45" />
              HomePage
              <ArrowOutwardIcon />
            </span>
          </a>
          {/* Explorer */}
          <a
            className="gple-600 group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
            href="https://etherscan.io/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              <SearchIcon />
              Explorers
            </span>
          </a>
          {/* Twitter */}
          <a
            className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
            href={"https://twitter.com/" + coinStats.links.twitter_screen_name}
            target="_blank"
            rel="noreferrer"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              <TwitterIcon />
              Twitter
            </span>
          </a>
          {/* Repo  */}
          <a
            className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-zinc-800 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-zinc-800 group-hover:from-gray-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
            href={coinStats.links.repos_url.github[0]}
            target="_blank"
            rel="noreferrer"
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              <CodeIcon />
              Source Code
            </span>
          </a>
        </div>
      </div>

      {/* Coin Stat Description */}
      <div
        style={{ position: "absolute", right: "2.3rem", top: "48rem" }}
        className="coinDescription mt-4 w-4/5 rounded-xl bg-[#1B2028] p-4 font-mono font-semibold"
      >
        <h4 className="my-4 bg-gradient-to-br from-gray-400 to-zinc-600 bg-clip-text text-3xl text-transparent">
          {coinStats.name}
        </h4>
        <h4 className="bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent">
          ❝ {String(coinStats.description.en).slice(0, 1750)} ❞
        </h4>
      </div>
    </>
  );
}

export default CoinHeader;
