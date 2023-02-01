import React, { useState } from "react";

export const Usehook = () => {
  const [count, setCount] = useState(10);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      count {count}
    </button>
  );
};
