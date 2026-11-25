import { useState } from "react";
import { Button } from "../components/ui/button";

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-5">
            <h3 className="text-2xl font-bold">
                Count: {count}
            </h3>

            <button onClick={() => setCount(count + 1)} className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-800">
                Increase
            </button>
        </div>
    );
};

export default Count;