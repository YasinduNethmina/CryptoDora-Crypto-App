import React from "react";
import "./Partners.scss";

function Partners() {
  return (
    <>
      <h1 className="mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pt-20 text-center text-4xl font-bold text-transparent">
        Our Partners.
      </h1>
      <div className="partners flex h-40">
        <img
          className="w-80"
          src={require("../../../../assets/images/bitfinex-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/coinbase-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/libra-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/microsoft-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/zcash-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/zcoin-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/bitfinex-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/coinbase-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/libra-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/microsoft-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/zcash-logo.png")}
          alt=""
        />
        <img
          className="w-80"
          src={require("../../../../assets/images/zcoin-logo.png")}
          alt=""
        />
      </div>
    </>
  );
}

export default Partners;
