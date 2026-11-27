
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Students from "./components/Students";
import { Button } from "./components/ui/button";

// Hooks components
import Count from "./hooks/Count";
import Register from "./hooks/Register";
import Users from "./hooks/Users";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  const name = "test";

  const [isOn, setIsOn] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>

      {/* App Heading */}
      <div className="bg-blue-700 pl-96 text-cyan-300">
        App
      </div>

      {/* Register Component */}
      <Register />

      {/* Counter Component */}
      <Count />

      {/* Toggle Button */}
      <div className="mt-5">
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

      {/* Button Examples */}
      <div className="mt-5 flex flex-wrap gap-3">
        <Button variant="secondary">
          Secondary
        </Button>

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

      {/* Name */}
      <h1 className="mt-5">
        This is {name}
      </h1>

      {/* Users Component */}
      <Users />

      {/* Students Component */}
      <Students name="user" age={20} />
    </>
  );
};

export default App;
