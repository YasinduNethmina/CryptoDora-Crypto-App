import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import CardLoadingState from "../../../Cards/Card/CardLoadingState";
import NewsCard from "../../../../Main/News/NewsCard/NewsCard";

function MoreNews() {
  const { data, isLoading } = useQuery(["news"], () => {
    return axios(
      "https://newsapi.org/v2/everything?language=en&from=2022-10-20&to=2024-01-01&domains=coindesk.com&sortBy=popularity&pageSize=2&apiKey=d22fa49d219e45048ed523d99210a9a9"
    ).then((res) => res.data);
  });

  if (isLoading) {
    return (
      <>
        <div className="mt-20">
          <div className="my-2">
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <div className="my-2">
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <div className="my-2">
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
          </div>
          <div className="my-2">
            <CardLoadingState
              img={require("../../../../../../assets/images/loading-state-bar.png")}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className="mt-12 text-xl font-bold text-white">
          More News for you
        </h1>
        <div className="mt-4 flex">
          <NewsCard
            title={data.articles[0].title}
            img={data.articles[0].urlToImage}
            date={data.articles[0].publishedAt}
            description={data.articles[0].description}
            source={data.articles[0].source.name}
          />

          <NewsCard
            title={data.articles[1].title}
            img={data.articles[1].urlToImage}
            date={data.articles[1].publishedAt}
            description={data.articles[1].description}
            source={data.articles[1].source.name}
          />
        </div>
      </>
    );
  }
}

export default MoreNews;
