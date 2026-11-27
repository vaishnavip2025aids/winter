
import React, { useContext } from "react";
import Count from "../hooks/Count";
import { StudentContext } from "../StudentContext";

const Parent = () => {
    const studentName = useContext(StudentContext);

    return (
        <div className="mt-4">
            <h2>Parent Component</h2>
            <p>Student Name: {studentName}</p>
        </div>
    );
};

const About = () => {
    let name = "Student";

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">About Page</h1>

            <StudentContext.Provider value={name}>
                <Parent />
            </StudentContext.Provider>

            <Count />
        </div>
    );
};

export default About;
