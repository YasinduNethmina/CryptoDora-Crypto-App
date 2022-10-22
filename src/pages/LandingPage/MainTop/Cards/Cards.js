import Card from "./Card";
import Stats from "./Stats";

function Cards({ stats, gas, cards }) {
  //used to generate cards randomly with a ternary
  let randomNum1 = Math.floor(Math.random() * 2);
  let randomNum2 = Math.floor(Math.random() * 2);

  return (
    <div className="cards-section">
      {/* Stats */}
      <Stats
        listedCoins={stats.active_cryptocurrencies}
        btcVolume={stats.total_volume.btc}
        btcDominance={stats.market_cap_percentage.btc}
        ethDominance={stats.market_cap_percentage.eth}
        ethGas={gas.fast}
      />
      <div className="cards flex justify-between">
        {/* Bitcoin Card */}
        <Card
          title="Bitcoin"
          symbol="BTC"
          logo={require("../../../../assets/images/bitcoin-logo.png")}
          price={`${cards.bitcoin.usd}`}
          priceChange={`${String(cards.bitcoin.usd_24h_change).slice(0, 5)}%`}
        />
        {/* Random Card Solana or Dogecoin */}
        {randomNum1 === 1 ? (
          <Card
            title="Solana"
            symbol="SOL"
            logo={require("../../../../assets/images/solana-logo.png")}
            price={`${cards.solana.usd}`}
            priceChange={`${String(cards.solana.usd_24h_change).slice(0, 5)}%`}
          />
        ) : (
          <Card
            title="Dogecoin"
            symbol="DOGE"
            logo={require("../../../../assets/images/dogecoin-logo.png")}
            price={`${cards.dogecoin.usd}`}
            priceChange={`${String(cards.dogecoin.usd_24h_change).slice(
              0,
              5
            )}%`}
          />
        )}
        {/* Random Card ETH or DOT */}
        {randomNum2 === 1 ? (
          <Card
            title="Ethereum"
            symbol="ETH"
            logo={require("../../../../assets/images/ethereum-logo.png")}
            price={`${cards.ethereum.usd}`}
            priceChange={`${String(cards.ethereum.usd_24h_change).slice(
              0,
              5
            )}%`}
          />
        ) : (
          <Card
            title="Polkadot"
            symbol="DOT"
            logo={require("../../../../assets/images/polkadot-logo.png")}
            price={`${cards.polkadot.usd}`}
            priceChange={`${String(cards.polkadot.usd_24h_change).slice(
              0,
              5
            )}%`}
          />
        )}
      </div>
    </div>
  );
}

export default Cards;
