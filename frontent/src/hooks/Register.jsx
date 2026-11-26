
import React, { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
    name: z.string().min(3, "Name must have minimum of 3 letters"),
    email: z.string().email("Enter valid email"),
    password: z.string().min(8, "password must contain at least 8 characters")
})
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = registerSchema.safeParse(formData)
        if (result.success) {
            console.log("Validation success");
            console.log(formData)
        } else {
            console.log("Invalid Input")
            alert("Invalid Registration submitted!");
            alert(result.error.issues[0].message)
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md space-y-4 rounded-xl bg-white p-8 shadow-lg"
            >
                <h1 className="text-center text-2xl font-bold text-blue-600">
                    Register Form
                </h1>

                <div>
                    <label htmlFor="name" className="mb-1 block font-medium">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-1 block font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="mb-1 block font-medium">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Register;
