// src/components/UserForm.jsx
import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave }) => {
    const [formData, setFormData] = useState({ name: '', email: '', address: { street: '', city: '' } });

    // Update form fields when editing an existing user
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                address: {
                    street: user.address.street,
                    city: user.address.city,
                },
            });
        } else {
            setFormData({ name: '', email: '', address: { street: '', city: '' } });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            address: { ...prev.address, [name]: value },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...user, ...formData });
        setFormData({ name: '', email: '', address: { street: '', city: '' } });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control mb-2"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control mb-2"
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formData.address.street}
                    onChange={handleAddressChange}
                    className="form-control mb-2"
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.address.city}
                    onChange={handleAddressChange}
                    className="form-control mb-2"
                />
            </div>
            <button type="submit" className="btn btn-success">
                {user ? 'Update' : 'Add'} User
            </button>
        </form>
    );
};

export default UserForm;
