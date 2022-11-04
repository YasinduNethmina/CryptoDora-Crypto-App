import React from "react";

function NewsCard02({ title, img, date, description, source }) {
  return (
    <div className="mx-4 mb-4 mt-8 w-full rounded-sm bg-[#1B2028]">
      <div className="flex justify-center">
        <div className="m-4 w-2/3">
          <img
            className="h-1/2 w-full rounded-sm object-cover"
            src={img}
            alt=""
          />

          <p className="mt-2 text-xs text-[#9E9E9E]">
            {String(description).slice(0, 75)}...
          </p>
        </div>
      </div>

      <div className="relative bottom-2 mx-4 flex items-center justify-between text-xs text-[#9E9E9E]">
        <p>{String(source).slice(0, 10)} •</p>
        <p>{date.slice(0, 10)}</p>
      </div>
    </div>
  );
}

export default NewsCard02;
