import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        usersurname: '',
        age: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Nombre del Usuario"
                    required
                />
                <input
                    type="text"
                    name="usersurname"
                    value={formData.usersurname}
                    onChange={handleChange}
                    placeholder="Apellido del Usuario"
                    required
                />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Edad"
                    required
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
