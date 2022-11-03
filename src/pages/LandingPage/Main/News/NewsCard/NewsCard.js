import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function NewsCard01({ title, img, date, description, source }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="m-4 w-full rounded-sm bg-[#1B2028]">
      <div className="flex">
        <div className="m-4 w-2/3">
          {
            <h1 className="text-md font-semibold text-white">
              {String(title).slice(0, 50)}...
            </h1>
          }
          <p className="mt-2 text-xs text-[#9E9E9E]">
            {String(description).slice(0, 80)}...
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

      <div className="relative bottom-4 mx-4 flex items-center justify-between text-xs text-[#9E9E9E]">
        <p>{String(source).slice(0, 10)} •</p>
        <p>{date.slice(0, 10)}</p>
        <button className="text-white">
          <IosShareIcon className="text-[#0768B5] hover:text-green-500" />
          Share
        </button>
        <button onClick={handleClick} className="text-white">
          <BookmarkBorderIcon
            className={
              active
                ? " text-green-500 transition-all duration-300 hover:scale-110"
                : "text-[#0768B5] transition-all duration-300 hover:scale-110 hover:text-green-500"
            }
          />
          Read Later
        </button>
      </div>
    </div>
  );
}

export default NewsCard01;
