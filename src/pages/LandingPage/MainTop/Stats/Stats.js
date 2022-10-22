import React from "react";
import SyncIcon from "@mui/icons-material/Sync";

function Stats({
  loadingState,
  listedCoins,
  btcVolume,
  btcDominance,
  ethDominance,
  ethGas,
}) {
  //stats loading state
  return (
    <div>
      {loadingState === true ? (
        <h1 className="animate-pulse font-semibold text-white">
          Today's Cryptocurrency Prices
        </h1>
      ) : (
        <h1 className="font-semibold text-white">
          Today's Cryptocurrency Prices
        </h1>
      )}

      <div className="card-section-stats mx-4 flex text-center">
        <h4 className="card-section-stat mt-6 w-40 cursor-pointer rounded-full bg-[#2F9FF8] py-2 text-white duration-300 hover:bg-white hover:text-[#072D4B]">
          Listed Coins:{" "}
          {loadingState === true ? (
            <SyncIcon className="animate-spin" />
          ) : (
            `${String(listedCoins).slice(0, 2)}.${String(listedCoins).slice(
              2,
              3
            )}K`
          )}
        </h4>
        <h4 className="card-section-stat mt-6 ml-6 w-32 cursor-pointer rounded-full bg-[#2F9FF8] py-2 text-white duration-300 hover:bg-white hover:text-[#072D4B]">
          BTC Vol:{" "}
          {loadingState === true ? (
            <SyncIcon className="animate-spin" />
          ) : (
            `${String(btcVolume).slice(0, 2)}.${String(btcVolume).slice(2, 3)}B`
          )}
        </h4>
        <h4 className="card-section-stat mt-6 ml-6 w-28 cursor-pointer rounded-full bg-white py-2 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white">
          BTC:{" "}
          {loadingState === true ? (
            <SyncIcon className="animate-spin" />
          ) : (
            `${String(btcDominance).slice(0, 5)}%`
          )}
        </h4>
        <h4 className="card-section-stat mt-6 ml-6 w-28 cursor-pointer rounded-full bg-white py-2 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white">
          ETH:{" "}
          {loadingState === true ? (
            <SyncIcon className="animate-spin" />
          ) : (
            `${String(ethDominance).slice(0, 5)}%`
          )}
        </h4>
        <h4 className="card-section-stat mt-6 ml-6 w-44 cursor-pointer rounded-full bg-white py-2 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white">
          ETH Gas:{" "}
          {loadingState === true ? (
            <SyncIcon className="animate-spin" />
          ) : (
            `${String(Math.round(ethGas)).slice(0, 2)}Gwei`
          )}{" "}
        </h4>
        <button>
          <h4 className="card-section-stat mt-6 ml-6 w-2 py-2 font-bold text-white hover:text-[#2F9FF8]">
            ...
          </h4>
        </button>
      </div>
    </div>
  );
}

export default Stats;
