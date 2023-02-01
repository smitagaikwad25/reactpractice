import React, { useState } from "react";

export const UsehookWithPreviousValue = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      count :{count}
      {/* <button onClick={() => setCount(initialValue)}>Reset</button>
    <button onClick={() => setCount(count+1)}>Increase</button>
    <button onClick={() => setCount(count-1)}>Descreses</button> */}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((preCount) => preCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((preCount) => preCount - 1)}>
        Descreses
      </button>
    </div>
  );
};
