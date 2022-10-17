import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Stats from "./Stats";
import CardLoadingState from "./CardLoadingState";

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
      setLoading("");
      console.log("ui updated", new Date());
    }, 120000);

    fetchData();
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
      SetStatsApiData(url2.data);
      setGasApiData(url3.data);
      setLoading("");
    } catch (err) {
      console.log("server limit exceeded!", err);
    }
  };

  //loading ui displayed and waiting until all api data fetch to load the app
  if (loading === null) {
    return (
      <div className="cards-section ml-10">
        <Stats loadingState={loading === null ? true : false} />
        <div className="cards flex justify-between">
          <CardLoadingState
            title="Bitcoin"
            symbol="BTC"
            logo={require("../images/loading-state-circle.png")}
            price={require("../images/loading-state-bar.png")}
            priceChange={require("../images/loading-state-bar.png")}
          />
          <CardLoadingState
            title="Bitcoin"
            symbol="BTC"
            logo={require("../images/loading-state-circle.png")}
            price={require("../images/loading-state-bar.png")}
            priceChange={require("../images/loading-state-bar.png")}
          />
          <CardLoadingState
            title="Bitcoin"
            symbol="BTC"
            logo={require("../images/loading-state-circle.png")}
            price={require("../images/loading-state-bar.png")}
            priceChange={require("../images/loading-state-bar.png")}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cards-section ml-10">
        <Stats
          loadingState={loading === null ? true : false}
          listedCoins={statsApiData.data.active_cryptocurrencies}
          btcVolume={statsApiData.data.total_volume.btc}
          btcDominance={statsApiData.data.market_cap_percentage.btc}
          ethDominance={statsApiData.data.market_cap_percentage.eth}
          ethGas={GasApiData.avgGas}
        />
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
