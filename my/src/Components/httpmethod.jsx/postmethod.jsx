import axios from "axios";
import React, { useEffect, useState } from "react";

const Putaxios = ({ userId }) => {
  // console.log("userttt", userId);

  const [put, SetPut] = useState();
  console.log("put11", put);
  // const [list, SetList] = useState([]);

  // const [userupdate, SetUserUpdate] = useState([]);
  // console.log("userupdate", userupdate);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=1/${userId}`)
      .then((Response) => {
        // console.log("response111", Response);
        SetPut(Response.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [userId]);

  const UpdateButton = (e) => {
    e.perventDefault();
  };

  return (
    <div className=" flex justify-center w-[20%] h-[40vh] bg-white  top-px  mt-60 fixed z-10 border border-red-500">
      <div>
        <from className=" flex flex-col gap-5 py-5 " OnSubmit={UpdateButton}>
          <div>
            <label>first_name:</label>
            <br />
            <input
              type="text"
              className="border border-black  "
              value={put?.first_name}
              onChange={(e) => {
                SetPut((curr) => ({ ...curr, first_name: e?.target?.value }));
              }}
            />
          </div>

          <div>
            <label>last_name:</label>
            <br />
            <input
              type="text"
              className="border border-black"
              value={put?.last_name}
              onChange={(e) => {
                SetPut((curr) => ({ ...curr, last_name: e?.target?.value }));
              }}
            ></input>
          </div>

          <div>
            <label>email: </label>
            <br />
            <input
              type="email"
              className="border border-black"
              value={put?.email}
              onChange={(e) => {
                SetPut((curr) => ({ ...curr, email: e?.target?.value }));
              }}
            />
          </div>
        </from>

        <div>
          <button
            // onClick={UpdateButton}
            // onClick={(e) => UpdateButton(e)}
            type="submit"
            className="border px-5 py-3 bg-blue-500  rounded-xl hover:bg-cyan-500 hover:text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default Putaxios;
