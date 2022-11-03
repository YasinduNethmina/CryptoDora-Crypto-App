import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewsCard from "../../LandingPage/Main/News/NewsCard/NewsCard";
import NewsBanner from "../../LandingPage/Main/News/NewsBanner/NewsBanner";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import Creators from "./Creators/Creators";

function NewsTab() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let buttonValue = "";

  const [url, setUrl] = useState(
    `https://newsapi.org/v2/everything?language=en&from=${year}-${month}-${
      day - 2
    }&to=${year}-${month}-${day}&q="blockchain"&sortBy=popularity&pageSize=30&apiKey=56591b716be3406fa65c0b587fbd74c0`
  );

  const randomNumbers = new Set();
  while (randomNumbers.size <= 13) {
    randomNumbers.add(Math.floor(Math.random() * 25));
  }
  const randomNumbersToArray = [...randomNumbers];

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: () => axios.get(url).then((res) => res.data),
  });

  if (isLoading) {
    return;
  } else {
    const handleClick = (e) => {
      buttonValue = e.target.value;
      setUrl(
        `https://newsapi.org/v2/everything?language=en&from=${year}-${month}-${
          day - 2
        }&to=${year}-${month}-${day}&q=${buttonValue}&sortBy=popularity&pageSize=30&apiKey=56591b716be3406fa65c0b587fbd74c0`
      );
    };
    console.log(url);
    return (
      <>
        <div className="w-full">
          <div className="mt-20 text-xl font-bold text-white">
            <h1>Top Stories for you</h1>
          </div>
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
              value="ethereum"
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
              value="decentralized finance"
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
              title={data.articles[randomNumbersToArray[0]].title}
              img={data.articles[randomNumbersToArray[0]].urlToImage}
              date={data.articles[randomNumbersToArray[0]].publishedAt}
              description={data.articles[randomNumbersToArray[0]].description}
              source={data.articles[randomNumbersToArray[0]].source.name}
            />
          </div>
          <div className="flex">
            <NewsCard
              title={data.articles[randomNumbersToArray[1]].title}
              img={data.articles[randomNumbersToArray[1]].urlToImage}
              date={data.articles[randomNumbersToArray[1]].publishedAt}
              description={data.articles[randomNumbersToArray[1]].description}
              source={data.articles[randomNumbersToArray[1]].source.name}
            />
            <NewsCard
              title={data.articles[randomNumbersToArray[2]].title}
              img={data.articles[randomNumbersToArray[2]].urlToImage}
              date={data.articles[randomNumbersToArray[2]].publishedAt}
              description={data.articles[randomNumbersToArray[2]].description}
              source={data.articles[randomNumbersToArray[2]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={data.articles[randomNumbersToArray[3]].title}
              img={data.articles[randomNumbersToArray[3]].urlToImage}
              date={data.articles[randomNumbersToArray[3]].publishedAt}
              description={data.articles[randomNumbersToArray[3]].description}
              source={data.articles[randomNumbersToArray[3]].source.name}
            />
            <NewsCard
              title={data.articles[randomNumbersToArray[4]].title}
              img={data.articles[randomNumbersToArray[4]].urlToImage}
              date={data.articles[randomNumbersToArray[4]].publishedAt}
              description={data.articles[randomNumbersToArray[4]].description}
              source={data.articles[randomNumbersToArray[4]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={data.articles[randomNumbersToArray[5]].title}
              img={data.articles[randomNumbersToArray[5]].urlToImage}
              date={data.articles[randomNumbersToArray[5]].publishedAt}
              description={data.articles[randomNumbersToArray[5]].description}
              source={data.articles[randomNumbersToArray[5]].source.name}
            />
            <NewsCard
              title={data.articles[randomNumbersToArray[6]].title}
              img={data.articles[randomNumbersToArray[6]].urlToImage}
              date={data.articles[randomNumbersToArray[6]].publishedAt}
              description={data.articles[randomNumbersToArray[6]].description}
              source={data.articles[randomNumbersToArray[6]].source.name}
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
                name="Sara Jay"
                company="Radar 52"
                image={require("../../../assets/images/writer1.png")}
              />
            </div>
          </div>
          <div className="mt-7 flex">
            <NewsCard
              title={data.articles[randomNumbersToArray[3]].title}
              img={data.articles[randomNumbersToArray[3]].urlToImage}
              date={data.articles[randomNumbersToArray[3]].publishedAt}
              description={data.articles[randomNumbersToArray[3]].description}
              source={data.articles[randomNumbersToArray[3]].source.name}
            />
            <NewsCard
              title={data.articles[randomNumbersToArray[4]].title}
              img={data.articles[randomNumbersToArray[4]].urlToImage}
              date={data.articles[randomNumbersToArray[4]].publishedAt}
              description={data.articles[randomNumbersToArray[4]].description}
              source={data.articles[randomNumbersToArray[4]].source.name}
            />
          </div>

          <div className="flex">
            <NewsCard
              title={data.articles[randomNumbersToArray[5]].title}
              img={data.articles[randomNumbersToArray[5]].urlToImage}
              date={data.articles[randomNumbersToArray[5]].publishedAt}
              description={data.articles[randomNumbersToArray[5]].description}
              source={data.articles[randomNumbersToArray[5]].source.name}
            />
            <NewsCard
              title={data.articles[randomNumbersToArray[6]].title}
              img={data.articles[randomNumbersToArray[6]].urlToImage}
              date={data.articles[randomNumbersToArray[6]].publishedAt}
              description={data.articles[randomNumbersToArray[6]].description}
              source={data.articles[randomNumbersToArray[6]].source.name}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NewsTab;
