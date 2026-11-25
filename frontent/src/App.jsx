
import React from "react";
import Students from "./components/Students";
import Count from "./hooks/Count";
import { Button } from "./components/ui/button";
const App = () => {
  const name = "test";

  return (
    <>
      <div className="bg-blue-700 pl-96 text-cyan-300">
        App
      </div>

      <Count />


      <Button variant="secondary">Secondary</Button>
      <button className="rounded bg-red-600 px-4 py-2 text-white">Delete</button>
      <button className="rounded border border-gray-400 px-4 py-2">Outline</button>
      <button className="rounded bg-gray-200 px-4 py-2"> Secondary</button>
      <button className="rounded px-4 py-2 hover:bg-gray-100">Ghost</button>



      <h1>This is {name}</h1>

      <Students name="user" age={20} />
    </>
  );
};

export default App;
