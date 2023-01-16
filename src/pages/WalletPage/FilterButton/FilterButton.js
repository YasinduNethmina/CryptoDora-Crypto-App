import react from "react";

const FilterButton = ({ name }) => {
  return (
    <button className="my-1 mb-1 w-full rounded-xl border-b-2 border-l-2 border-r-2 border-t-2 border-sky-500 p-1 px-4 text-xs text-white transition-all duration-300 ease-in-out hover:my-1 hover:-translate-y-1 hover:rounded-xl hover:bg-sky-500 hover:text-white hover:drop-shadow-xl dark:border-[#00cccb] dark:text-[#00cccb] dark:hover:bg-[#00cccb] dark:hover:text-white">
      {name}
    </button>
  );
};

export default FilterButton;
