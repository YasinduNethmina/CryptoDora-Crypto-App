import React from "react";
import "./NewsTop.scss";

function NewsTop({ title, img, date, description }) {
  return (
    <div className="rounded-t-2xl bg-[#31353F]">
      <img className="newsImg rounded-t-2xl object-cover" src={img} alt="" />
      <h1 className="relative bottom-20 mx-4 text-2xl font-semibold text-white">
        {String(title).slice(0, 55)}...
      </h1>
      <h4 className="relative bottom-16 ml-4 font-semibold text-[#999999]">
        {String(date).slice(0, 10)}
      </h4>
      <p className="relative bottom-12 ml-4 mr-2 text-[#9E9E9E]">
        {String(description).slice(0, 80)}...
      </p>
    </div>
  );
}

export default NewsTop;
