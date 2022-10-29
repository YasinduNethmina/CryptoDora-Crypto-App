import React from "react";

function Coin({
  rank,
  name,
  change,
  marketCap,
  circulationSupply,
  image,
  price,
}) {
  // Rounded to  get better values
  let marketCapRound;
  if (marketCap >= 1000000000) {
    marketCapRound = String((marketCap / 1000000000).toFixed(1)) + "B";
  } else if (marketCap < 1000000000 && marketCap >= 1000000) {
    marketCapRound = String(Math.round(marketCap / 1000000).toFixed(1)) + "M";
  } else {
    marketCapRound = String(Math.round(marketCap / 1000).toFixed(1)) + "K";
  }

  let circulationSupplyRound;
  if (circulationSupply >= 1000000000000) {
    circulationSupplyRound =
      String(Math.round(circulationSupply / 1000000000000)) + "T";
  } else if (
    circulationSupply >= 1000000000 &&
    circulationSupply < 1000000000000
  ) {
    circulationSupplyRound =
      String(Math.round(circulationSupply / 1000000000)) + "B";
  } else if (circulationSupply >= 1000000 && circulationSupply < 1000000000) {
    circulationSupplyRound =
      String(Math.round(circulationSupply / 1000000)) + "M";
  }

  return (
    <>
      <div className="mx-4 flex justify-between font-semibold text-white">
        <div className="mb-4 flex w-20">
          {rank < 10 ? <h4>#0{rank}</h4> : <h4>#{rank}</h4>}
          <img className="mx-4 h-6 w-6" src={image} alt={name} />
          <h4>{name}</h4>
        </div>

        <div className=" mb-4 w-20 text-right">
          {change > 0 ? (
            <h4 className="text-green-500">{change.toFixed(2)}%</h4>
          ) : (
            <h4 className="text-red-500">{change.toFixed(2)}%</h4>
          )}
        </div>

        <div className="mb-4 w-20 text-left">
          <h4>{marketCapRound}</h4>
        </div>

        <div className="mb-4 w-20 text-left">
          <h4>{circulationSupplyRound}</h4>
        </div>

        <div className="mb-4 w-20 text-left">
          {price >= 1 ? (
            <h4>${price.toFixed(1)}</h4>
          ) : (
            <h4>${price.toFixed(3)}</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Coin;
