
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-700 p-4">
            <div className="flex gap-6">
                <Link to="/" className="text-white hover:text-cyan-300">
                    Home
                </Link>

                <Link to="/about" className="text-white hover:text-cyan-300">
                    About
                </Link>

                <Link to="/service" className="text-white hover:text-cyan-300">
                    Service
                </Link>

                <Link to="/contact" className="text-white hover:text-cyan-300">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
