import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        dni: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#f48ca4]">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Nombre de Usuario"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
                    />
                    <input
                        type="number"
                        name="dni"
                        value={formData.dni}
                        onChange={handleChange}
                        placeholder="DNI"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#a4cc64] text-white font-bold rounded-md hover:bg-[#8cb456] transition duration-200"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
