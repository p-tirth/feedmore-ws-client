import React from "react";

const InputCounter = ({ title, value, increment, decrement }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <div className="space-x-4">
          <button
            onClick={decrement}
            className="px-4 py-2 text-[#EDF5E1] bg-[#05386B] rounded hover:bg-[#042d56]"
          >
            -
          </button>
          <span> {value} </span>
          <button
            onClick={increment}
            className="px-4 py-2 text-[#EDF5E1] bg-[#05386B] rounded hover:bg-[#042d56]"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default InputCounter;