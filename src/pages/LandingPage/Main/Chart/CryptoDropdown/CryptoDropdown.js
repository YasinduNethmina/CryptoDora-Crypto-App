import React from "react";

function CryptoDropdown() {
  return (
    <>
      <div className="flex">
        <select
          selected
          className="crypto-dropdown-arrow dark:text-bold w-36 cursor-pointer bg-[#1B2028] text-[#9E9E9E] outline-none hover:text-white dark:rounded-xl dark:bg-[#f4f5f7] dark:py-1 dark:px-2 dark:font-semibold dark:text-black"
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
