import React from "react";
import "./NewsLoadingState.scss";

function NewsLoadingState() {
  return (
    <>
      <div className="NewsLoadingState duration-800 w-2/11 mx-1 my-5 h-4/5 animate-pulse rounded-xl bg-[#1B2028]">
        <div className="card-heading flex h-1/3 items-center justify-between">
          <div className="card-heading-logo flex items-center">
            <div className="card-heading-logo-img w-1/ my-7 ml-7 mr-5 flex h-16 items-center justify-center rounded-xl bg-[#31353f]"></div>
            <div className="card-heading-logo-text ml-2">
              <img
                className="mb-2 h-6 w-4/5 opacity-20"
                src={require("../../../../../assets/images/loading-state-bar.png")}
                alt="loading"
              />
              <img
                className="mb-2 h-6 w-4/6 opacity-20"
                src={require("../../../../../assets/images/loading-state-bar.png")}
                alt="loading"
              />
            </div>
          </div>
        </div>

        <div className="card-bottom my-5 ml-7 h-1/3 items-center justify-between rounded-full">
          <img
            className="mb-2 h-6 w-10/12 pr-4 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
          <img
            className="mb-2 h-6 w-8/12 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
          <img
            className="mb-2 h-6 w-9/12 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
          <img
            className="h-6 w-9/12 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
        </div>

        <div className="card-bottom my-5 ml-7 h-1/3 items-center justify-between">
          <img
            className="mb-2 h-6 w-6/12 pr-4 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
          <img
            className="mb-2 h-6 w-9/12 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
          <img
            className="h-6 w-11/12 opacity-20"
            src={require("../../../../../assets/images/loading-state-bar.png")}
            alt="loading"
          />
        </div>
      </div>
    </>
  );
}

export default NewsLoadingState;
