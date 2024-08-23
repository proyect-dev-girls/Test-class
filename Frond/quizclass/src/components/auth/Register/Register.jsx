import React, { useState, useEffect, useContext }from 'react';
import { AuthContext } from '../AuthContext';
import imageNene from '../../../assets/image/nene.png';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        usersurname: '',
        age: ''
    });
    // stado para fondo de colores 
    const [bgColor, setBgColor] = useState('#f48ca4');
    const controls = useAnimation();

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
    
 //efectos  de animacion
    useEffect(() => {
        // Animación de cambio de color de fondo
        const intervalId = setInterval(() => {
            setBgColor(prevColor => (prevColor === '#f48ca4' ? '#a4cc64' : '#f48ca4'));
        }, 3000);

        // Animación de flotación
        controls.start({
            y: [0, -20, 0],
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity
            }
        });

        return () => clearInterval(intervalId);
    }, [controls]);


    return (
        
        <div className={`relative flex flex-col h-screen justify-center items-center bg-[${bgColor}] transition-colors duration-300 overflow-hidden`}>
                <div className="relative z-10 flex items-center space-x-8">
                    {/* Imagen del nene */}
                    <motion.img
                        src={imageNene}
                        alt="Nene"
                        className="w-60 h-60"
                        animate={controls}
                    />

                    {/* Burbuja de mensaje */}
                    <div className="relative bg-white p-8 rounded-xl shadow-2xl flex flex-col items-start space-y-4 max-w-xs">
                        {/* Puntas de la nube */}
                        <div className="absolute -top-6 -left-8 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                        <div className="absolute -bottom-6 -left-4 w-8 h-8 bg-white rounded-full shadow-lg"></div>
                        <div className="text-gray-700">
                            <p className="text-left">
                            🌟Hola, ¡bienvenido! Un gusto conocerte. ¿Listo para aprender? ¡Registra tus datos!🌟
                            </p>
                        </div>
                    </div>
                </div>

                {/* Formulario de inicio de sesión */}
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-[#f48ca4]">Registrate📝</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Nombre del Alumno"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
                        />
                        <input
                            type="text"
                            name="usersurname"
                            value={formData.usersurname}
                            onChange={handleChange}
                            placeholder="Apellido del Alumno"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
                        />
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Edad"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
                        />
                        <Link to={'/alumnos'}
                                type="submit"
                                className="w-full py-2 bg-[#a4cc64] text-center  text-white font-bold rounded-md hover:bg-[#8cb456] transition duration-200"
                            >
                                Registrar
                        </Link>
                    </form>
                </div>
        </div>





            
        
    );
};

export default Register;
