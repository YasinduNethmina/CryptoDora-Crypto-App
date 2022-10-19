import React from "react";

function Dropdown({
  func,
  logo1,
  logo2,
  logo3,
  currencyName1,
  currencyName2,
  currencyName3,
}) {
  return (
    <div
      className={
        func
          ? "hidden"
          : "right-76 visible absolute ml-6 mt-10 flex flex-col rounded-md bg-[#31353f] px-4 py-2 text-sm font-medium text-[#9E9E9E] shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      }
    >
      <button className="px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
        {logo1}
        {currencyName1}
      </button>
      <button className="flex items-center justify-center px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
        {logo2}
        {currencyName2}
      </button>
      <button className="flex items-center justify-center px-4 hover:rounded hover:bg-[#3A6FF8] hover:text-white">
        {logo3}
        {currencyName3}
      </button>
    </div>
  );
}

export default Dropdown;
