import React from "react";
import NewsTop from "./NewsTop/NewsTop";
import NewsCard from "./NewsCard/NewsCard";
import NewsBanner from "./NewsBanner/NewsBanner";
import "./News.scss";
import Converter from "../Converter/Converter";

function News({ newsData }) {
  return (
    <>
      {/* News Top 01 */}
      <div className="NewsTop1">
        <NewsTop
          title={newsData.articles[14].title}
          img={newsData.articles[14].urlToImage}
          date={newsData.articles[14].publishedAt}
          description={newsData.articles[14].description}
          source={newsData.articles[14].source.name}
        />
      </div>

      {/* Crypto Portfolio */}
      <div className="NewsTop2">
        <NewsTop
          title={newsData.articles[1].title}
          img={newsData.articles[1].urlToImage}
          date={newsData.articles[1].publishedAt}
          description={newsData.articles[1].description}
          source={newsData.articles[1].source.name}
        />
      </div>

      {/* News Top 02 */}
      <div className="NewsTop3">
        <NewsTop
          title={newsData.articles[2].title}
          img={newsData.articles[2].urlToImage}
          date={newsData.articles[2].publishedAt}
          description={newsData.articles[2].description}
          source={newsData.articles[2].source.name}
        />
        <div className="NewsTop4">
          <NewsTop
            title={newsData.articles[3].title}
            img={newsData.articles[3].urlToImage}
            date={newsData.articles[3].publishedAt}
            description={newsData.articles[3].description}
            source={newsData.articles[3].source.name}
          />
        </div>
      </div>

      {/* News Banner 01 Main Section */}
      <div className="flex justify-center">
        <NewsBanner
          title={newsData.articles[4].title}
          img={newsData.articles[4].urlToImage}
          date={newsData.articles[4].publishedAt}
          description={newsData.articles[4].description}
          source={newsData.articles[4].source.name}
        />
      </div>

      {/* News Cards 01 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[5].title}
          img={newsData.articles[5].urlToImage}
          date={newsData.articles[5].publishedAt}
          description={newsData.articles[5].description}
          source={newsData.articles[5].source.name}
        />

        <NewsCard
          title={newsData.articles[6].title}
          img={newsData.articles[6].urlToImage}
          date={newsData.articles[6].publishedAt}
          description={newsData.articles[6].description}
          source={newsData.articles[6].source.name}
        />
      </div>

      {/* News Cards 02 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[7].title}
          img={newsData.articles[7].urlToImage}
          date={newsData.articles[7].publishedAt}
          description={newsData.articles[7].description}
          source={newsData.articles[7].source.name}
        />

        <NewsCard
          title={newsData.articles[8].title}
          img={newsData.articles[8].urlToImage}
          date={newsData.articles[8].publishedAt}
          description={newsData.articles[8].description}
          source={newsData.articles[8].source.name}
        />
      </div>

      {/* News Cards 03 */}
      <div className="flex w-full">
        <NewsCard
          title={newsData.articles[9].title}
          img={newsData.articles[9].urlToImage}
          date={newsData.articles[9].publishedAt}
          description={newsData.articles[9].description}
          source={newsData.articles[9].source.name}
        />

        <NewsCard
          title={newsData.articles[10].title}
          img={newsData.articles[10].urlToImage}
          date={newsData.articles[10].publishedAt}
          description={newsData.articles[10].description}
          source={newsData.articles[10].source.name}
        />
      </div>

      {/* News Cards Right Side */}
      <div className="NewsCard1">
        <NewsCard
          title={newsData.articles[11].title}
          img={newsData.articles[11].urlToImage}
          date={newsData.articles[11].publishedAt}
          description={newsData.articles[11].description}
          source={newsData.articles[11].source.name}
        />
      </div>

      <div className="NewsCard2">
        <NewsCard
          title={newsData.articles[12].title}
          img={newsData.articles[12].urlToImage}
          date={newsData.articles[12].publishedAt}
          description={newsData.articles[12].description}
          source={newsData.articles[12].source.name}
        />

        <NewsCard
          title={newsData.articles[13].title}
          img={newsData.articles[13].urlToImage}
          date={newsData.articles[13].publishedAt}
          description={newsData.articles[13].description}
          source={newsData.articles[13].source.name}
        />
      </div>
    </>
  );
}

export default News;
