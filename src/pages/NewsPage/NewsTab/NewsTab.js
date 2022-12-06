import React, { useEffect, useState } from "react";
import NewsCard from "../../LandingPage/Main/News/NewsCard/NewsCard";
import NewsBanner from "../../LandingPage/Main/News/NewsBanner/NewsBanner";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Creators from "./Creators/Creators";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CardLoadingState from "../../LandingPage/Main/Cards/Card/CardLoadingState";
import { db } from "./../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function NewsTab() {
  const [newsData, setNewsData] = useState();
  const [active, setActive] = useState("all");

  const newsTab = collection(db, "newsTab_news");
  const newsTabBitcoin = collection(db, "newsTabBitcoin_news");
  const newsTabEthereum = collection(db, "newsTabEthereum_news");
  const newsTabNft = collection(db, "newsTabNft_news");
  const newsTabDefi = collection(db, "newsTabDefi_news");
  const newsTabAltcoins = collection(db, "newsTabAltcoins_news");
  const newsTabTechnology = collection(db, "newsTabTechnology_news");

  // Get initial news data from database
  useEffect(() => {
    const getUsers = async () => {
      const newsTabData = await getDocs(newsTab);
      setNewsData(newsTabData.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  //handle all news on button click using database
  const handleClick = async (e) => {
    if (e.target.value === "") {
      setActive("all");
      const newsTabData = await getDocs(newsTab);
      setNewsData(newsTabData.docs.map((doc) => ({ ...doc.data() })));
      return;
    } else if (e.target.value === "bitcoin") {
      setActive("bitcoin");
      const newsTabBitcoinData = await getDocs(newsTabBitcoin);
      setNewsData(newsTabBitcoinData.docs.map((doc) => ({ ...doc.data() })));
    } else if (e.target.value === "vitalik") {
      setActive("ethereum");
      const newsTabEthereumData = await getDocs(newsTabEthereum);
      setNewsData(newsTabEthereumData.docs.map((doc) => ({ ...doc.data() })));
    } else if (e.target.value === "nft") {
      setActive("nft");
      const newsTabNftData = await getDocs(newsTabNft);
      setNewsData(newsTabNftData.docs.map((doc) => ({ ...doc.data() })));
    } else if (e.target.value === "decentralized%20finance") {
      setActive("defi");
      const newsTabDefiData = await getDocs(newsTabDefi);
      setNewsData(newsTabDefiData.docs.map((doc) => ({ ...doc.data() })));
    } else if (e.target.value === "altcoins") {
      setActive("altcoins");
      const newsTabAltcoinsData = await getDocs(newsTabAltcoins);
      setNewsData(newsTabAltcoinsData.docs.map((doc) => ({ ...doc.data() })));
    } else if (e.target.value === "metaverse") {
      setActive("technology");
      const newsTabTechnologyData = await getDocs(newsTabTechnology);
      setNewsData(newsTabTechnologyData.docs.map((doc) => ({ ...doc.data() })));
    }
  };

  // Show more button (display more news)
  const showMoreClick = () => {
    document.querySelector(".moreNewsText").classList.remove("hidden");
    document.querySelector(".moreNewsBtn").remove();
  };

  if (!newsData) {
    return (
      <>
        <div className="news-page-loading mt-20">
          <div className="my-2">
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <div className="my-2">
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <div className="my-2">
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <div className="my-2">
            <CardLoadingState
              img={require("../../../assets/images/loading-state-bar.png")}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full">
          <div className="news-heading mt-20 text-xl font-bold text-white dark:text-black">
            <h1>Top Stories for you</h1>
          </div>
          {/* Placed manually first couple of items */}
          <div className="news-buttons mt-5">
            <button
              onClick={handleClick}
              value=""
              className={
                active === "all"
                  ? "all-btn w-12 rounded-full bg-[#2F9FF8] py-1 text-white duration-300"
                  : "all-btn w-12 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              All
            </button>
            <button
              onClick={handleClick}
              value="bitcoin"
              className={
                active === "bitcoin"
                  ? "bitcoin-btn mx-4 w-24 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-[#2F9FF8] hover:text-white"
                  : "bitcoin-btn mx-4 w-24 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              Bitcoin
            </button>
            <button
              onClick={handleClick}
              value="vitalik"
              className={
                active === "ethereum"
                  ? "ethereum-btn w-24 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-[#2F9FF8] hover:text-white"
                  : "ethereum-btn w-24 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              Ethereum
            </button>
            <button
              onClick={handleClick}
              value="nft"
              className={
                active === "nft"
                  ? "nft-btn mx-4 w-16 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-[#2F9FF8] hover:text-white"
                  : "nft-btn mx-4 w-16 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              NFT
            </button>
            <button
              onClick={handleClick}
              value="decentralized%20finance"
              className={
                active === "defi"
                  ? "defi-btn w-16 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-[#2F9FF8] hover:text-white"
                  : "defi-btn w-16 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              DeFi
            </button>

            <button
              onClick={handleClick}
              value="altcoins"
              className={
                active === "altcoins"
                  ? "altcoins-btn mx-4 w-24 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-[#2F9FF8] hover:text-white"
                  : "altcoins-btn mx-4 w-24 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              Altcoins
            </button>
            <button
              onClick={handleClick}
              value="metaverse"
              className={
                active === "technology"
                  ? "technology-btn w-28 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-[#2F9FF8] hover:text-white"
                  : "technology-btn w-28 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
              }
            >
              Technology
            </button>
            <button className="see-more-btn w-12 rounded-full py-1 font-semibold text-white hover:font-bold hover:text-[#072D4B] dark:text-black dark:hover:text-[#2F9FF8]">
              ...
            </button>
          </div>

          <div className="news-banner mt-7 mr-8">
            <NewsBanner
              title={newsData[23].title}
              img={newsData[23].urlToImage}
              date={newsData[23].publishedAt}
              description={newsData[23].description}
              source={newsData[23].source.name}
            />
          </div>

          {/* Only visible on mobile version */}
          <div className="news-banner-mobile mt-7 mr-8 hidden">
            <NewsBanner
              title={newsData[3].title}
              img={newsData[3].urlToImage}
              date={newsData[3].publishedAt}
              description={newsData[3].description}
              source={newsData[3].source.name}
            />
          </div>

          <div className="news-banner-mobile mt-7 mr-8 hidden">
            <NewsBanner
              title={newsData[15].title}
              img={newsData[15].urlToImage}
              date={newsData[15].publishedAt}
              description={newsData[15].description}
              source={newsData[15].source.name}
            />
          </div>

          <div className="news-card-pc flex">
            <NewsCard
              title={newsData[16].title}
              img={newsData[16].urlToImage}
              date={newsData[16].publishedAt}
              description={newsData[16].description}
              source={newsData[16].source.name}
            />
            <NewsCard
              title={newsData[2].title}
              img={newsData[2].urlToImage}
              date={newsData[2].publishedAt}
              description={newsData[2].description}
              source={newsData[2].source.name}
            />
          </div>

          <div className="news-card-pc flex">
            <NewsCard
              title={newsData[3].title}
              img={newsData[3].urlToImage}
              date={newsData[3].publishedAt}
              description={newsData[3].description}
              source={newsData[3].source.name}
            />
            <NewsCard
              title={newsData[4].title}
              img={newsData[4].urlToImage}
              date={newsData[4].publishedAt}
              description={newsData[4].description}
              source={newsData[4].source.name}
            />
          </div>

          <div className="news-card-pc flex">
            <NewsCard
              title={newsData[5].title}
              img={newsData[5].urlToImage}
              date={newsData[5].publishedAt}
              description={newsData[5].description}
              source={newsData[5].source.name}
            />
            <NewsCard
              title={newsData[6].title}
              img={newsData[6].urlToImage}
              date={newsData[6].publishedAt}
              description={newsData[6].description}
              source={newsData[6].source.name}
            />
          </div>

          <div className="creators-to-follow mt-5 min-w-full text-xl font-bold text-white dark:text-black">
            <h1>
              <HistoryEduIcon /> Creators you should follow
            </h1>
            <div className="news-tab-creators flex w-full items-center justify-between">
              <Creators
                name="Shan Jay"
                company="Tech Mint"
                image={require("../../../assets/images/writer5.png")}
              />
              <Creators
                name="Mary Quin"
                company="Live Mint"
                image={require("../../../assets/images/writer4.png")}
              />
              <Creators
                name="Kyon Chou"
                company="Bizz Daily"
                image={require("../../../assets/images/writer3.png")}
              />
              <Creators
                name="Paul Gray"
                company="Sport Biz"
                image={require("../../../assets/images/writer2.png")}
              />
              <Creators
                name="Sara Jayse"
                company="Radar 52"
                image={require("../../../assets/images/writer1.png")}
              />
            </div>
          </div>
          <div className="news-card-pc mt-7 flex">
            <NewsCard
              title={newsData[7].title}
              img={newsData[7].urlToImage}
              date={newsData[7].publishedAt}
              description={newsData[7].description}
              source={newsData[7].source.name}
            />
            <NewsCard
              title={newsData[8].title}
              img={newsData[8].urlToImage}
              date={newsData[8].publishedAt}
              description={newsData[8].description}
              source={newsData[8].source.name}
            />
          </div>

          <div className="news-card-pc flex">
            <NewsCard
              title={newsData[9].title}
              img={newsData[9].urlToImage}
              date={newsData[9].publishedAt}
              description={newsData[9].description}
              source={newsData[9].source.name}
            />
            <NewsCard
              title={newsData[10].title}
              img={newsData[10].urlToImage}
              date={newsData[10].publishedAt}
              description={newsData[10].description}
              source={newsData[10].source.name}
            />
          </div>

          <div className="news-card-pc flex">
            <NewsCard
              title={newsData[11].title}
              img={newsData[11].urlToImage}
              date={newsData[11].publishedAt}
              description={newsData[11].description}
              source={newsData[11].source.name}
            />
            <NewsCard
              title={newsData[12].title}
              img={newsData[12].urlToImage}
              date={newsData[12].publishedAt}
              description={newsData[12].description}
              source={newsData[12].source.name}
            />
          </div>

          <div className="news-banner-mobile mt-7 mr-8">
            <NewsBanner
              title={newsData[21].title}
              img={newsData[21].urlToImage}
              date={newsData[21].publishedAt}
              description={newsData[21].description}
              source={newsData[21].source.name}
            />

            <div className="news-banner-mobile-left hidden">
              <NewsBanner
                title={newsData[7].title}
                img={newsData[7].urlToImage}
                date={newsData[7].publishedAt}
                description={newsData[7].description}
                source={newsData[7].source.name}
              />

              <NewsBanner
                title={newsData[18].title}
                img={newsData[18].urlToImage}
                date={newsData[18].publishedAt}
                description={newsData[18].description}
                source={newsData[18].source.name}
              />
            </div>
          </div>

          <div className="news-card-pc flex">
            <NewsCard
              title={newsData[14].title}
              img={newsData[14].urlToImage}
              date={newsData[14].publishedAt}
              description={newsData[14].description}
              source={newsData[14].source.name}
            />
            <NewsCard
              title={newsData[15].title}
              img={newsData[15].urlToImage}
              date={newsData[15].publishedAt}
              description={newsData[15].description}
              source={newsData[15].source.name}
            />
          </div>
          {/* Show More button */}
          <div className="my-10 flex justify-center">
            <button
              onClick={showMoreClick}
              type="button"
              className="moreNewsBtn rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-[#00cccb] dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Show More <ExpandMoreIcon />
            </button>
          </div>

          <h1 className="moreNewsText hidden pt-8 text-center font-semibold text-white dark:text-black">
            <CelebrationIcon />
            &nbsp; Great! You caught up all!
          </h1>
        </div>
      </>
    );
  }
}

export default NewsTab;
