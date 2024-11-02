// src/App.jsx
import React from 'react';
import UserList from './components/UserList';

const App = () => {
    return (
        <div className="App container mt-5">
            <h1 className="text-center mb-4">User Management</h1>
            <UserList />
        </div>
    );
};

export default App;
