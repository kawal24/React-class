import axios from "axios";
import React, { useEffect, useState } from "react";

const Putaxiosreq = ({ userId }) => {
  const [put, SetPut] = useState("");
  const [userUpdate, SetUserUpdate] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((Response) => {
        SetPut(Response.data.id);
        SetUserUpdate(Response.data);
        setFirstName(Response.data.first_name);
        setLastName(Response.data.last_name);
        setEmail(Response.data.email);
        console.log("response", Response);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [userId]);

  const UpdateButton = (e) => {
    e.preventDefault();

    const updatedUser = { first_name, last_name, email };

    axios
      .put(`https://reqres.in/api/users/${put}`, updatedUser)
      .then((Response) => {
        console.log("Updated user:", Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center w-[30%] h-[40vh] bg-white top-px fixed z-10 border border-red-500">
      <div>
        <form className="flex flex-col gap-5 py-5" onSubmit={UpdateButton}>
          <div>
            <label>first_name:</label>
            <input
              type="text"
              className="  border border-black"
              value={userUpdate.first_name}
              onChange={(e) => setFirstName(e.target.value)}
              name="first_name"
            />
          </div>

          <div>
            <label>last_name:</label>
            <input
              type="text"
              className="border border-black"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              name="last_name"
            />
          </div>

          <div>
            <label>email: </label>
            <input
              type="email"
              className="border border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>

          <div>
            <button
              type="submit"
              className="border px-5 py-3 bg-blue-500 rounded-xl hover:bg-cyan-500 hover:text-white"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Putaxiosreq;
