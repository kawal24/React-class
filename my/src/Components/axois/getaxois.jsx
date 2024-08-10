import React, { useEffect, useState } from "react";
import axios from "axios";
import Putaxios from "./putaxios";

const Userinfo = () => {
  const [list, SetList] = useState([]);
  // console.log("list", list);
  const [change, SetChange] = useState(false);
  // console.log("change", change);
  const [userId, SetUserId] = useState();
  // console.log("userId", userId);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((Response) => {
        // console.log("Response111", Response);
        SetList(Response.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`, list)
      .then((Response) => {
        // console.log("Response single", Response);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [userId, list]);

  const handleSubmit = (val) => {
    SetUserId(val?.id);
    SetChange(true);
  };

  // https://reqres.in/api/users/2
  return (
    <div className=" flex flex-wrap gap-5 justify-center text-center   ">
      {list.map((elm) => {
        return (
          <div
            onClick={() => handleSubmit(elm)}
            className="border w-[25%] h-[50vh] bg-pink-300  font-bold  rounded-xl 
           transition-transform hover:translate-y-3 hover:bg-blue-500  text-xl leading-10"
          >
            <div className="flex justify-center mt-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class=" "
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </div>
            <div className="">{elm.id}</div>
            <div>firstname:{elm.first_name}</div>
            <div>lastname:{elm.last_name}</div>
            <div>email:{elm.email}</div>
          </div>
        );
      })}

      {change && <Putaxios userId={userId} />}
    </div>
  );
};

export default Userinfo;
