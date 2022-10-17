import React from "react";

function CardLoadingState({ img }) {
  return (
    <div className="w-full animate-pulse transition-transform ease-in-out duration-800 bg-[#1B2028] hover:bg-[#1200] hover:border-gray-300 hover:border-2 hover:scale-105 hover:font-semibold rounded-xl mt-5 mx-1">
      <div className="card-heading flex items-center justify-between">
        <div className="card-heading-logo flex items-center">
          <div className="flex card-heading-logo-img justify-center items-center w-11 h-11 bg-[#31353f] rounded-xl my-7 ml-7 mr-5"></div>
          <div className="card-heading-logo-text ml-2">
            <img
              className="opacity-20 mb-2 w-5/6 h-2"
              src={img}
              alt="loading"
            />
            <img
              className="opacity-20 mb-2 w-4/6 h-2"
              src={img}
              alt="loading"
            />
          </div>
        </div>
      </div>

      <div className="card-bottom items-center justify-between my-5 ml-7">
        <img className="opacity-20 mb-2 w-11/12 pr-4" src={img} alt="loading" />
        <img className="opacity-20 mb-2 w-8/12" src={img} alt="loading" />
        <img className="opacity-20 mb-2 w-9/12 h-4" src={img} alt="loading" />
      </div>
    </div>
  );
}

export default CardLoadingState;
