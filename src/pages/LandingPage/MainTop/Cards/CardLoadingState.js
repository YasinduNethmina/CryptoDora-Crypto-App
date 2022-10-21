import React from "react";

function CardLoadingState({ img }) {
  return (
    <div className="duration-800 mx-1 mt-5 w-full animate-pulse rounded-xl bg-[#1B2028] transition-transform ease-in-out hover:scale-105 hover:border-2 hover:border-gray-300 hover:bg-[#1200] hover:font-semibold">
      <div className="card-heading flex items-center justify-between">
        <div className="card-heading-logo flex items-center">
          <div className="card-heading-logo-img my-7 ml-7 mr-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#31353f]"></div>
          <div className="card-heading-logo-text ml-2">
            <img
              className="mb-2 h-2 w-5/6 opacity-20"
              src={img}
              alt="loading"
            />
            <img
              className="mb-2 h-2 w-4/6 opacity-20"
              src={img}
              alt="loading"
            />
          </div>
        </div>
      </div>

      <div className="card-bottom my-5 ml-7 items-center justify-between">
        <img className="mb-2 w-11/12 pr-4 opacity-20" src={img} alt="loading" />
        <img className="mb-2 w-8/12 opacity-20" src={img} alt="loading" />
        <img className="mb-2 h-4 w-9/12 opacity-20" src={img} alt="loading" />
      </div>
    </div>
  );
}

export default CardLoadingState;
