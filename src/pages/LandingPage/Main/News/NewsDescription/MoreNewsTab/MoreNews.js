import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CardLoadingState from "../../../Cards/Card/CardLoadingState";
import NewsCard from "../../../../Main/News/NewsCard/NewsCard";
import { db } from "../../../../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function MoreNews() {
  const [newsData, setNewsData] = useState();
  const newsTab = collection(db, "newsTab_news");

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  // Get initial news data from database
  useEffect(() => {
    const getUsers = async () => {
      const newsTabData = await getDocs(newsTab);
      setNewsData(newsTabData.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  if (!newsData) {
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
        <h1 className="mt-12 text-xl font-bold text-white dark:text-black">
          More News for you
        </h1>
        <div className="mt-4 flex">
          <NewsCard
            title={newsData[0].title}
            img={newsData[0].urlToImage}
            date={newsData[0].publishedAt}
            description={newsData[0].description}
            source={newsData[0].source.name}
          />

          <NewsCard
            title={newsData[1].title}
            img={newsData[1].urlToImage}
            date={newsData[1].publishedAt}
            description={newsData[1].description}
            source={newsData[1].source.name}
          />
        </div>
      </>
    );
  }
}

export default MoreNews;
