import React, { createContext, useState, useEffect } from "react";
import Cards from "./Cards/Cards";
import "./Main.scss";
import Chart from "./Chart/Chart";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import CardLoadingState from "./Cards/Card/CardLoadingState";
import Stats from "./Stats/Stats";
import { Link, Navigate } from "react-router-dom";
import ChartLoadingState from "./Chart/ChartLoadingState";
import Market from "./Market/Market";
import News from "./News/News";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Partners from "./Partners/Partners";
import NewsLoadingState from "./News/NewsLoadingState/NewsLoadingState";
import Converter from "./Converter/Converter";
import Chat from "./ChatSection/Chat";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import SidebarMobile from "./SidebarMobile/SidebarMobile";
export const coinPriceContext = createContext();

function Main() {
  const [newsData, setNewsData] = useState();
  const mainNewsTab = collection(db, "mainTab_news");

  const [active, setActive] = useState(false);
  // Mobile menu
  const handleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(mainNewsTab);
      setNewsData(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  const [
    statsQuery,
    ethGasQuery,
    cardsQuery,
    randomNumberQuery,
    flagCodeQuery,
    dailyChartQuery,
    weeklyChartQuery,
    monthlyChartQuery,
    threeMonthChartQuery,
    maxChartQuery,
    marketQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ["stats"],
        queryFn: () =>
          axios
            .get("https://api.coingecko.com/api/v3/global")
            .then((res) => res.data),
      },
      {
        queryKey: ["ethGas"],
        queryFn: () =>
          axios
            .get(
              "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=8PUERY974IQXPVGSN99GFBADQP8WW42QSJ"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["cards"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cripple%2Cdogecoin%2Ccardano%2Cpolkadot%2Cbinancecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=2"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["randomNumber"],
        queryFn: () =>
          axios
            .get("https://www.randomnumberapi.com/api/v1.0/random?min=0&max=1")
            .then((res) => res.data),
      },
      {
        queryKey: ["flag"],
        queryFn: () =>
          axios
            .get(
              "https://api.ipgeolocation.io/ipgeo?apiKey=07c6a873ce39452882d4fc28978752c4"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["dailyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["weeklyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=hourly"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["monthlyChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=hourly"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["threeMonthChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=90&interval=daily"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["maxChart"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily"
            )
            .then((res) => res.data),
      },
      {
        queryKey: ["market"],
        queryFn: () =>
          axios
            .get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
            )
            .then((res) => res.data),
      },
    ],
  });

  const isLoading =
    statsQuery.isLoading ||
    ethGasQuery.isLoading ||
    cardsQuery.isLoading ||
    randomNumberQuery.isLoading ||
    flagCodeQuery.isLoading ||
    dailyChartQuery.isLoading ||
    weeklyChartQuery.isLoading ||
    monthlyChartQuery.isLoading ||
    threeMonthChartQuery.isLoading ||
    maxChartQuery.isLoading ||
    marketQuery.isLoading;

  const isError =
    statsQuery.error ||
    ethGasQuery.error ||
    cardsQuery.error ||
    randomNumberQuery.error ||
    flagCodeQuery.error ||
    dailyChartQuery.error ||
    weeklyChartQuery.error ||
    monthlyChartQuery.error ||
    threeMonthChartQuery.error ||
    maxChartQuery.error ||
    marketQuery.error;

  if (isLoading || !newsData)
    return (
      <>
        <div className="cards-section pc-main-loading overflow-hidden">
          <Stats loadingState={isLoading ? true : false} />
          {/* Cards Loading State */}
          <div className="cards flex justify-between">
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <ChartLoadingState />
          <NewsLoadingState />
        </div>

        <div className="mobile-main-loading mt-24 h-screen w-full animate-pulse bg-[#1B2028]"></div>
      </>
    );
  else if (isError) return <Navigate to="*" />;
  else {
    return (
      <>
        {/* Mobile responsive Menu */}
        <div className="menu-icon-div hidden">
          <MenuIcon
            style={{ fontSize: "28px" }}
            className="menu-icon fixed left-4 z-40 hidden cursor-pointer rounded bg-[#1B2028] text-white transition-all duration-300 hover:scale-110 dark:bg-white dark:text-black dark:shadow-xl"
            onClick={handleMenu}
          />
        </div>

        <div className="sidebar-mobile fixed left-1 z-20 mt-4">
          <SidebarMobile active={active} />
        </div>

        <Chat />

        <Cards
          stats={statsQuery.data.data}
          gas={ethGasQuery.data}
          cards={cardsQuery.data}
          randomNumber={randomNumberQuery}
        />

        <div className="flex justify-center">
          <coinPriceContext.Provider
            value={[cardsQuery.data, flagCodeQuery.data]} //used to get btc price for currencydropdown
          >
            <Chart
              dailyChart={dailyChartQuery.data}
              weeklyChart={weeklyChartQuery.data}
              monthlyChart={monthlyChartQuery.data}
              threeMonthChart={threeMonthChartQuery.data}
              maxChart={maxChartQuery.data}
              cards={null}
              flags={null}
            />
          </coinPriceContext.Provider>
        </div>
        <div className="flex justify-center">
          <Market list={marketQuery.data} />
        </div>
        <div className="converter">
          <Converter data={marketQuery.data} />
        </div>
        <News newsData={newsData} />

        {/* Show More button */}
        <div className="show-more my-10 flex justify-center">
          <Link to="/news-tab">
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#00cccb]  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Show More <ExpandMoreIcon />
            </button>
          </Link>
        </div>

        {/* Partners */}
        <div className="">
          <Partners />
        </div>
      </>
    );
  }
}

export default Main;
