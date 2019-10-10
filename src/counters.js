import React, { useState } from "react";

export const Counters = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleCount1Change = () => {
    let changedCount1 = count1 + 1;
    setCount1(changedCount1);
    setSum(changedCount1 + count2);
  };

  const handleCount2Change = () => {
    let changedCount2 = count2 + 1;
    setCount2(changedCount2);
    setSum(count1 + changedCount2);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <button onClick={handleCount1Change}>Increment Count 1</button>
          <div>Count 1: {count1}</div>
        </div>
        <div>
          <button onClick={handleCount2Change}>Increment Count 2</button>
          <div>Count 2: {count2}</div>
        </div>
      </div>
      <div>SUM: {sum}</div>
    </>
  );
};
