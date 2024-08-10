import React, { useState } from "react";

const ChildProp = ({ ...prop }) => {
  console.log("prop", prop.firstValue, prop.secondValue);
  const [result, setresult] = useState(0);

  const UpdateButton = () => {};

  return (
    <div className=" mt-[20px]  ml-[30px]">
      <div className="flex gap-[10px]">
        <button
          onClick={() => setresult(prop.firstValue + prop.secondValue)}
          className="boreder bg-pink-500 py-[5px] px-[10px]  text-white"
        >
          +
        </button>

        <button
          onClick={() => setresult(prop.firstValue - prop.secondValue)}
          className="boreder bg-pink-500 py-[5px] px-[10px]  text-white"
        >
          -
        </button>

        <button
          onClick={() => setresult(prop.firstValue * prop.secondValue)}
          className="boreder bg-pink-500 py-[5px] px-[10px]  text-white"
        >
          *
        </button>

        <button
          onClick={() => setresult(prop.firstValue / prop.secondValue)}
          className="boreder bg-pink-500 py-[5px] px-[10px]  text-white"
        >
          /
        </button>
      </div>

      <div className="">
        <input
          type="text"
          value={result}
          className="border   border-red-500 mt-[20px] "
        />
      </div>
    </div>
  );
};
export default ChildProp;
