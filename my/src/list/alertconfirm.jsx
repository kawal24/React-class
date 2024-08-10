import React, { useState } from "react";

const AlertTut = () => {
  function myfunc() {
    alert("hello,kawal");
  }

  const addvalue = () => {
    // e.perventDefault();
    console.log(addvalue);
  };
  const submitbutton = (e) => {
    e.preventDefault();
    console.log(submitbutton);
  };

  const [data, Setdata] = useState("");
  console.log("name", data);
  const [age, Setage] = useState();
  console.log("age", age);
  //   const [obj, SetObj] = useState([]);
  //   console.log("obj", obj);

  return (
    <div className=" ">
      <form className="border w-[40%] h-[30vh]">
        <label>name:</label>
        <input
          type="text"
          name="Name"
          value={data}
          onChange={(e) => Setdata(e.target.value)}
          className="border  w-[20%] h-[30px]"
        />
        <label> age:</label>
        <input
          type="num"
          value={age}
          onChange={(e) => Setage(e.target.value)}
          className="border  w-[20%] h-[30px]"
        />
        <button
          type="button"
          onClick={(e) => submitbutton(e)}
          className="px-5 bg-blue-500"
        >
          click me
        </button>
      </form>
    </div>
  );
};

export default AlertTut;
