import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function CardsSection() {
  const [price, setPrice] = useState();
  const [resetPrice, setResetPrice] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setResetPrice(!resetPrice);
    }, 120000);

    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false"
      )
      .then((res) => {
        setLoading(false);
        setPrice(res.data);
      })
      .catch((err) => console.log(err));
  }, [resetPrice]);

  if (loading) {
    return <h1>LOADING...</h1>;
  } else {
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
            price={`${price.bitcoin.usd}`}
            priceChange={`${String(price.bitcoin.usd_24h_change).slice(0, 5)}%`}
          />
          <Card
            title="Solana"
            symbol="SOL"
            logo={require("../images/solana-logo.png")}
            price={`${price.solana.usd}`}
            priceChange={`${String(price.solana.usd_24h_change).slice(0, 5)}%`}
          />
          <Card
            title="Ethereum"
            symbol="ETH"
            logo={require("../images/ethereum-logo.png")}
            price={`${price.ethereum.usd}`}
            priceChange={`${String(price.ethereum.usd_24h_change).slice(
              0,
              5
            )}%`}
          />
        </div>
      </div>
    );
  }
}

export default CardsSection;
