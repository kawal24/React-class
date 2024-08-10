import React from "react";
const Componentone = (prop) => {
  console.log(prop);
  return (
    <div>
      <div>name:{prop.name}</div>
      {/* <div>name:{name}</div> */}
    </div>
  );
};

// destructure kita

// const Componentone = ({ name }) => {
//   console.log(name);
//   return (
//     <div>
//       <div>name:{name}</div>
//     </div>
//   );
// };
export default Componentone;
