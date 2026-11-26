
import React, { useState } from "react";
import Students from "./components/Students";
import Count from "./hooks/Count";
import { Button } from "./components/ui/button";
import Register from "./hooks/Register";
import Users from "./hooks/Users";

const App = () => {
  const name = "test";

  // Toggle state
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div className="bg-blue-700 pl-96 text-cyan-300">
        App
      </div>

      <Register />

      <Count />

      {/* Toggle Button */}
      <div className="mt-5 ">
        <h2 className="mb-3 text-xl font-bold">
          Toggle: {isOn ? "ON" : "OFF"}
        </h2>

        <button
          onClick={() => setIsOn(!isOn)}
          className={`rounded px-5 py-2 text-white ${isOn ? "bg-green-600" : "bg-red-600"
            }`}
        >
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button variant="secondary">Secondary</Button>

        <button className="rounded bg-red-600 px-4 py-2 text-white">
          Delete
        </button>

        <button className="rounded border border-gray-400 px-4 py-2">
          Outline
        </button>

        <button className="rounded bg-gray-200 px-4 py-2">
          Secondary
        </button>

        <button className="rounded px-4 py-2 hover:bg-gray-100">
          Ghost
        </button>
      </div>

      <h1>This is {name}</h1>
      <Users />

      <Students name="user" age={20} />
    </>
  );
};

export default App;
