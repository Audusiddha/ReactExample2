import React, { useState, useCallback } from "react";
import Child from "./child";

function UseCallback() {
  const [add, setAdd] = useState(0);

  // Define the callback function using useCallback to memoize it
  const learning = useCallback(() => {
    console.log("We are Learning");
  }, []);

  return (
    <>
      <h1>This is the performance hook useCallback</h1>
      <h1>{add}</h1>
      {/* Render Child component and pass the memoized callback as a prop */}
      <Child learning={learning} />
      <button onClick={() => setAdd(add + 1)}>Increase</button>
    </>
  );
} export default UseCallback;
