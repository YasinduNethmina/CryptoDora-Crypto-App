import React from "react";

function CryptoDropdown() {
  const handleClick = () => {
    let selectedCrypto = document.getElementById("crypto");
    let output = selectedCrypto.value;
    console.log(output);
  };

  return (
    <>
      <div className="flex">
        <select
          onClick={handleClick}
          selected
          className="w-36 cursor-pointer bg-[#1B2028] text-[#9E9E9E] hover:text-white"
          id="crypto"
          name="crypto"
        >
          <option value="btc" defaultValue="btc">
            BTC/Bitcoin
          </option>
          <option value="eth">ETH/Ethereum</option>
          <option value="sol">SOL/Solana</option>
        </select>
      </div>
    </>
  );
}

export default CryptoDropdown;
