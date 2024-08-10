import axios from "axios";
import React, { useEffect, useState } from "react";

const GetMothed = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div className="bg-red-200 w-[50px] h-[20px]">
            <div>first_name:{item.first_name}</div>
            <div>last_name{item.last_name}</div>
            <div>email{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GetMothed;
