import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function CardsSection() {
  //Loading state is a quick fix in order to avoid some state values getting undefined
  const [loading, setLoading] = useState(null);

  //api states
  const [cardsApiData, SetCardsApiData] = useState();
  const [globalApiData, setGlobalApiData] = useState();
  const [GasApiData, setGasApiData] = useState();

  //used to refresh the state every 2min in order to get most accurate data realtime
  const [resetCardData, setResetCardData] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetCardData(!resetCardData);
      setLoading("");
      console.log("page updated", loading);
    }, 120000);

    fetchData();
    console.log("use effect ran", new Date());

    return () => clearInterval(interval);
  }, [resetCardData]);

  const fetchData = async () => {
    try {
      const url1 = await axios.get(
        //cards required data
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cripple%2Cdogecoin%2Ccardano%2Cpolkadot%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=2"
      );

      //global stats
      const url2 = await axios.get("https://api.coingecko.com/api/v3/global");

      //eth gas value
      const url3 = await axios.get(
        "https://api.owlracle.info/v3/eth/gas?apikey=f49d3716042b47a2a34f50cec7944be8"
      );

      SetCardsApiData(url1.data);
      setGlobalApiData(url2.data);
      setGasApiData(url3.data);
      setLoading("");
    } catch (err) {
      console.log("server limit exceeded!", err);
    }
  };

  //loading ui displayed and waiting until all api data fetch to load the app
  if (loading === null) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="cards-section ml-10">
        <h1 className="text-white font-semibold">
          Today's Cryptocurrency Prices
        </h1>
        <div className="card-section-stats flex text-center mx-4">
          <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-40 py-2 mt-6 hover:bg-white hover:text-[#072D4B] cursor-pointer duration-300">
            Listed Coins:&nbsp;
            {`${String(globalApiData.data.active_cryptocurrencies).slice(
              0,
              2
            )}.${String(globalApiData.data.active_cryptocurrencies).slice(
              2,
              3
            )}K`}
          </h4>
          <h4 className="card-section-stat text-white bg-[#2F9FF8] rounded-full w-32 py-2 mt-6 ml-6 hover:bg-white hover:text-[#072D4B] cursor-pointer duration-300">
            BTC Vol:{" "}
            {`${String(globalApiData.data.total_volume.btc).slice(
              0,
              2
            )}.${String(globalApiData.data.total_volume.btc).slice(2, 3)}B`}
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            BTC:{" "}
            {String(globalApiData.data.market_cap_percentage.btc).slice(0, 5)}%
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-28 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            ETH:{" "}
            {String(globalApiData.data.market_cap_percentage.eth).slice(0, 5)}%
          </h4>
          <h4 className="card-section-stat text-[#072D4B] bg-white rounded-full w-44 py-2 mt-6 ml-6 hover:bg-[#2F9FF8] hover:text-white cursor-pointer duration-300">
            ETH Gas: {String(Math.round(GasApiData.avgGas)).slice(0, 2)} Gwei
          </h4>
          <button>
            <h4 className="card-section-stat w-2 font-bold text-white py-2 mt-6 ml-6 hover:text-[#2F9FF8]">
              ...
            </h4>
          </button>
        </div>
        <div className="cards flex justify-between">
          <Card
            title="Bitcoin"
            symbol="BTC"
            logo={require("../images/bitcoin-logo.png")}
            price={`${cardsApiData.bitcoin.usd}`}
            priceChange={`${String(cardsApiData.bitcoin.usd_24h_change).slice(
              0,
              5
            )}%`}
          />
          <Card
            title="Polkadot"
            symbol="DOT"
            logo={require("../images/polkadot-logo.png")}
            price={`${cardsApiData.polkadot.usd}`}
            priceChange={`${String(cardsApiData.polkadot.usd_24h_change).slice(
              0,
              5
            )}%`}
          />
          <Card
            title="Ethereum"
            symbol="ETH"
            logo={require("../images/ethereum-logo.png")}
            price={`${cardsApiData.ethereum.usd}`}
            priceChange={`${String(cardsApiData.ethereum.usd_24h_change).slice(
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
