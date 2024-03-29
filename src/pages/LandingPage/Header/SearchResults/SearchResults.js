import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SearchResults({ coins, loading, showSearchResults }) {
  //destructured object into arrays again and sliced to get the top 9 results
  let coinNames = coins.name.slice(0, 8);
  let coinImages = coins.img.slice(0, 8);
  let coinRanks = coins.rank.slice(0, 8);
  let coinSymbols = coins.symbol.slice(0, 8);

  if (!loading && showSearchResults) {
    document.querySelector(".search-results").classList.remove("hidden");
  }

  const handleClick = () => {
    document.querySelector(".search-results").classList.add("hidden");
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelector(".search-results").classList.add("hidden");
      }
    });
  }, []);

  if (loading) {
    return;
  } else {
    return (
      <div className="search-results mt-20 hidden rounded-xl border-2 border-sky-400 bg-[#1B2028] px-4 py-2 font-bold text-[#9E9E9E] dark:bg-white dark:text-black">
        <button
          className="duration-400 py-2 px-2 text-white transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-sky-400 dark:text-black dark:hover:text-red-500"
          onClick={handleClick}
        >
          [ESC]
        </button>
        <Link to="/crypto-tab" onClick={handleClick}>
          <div className="my-2 flex justify-between px-2">
            {/* Mapping each array to get the results */}
            <div>
              {coinImages.map((coinImg) => {
                return (
                  <img
                    className="mt-5 mr-5 h-6 w-6 rounded-full"
                    src={coinImg}
                    alt="coin-logo"
                  />
                );
              })}
            </div>

            <div>
              {coinNames.map((coinName) => {
                return (
                  <>
                    <Link to="/crypto-tab">
                      <button className="border-box mt-5 rounded px-4 text-left transition ease-in-out hover:-translate-y-1 hover:bg-[#262e39] hover:shadow-2xl dark:hover:bg-gray-200 dark:hover:shadow-lg">
                        {String(coinName).slice(0, 16)}
                      </button>
                    </Link>
                    <br />
                  </>
                );
              })}
            </div>

            <div>
              {coinSymbols.map((coinSymbol) => {
                return <p className="mt-5 ml-4 mr-8">{coinSymbol}</p>;
              })}
            </div>

            <div>
              {coinRanks.map((coinRank) => {
                if (coinRank == null) {
                  return <p className=" mt-5">{coinRank}</p>;
                } else {
                  return (
                    <p className="mt-5 dark:text-[#00cccb]">#{coinRank}</p>
                  );
                }
              })}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SearchResults;
