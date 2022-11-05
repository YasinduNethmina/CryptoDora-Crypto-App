import React from "react";
import { Link } from "react-router-dom";

function NewsCard02({ title, img, date, description, source }) {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-4 mb-4 mt-8 w-full rounded-sm bg-[#1B2028]">
      <div className="flex justify-center">
        <div className="m-4 w-10/12">
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
            <img
              className="h-1/2 w-full rounded-sm object-cover hover:scale-105  hover:border-2"
              src={img}
              alt=""
            />
          </Link>
          <p className="mt-4 text-xs text-[#9E9E9E]">
            {String(description).slice(0, 65)}...
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
