
import React, { useEffect, useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true)
    useEffect(() => {
        console.log("From useEffect");
    })
    const resetCount = () => {
        setCount(0);
    };

    return (
        <div className="mt-5 flex ">
            <button
                onClick={() => setCount(count - 1)}
                className="rounded bg-red-500 px-4 py-2 text-white"
            >
                -
            </button>

            <h1 className="text-2xl font-bold">
                Count: {count}
            </h1>

            <button
                onClick={() => setCount(count + 1)}
                className="rounded bg-blue-600 px-4 py-2 text-white"
            >
                +
            </button>

            {/* Reset Button */}
            <button
                onClick={resetCount}
                className="rounded bg-gray-700 px-4 py-2 text-white"
            >
                Reset
            </button>
        </div>
    );
};

export default Count;
