import React from "react";

function CryptoDropdown() {
  return (
    <>
      <div className="flex">
        <select
          selected
          className="w-36 cursor-pointer bg-[#1B2028] text-[#9E9E9E] outline-none hover:text-white"
          id="crypto"
          name="crypto"
        >
          <option value="btc" defaultValue="btc">
            BTC/Bitcoin
          </option>
          <option value="other" disabled>
            Available soon!
          </option>
        </select>
      </div>
    </>
  );
}

export default CryptoDropdown;
