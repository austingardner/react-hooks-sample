import React, { useState } from "react";

export const Counters = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <button onClick={() => setCount1(c => c + 1)}>
            Increment Count 1
          </button>
          <div>Count 1: {count1}</div>
        </div>
        <div>
          <button onClick={() => setCount2(c => c + 1)}>
            Increment Count 2
          </button>
          <div>Count 2: {count2}</div>
        </div>
      </div>
    </>
  );
};
