import React from "react";
import { useState } from "react";

const Testreact = () => {
  const [count, SetCount] = useState(0);

  const myapp = () => {
    console.log("kkk", myapp);
    SetCount(count + 1);
  };

  return (
    <div>
      <div>
        <button className="border bg-red-500" onClick={myapp}>
          click me
        </button>
      </div>
    </div>
  );
};
export default Testreact;
