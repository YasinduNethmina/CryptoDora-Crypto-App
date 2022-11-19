import React, { useState, useEffect } from "react";
import NewsTop from "../../LandingPage/Main/News/NewsTop/NewsTop";
import NewsLoadingState from "../../LandingPage/Main/News/NewsLoadingState/NewsLoadingState";
import { db } from "./../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function NewsTabRight() {
  const [newsData, setNewsData] = useState();
  const newsTabRight = collection(db, "newsTabRight_news");

  // Get initial news data from database
  useEffect(() => {
    const getUsers = async () => {
      const newsTabData = await getDocs(newsTabRight);
      setNewsData(newsTabData.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  if (!newsData) {
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
