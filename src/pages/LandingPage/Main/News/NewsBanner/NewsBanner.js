import React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./NewsBanner.scss";

function NewsBanner({ title, description, img, date, source }) {
  return (
    <div className="newsBanner mx-4 mb-4 h-48 rounded-sm bg-[#1B2028]">
      <div className="flex">
        <div className="m-4 w-2/3">
          {
            <h1 className="text-md font-semibold text-white">
              {String(title).slice(0, 80)}...
            </h1>
          }
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
        <button className="text-white">
          <IosShareIcon className="text-[#0768B5] hover:text-green-500" />
          Share
        </button>
        <button className="text-white">
          <BookmarkBorderIcon className="text-[#0768B5] hover:text-green-500" />
          Read Later
        </button>
      </div>
    </div>
  );
}

export default NewsBanner;
