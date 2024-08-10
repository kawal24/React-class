import React from "react";
import Componentone from "./component1";
import Componentchild from "./component2";

const Show = () => {
  const name = "kawaljit kaur";
  const myfunc = () => {
    alert("hello,kawal!");
  };
  return (
    <div className="">
      <div className="">
        <Componentone name={name} />
        <Componentchild myfunc={myfunc} />
      </div>
    </div>
  );
};

export default Show;
