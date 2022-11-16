import React from "react";

function Converter({ data }) {
  let allData = data;
  let symbolsArray = allData.map((i) => {
    return i.id;
  });

  return (
    <>
      <label for="coins">Choose a coin:</label>
      <select name="coins" id="coins">
        {symbolsArray.map((i) => {
          <option value={i}>{i}</option>;
        })}
      </select>
    </>
  );
}

export default Converter;
