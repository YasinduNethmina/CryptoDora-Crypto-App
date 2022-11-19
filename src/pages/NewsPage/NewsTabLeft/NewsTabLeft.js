import React, { useState, useEffect } from "react";
import NewsCard02 from "../../LandingPage/Main/News/NewsCard/NewsCard02";
import { db } from "./../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function NewsTabLeft() {
  const [newsData, setNewsData] = useState();
  const newsTabLeft = collection(db, "newsTabLeft_news");

  // Get initial news data from database
  useEffect(() => {
    const getUsers = async () => {
      const newsTabData = await getDocs(newsTabLeft);
      setNewsData(newsTabData.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);

  if (!newsData) {
    return;
  } else {
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
