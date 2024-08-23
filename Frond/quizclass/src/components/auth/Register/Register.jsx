import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    usersurname: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
      setBgColor((prevColor) =>
        prevColor === "#f48ca4" ? "#a4cc64" : "#f48ca4"
      );
    }, 3000);

    // Animación de flotación
    controls.start({
      y: [0, -20, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <>
      <div
        className={`relative flex flex-col h-screen justify-center items-center bg-[${bgColor}] transition-colors duration-300 overflow-hidden`}
      >
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
                Hola, ¿Listo para aprender? ¡Inicia sesión!
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de inicio de sesión */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#f48ca4]">
            Iniciar Sesión
          </h2>
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
      </div>
    </>
  );
};

export default Register;
