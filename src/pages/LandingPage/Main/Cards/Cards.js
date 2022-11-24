import Card from "./Card/Card";
import Stats from "../Stats/Stats";
import "./Cards.scss";

function Cards({ stats, gas, cards, randomNumber }) {
  //used to generate cards randomly with a ternary
  return (
    <>
      <div className="cards-section">
        {/* Stats */}
        <Stats
          listedCoins={stats.active_cryptocurrencies}
          btcVolume={stats.total_volume.btc}
          btcDominance={stats.market_cap_percentage.btc}
          ethDominance={stats.market_cap_percentage.eth}
          ethGas={gas.result.ProposeGasPrice}
        />
        <div className="cards flex justify-between">
          {/* Bitcoin Card */}
          <Card
            title="Bitcoin"
            symbol="BTC"
            logo={require("../../../../assets/images/bitcoin-logo.png")}
            price={`${cards.bitcoin.usd}`}
            priceChange={`${String(cards.bitcoin.usd_24h_change.toFixed(3))}%`}
          />
          {/* Random Card Solana or Dogecoin */}
          {randomNumber.data[0] === 1 ? (
            <Card
              title="Solana"
              symbol="SOL"
              logo={require("../../../../assets/images/solana-logo.png")}
              price={`${cards.solana.usd}`}
              priceChange={`${String(cards.solana.usd_24h_change.toFixed(3))}%`}
            />
          ) : (
            <Card
              title="Dogecoin"
              symbol="DOGE"
              logo={require("../../../../assets/images/dogecoin-logo.png")}
              price={`${cards.dogecoin.usd}`}
              priceChange={`${String(
                cards.dogecoin.usd_24h_change.toFixed(3)
              )}%`}
            />
          )}
          {/* Random Card ETH or DOT */}
          {randomNumber.data[0] === 1 ? (
            <Card
              title="Ethereum"
              symbol="ETH"
              logo={require("../../../../assets/images/ethereum-logo.png")}
              price={`${cards.ethereum.usd}`}
              priceChange={`${String(
                cards.ethereum.usd_24h_change.toFixed(3)
              )}%`}
            />
          ) : (
            <Card
              title="Polkadot"
              symbol="DOT"
              logo={require("../../../../assets/images/polkadot-logo.png")}
              price={`${cards.polkadot.usd}`}
              priceChange={`${String(
                cards.polkadot.usd_24h_change.toFixed(3)
              )}%`}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
