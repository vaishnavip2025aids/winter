
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );

                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        const addUser = async () => {
            try {
                const response = await axios.post(
                    "https://jsonplaceholder.typicode.com/users",
                    {
                        name: "Test",
                        email: "test@gmail.com",
                    }
                );

                console.log("Added user:", response.data);
            } catch (error) {
                console.error("Error adding user:", error);
            }
        };

        const loadData = async () => {
            await getUsers();
            await addUser();
        };

        loadData();
    }, []);


    return (
        <div>
            <h1>Users Name</h1>
            <hr />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

};

export default Users;
