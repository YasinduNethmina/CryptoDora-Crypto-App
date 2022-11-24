import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Link } from "react-router-dom";
import ShareModal from "../ShareModal/ShareModal";

function NewsCard01({ title, img, date, description, source }) {
  const [active, setActive] = useState(false);

  // Read later button
  const handleClick = () => {
    setActive(!active);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShareModal = () => {
    document.querySelector(".share-modal").classList.remove("hidden");
  };

  return (
    <>
      <div className="m-4 w-full rounded-sm bg-[#1B2028] dark:bg-white dark:shadow-lg">
        <div className="flex">
          <div className="m-4 w-2/3">
            <Link
              onClick={scrollUp}
              to="/news-description"
              state={{
                title: title,
                description: description,
                img: img,
                date: date,
                source: source,
              }}
            >
              {
                <h1 className="text-md font-semibold text-white hover:underline hover:underline-offset-4 dark:text-black">
                  {String(title).slice(0, 50)}...
                </h1>
              }
            </Link>
            <p className="mt-2 text-xs text-[#9E9E9E] dark:text-[#7e818c]">
              {String(description).slice(0, 80)}...
            </p>
          </div>
          <div className="m-4 h-40 w-1/3">
            <img
              className="h-32 w-full rounded-sm object-cover dark:border-2 dark:hover:border-[#00cccb]"
              src={img}
              alt="news-pic"
            />
          </div>
        </div>

        <div className="relative bottom-4 mx-4 flex items-center justify-between text-xs text-[#9E9E9E] dark:font-semibold dark:text-[#00cccb]">
          <p>{String(source).slice(0, 10)} •</p>
          <p>{date.slice(0, 10)}</p>
          <button onClick={handleShareModal} className="text-white">
            <IosShareIcon className="text-[#0768B5] hover:text-green-500 dark:font-semibold dark:text-[#00cccb] dark:hover:text-green-500" />
            Share
          </button>
          <button onClick={handleClick} className="text-white">
            <BookmarkBorderIcon
              className={
                active
                  ? " text-green-500 transition-all duration-300 hover:scale-110 dark:text-[#00cccb] dark:hover:text-green-500"
                  : "text-[#0768B5] transition-all duration-300 hover:scale-110 hover:text-green-500 dark:font-semibold dark:text-[#00cccb] dark:hover:text-green-500"
              }
            />
            Read Later
          </button>
        </div>
      </div>

      <div className="share-modal fixed top-1/4 left-4 z-40 hidden h-full w-full">
        <ShareModal />
      </div>
    </>
  );
}

export default NewsCard01;
