import React, { useState } from "react";

const Todolist = () => {
  const [first, setFirst] = useState("");
  // console.log("input", first);

  const [list, setList] = useState([]);
  console.log("list", list);

  const Add = () => {
    const x = Math.random() * 10;
    setList((prev) => [...prev, { tilte: first, id: x, complted: false }]);
    setFirst("");
  };

  const remove = (val) => {
    // console.log("val", val);
    const afterRemove = list.filter((elm) => elm?.id !== val?.id);
    console.log("wow", afterRemove);
    setList(afterRemove);
  };

  const handleline = (l) => {
    console.log("line");
    setList((m) =>
      m.map((n) => {
        if (n?.id === l?.id) {
          return { ...n, complted: !n.complted };
        }
        return n;
      })
    );
  };

  return (
    // main div
    <div className=" w-[20%] h-[50vh]  mt-[100px] ml-[300px] border-2">
      <div className="font-bold ml-[20px] leading-8 ">
        <h1>Todo App</h1>
      </div>

      {/* input */}

      <div className="ml-[20px] ">
        <input
          onChange={(e) => setFirst(e?.target?.value)}
          type="text"
          value={first}
          placeholder="title..."
          className=" bg-red-500 border-black "
        />
        <button
          onClick={Add}
          className="w-[40PX] h-[25px] bg-purple-500 text-white"
        >
          +
        </button>
      </div>
      {/* list div */}
      <div className="mt-[10px]">
        {list?.map((item) => (
          <ul>
            <li
              onClick={() => handleline(item)}
              className={`${
                item.complted
                  ? `line-through
                `
                  : ``
              } mb-2 flex justify-between border-2`}
            >
              <div>{item.tilte}</div>
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(item);
                  }}
                  className=" border border-red-500 px-1 py-1 hover:bg-purple-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class=" flex justify-end "
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
