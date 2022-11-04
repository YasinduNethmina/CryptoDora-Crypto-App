import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewsTop from "../../LandingPage/Main/News/NewsTop/NewsTop";
import NewsLoadingState from "../../LandingPage/Main/News/NewsLoadingState/NewsLoadingState";

function NewsTabRight() {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const { data, isLoading } = useQuery(["newsTopData"], () => {
    return axios
      .get(
        `https://newsapi.org/v2/everything?language=en&from=${year}-${month}-${
          day - 2
        }&to=${year}-${month}-${day}&q="blockchain"&sortBy=popularity&page=5&pageSize=6&apiKey=56591b716be3406fa65c0b587fbd74c0`
      )
      .then((res) => res.data);
  });

  if (isLoading) {
    return (
      <>
        <div className="mb-4">
          <NewsLoadingState />
        </div>
        <div>
          <NewsLoadingState />
        </div>
      </>
    );
  } else {
    let newsData = data.articles;
    return (
      <div className="mt-24 mr-2 ml-5">
        {newsData.map((news) => {
          return (
            <div className="mb-2">
              <NewsTop
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
    );
  }
}

export default NewsTabRight;
