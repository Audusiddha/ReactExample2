import React, { useState, useMemo } from "react";

function UseMemo() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    // Define a memoized value for the result of expensive calculations
    const result = useMemo(() => {
        console.log("Calculating result...");
        return add + minus;
    }, [add, minus]);

    return (
        <>
            <h1>useMemo Example</h1>
            <div>
                <p>Add: {add}</p>
                <button onClick={() => setAdd(add + 1)}>Increment Add</button>
            </div>
            <div>
                <p>Minus: {minus}</p>
                <button onClick={() => setMinus(minus - 1)}>Decrement Minus</button>
            </div>
            <p>Result (Add + Minus): {result}</p>
        </>
    );
}

export default UseMemo;

