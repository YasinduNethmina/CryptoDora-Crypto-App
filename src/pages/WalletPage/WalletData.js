import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import ModelViewer from "metamask-logo";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HandleNetwork from "./HandleNetwork/HandleNetwork";
import WalletHead from "./WalletHead/WalletHead";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const WalletData = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const [networkComponent, setNetworkComponent] = useState(false);
  const [recepientAddress, setRecepientAddress] = useState(null);
  const [transactionHash, setTransactionHash] = useState(null);
  const [ethAmount, setETHAmount] = useState(null);
  const [connectedChain, setConnectedChain] = useState(null);
  const [connectedChainId, setConnectedChainId] = useState(null);

  const [copyBtn, setCopyBtn] = useState(false);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          getAccountBalance(result[0]);
        });
    } else {
      setErrorMessage("Please install MetaMask browser extension to interact!");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  // Get Account Balance
  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage("Failed to get account balance!");
      });
  };

  // refresh if network changed
  const chainChangedHandler = () => {
    window.location.reload();
  };

  // Handle account changes
  useEffect(() => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window?.ethereum.on("accountsChanged", accountChangedHandler);
      window?.ethereum.on("chainChanged", chainChangedHandler);
    }
    return () => {
      window?.ethereum.removeListener("accountsChanged", accountChangedHandler);
      window?.ethereum.removeListener("chainChanged", chainChangedHandler);
    };
  }, []);

  // Handle network change components
  const handleNetworkChangeComp = () => {
    setNetworkComponent(!networkComponent);
  };

  // Handle payments
  const handlePayment = async () => {
    try {
      if (!window.ethereum) {
        setErrorMessage(
          "Please install MetaMask browser extension to interact!"
        );
      } else if (userBalance <= ethAmount) {
        setErrorMessage("Insufficient funds!");
      } else if (!ethers.utils.isAddress(recepientAddress)) {
        setErrorMessage("Please enter a valid recipient address!");
      }

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      if (!ethers.utils.isAddress(recepientAddress)) {
        return setErrorMessage("invalid recipient address!");
      } else if (ethAmount <= 0 || ethAmount > userBalance) {
        return setErrorMessage(
          "please enter a valid amount or insufficient funds!"
        );
      } else {
        ethers.utils.getAddress(recepientAddress);
        setErrorMessage("transaction pending...");
        const tx = await signer.sendTransaction({
          to: recepientAddress,
          value: ethers.utils.parseEther(ethAmount),
        });
        setErrorMessage(
          `Your transaction was successfully sent to ${recepientAddress}`
        );
        setTransactionHash(tx.hash);
        // Update account balance when transaction is successful
        const receipt = await tx.wait();
        if (receipt.status === 1) {
          let accounts = await provider.send("eth_requestAccounts", []);
          let account = accounts[0];
          getAccountBalance(account);
        }
        setTimeout(() => {
          setErrorMessage(null);
          setTransactionHash(null);
        }, 100000);
      }
    } catch (err) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  // handle chain data
  useEffect(() => {
    DisplayConnnectedChainName();
  }, [connectedChain]);

  const DisplayConnnectedChainName = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();

    if (network.chainId === 1) {
      setConnectedChain(`ETHEREUM NETWORK`);
      setConnectedChainId(network.chainId);
    } else if (network.chainId === 39797 || network.chainId === 49797) {
      setConnectedChain(`ENERGI NETWORK`);
      setConnectedChainId(network.chainId);
    } else if (network.chainId === 43113 || network.chainId === 43114) {
      setConnectedChain(`AVAX NETWORK`);
      setConnectedChainId(network.chainId);
    } else if (network.name !== "unknown") {
      setConnectedChain(`${String(network.name).toUpperCase()} NETWORK`);
      setConnectedChainId(network.chainId);
    } else {
      setConnectedChain(`${String(network.name).toUpperCase()} NETWORK`);
      setConnectedChainId(network.chainId);
    }
  };

  // Fox Animation
  const [animationCreated, setAnimationCreated] = useState(false);
  const foxContainer = useRef(null);

  useEffect(() => {
    if (!animationCreated) {
      const viewer = ModelViewer({
        pxNotRatio: true,
        width: 200,
        height: 200,
        followMouse: true,
      });
      if (
        foxContainer.current &&
        foxContainer.current.childNodes.length === 0
      ) {
        foxContainer.current.appendChild(viewer.container);
      }
      setAnimationCreated(true);
      return () => viewer.stopAnimation();
    }
  }, [animationCreated]);

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultAccount);
    setCopyBtn(true);
    setTimeout(() => {
      setCopyBtn(false);
    }, 6000);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  if (defaultAccount === null || undefined) {
    return (
      <div className="flex w-full items-center justify-center">
        <div>
          <div className="relative bottom-16 mb-12" ref={foxContainer}></div>
          <button
            onClick={connectWalletHandler}
            className="relative bottom-12 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-xl font-semibold text-white shadow-xl shadow-blue-500 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-blue-700 hover:text-white dark:bg-white dark:text-[#00cccb] dark:shadow-[#00cccb]"
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <div className="wallet mx-4 mb-5 mt-24 w-full rounded-xl bg-[#1b2028] text-center dark:bg-white lg:mr-8">
            <div className="relative mx-8 mt-6 flex justify-end sm:bottom-2">
              <a href="/wallet-tab">
                <button className="absolute -left-4 z-50 flex items-center justify-center rounded-full border-2 border-sky-400 bg-[#1b2028] px-2 py-1 text-xs font-semibold text-white dark:border-[#00cccb] dark:bg-[#00cccb] sm:-left-3">
                  🟠 DISCONNECT <KeyboardArrowDownIcon />
                </button>
              </a>

              <div className="absolute h-72">
                <button
                  onClick={handleNetworkChangeComp}
                  className="relative left-4 z-50 flex items-center justify-center rounded-full border-2 border-sky-400 bg-[#1b2028] px-2 py-1 text-xs font-semibold text-white transition-all hover:scale-105 hover:duration-300 dark:border-[#00cccb] dark:bg-[#00cccb]"
                >
                  ⚪ {connectedChain} <KeyboardArrowDownIcon />
                </button>

                <div
                  className={
                    networkComponent ? "absolute top-10 left-8 z-50" : "hidden"
                  }
                >
                  <HandleNetwork />
                </div>
              </div>
            </div>

            <div>
              <div className="relative -bottom-16 mt-4 rounded-xl p-1 md:mt-12 lg:bottom-10">
                <h1 className="text-2xl font-bold text-white dark:text-[#00cccb]">
                  Account
                </h1>
                <h4
                  onClick={handleCopy}
                  id="accountAddress"
                  value={defaultAccount}
                  className="flex cursor-pointer items-center justify-center text-[#9e9e9e] sm:text-sm"
                >
                  {defaultAccount}&nbsp;
                  <ContentCopyIcon
                    className="cursor-pointer p-2 hover:rounded-xl hover:bg-slate-400 hover:text-white dark:hover:bg-slate-300 dark:hover:text-gray-400"
                    style={{ fontSize: "40px" }}
                  />
                </h4>

                {/* Copy Button */}
                <h4
                  className={
                    copyBtn
                      ? "copy-animation absolute top-16 left-1/2 z-50 mt-2 -ml-10 rounded-xl bg-gray-400 px-4 py-2 text-xs text-white dark:bg-[#00cccb]"
                      : "z-0 m-0 hidden h-0 w-0"
                  }
                >
                  Copied!
                </h4>

                <div className="mt-16">
                  <h4 className="relative right-1 top-6 text-5xl font-semibold text-white dark:text-gray-500">
                    {userBalance == 0
                      ? Number(userBalance).toFixed(0)
                      : Number(userBalance).toFixed(4)}
                    &nbsp;
                    {connectedChain.substring(0, connectedChain.indexOf(" "))}
                  </h4>
                  <div className="mt-12">
                    <WalletHead id={connectedChainId} balance={userBalance} />
                  </div>
                </div>
              </div>

              <div className="">
                <div className="mt-24 flex justify-evenly px-8">
                  <input
                    className="mr-2 w-1/2 rounded-xl border-2 border-sky-600 bg-[#1b2028] py-2 pl-4 text-sky-500 placeholder-[#9e9e9e] caret-sky-500 focus:border-sky-500 focus:outline-none dark:border-[#00cccb] dark:bg-white dark:text-[#00cccb] dark:caret-[#00cccb]"
                    type="text"
                    onChange={(e) => setRecepientAddress(e.target.value)}
                    placeholder="Enter address..."
                  />

                  <input
                    className="ml-2 w-1/2 rounded-xl border-2 border-sky-600 bg-[#1b2028] py-2 pl-4 text-sky-500 placeholder-[#9e9e9e] caret-sky-500 focus:border-sky-500 focus:outline-none dark:border-[#00cccb] dark:bg-white dark:text-[#00cccb] dark:caret-[#00cccb]"
                    type="number"
                    onChange={(e) => setETHAmount(e.target.value)}
                    placeholder="Enter amount..."
                  />
                </div>

                <button
                  className="text- mt-5 ml-2 rounded-lg border-2 border-sky-600 px-4 py-2 text-xl font-extrabold text-white transition-all duration-500 hover:-translate-y-2 hover:bg-sky-600 hover:text-white dark:border-[#00cccb] dark:text-[#00cccb] dark:hover:bg-[#00cccb] dark:hover:text-white md:mt-10 lg:mt-16"
                  onClick={handlePayment}
                >
                  SEND TRANSACTION
                </button>
              </div>

              <h4 className="mt-4 text-sm font-semibold text-blue-500 dark:text-[#00cccb] sm:top-20">
                {errorMessage}
              </h4>
            </div>
          </div>
        </QueryClientProvider>
      </>
    );
  }
};

export default WalletData;
