import React from "react";
import Card from "./Card";

function CardsSection() {
  return (
    <div className="cards-section ml-10">
      <h1 className="text-white font-semibold">
        Today's Cryptocurrency Prices
      </h1>
      <div className="card-section-stats flex text-center mx-4">
        <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-40 py-2 mt-6">
          M.Cap: $933.1B
        </h4>
        <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-32 py-2 mt-6 ml-6">
          24.Vol: 45.2B
        </h4>
        <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6">
          BTC: 39.52%
        </h4>
        <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6">
          ETH: 17.24%
        </h4>
        <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-44 py-2 mt-6 ml-6">
          ETH Gas: 32Gwei
        </h4>
        <button>
          <h4 className="card-section-stat w-2 font-bold text-white py-2 mt-6 ml-6">
            ...
          </h4>
        </button>
      </div>
      <div className="cards flex justify-between">
        <Card
          title="Bitcoin"
          symbol="BTC"
          logo={require("../images/bitcoin-logo.png")}
          graph={require("../images/graph-up.png")}
          price="$52,291"
          priceChange="+0.25%"
        />
        <Card
          title="Avalanche"
          symbol="AVAX"
          logo={require("../images/avalanche-logo.png")}
          graph={require("../images/graph-down.png")}
          price="$23.29"
          priceChange="+0.12%"
        />
        <Card
          title="Ethereum"
          symbol="ETH"
          logo={require("../images/ethereum-logo.png")}
          graph={require("../images/graph-up.png")}
          price="$1232.29"
          priceChange="+0.09%"
        />
      </div>
    </div>
  );
}

export default CardsSection;
