import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Coin({
  id,
  rank,
  name,
  change,
  marketCap,
  circulationSupply,
  image,
  price,
}) {
  const location = useLocation();
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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <>
      <Link
        to={
          location.pathname === "/crypto-tab"
            ? `/crypto-tab/${id}`
            : "/crypto-tab"
        }
        state={{ data: id }}
      >
        <div className="mx-4 flex cursor-pointer items-center justify-between rounded-xl py-2 font-semibold text-white transition ease-in-out hover:-translate-y-1 hover:bg-[#262e39] hover:shadow-2xl dark:text-black dark:hover:bg-[#f4f5f7] dark:hover:text-black">
          <div className="flex w-20 items-center pl-2">
            {rank < 10 ? (
              <h4 className="text-[#b5b5b5] dark:text-[#ffd910]">#00{rank}</h4>
            ) : (
              <h4 className="text-[#9E9E9E]">#0{rank}</h4>
            )}
            <img className="mx-4 h-6 w-6" src={image} alt={name} />
            <h4>{name}</h4>
          </div>

          <div className="coinPriceChangePercentage relative w-20 text-right">
            {change > 0 ? (
              <h4 className="text-green-500">{Number(change).toFixed(2)}%</h4>
            ) : (
              <h4 className="text-red-500">{Number(change).toFixed(2)}%</h4>
            )}
          </div>

          <div className="w-20 text-left">
            <h4>{marketCapRound}</h4>
          </div>

          <div className="w-20 text-left">
            <h4>{circulationSupplyRound}</h4>
          </div>

          <div className="w-20 text-left">
            {price >= 1 ? (
              <h4>${price.toFixed(1)}</h4>
            ) : (
              <h4>${price.toFixed(3)}</h4>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Coin;
