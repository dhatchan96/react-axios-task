// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';
import UserForm from './UserForm';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    // Fetch users from API on load
    const fetchUsers = async () => {
        try {
            const response = await api.get('/');
            setUsers(response.data); // Set the users state with fetched data
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Delete user
    const handleDelete = async (id) => {
        try {
            await api.delete(`/${id}`);
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Edit user
    const handleEdit = (user) => {
        setEditingUser(user);
    };

    // Save user (add or update)
    const handleSave = async (newUser) => {
        if (newUser.id) {
            try {
                const response = await api.put(`/${newUser.id}`, newUser);
                setUsers(users.map((user) => (user.id === newUser.id ? response.data : user)));
            } catch (error) {
                console.error("Error updating user:", error);
            }
        } else {
            try {
                const response = await api.post('/', newUser);
                setUsers([...users, response.data]);
            } catch (error) {
                console.error("Error adding user:", error);
            }
        }
        setEditingUser(null);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">User List</h2>
            <UserForm user={editingUser} onSave={handleSave} />
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            <strong>{user.name}</strong> - {user.email} <br />
                            <small>{user.address.street}, {user.address.city}</small>
                        </span>
                        <div>
                            <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(user)}>
                                Edit
                            </button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
