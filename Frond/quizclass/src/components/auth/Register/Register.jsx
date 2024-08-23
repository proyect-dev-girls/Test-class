import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import imageNene from "../../../assets/image/nene.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
  });
  const [bgColor, setBgColor] = useState("#f48ca4");
  const controls = useAnimation();

  useEffect(() => {
    const changeBackgroundColor = () => {
      setBgColor((prevColor) =>
        prevColor === "#f48ca4" ? "#a4cc64" : "#f48ca4"
      );
    };

    const intervalId = setInterval(changeBackgroundColor, 3000);
    controls.start({
      y: [0, -20, 0],
      transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
    });

    return () => clearInterval(intervalId);
  }, [controls]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div
      className={`relative flex flex-col h-screen justify-center items-center bg-[${bgColor}] transition-colors duration-300 overflow-hidden`}
    >
      <div className="relative z-10 flex items-center space-x-8">
        <motion.img
          src={imageNene}
          alt="Nene"
          className="w-60 h-60"
          animate={controls}
        />
        <div className="relative bg-white p-8 rounded-xl shadow-2xl flex flex-col items-start space-y-4 max-w-xs">
          <div className="absolute -top-6 -left-8 w-16 h-16 bg-white rounded-full shadow-lg"></div>
          <div className="absolute -bottom-6 -left-4 w-8 h-8 bg-white rounded-full shadow-lg"></div>
          <div className="text-gray-700">
            <p className="text-left">
              🌟Hola, ¡bienvenido! Un gusto conocerte. ¿Listo para aprender?
              ¡Registra tus datos!🌟
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#f48ca4]">
          Registrate📝
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Nombre del Alumno"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
          />
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Apellido del Alumno"
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
            Registrar
          </button>
          <div className="mt-4 text-center">
            <span className="text-gray-600">¿Ya tienes cuenta? </span>
            <Link
              to="/login"
              className="text-[#f48ca4] font-bold hover:underline"
            >
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
