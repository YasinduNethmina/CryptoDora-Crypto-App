import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Error from "../../../../ErrorPage/Error";

// Fix eth value, balance and etc

function ExplorerDetailsTab({ text }) {
  const [transactionsQuery, balanceQuery, priceQuery] = useQueries({
    queries: [
      {
        queryKey: ["transactions"],
        queryFn: () =>
          axios
            .get(
              `https://api.etherscan.io/api?module=account&action=txlist&address=${text}&startblock=0&endblock=99999999&page=1&offset=16&sort=asc&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ`
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["balance"],
        queryFn: () =>
          axios
            .get(
              `https://api.etherscan.io/api?module=account&action=balancemulti&address=${text}&tag=latest&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ`
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["price"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
            )
            .then((res) => res.data),
      },
    ],
  });

  if (
    transactionsQuery.isLoading ||
    balanceQuery.isLoading ||
    priceQuery.isLoading
  ) {
    return;
  } else if (
    transactionsQuery.data.status === "0" ||
    balanceQuery.data.status === "0"
  ) {
    return <Error explorerText="Address not found" />;
  } else {
    let latestTransactions = transactionsQuery.data.result;
    return (
      <div className="duration-800 mx-1 mt-20 w-full cursor-default rounded-xl bg-[#1B2028] dark:bg-white dark:text-black dark:shadow-lg">
        <div className="flex justify-between">
          {/* Header */}
          <div className="m-6 flex items-center">
            <img
              className="relative right-4 w-10"
              src={require("../../../../../assets/images/ethereum-logo.png")}
              alt=""
            />
            <h1 className="mr-4 text-xl text-gray-300 dark:text-black">
              Address
            </h1>
            <p className="text-[#9e9e9e] dark:text-black">{text}</p>
            <button className="ml-4 rounded-md bg-purple-500 px-2 py-1 text-sm text-white hover:bg-purple-700">
              Copy
            </button>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.binance.com/en/buy-sell-crypto?crypto=ETH&fiat=USD"
              rel="noreferrer"
              target="_blank"
            >
              <button className="mr-4 h-8 w-20 rounded-md bg-sky-500 text-center text-white hover:bg-blue-600">
                Buy <ArrowDropDownIcon />
              </button>
            </a>
            <a
              href="https://www.binance.com/en/trade/ETH_BUSD?_from=markets&theme=dark&type=spot"
              rel="noreferrer"
              target="_blank"
            >
              <button className="mr-4 h-8 w-28 rounded-md bg-sky-500 text-center text-white hover:bg-blue-600">
                Exchange <ArrowDropDownIcon />
              </button>
            </a>
            <a
              href="https://www.binance.com/en/trade/ETH_BUSD?_from=markets&theme=dark&type=spot"
              rel="noreferrer"
              target="_blank"
            >
              <button className="mr-4 h-8 w-20 rounded-md bg-sky-500 text-center text-white hover:bg-blue-600">
                Earn <ArrowDropDownIcon />
              </button>
            </a>
          </div>
        </div>
        <div className=" flex justify-around">
          <div className="duration-800 cursor-pointer rounded-xl bg-[#1B2028] p-4 transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:border-2 dark:border-black dark:bg-white">
            <h1 className="text-center font-bold text-white dark:text-black">
              Overview
            </h1>
            <h4 className="mt-6 flex items-center text-center text-green-400 dark:text-black">
              <MonetizationOnIcon style={{ color: "green" }} />
              &nbsp; Balance:{" "}
              {(
                Number(balanceQuery.data.result[0].balance) /
                1000000000000000000
              ).toFixed(2)}{" "}
              Ether
            </h4>
            <h4 className="mt-4 flex items-center text-green-400 dark:text-black">
              <AttachMoneyIcon style={{ color: "green" }} /> &nbsp;ETH Value: $
              {(
                priceQuery.data.ethereum.usd *
                (Number(balanceQuery.data.result[0].balance) /
                  1000000000000000000)
              ).toFixed(2)}
            </h4>
          </div>

          <div className="duration-800 cursor-pointer rounded-xl bg-[#1B2028] p-4 transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:border-2 dark:border-black dark:bg-white">
            <h1 className="text-center font-bold text-white dark:text-black">
              More Info
            </h1>
            <h4 className="mt-6 text-center text-yellow-400 dark:text-black">
              <LocalOfferIcon style={{ color: "yellow" }} /> My Name Tag: Not
              Available
            </h4>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div className="w-full">
            <div className="mt-8 flex justify-between text-white">
              <div>
                <h1 className="relative left-20">Tx Hash</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <div className="ml-4">
                      <button
                        value={transaction.hash}
                        className="my-4 w-1 text-sm text-sky-500 hover:text-blue-500"
                      >
                        {String(transaction.hash).slice(0, 24)}...
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="relative left-20">
                <h1 className="relative left-3">Block</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <div>
                      <button
                        value={transaction.blockNumber}
                        className="my-4 w-1 text-sm text-sky-500 hover:text-blue-500"
                      >
                        {transaction.blockNumber}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="relative left-6">
                <h1 className="relative left-10">From</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <div>
                      <button
                        value={transaction.from}
                        className="my-4 w-1 text-center text-sm text-sky-500 hover:text-blue-500"
                      >
                        {String(transaction.from).slice(0, 16)}...
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="relative left-10">
                <h1 className="relative left-10">To</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <div>
                      <button
                        value={transaction.to}
                        className="my-4 w-1 text-center text-sm text-sky-500 hover:text-blue-500"
                      >
                        {String(transaction.to).slice(0, 16)}...
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="relative left-20">
                <h1>Gas (Gwei) </h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <h6 className="relative left-6 mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                      {(transaction.gasPrice / 1000000000).toFixed(2)}
                    </h6>
                  );
                })}
              </div>

              <div className="relative">
                <h1 className="mr-4">ETH Value</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <h6 className="relative left-8 mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                      {(
                        Number(transaction.value) / 1000000000000000000
                      ).toFixed(2)}
                    </h6>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExplorerDetailsTab;
