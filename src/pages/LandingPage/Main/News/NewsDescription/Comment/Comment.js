import React from "react";

function Comment({ name, comment, img }) {
  return (
    <div className="duration-800 my-4 flex w-full cursor-default items-center rounded-xl bg-[#1B2028] p-4 font-semibold text-white transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold dark:border-[#ffd910] dark:bg-white">
      <img className="h-16 w-16 rounded-full" src={img} alt="news-pic" />
      <div className="ml-4">
        <h4 className="mb-2 font-bold dark:text-[#00cccb]">{name}</h4>
        <p className="text-sm font-semibold text-[#9e9e9e] dark:text-black">
          {comment}
        </p>
      </div>
    </div>
  );
}

export default Comment;
