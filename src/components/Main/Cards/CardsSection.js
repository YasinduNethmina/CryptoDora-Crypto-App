import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Stats from "./Stats";
import CardLoadingState from "./CardLoadingState";
import { Navigate } from "react-router-dom";

function CardsSection() {
  //Loading state to manage the loading animations and just to avoid api data getting undefined
  const [loading, setLoading] = useState(null);

  // Card Data State
  const [cardsApiData, SetCardsApiData] = useState();
  //Stats Data State
  const [statsApiData, SetStatsApiData] = useState();
  //ETH Gas Data State
  const [GasApiData, setGasApiData] = useState();

  //used to refresh the card state every 2min in order to get most accurate data realtime
  const [resetCardData, setResetCardData] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setResetCardData(!resetCardData);
      setLoading(null);
    }, 180000);
    fetchData();
  }, [resetCardData]);

  const fetchData = async () => {
    try {
      //cards data
      const url1 = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cripple%2Cdogecoin%2Ccardano%2Cpolkadot%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=2"
      );

      //stats data
      const url2 = await axios.get("https://api.coingecko.com/api/v3/global");

      //eth gas data
      const url3 = await axios.get(
        "https://ethgasstation.info/api/ethgasAPI.json?"
      );

      SetCardsApiData(url1.data);
      SetStatsApiData(url2.data);
      setGasApiData(url3.data);
      setLoading("");
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        //Server Limit ERROR
        return <Navigate to="*" />;
      }
      console.log("server limit exceeded!", err.code);
    }
  };

  //Loading UI displayed and waiting until all api data fetch to load the app (null is meant to loading true)
  if (loading === null) {
    return (
      // Stats Loading State
      <div className="cards-section ml-10">
        <Stats loadingState={loading === null ? true : false} />
        {/* Cards Loading State */}
        <div className="cards flex justify-between">
          <CardLoadingState img={require("../images/loading-state-bar.png")} />
          <CardLoadingState img={require("../images/loading-state-bar.png")} />
          <CardLoadingState img={require("../images/loading-state-bar.png")} />
        </div>
      </div>
    );
  } else {
    //used to generate cards randomly
    let randomNum1 = Math.floor(Math.random() * 2);
    let randomNum2 = Math.floor(Math.random() * 2);
    console.log(randomNum1, randomNum2);
    return (
      //Working State
      <div className="cards-section ml-10">
        <Stats
          listedCoins={statsApiData.data.active_cryptocurrencies}
          btcVolume={statsApiData.data.total_volume.btc}
          btcDominance={statsApiData.data.market_cap_percentage.btc}
          ethDominance={statsApiData.data.market_cap_percentage.eth}
          ethGas={GasApiData.fast}
        />
        <div className="cards flex justify-between">
          {/* Bitcoin Card */}
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
          {/* Random Card Solana or Dogecoin */}
          {randomNum1 === 1 ? (
            <Card
              title="Solana"
              symbol="SOL"
              logo={require("../images/solana-logo.png")}
              price={`${cardsApiData.solana.usd}`}
              priceChange={`${String(cardsApiData.solana.usd_24h_change).slice(
                0,
                5
              )}%`}
            />
          ) : (
            <Card
              title="Dogecoin"
              symbol="DOGE"
              logo={require("../images/dogecoin-logo.png")}
              price={`${cardsApiData.dogecoin.usd}`}
              priceChange={`${String(
                cardsApiData.dogecoin.usd_24h_change
              ).slice(0, 5)}%`}
            />
          )}
          {/* Random Card ETH or DOT */}
          {randomNum2 === 1 ? (
            <Card
              title="Ethereum"
              symbol="ETH"
              logo={require("../images/ethereum-logo.png")}
              price={`${cardsApiData.ethereum.usd}`}
              priceChange={`${String(
                cardsApiData.ethereum.usd_24h_change
              ).slice(0, 5)}%`}
            />
          ) : (
            <Card
              title="Polkadot"
              symbol="DOT"
              logo={require("../images/polkadot-logo.png")}
              price={`${cardsApiData.polkadot.usd}`}
              priceChange={`${String(
                cardsApiData.polkadot.usd_24h_change
              ).slice(0, 5)}%`}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CardsSection;
