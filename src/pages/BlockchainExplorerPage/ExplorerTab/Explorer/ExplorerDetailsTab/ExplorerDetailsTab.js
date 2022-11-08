import React from "react";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function ExplorerDetailsTab({ text }) {
  const [transactionsQuery, balanceQuery, priceQuery] = useQueries({
    queries: [
      {
        queryKey: ["transactions"],
        queryFn: () =>
          axios
            .get(
              "https://api.etherscan.io/api?module=account&action=txlist&address=0xc5102fE9359FD9a28f877a67E36B0F050d81a3CC&startblock=0&endblock=99999999&page=1&offset=16&sort=asc&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["balance"],
        queryFn: () =>
          axios
            .get(
              "https://api.etherscan.io/api?module=account&action=balancemulti&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67&tag=latest&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ"
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
    return <h1>address not found!</h1>;
  } else {
    console.log(balanceQuery.data.result[0]);
    let latestTransactions = transactionsQuery.data.result;
    return (
      <div className="mt-20 w-full">
        <div className="flex justify-between">
          {/* Header */}

          <div className="flex items-center">
            <img
              className="w-10"
              src={require("../../../../../assets/images/ethereum-logo.png")}
              alt=""
            />
            <h1 className="mr-4 ml-2 text-xl text-gray-300">Address</h1>
            <p className="text-[#9e9e9e]">{text}</p>
            <button className="ml-4 rounded-md bg-purple-500 px-2 py-1 text-sm text-white hover:bg-purple-600">
              Copy
            </button>
          </div>

          <div className="flex items-center">
            <button className="mr-4 h-8 w-20 rounded-md bg-sky-500 text-center text-white hover:bg-blue-500">
              Buy <ArrowDropDownIcon />
            </button>
            <button className="mr-4 h-8 w-28 rounded-md bg-sky-500 text-center text-white hover:bg-blue-500">
              Exchange <ArrowDropDownIcon />
            </button>
            <button className="mr-4 h-8 w-20 rounded-md bg-sky-500 text-center text-white hover:bg-blue-500">
              Earn <ArrowDropDownIcon />
            </button>
            <button className="h-8 w-24 rounded-md bg-sky-500 text-center text-white hover:bg-blue-500">
              Gaming <ArrowDropDownIcon />
            </button>
          </div>
        </div>
        <div className="mt-8 flex">
          <div className="w-1/2">
            <h1 className="mb-4">Overview</h1>
            <h4>
              Balance:{" "}
              {(
                Number(balanceQuery.data.result[0].balance) /
                1000000000000000000
              ).toFixed(2)}
            </h4>
            <h4>
              ETH Value: $
              {(
                priceQuery.data.ethereum.usd *
                (Number(balanceQuery.data.result[0].balance) /
                  1000000000000000000)
              ).toFixed(2)}
            </h4>
          </div>

          <div>
            <h1 className="mb-4">Overview</h1>
            <h4>gjh</h4>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div className="w-full">
            <h1 className="my-4 text-center text-[#9e9e9e] hover:text-gray-400">
              Latest Transactions
            </h1>
            <div className="flex justify-between text-white">
              <div>
                <h1>Tx Hash</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <div>
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
              <div>
                <h1>Block</h1>
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
              <div className="relative right-8">
                <h1 className="">From</h1>
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
              <div>
                <h1 className="relative left-5">To</h1>
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
              <div className="relative left-8">
                <h1>Gas (Gwei) </h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <h6 className="relative left-4 mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                      {(transaction.gasPrice / 1000000000).toFixed(2)}
                    </h6>
                  );
                })}
              </div>

              <div className="relative">
                <h1>ETH Value</h1>
                {latestTransactions.map((transaction) => {
                  return (
                    <h6 className="relative left-4 mt-4 mb-8 w-1 text-center text-sm text-sky-500">
                      {transaction.value}
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
