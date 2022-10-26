import React from "react";
import NewsTop from "./NewsTop/NewsTop";

function News({ newsData }) {
  const randomNumber1 = Math.floor(Math.random() * 20);
  const randomNumber2 = Math.floor(Math.random() * 20);
  const randomNumber3 = Math.floor(Math.random() * 20);

  console.log(newsData[1].title);

  console.log(newsData[1]);
  return (
    <>
      <NewsTop
        title={newsData[randomNumber1].title}
        img={newsData[randomNumber1].urlToImage}
        date={newsData[randomNumber1].publishedAt}
        description={newsData[randomNumber1].description}
      />
      <NewsTop
        title={newsData[randomNumber2].title}
        img={newsData[randomNumber2].urlToImage}
        date={newsData[randomNumber2].publishedAt}
        description={newsData[randomNumber2].description}
      />
      <NewsTop
        title={newsData[randomNumber3].title}
        img={newsData[randomNumber3].urlToImage}
        date={newsData[randomNumber3].publishedAt}
        description={newsData[randomNumber3].description}
      />
    </>
  );
}

export default News;
