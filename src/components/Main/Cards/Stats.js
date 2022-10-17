import React, { useState } from "react";
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
  if (loadingState === true) {
    return (
      <div>
        <h1 className="text-white font-semibold animate-pulse">
          Today's Cryptocurrency Prices
        </h1>
        <div className="card-section-stats flex text-center mx-4">
          <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-40 py-2 mt-6 hover:bg-white hover:text-[#072D4B] cursor-pointer duration-300 text-center">
            Listed Coins: <SyncIcon className="animate-spin" />
          </h4>
          <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-32 py-2 mt-6 ml-6 hover:bg-white hover:text-[#072D4B] cursor-pointer duration-300">
            BTC Vol: <SyncIcon className="animate-spin" />
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            BTC: <SyncIcon className="animate-spin" />
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            ETH: <SyncIcon className="animate-spin" />
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-44 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            ETH Gas: <SyncIcon className="animate-spin" />
          </h4>
          <button>
            <h4 className="card-section-stat w-2 font-bold text-white py-2 mt-6 ml-6 hover:text-[#2F9FF8]">
              ...
            </h4>
          </button>
        </div>
      </div>
    );

    //stats state
  } else {
    return (
      <div>
        <h1 className="text-white font-semibold">
          Today's Cryptocurrency Prices
        </h1>
        <div className="card-section-stats flex text-center mx-4">
          <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-40 py-2 mt-6 hover:bg-white hover:text-[#072D4B] cursor-pointer duration-300">
            Listed Coins:{" "}
            {`${String(listedCoins).slice(0, 2)}.${String(listedCoins).slice(
              2,
              3
            )}K`}
          </h4>
          <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-32 py-2 mt-6 ml-6 hover:bg-white hover:text-[#072D4B] cursor-pointer duration-300">
            BTC Vol:{" "}
            {`${String(btcVolume).slice(0, 2)}.${String(btcVolume).slice(
              2,
              3
            )}B`}
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            BTC: {String(btcDominance).slice(0, 5)}%
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            ETH: {String(ethDominance).slice(0, 5)}%
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-44 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            ETH Gas: {String(Math.round(ethGas)).slice(0, 2)} Gwei
          </h4>
          <button>
            <h4 className="card-section-stat w-2 font-bold text-white py-2 mt-6 ml-6 hover:text-[#2F9FF8]">
              ...
            </h4>
          </button>
        </div>
      </div>
    );
  }
}

export default Stats;
