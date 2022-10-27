import React from "react";
import NewsTop from "./NewsTop/NewsTop";
import NewsCard from "./NewsCard/NewsCard";
import NewsBanner from "./NewsBanner/NewsBanner";
import "./News.scss";

function News({ newsData }) {
  const randomNumbers = new Set();

  while (randomNumbers.size <= 13) {
    randomNumbers.add(Math.floor(Math.random() * 25));
  }

  const randomNumbersToArray = [...randomNumbers];

  return (
    <>
      <div className="NewsTop1 absolute top-0 right-0 mr-2 mt-20">
        <NewsTop
          title={newsData.articles[randomNumbersToArray[0]].title}
          img={newsData.articles[randomNumbersToArray[0]].urlToImage}
          date={newsData.articles[randomNumbersToArray[0]].publishedAt}
          description={newsData.articles[randomNumbersToArray[0]].description}
        />
      </div>
      <div className="NewsTop2 absolute top-96 right-0 mr-2 mt-24">
        <NewsTop
          title={newsData.articles[randomNumbersToArray[1]].title}
          img={newsData.articles[randomNumbersToArray[1]].urlToImage}
          date={newsData.articles[randomNumbersToArray[1]].publishedAt}
          description={newsData.articles[randomNumbersToArray[1]].description}
        />
      </div>
      <NewsTop
        title={newsData.articles[randomNumbersToArray[2]].title}
        img={newsData.articles[randomNumbersToArray[2]].urlToImage}
        date={newsData.articles[randomNumbersToArray[2]].publishedAt}
        description={newsData.articles[randomNumbersToArray[2]].description}
      />
      <NewsCard
        title={newsData.articles[randomNumbersToArray[3]].title}
        img={newsData.articles[randomNumbersToArray[3]].urlToImage}
        date={newsData.articles[randomNumbersToArray[3]].publishedAt}
        description={newsData.articles[randomNumbersToArray[3]].description}
        source={newsData.articles[randomNumbersToArray[3]].source.name}
      />
      <NewsBanner
        title={newsData.articles[randomNumbersToArray[4]].title}
        img={newsData.articles[randomNumbersToArray[4]].urlToImage}
        date={newsData.articles[randomNumbersToArray[4]].publishedAt}
        description={newsData.articles[randomNumbersToArray[4]].description}
        source={newsData.articles[randomNumbersToArray[4]].source.name}
      />
    </>
  );
}

export default News;
