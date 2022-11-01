import React from "react";
import "./CoinBubble.scss";

function CoinBubble({ name, image, change }) {
  if (change > 10 || change < -10) {
    return (
      <div
        className={
          change > 0
            ? "bubble bubble-green m-1 flex h-40 w-40 justify-center rounded-full text-white  hover:border-2"
            : "bubble bubble-red flex h-40 w-40 justify-center rounded-full text-white hover:border-2"
        }
      >
        <div className="text-center">
          <img
            className="relative left-6 mt-5 mb-2 h-10 w-10 rounded-full"
            src={image}
            alt="coin-logo"
          />
          <h1 className="text-4xl font-bold">{String(name).toUpperCase()}</h1>
          <h4 className="text-xl font-semibold">{change.toFixed(2)}%</h4>
        </div>
      </div>
    );
  } else if (change > 5 || change < -5) {
    return (
      <div
        className={
          change > 0
            ? "bubble1 bubble-green m-1 flex h-32 w-32 justify-center rounded-full text-white hover:border-2"
            : "bubble1 bubble-red m-1 flex h-32 w-32 justify-center rounded-full text-white hover:border-2"
        }
      >
        <div className="text-center">
          <img
            className="relative left-3 mt-4 mb-2 h-8 w-8 rounded-full"
            src={image}
            alt="coin-logo"
          />
          <h1 className="text-xl font-bold">{String(name).toUpperCase()}</h1>
          <h4 className="text-lg font-semibold">{change.toFixed(2)}%</h4>
        </div>
      </div>
    );
  } else if (change > 3 || change < -3) {
    return (
      <div
        className={
          change > 0
            ? "bubble2 bubble-green m-1 flex h-24 w-24 justify-center rounded-full text-white hover:border-2"
            : "bubble2 bubble-red m-1 flex h-24 w-24 justify-center rounded-full text-white hover:border-2"
        }
      >
        <div className="text-center">
          <img
            className="relative left-3 mt-2 mb-2 h-6 w-6 rounded-full"
            src={image}
            alt="coin-logo"
          />
          <h1 className="text font-bold">{String(name).toUpperCase()}</h1>
          <h4 className="text-md font-semibold">{change.toFixed(2)}%</h4>
        </div>
      </div>
    );
  } else if (change > 1 || change < -1) {
    return (
      <div
        className={
          change > 0
            ? "bubble3 bubble-green m-1 flex h-20 w-20 justify-center rounded-full text-white hover:border-2"
            : "bubble3 bubble-red m-1 flex h-20 w-20 justify-center rounded-full text-white hover:border-2"
        }
      >
        <div className="text-center">
          <img
            className="relative left-3 mt-2 mb-1 h-4 w-4 rounded-full"
            src={image}
            alt="coin-logo"
          />
          <h1 className="text-sm font-semibold">
            {String(name).toUpperCase()}
          </h1>
          <h4 className="text-sm font-light">{change.toFixed(2)}%</h4>
        </div>
      </div>
    );
  } else if (change > 0.5 || change < -0.5) {
    return (
      <div
        className={
          change > 0
            ? "bubble4 bubble-green m-1 flex h-16 w-16 justify-center rounded-full text-white hover:border-2"
            : "bubble4 bubble-red m-1 flex h-16 w-16 justify-center rounded-full text-white hover:border-2"
        }
      >
        <div className="text-center">
          <img
            className="relative left-1.5 mt-2 mb-1 h-6 w-6 rounded-full"
            src={image}
            alt="coin-logo"
          />

          <h4 className="font-thing text-xs">{change.toFixed(2)}%</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          change > 0
            ? "bubble5 bubble-green m-1 flex h-10 w-10 justify-center rounded-full text-white hover:border-2"
            : "bubble5 bubble-red m-1 flex h-10 w-10 justify-center rounded-full text-white hover:border-2"
        }
      >
        <div className="text-center">
          <img
            className="relative mt-2 mb-1 h-6 w-6 rounded-full"
            src={image}
            alt="coin-logo"
          />
        </div>
      </div>
    );
  }
}

export default CoinBubble;
