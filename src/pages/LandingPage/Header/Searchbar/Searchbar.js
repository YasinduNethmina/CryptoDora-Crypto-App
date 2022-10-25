import React from "react";

function Searchbar({ coins }) {
  //destructured object into arrays again and sliced to get the top 9 results
  let coinNames = coins.name.slice(0, 8);
  let coinImages = coins.img.slice(0, 8);
  let coinRanks = coins.rank.slice(0, 8);
  let coinSymbols = coins.symbol.slice(0, 8);

  return (
    <div className="absolute z-40 mr-40 w-1/3 rounded-xl border-2 border-sky-400 bg-[#1B2028] px-4 py-2 font-bold text-[#9E9E9E]">
      <div className="my-2 flex justify-between">
        {/* Mapping each array to get the results */}
        <div>
          {coinImages.map((coinImg) => {
            return (
              <img
                className="mt-5 mr-5 h-6 w-6"
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
                <button className=" mt-5 rounded px-2 hover:bg-[#3A6FF8] hover:text-white">
                  {coinName}
                </button>
                <br />
              </>
            );
          })}
        </div>

        <div>
          {coinSymbols.map((coinSymbol) => {
            return <p className="mt-5">{coinSymbol}</p>;
          })}
        </div>

        <div>
          {coinRanks.map((coinRank) => {
            if (coinRank == null) {
              return <p className="mt-5">{coinRank}</p>;
            } else {
              return <p className="mt-5">#{coinRank}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
