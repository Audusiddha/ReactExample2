import React, { useEffect, useState } from "react";

export default function UseEffectTwo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("This is the new value", count);

        // Cleanup function called before each new render
        return () => {
            console.log("Cleanup before new render");
        };
    }, [count]); // Dependency list

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
}
