import React, { useState } from "react";

function Creators({ name, company, image }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="mx-2 mt-5 flex h-full w-1/5 cursor-default justify-center rounded-xl bg-[#1B2028] transition-all ease-in-out hover:translate-y-1 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-bold">
      <div className="mx-4 text-center">
        <img className=" mx-auto mt-4" src={image} alt="writer-logo" />
        <h1 className="mt-2 font-semibold">{name}</h1>
        <h6 className="text-xs font-normal text-[#2F9FF8]">{company}</h6>
        <button
          onClick={handleClick}
          className={
            active
              ? "duration mb-4 rounded bg-gray-500 px-2 text-sm font-normal transition-all"
              : "duration mb-4 rounded bg-sky-500 px-2 text-sm font-normal transition-all hover:bg-blue-600"
          }
        >
          {active ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default Creators;
