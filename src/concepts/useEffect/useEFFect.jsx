import React, { useEffect, useState } from "react";

//On render it is getting call
// export const UseEffectExam = () => {
//   useEffect(() => {
//       alert("Use Effect called")
//   });
//   return (
//     <div>
//       <h1>Use UseEffect</h1>
//     </div>
//   );
// };

export const UseEffectExam = () => {
  const [name, setName] = useState({ firstName: "" });
  const [Lastname, setLastName] = useState({ Lastname: "" });

  useEffect(() => {
    alert("Use Effect called");
  }, [name]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName({ firstName: e.target.value })}
      ></input>
      <input
        type="text"
        onChange={(e) => setLastName({ LastName: e.target.value })}
      ></input>
    </div>
  );
};
