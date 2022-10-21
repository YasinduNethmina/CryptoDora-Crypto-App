import React from "react";
import Cards from "./Cards/Cards";
import "./MainTop.scss";
import Chart from "./Chart/Chart";

function MainTop() {
  return (
    <div className="">
      <Cards />
      <div className="flex justify-center">
        <Chart />
      </div>
    </div>
  );
}

export default MainTop;
