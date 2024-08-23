import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContext";
import imageNene from "../../../assets/image/nene.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", dni: "" });
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
    alert("Hola");
    login(formData);
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
              Hola, ¿Listo para aprender? ¡Inicia sesión!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#f48ca4]">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nombre de Usuario"
            required
            autoFocus
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
          />
          <input
            type="number"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            placeholder="DNI"
            required
            minLength={8} // Por ejemplo, si el DNI tiene que tener al menos 8 dígitos
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64]"
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#a4cc64] text-white font-bold rounded-md hover:bg-[#8cb456] transition duration-200"
          >
            Iniciar Sesión
          </button>
          <div className="mt-4 text-center">
            <span className="text-gray-600">¿No eres profesor? </span>
            <Link
              to="/register"
              className="text-[#f48ca4] font-bold hover:underline"
            >
              No soy profesor
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
