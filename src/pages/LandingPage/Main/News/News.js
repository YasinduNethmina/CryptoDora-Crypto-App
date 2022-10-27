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
      {/* News Top 01 */}
      <div className="NewsTop1">
        <NewsTop
          title={newsData.articles[randomNumbersToArray[0]].title}
          img={newsData.articles[randomNumbersToArray[0]].urlToImage}
          date={newsData.articles[randomNumbersToArray[0]].publishedAt}
          description={newsData.articles[randomNumbersToArray[0]].description}
        />
      </div>

      {/* Crypto Portfolio */}
      <div className="NewsTop2">
        <NewsTop
          title={newsData.articles[randomNumbersToArray[1]].title}
          img={newsData.articles[randomNumbersToArray[1]].urlToImage}
          date={newsData.articles[randomNumbersToArray[1]].publishedAt}
          description={newsData.articles[randomNumbersToArray[1]].description}
        />
      </div>

      {/* News Top 02 */}
      <div className="NewsTop3">
        <NewsTop
          title={newsData.articles[randomNumbersToArray[2]].title}
          img={newsData.articles[randomNumbersToArray[2]].urlToImage}
          date={newsData.articles[randomNumbersToArray[2]].publishedAt}
          description={newsData.articles[randomNumbersToArray[2]].description}
        />{" "}
      </div>

      <div className="NewsTop4">
        <NewsTop
          title={newsData.articles[randomNumbersToArray[3]].title}
          img={newsData.articles[randomNumbersToArray[3]].urlToImage}
          date={newsData.articles[randomNumbersToArray[3]].publishedAt}
          description={newsData.articles[randomNumbersToArray[3]].description}
        />{" "}
      </div>

      {/* News Banner 01 */}
      <div className="flex justify-center">
        <NewsBanner
          title={newsData.articles[randomNumbersToArray[4]].title}
          img={newsData.articles[randomNumbersToArray[4]].urlToImage}
          date={newsData.articles[randomNumbersToArray[4]].publishedAt}
          description={newsData.articles[randomNumbersToArray[4]].description}
          source={newsData.articles[randomNumbersToArray[4]].source.name}
        />
      </div>

      {/* News Cards 01 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[randomNumbersToArray[5]].title}
          img={newsData.articles[randomNumbersToArray[5]].urlToImage}
          date={newsData.articles[randomNumbersToArray[5]].publishedAt}
          description={newsData.articles[randomNumbersToArray[5]].description}
          source={newsData.articles[randomNumbersToArray[5]].source.name}
        />

        <NewsCard
          title={newsData.articles[randomNumbersToArray[6]].title}
          img={newsData.articles[randomNumbersToArray[6]].urlToImage}
          date={newsData.articles[randomNumbersToArray[6]].publishedAt}
          description={newsData.articles[randomNumbersToArray[6]].description}
          source={newsData.articles[randomNumbersToArray[6]].source.name}
        />
      </div>

      {/* News Cards 02 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[randomNumbersToArray[7]].title}
          img={newsData.articles[randomNumbersToArray[7]].urlToImage}
          date={newsData.articles[randomNumbersToArray[7]].publishedAt}
          description={newsData.articles[randomNumbersToArray[7]].description}
          source={newsData.articles[randomNumbersToArray[7]].source.name}
        />

        <NewsCard
          title={newsData.articles[randomNumbersToArray[8]].title}
          img={newsData.articles[randomNumbersToArray[8]].urlToImage}
          date={newsData.articles[randomNumbersToArray[8]].publishedAt}
          description={newsData.articles[randomNumbersToArray[8]].description}
          source={newsData.articles[randomNumbersToArray[8]].source.name}
        />
      </div>

      {/* News Cards 03 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[randomNumbersToArray[9]].title}
          img={newsData.articles[randomNumbersToArray[9]].urlToImage}
          date={newsData.articles[randomNumbersToArray[9]].publishedAt}
          description={newsData.articles[randomNumbersToArray[9]].description}
          source={newsData.articles[randomNumbersToArray[9]].source.name}
        />

        <NewsCard
          title={newsData.articles[randomNumbersToArray[10]].title}
          img={newsData.articles[randomNumbersToArray[10]].urlToImage}
          date={newsData.articles[randomNumbersToArray[10]].publishedAt}
          description={newsData.articles[randomNumbersToArray[10]].description}
          source={newsData.articles[randomNumbersToArray[10]].source.name}
        />
      </div>

      <div className="NewsCard1">
        <NewsCard
          title={newsData.articles[randomNumbersToArray[11]].title}
          img={newsData.articles[randomNumbersToArray[11]].urlToImage}
          date={newsData.articles[randomNumbersToArray[11]].publishedAt}
          description={newsData.articles[randomNumbersToArray[11]].description}
          source={newsData.articles[randomNumbersToArray[11]].source.name}
        />
      </div>

      <div className="NewsCard2">
        <NewsCard
          title={newsData.articles[randomNumbersToArray[12]].title}
          img={newsData.articles[randomNumbersToArray[12]].urlToImage}
          date={newsData.articles[randomNumbersToArray[12]].publishedAt}
          description={newsData.articles[randomNumbersToArray[12]].description}
          source={newsData.articles[randomNumbersToArray[12]].source.name}
        />
      </div>
    </>
  );
}

export default News;
