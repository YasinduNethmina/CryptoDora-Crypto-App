import React from "react";
import Explorer from "./Explorer.scss";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import PaidIcon from "@mui/icons-material/Paid";
import Paid from "@mui/icons-material/Paid";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

function ExplorerTab() {
  const [
    lastBlockQuery,
    ethereumQuery,
    gasQuery,
    holdersQuery,
    transactionQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ["lastBlock"],
        queryFn: () =>
          axios
            .get(
              "https://api.etherscan.io/api?module=block&action=getblockcountdown&blockno=16701588&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["ethereum"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["gas"],
        queryFn: () =>
          axios
            .get(
              "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["topHolders"],
        queryFn: () =>
          axios
            .get(
              "https://api.ethplorer.io/getTopTokenHolders/0xf3Db5Fa2C66B7aF3Eb0C0b782510816cbe4813b8?apiKey=freekey&limit=16"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["transactions"],
        queryFn: () =>
          axios
            .get(
              "https://api.ethplorer.io/getAddressTransactions/0xa7efae728d2936e78bda97dc267687568dd593f3?apiKey=freekey&limit=16"
            )
            .then((res) => res.data),
      },
    ],
  });

  if (
    lastBlockQuery.isLoading ||
    ethereumQuery.isLoading ||
    gasQuery.isLoading ||
    holdersQuery.isLoading ||
    transactionQuery.isLoading
  ) {
    return;
  } else {
    // Used to display the data of top holders using a map
    let holders = holdersQuery.data.holders;
    let transactions = transactionQuery.data;

    return (
      <>
        {/* Header section */}
        <div className="explorer-bg mt-24 h-1/4 w-full rounded-xl  opacity-90">
          <h1 className="pl-10 pt-16 text-center text-4xl font-semibold text-green-300">
            The Ethereum Blockchain Explorer
          </h1>
          <div className="ml-10 flex justify-center">
            <select
              name="category"
              className="mt-6 h-12 border-r-2 border-gray-300 px-1 outline-none"
            >
              <option value="all">All Filters</option>
              <option value="addresses">Addresses</option>
              <option value="tokens">Tokens</option>
              <option value="names">Name Tags</option>
              <option value="labels">Labels</option>
              <option value="websites">Websites</option>
            </select>
            <input
              className="mt-6 h-12 w-1/2 pl-4 text-[#9e9e9e] caret-[#9e9e9e] outline-none"
              placeholder="Search by Address / Txn Hash / Block / Token"
              type="search"
            />
            <button>
              <SearchIcon
                style={{ fontSize: "3rem", color: "white" }}
                className="mt-6 rounded-r-xl bg-sky-500 hover:bg-blue-500"
              />
            </button>
          </div>
          <h1 className="mt-1 text-center font-light text-[#9e9e9e]">
            (example: 0xE92d1A43df510F82C66382592a047d288f85226f)
          </h1>
          <h1 className="mt-10 ml-10 text-center font-bold text-yellow-400 ">
            CryptoDora is now a Top validator on the Smart Chain. &nbsp;
            <a
              href="https://ethereum.org/en/"
              className="text-red-600 underline underline-offset-4 hover:text-red-400"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Delegate ETH to Cryptodora now!
            </a>
          </h1>
        </div>

        <div className="h-9/12 relative bottom-2 mb-16 flex flex-wrap justify-center rounded-b-xl bg-[#1B2028] pt-4">
          {/* ETH Price */}
          <div className="duration-800 mr-4 mt-2 h-20 w-1/5 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
            <div className="mx-4 flex items-center justify-center">
              <img
                className="mr-2 mt-4 w-10"
                src={require("../../../assets/images/ethereum-logo.png")}
                alt="ethereum-logo"
              />
              <div className="mt-4 text-left">
                <h1 className="text-[#9e9e9e]">ETH Price</h1>
                <div className="flex">
                  <h4>${ethereumQuery.data[0].current_price}</h4>
                  <h4
                    className={
                      ethereumQuery.data[0].price_change_percentage_24h > 0
                        ? "pl-2 text-green-500"
                        : "pl-2 text-red-500"
                    }
                  >
                    $
                    {Number(
                      ethereumQuery.data[0].price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Transactions Count */}
          <div className="duration-800 mt-2 h-20 w-1/5 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
            <div className="mx-4 flex items-center justify-center">
              <ReceiptLongIcon
                style={{ fontSize: "40px" }}
                className="mr-2 mt-4 w-10 text-sky-500"
              />
              <div className="mt-4 text-left">
                <h1 className="text-[#9e9e9e]">Transactions</h1>
                <div className="flex">
                  <h4>1,823,90M</h4>
                  <h4 className="pl-2 text-gray-400">(12TPS)</h4>
                </div>
              </div>
            </div>
          </div>
          {/* AVG Gas Price */}
          <div className="duration-800 mt-2 ml-4 h-20 w-1/5 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
            <div className="mx-4 flex items-center justify-center">
              <LocalGasStationIcon
                style={{ fontSize: "40px" }}
                className="mr-2 mt-4 w-10 text-yellow-500"
              />
              <div className="mt-4 text-left">
                <h1 className="text-[#9e9e9e]">Average Gas</h1>
                <div className="flex">
                  <h4>{gasQuery.data.result.SafeGasPrice}Gwei</h4>
                  <h4 className="pl-2 text-gray-400">$0.40</h4>
                </div>
              </div>
            </div>
          </div>
          {/* MarketCap */}
          <div className="duration-800 mt-2 ml-4 h-20 w-1/5 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
            <div className="mx-4 flex items-center justify-center">
              <Paid
                style={{ fontSize: "40px" }}
                className="mr-2 mt-4 w-10 text-green-500"
              />
              <div className="mt-4 text-left">
                <h1 className="text-[#9e9e9e]">Market Cap</h1>
                <div className="flex">
                  <h4>
                    ${Math.round(ethereumQuery.data[0].market_cap / 1000000000)}
                    B
                  </h4>
                  <h4
                    className={
                      ethereumQuery.data[0].market_cap_change_percentage_24h > 0
                        ? "pl-2 text-green-500"
                        : "pl-2 text-red-500"
                    }
                  >
                    {ethereumQuery.data[0].market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Last Block */}
          <div className="duration-800 mt-2 ml-4 h-20 w-32 cursor-pointer rounded-xl bg-[#31353f] font-bold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
            <div className="mx-4 flex items-center justify-center">
              <div className="mt-4 text-left">
                <h1 className="text-center text-[#9e9e9e]">Last Block</h1>

                <h4 className="flex items-center justify-center text-center">
                  {lastBlockQuery.data.result.CurrentBlock} <CheckBoxIcon />
                </h4>
              </div>
            </div>
          </div>
          {/* Blockchain Explorer Bottom Section */}
          <div className="flex w-full justify-around">
            <div className="w-2/5">
              <h1 className="my-4 text-center text-[#9e9e9e] hover:text-gray-400">
                Latest Transactions
              </h1>
              <div className="flex justify-between text-white">
                <div>
                  <h1>Tx Hash</h1>
                  {transactions.map((transaction) => {
                    return (
                      <div>
                        <button
                          value={transaction.hash}
                          className="my-4 w-1 text-sm text-sky-500 hover:text-blue-500"
                        >
                          {String(transaction.hash).slice(0, 10)}...
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  <h1 className="relative left-3">From</h1>
                  {transactions.map((transaction) => {
                    return (
                      <div>
                        <button
                          value={transaction.from}
                          className="my-4 w-1 text-center text-sm text-sky-500 hover:text-blue-500"
                        >
                          {String(transaction.from).slice(0, 8)}...
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h1 className="relative left-5">To</h1>
                  {transactions.map((transaction) => {
                    return (
                      <div>
                        <button
                          value={transaction.to}
                          className="my-4 w-1 text-center text-sm text-sky-500 hover:text-blue-500"
                        >
                          {String(transaction.to).slice(0, 8)}...
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="relative left-8">
                  <h1>ETH Value</h1>
                  {transactions.map((transaction) => {
                    return (
                      <h6 className="relative left-4 mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                        {String(transaction.value.toFixed(3))}
                      </h6>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="h-11/12 mb-4 mt-4 w-1 bg-[#31353F]"></div>

            <div className="w-2/5">
              <h1 className="my-4 ml-8 text-center text-[#9e9e9e] hover:text-gray-400">
                Top Holders
              </h1>
              <div className="flex justify-between text-white">
                <div>
                  <h1>Address</h1>
                  {holders.map((holder) => {
                    return (
                      <div className="mt-3 mb-7">
                        <button
                          value={holder.address}
                          className="w-1 text-sm text-sky-500 hover:text-blue-500"
                        >
                          {String(holder.address).slice(0, 16)}...
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="relative left-6">
                  <h1>Balance</h1>
                  {holders.map((holder) => {
                    return (
                      <h6 className="mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                        {Math.round(holder.balance / 1000000)}M
                      </h6>
                    );
                  })}
                </div>
                <div>
                  <h1>Share (%)</h1>
                  {holders.map((holder) => {
                    return (
                      <h6 className="mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                        {holder.share}%
                      </h6>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ExplorerTab;
