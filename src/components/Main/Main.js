import React from "react";
import Cards from "./Cards/index";
import "./Main.scss";
import Chart from "./Chart/Chart";

function Main() {
  return (
    <div className="">
      <Cards />
      <div className="flex justify-center">
        <Chart />
      </div>
    </div>
  );
}

export default Main;
