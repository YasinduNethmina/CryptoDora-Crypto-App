import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import ChainData from "../../../utils/ChainData";

const WalletHead = ({ id, balance }) => {
  const [coin, setCoin] = useState(null);
  const [coinLogo, setCoinLogo] = useState(null);

  let coinLogoVar = null;

  let selectedCoinNameVar = null;
  let x = ChainData.filter((network) => {
    if (network.chainId === id) {
      selectedCoinNameVar = network.name;
    }
  });

  const { isLoading, error, data } = useQuery("coinData", () =>
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoinNameVar}&vs_currencies=usd`
      )
      .then((res) => setCoin(res.data))
  );

  if (isLoading || error) {
    return (
      <div>
        <h4 className="text-2xl font-semibold text-gray-400">Fetch Error...</h4>
      </div>
    );
  } else if (coin) {
    return (
      <div>
        <h4 className="text-2xl font-semibold text-gray-400">
          $
          {(Number(coin[selectedCoinNameVar]?.usd) * Number(balance)).toFixed(
            2
          )}{" "}
          USD
        </h4>
      </div>
    );
  }
};

export default WalletHead;
