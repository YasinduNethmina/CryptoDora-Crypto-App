import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3 from "web3";

import FilterButton from "../FilterButton/FilterButton";
import networks from "../../../utils/ChainData";

const HandleNetwork = () => {
  const [error, setError] = useState("");

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName],
          },
        ],
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.removeListener) {
      window.ethereum.on("chainChanged", networkChanged);
    } else {
      return;
    }
  }, []);

  //Connect to already metamask exsisting networks
  const exsistingChainConnect = async (value) => {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: Web3.utils.toHex(value) }],
      });
    }
  };

  return (
    <div className="notificationsTab rounded-xl border-solid border-sky-500 bg-[#1B2028] px-2 py-1 text-center text-xs font-semibold text-white shadow-xl dark:border-[#00cccb] dark:bg-white dark:text-[#00cccb]">
      <div onClick={() => exsistingChainConnect(1)}>
        <FilterButton name="ETHEREUM MAINNET" />
      </div>

      <div onClick={() => exsistingChainConnect(5)}>
        <FilterButton name="ETHEREUM GOERLI" />
      </div>

      <div onClick={() => exsistingChainConnect(43113)}>
        <FilterButton name="AVALANCHE TESTNET" />
      </div>
    </div>
  );
};

export default HandleNetwork;
