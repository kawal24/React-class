import React, { useState } from "react";
import axios from "axios";

const Usercard = () => {
  const [first, SetFirst] = useState("");
  console.log("list", first);
  const [second, SetSecond] = useState("");
  console.log("job", second);
  const [error, setError] = useState();

  const submitForm = (e) => {
    console.log(22222);
    e.preventDefault();

    axios
      .post(" https://reqres.in/api/users ", {
        name: first,
        job: second,
      })
      .then((Response) => {
        console.log("Response", Response.data);
      })
      .catch((error) => {
        setError("error", error);
      });
  };

  return (
    <div className=" flex justify-center   ">
      <div className=" flex flex-col gap-5 border border-black h-[40vh] w-[30%] justify-center items-center">
        <div className="">
          <label className="ml-[10px] mt-[20px] ">name : </label>
          <input
            className=" border border-black "
            type=" text"
            value={first}
            onChange={(e) => SetFirst(e?.target.value)}
          />
        </div>
        <div>
          <label className="">job:</label>
          <input
            type="text"
            value={second}
            onChange={(e) => SetSecond(e?.target.value)}
            className="  border border-black  "
          />
        </div>
        <div>
          <button
            type="button"
            onClick={(e) => submitForm(e)}
            className="px-[10px] py-[10px] border bg-blue-500  ml-[40%] mt-[20px]"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
