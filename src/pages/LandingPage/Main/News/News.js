import React from "react";
import NewsTop from "./NewsTop/NewsTop";
import NewsCard from "./NewsCard/NewsCard";
import NewsBanner from "./NewsBanner/NewsBanner";
import "./News.scss";

function News({ newsData }) {
  return (
    <>
      {/* News Top 01 */}
      <div className="NewsTop1">
        <NewsTop
          title={newsData[0].title}
          img={newsData[0].urlToImage}
          date={newsData[0].publishedAt}
          description={newsData[0].description}
          source={newsData[0].source.name}
        />
      </div>

      {/* Crypto Portfolio */}
      <div className="NewsTop2 dark:top-96">
        <NewsTop
          title={newsData[1].title}
          img={newsData[1].urlToImage}
          date={newsData[1].publishedAt}
          description={newsData[1].description}
          source={newsData[1].source.name}
        />
      </div>

      {/* News Top 02 */}
      <div className="NewsTop3">
        <div className="dark:absolute dark:hidden">
          <NewsTop
            title={newsData[2].title}
            img={newsData[2].urlToImage}
            date={newsData[2].publishedAt}
            description={newsData[2].description}
            source={newsData[2].source.name}
          />
        </div>
        <div className="NewsTop4 dark:invisible dark:top-72">
          <NewsTop
            title={newsData[3].title}
            img={newsData[3].urlToImage}
            date={newsData[3].publishedAt}
            description={newsData[3].description}
            source={newsData[3].source.name}
          />
        </div>
      </div>

      {/* News Banner 01 Main Section */}
      <div className="flex justify-center">
        <NewsBanner
          title={newsData[15].title}
          img={newsData[15].urlToImage}
          date={newsData[15].publishedAt}
          description={newsData[15].description}
          source={newsData[15].source.name}
        />
      </div>

      {/* News Cards 01 */}
      <div className="flex w-full">
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

      {/* News Cards 02 */}
      <div className="flex w-full">
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

      {/* News Cards 03 */}
      <div className="flex w-full">
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

      {/* News Cards Right Side */}
      <div className="NewsCard1 dark:absolute dark:bottom-60">
        <NewsCard
          title={newsData[11].title}
          img={newsData[11].urlToImage}
          date={newsData[11].publishedAt}
          description={newsData[11].description}
          source={newsData[11].source.name}
        />
      </div>

      <div className="NewsCard2">
        <NewsCard
          title={newsData[12].title}
          img={newsData[12].urlToImage}
          date={newsData[12].publishedAt}
          description={newsData[12].description}
          source={newsData[12].source.name}
        />

        <NewsCard
          title={newsData[13].title}
          img={newsData[13].urlToImage}
          date={newsData[13].publishedAt}
          description={newsData[13].description}
          source={newsData[13].source.name}
        />
      </div>
    </>
  );
}

export default News;
