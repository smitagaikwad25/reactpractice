import React, { useState } from "react";

// export const UseStateWithObj = () => {
//   const [details, setDetails] = useState({ firstName: "", lastName: "" });
//   return (
//     <form>
//       <input
//         type="text"
//         value={details.firstName}
//         onChange={(e) => setDetails({ firstName: e.target.value })}
//       ></input>
//       <input
//         type="text"
//         value={details.lastName}
//         onChange={(e) => setDetails({ lastName: e.target.value })}
//       ></input>

//       <h1>First name is: {details.firstName} </h1>
//       <h1>Last name is: {details.lastName}</h1>
//       <h1>{JSON.stringify(details)}</h1>
//     </form>
//   );
// };

export const UseStateWithObj = () => {
  const [details, setDetails] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={details.firstName}
        onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={details.lastName}
        onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
      ></input>

      <h1>First name is: {details.firstName} </h1>
      <h1>Last name is: {details.lastName}</h1>
      <h1>{JSON.stringify(details)}</h1>
    </form>
  );
};
