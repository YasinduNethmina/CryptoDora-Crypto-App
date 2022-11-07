import React from "react";
import NewsTop from "./NewsTop/NewsTop";
import NewsCard from "./NewsCard/NewsCard";
import NewsBanner from "./NewsBanner/NewsBanner";
import "./News.scss";

function News({ newsData }) {
  let randomNumbers = [];
  for (let i = 0; i < 13; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 10);
  }

  console.log(randomNumbers);
  return (
    <>
      {/* News Top 01 */}
      <div className="NewsTop1">
        <NewsTop
          title={newsData.articles[randomNumbers[0]].title}
          img={newsData.articles[randomNumbers[0]].urlToImage}
          date={newsData.articles[randomNumbers[0]].publishedAt}
          description={newsData.articles[randomNumbers[0]].description}
          source={newsData.articles[randomNumbers[0]].source.name}
        />
      </div>

      {/* Crypto Portfolio */}
      <div className="NewsTop2">
        <NewsTop
          title={newsData.articles[randomNumbers[1]].title}
          img={newsData.articles[randomNumbers[1]].urlToImage}
          date={newsData.articles[randomNumbers[1]].publishedAt}
          description={newsData.articles[randomNumbers[1]].description}
          source={newsData.articles[randomNumbers[1]].source.name}
        />
      </div>

      {/* News Top 02 */}
      <div className="NewsTop3">
        <NewsTop
          title={newsData.articles[randomNumbers[2]].title}
          img={newsData.articles[randomNumbers[2]].urlToImage}
          date={newsData.articles[randomNumbers[2]].publishedAt}
          description={newsData.articles[randomNumbers[2]].description}
          source={newsData.articles[randomNumbers[2]].source.name}
        />{" "}
        <div className="NewsTop4">
          <NewsTop
            title={newsData.articles[randomNumbers[3]].title}
            img={newsData.articles[randomNumbers[3]].urlToImage}
            date={newsData.articles[randomNumbers[3]].publishedAt}
            description={newsData.articles[randomNumbers[3]].description}
            source={newsData.articles[randomNumbers[3]].source.name}
          />{" "}
        </div>
      </div>

      {/* News Banner 01 */}

      <div className="flex justify-center">
        <NewsBanner
          title={newsData.articles[randomNumbers[4]].title}
          img={newsData.articles[randomNumbers[4]].urlToImage}
          date={newsData.articles[randomNumbers[4]].publishedAt}
          description={newsData.articles[randomNumbers[4]].description}
          source={newsData.articles[randomNumbers[4]].source.name}
        />
      </div>

      {/* News Cards 01 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[randomNumbers[5]].title}
          img={newsData.articles[randomNumbers[5]].urlToImage}
          date={newsData.articles[randomNumbers[5]].publishedAt}
          description={newsData.articles[randomNumbers[5]].description}
          source={newsData.articles[randomNumbers[5]].source.name}
        />

        <NewsCard
          title={newsData.articles[randomNumbers[6]].title}
          img={newsData.articles[randomNumbers[6]].urlToImage}
          date={newsData.articles[randomNumbers[6]].publishedAt}
          description={newsData.articles[randomNumbers[6]].description}
          source={newsData.articles[randomNumbers[6]].source.name}
        />
      </div>

      {/* News Cards 02 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[randomNumbers[7]].title}
          img={newsData.articles[randomNumbers[7]].urlToImage}
          date={newsData.articles[randomNumbers[7]].publishedAt}
          description={newsData.articles[randomNumbers[7]].description}
          source={newsData.articles[randomNumbers[7]].source.name}
        />

        <NewsCard
          title={newsData.articles[randomNumbers[8]].title}
          img={newsData.articles[randomNumbers[8]].urlToImage}
          date={newsData.articles[randomNumbers[8]].publishedAt}
          description={newsData.articles[randomNumbers[8]].description}
          source={newsData.articles[randomNumbers[8]].source.name}
        />
      </div>

      {/* News Cards 03 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[randomNumbers[9]].title}
          img={newsData.articles[randomNumbers[9]].urlToImage}
          date={newsData.articles[randomNumbers[9]].publishedAt}
          description={newsData.articles[randomNumbers[9]].description}
          source={newsData.articles[randomNumbers[9]].source.name}
        />

        <NewsCard
          title={newsData.articles[randomNumbers[10]].title}
          img={newsData.articles[randomNumbers[10]].urlToImage}
          date={newsData.articles[randomNumbers[10]].publishedAt}
          description={newsData.articles[randomNumbers[10]].description}
          source={newsData.articles[randomNumbers[10]].source.name}
        />
      </div>

      <div className="NewsCard1">
        <NewsCard
          title={newsData.articles[randomNumbers[11]].title}
          img={newsData.articles[randomNumbers[11]].urlToImage}
          date={newsData.articles[randomNumbers[11]].publishedAt}
          description={newsData.articles[randomNumbers[11]].description}
          source={newsData.articles[randomNumbers[11]].source.name}
        />
      </div>

      <div className="NewsCard2">
        <NewsCard
          title={newsData.articles[randomNumbers[12]].title}
          img={newsData.articles[randomNumbers[12]].urlToImage}
          date={newsData.articles[randomNumbers[12]].publishedAt}
          description={newsData.articles[randomNumbers[12]].description}
          source={newsData.articles[randomNumbers[12]].source.name}
        />
      </div>
    </>
  );
}

export default News;
