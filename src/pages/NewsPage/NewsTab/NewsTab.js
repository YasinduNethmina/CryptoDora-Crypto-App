import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../LandingPage/Main/News/NewsCard/NewsCard";
import NewsBanner from "../../LandingPage/Main/News/NewsBanner/NewsBanner";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Creators from "./Creators/Creators";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CardLoadingState from "../../LandingPage/Main/Cards/Card/CardLoadingState";

function NewsTab() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let buttonValue = "";
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/everything?language=en&from=${year}-${month}-${
      day - 2
    }&to=${year}-${month}-${day}&q="blockchain"&sortBy=popularity&pageSize=60&apiKey=56591b716be3406fa65c0b587fbd74c0`
  );

  const [newsData, setNewsData] = useState();

  let randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const generateRandomNum = () => {
    for (let i = randomNumbers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = randomNumbers[i];
      randomNumbers[i] = randomNumbers[j];
      randomNumbers[j] = temp;
    }
  };

  generateRandomNum();

  //Topic buttons
  const handleClick = (e) => {
    buttonValue = e.target.value;
    setUrl(
      `https://newsapi.org/v2/everything?language=en&from=${year}-${month}-${
        day - 2
      }&to=${year}-${month}-${day}&q=${buttonValue}&sortBy=popularity&pageSize=60&apiKey=56591b716be3406fa65c0b587fbd74c0`
    );
  };

  // Show more button
  const showMoreClick = () => {
    document.querySelector(".moreNews").classList.remove("hidden");
    document.querySelector(".moreNewsText").classList.remove("hidden");
    document.querySelector(".moreNewsBtn").classList.add("hidden");
  };

  //Api request
  useEffect(() => {
    axios(url).then((res) => setNewsData(res.data.articles));
  }, [url]);

  if (!newsData) {
    return (
      <>
        <div className="mt-20">
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
          <div className="mt-20 text-xl font-bold text-white">
            <h1>Top Stories for you</h1>
          </div>
          {/* Placed manually first couple of items */}
          <div className="mt-5">
            <button
              onClick={handleClick}
              value=""
              className="w-12 rounded-full bg-[#2F9FF8] py-1 text-white duration-300 hover:bg-white hover:text-[#072D4B]"
            >
              All
            </button>
            <button
              onClick={handleClick}
              value="bitcoin"
              className="mx-4 w-24 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
            >
              Bitcoin
            </button>
            <button
              onClick={handleClick}
              value="vitalik"
              className="w-24 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
            >
              Ethereum
            </button>
            <button
              onClick={handleClick}
              value="nft"
              className="mx-4 w-16 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
            >
              NFT
            </button>
            <button
              onClick={handleClick}
              value="decentralized%20finance"
              className="w-16 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
            >
              DeFi
            </button>

            <button
              onClick={handleClick}
              value="altcoins"
              className="mx-4 w-28 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
            >
              Altcoins
            </button>
            <button
              onClick={handleClick}
              value="metaverse"
              className="w-28 rounded-full bg-white py-1 text-[#072D4B] duration-300 hover:bg-[#2F9FF8] hover:text-white"
            >
              Technology
            </button>
            <button className="w-12 rounded-full py-1 font-semibold text-white hover:font-bold  hover:text-[#072D4B]">
              ...
            </button>
          </div>

          <div className="mt-7 mr-8">
            <NewsBanner
              title={newsData[randomNumbers[0]].title}
              img={newsData[randomNumbers[0]].urlToImage}
              date={newsData[randomNumbers[0]].publishedAt}
              description={newsData[randomNumbers[0]].description}
              source={newsData[randomNumbers[0]].source.name}
            />
          </div>
          <div className="flex">
            <NewsCard
              title={newsData[randomNumbers[1]].title}
              img={newsData[randomNumbers[1]].urlToImage}
              date={newsData[randomNumbers[1]].publishedAt}
              description={newsData[randomNumbers[1]].description}
              source={newsData[randomNumbers[1]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[2]].title}
              img={newsData[randomNumbers[2]].urlToImage}
              date={newsData[randomNumbers[2]].publishedAt}
              description={newsData[randomNumbers[2]].description}
              source={newsData[randomNumbers[2]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={newsData[randomNumbers[3]].title}
              img={newsData[randomNumbers[3]].urlToImage}
              date={newsData[randomNumbers[3]].publishedAt}
              description={newsData[randomNumbers[3]].description}
              source={newsData[randomNumbers[3]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[4]].title}
              img={newsData[randomNumbers[4]].urlToImage}
              date={newsData[randomNumbers[4]].publishedAt}
              description={newsData[randomNumbers[4]].description}
              source={newsData[randomNumbers[4]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={newsData[randomNumbers[5]].title}
              img={newsData[randomNumbers[5]].urlToImage}
              date={newsData[randomNumbers[5]].publishedAt}
              description={newsData[randomNumbers[5]].description}
              source={newsData[randomNumbers[5]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[6]].title}
              img={newsData[randomNumbers[6]].urlToImage}
              date={newsData[randomNumbers[6]].publishedAt}
              description={newsData[randomNumbers[6]].description}
              source={newsData[randomNumbers[6]].source.name}
            />
          </div>

          <div className="mt-5 min-w-full text-xl font-bold text-white">
            <h1>
              <HistoryEduIcon /> Creators you should follow
            </h1>
            <div className="flex w-full items-center justify-between">
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
          <div className="mt-7 flex">
            <NewsCard
              title={newsData[randomNumbers[7]].title}
              img={newsData[randomNumbers[7]].urlToImage}
              date={newsData[randomNumbers[7]].publishedAt}
              description={newsData[randomNumbers[7]].description}
              source={newsData[randomNumbers[7]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[8]].title}
              img={newsData[randomNumbers[8]].urlToImage}
              date={newsData[randomNumbers[8]].publishedAt}
              description={newsData[randomNumbers[8]].description}
              source={newsData[randomNumbers[8]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={newsData[randomNumbers[9]].title}
              img={newsData[randomNumbers[9]].urlToImage}
              date={newsData[randomNumbers[9]].publishedAt}
              description={newsData[randomNumbers[9]].description}
              source={newsData[randomNumbers[9]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[10]].title}
              img={newsData[randomNumbers[10]].urlToImage}
              date={newsData[randomNumbers[10]].publishedAt}
              description={newsData[randomNumbers[10]].description}
              source={newsData[randomNumbers[10]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={newsData[randomNumbers[11]].title}
              img={newsData[randomNumbers[11]].urlToImage}
              date={newsData[randomNumbers[11]].publishedAt}
              description={newsData[randomNumbers[11]].description}
              source={newsData[randomNumbers[11]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[12]].title}
              img={newsData[randomNumbers[12]].urlToImage}
              date={newsData[randomNumbers[12]].publishedAt}
              description={newsData[randomNumbers[12]].description}
              source={newsData[randomNumbers[12]].source.name}
            />
          </div>

          <div className="mt-7 mr-8">
            <NewsBanner
              title={newsData[randomNumbers[13]].title}
              img={newsData[randomNumbers[13]].urlToImage}
              date={newsData[randomNumbers[13]].publishedAt}
              description={newsData[randomNumbers[13]].description}
              source={newsData[randomNumbers[13]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={newsData[randomNumbers[11]].title}
              img={newsData[randomNumbers[11]].urlToImage}
              date={newsData[randomNumbers[11]].publishedAt}
              description={newsData[randomNumbers[11]].description}
              source={newsData[randomNumbers[11]].source.name}
            />
            <NewsCard
              title={newsData[randomNumbers[12]].title}
              img={newsData[randomNumbers[12]].urlToImage}
              date={newsData[randomNumbers[12]].publishedAt}
              description={newsData[randomNumbers[12]].description}
              source={newsData[randomNumbers[12]].source.name}
            />
          </div>
          {/* Show More button */}
          <div className="my-10 flex justify-center">
            <button
              onClick={showMoreClick}
              type="button"
              className="moreNewsBtn rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Show More <ExpandMoreIcon />
            </button>
          </div>
          {/* News Map */}
          <div className="moreNews hidden">
            {newsData.map((news) => {
              return (
                <div className=" mr-8">
                  <NewsBanner
                    title={news.title}
                    img={news.urlToImage}
                    date={news.publishedAt}
                    description={news.description}
                    source={news.source.name}
                  />
                </div>
              );
            })}
          </div>
          <h1 className="moreNewsText hidden pt-8 text-center font-semibold text-white">
            <CelebrationIcon />
            &nbsp; Great! You caught up all!
          </h1>
        </div>
      </>
    );
  }
}

export default NewsTab;
