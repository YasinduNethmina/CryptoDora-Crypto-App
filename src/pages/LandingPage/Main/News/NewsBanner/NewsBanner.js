import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./NewsBanner.scss";
import { Link } from "react-router-dom";
import ShareModal from "../ShareModal/ShareModal";

function NewsBanner({ title, description, img, date, source }) {
  const [active, setActive] = useState(false);

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
    <div className="newsBanner mx-4 mb-4 h-48 rounded-sm bg-[#1B2028]">
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
              <h1 className="text-md font-semibold text-white hover:underline hover:underline-offset-4">
                {String(title).slice(0, 80)}...
              </h1>
            }
          </Link>
          <p className="mt-4 text-xs text-[#9E9E9E]">
            {String(description).slice(0, 180)}...
          </p>
        </div>
        <div className="m-4 h-40 w-1/3">
          <img
            className="h-32 w-full rounded-sm object-cover"
            src={img}
            alt=""
          />
        </div>
      </div>

      <div className="relative bottom-10 mx-4 flex items-center justify-between text-xs text-[#9E9E9E]">
        <p>{String(source).slice(0, 10)} •</p>
        <p>{date.slice(0, 10)}</p>
        <button onClick={handleShareModal} className="text-white">
          <IosShareIcon className="text-[#0768B5] hover:text-green-500" />
          Share
        </button>
        <button onClick={handleClick} className="text-white">
          <BookmarkBorderIcon
            className={
              active
                ? " text-green-500 hover:scale-110 "
                : "text-[#0768B5] hover:scale-110 hover:text-green-500"
            }
          />
          Read Later
        </button>
      </div>

      <div className="share-modal fixed top-1/4 left-4 z-40 hidden h-full w-full">
        <ShareModal />
      </div>
    </div>
  );
}

export default NewsBanner;
