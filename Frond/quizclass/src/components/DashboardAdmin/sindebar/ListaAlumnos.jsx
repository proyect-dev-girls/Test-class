import { useState, useEffect } from "react";
import Sidebar from "../sindebar/Sidebar.jsx";

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/alumno"); // Ajusta la URL según tu endpoint
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        setAlumnos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumnos();
  }, []);

  if (loading) return <p className="text-white">Cargando...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  const handleVerRendimiento = (dni) => {
    // Lógica para ver el rendimiento del alumno
    console.log(`Ver rendimiento de alumno con DNI: ${dni}`);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-white text-gray-800 shadow-lg border border-[#a4cc64]">
        <Sidebar />
      </div>
      <div className="flex-1 p-8 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full overflow-x-auto">
            <h1 className="text-3xl font-bold mb-6 text-[#fff]">
              Lista de Alumnos
            </h1>
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-4 border-b">Nombre</th>
                  <th className="p-4 border-b">Apellido</th>
                  <th className="p-4 border-b">DNI</th>
                  <th className="p-4 border-b">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {alumnos.length > 0 ? (
                  alumnos.map((alumno) => (
                    <tr key={alumno.dni}>
                      <td className="p-4 border-b">{alumno.nombres}</td>
                      <td className="p-4 border-b">{alumno.apellidos}</td>
                      <td className="p-4 border-b">{alumno.dni}</td>
                      <td className="p-4 border-b">
                        <button
                          onClick={() => handleVerRendimiento(alumno.dni)}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                          Ver Rendimiento
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-4 text-center">
                      No hay alumnos disponibles
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaAlumnos;
