import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="border w-full h-[10vh] bg-red-500 text-white py-3 flex ">
        <div className="font-bold text-2xl  ">Noelle</div>
        <ul className="flex  place-items-center ml-72 gap-10 text-center  ">
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            shopall
          </li>
          <li
            onClick={() => {
              navigate("/new");
            }}
          >
            new
          </li>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            bestsellers
          </li>
          <li
            onClick={() => {
              navigate("/face");
            }}
          >
            face
          </li>
          <li
            onClick={() => {
              navigate("/lips");
            }}
          >
            lips
          </li>
          <li
            onClick={() => {
              navigate("/eyes");
            }}
          >
            eyes
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Home;
