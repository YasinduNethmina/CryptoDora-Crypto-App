import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import NewsCard02 from "../../LandingPage/Main/News/NewsCard/NewsCard02";

function NewsTabLeft() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const { data, isLoading } = useQuery(["newsData"], () => {
    return axios
      .get(
        `https://newsapi.org/v2/everything?language=en&from=${year}-${month}-${
          day - 2
        }&to=${year}-${month}-${day}&q="blockchain"&sortBy=popularity&page=10&pageSize=5&apiKey=56591b716be3406fa65c0b587fbd74c0`
      )
      .then((res) => res.data);
  });

  if (isLoading) {
    return;
  } else {
    let newsData = data.articles;
    return (
      <>
        <div>
          {newsData.map((news) => {
            return (
              <div className="w-full pr-10">
                <NewsCard02
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
      </>
    );
  }
}

export default NewsTabLeft;
