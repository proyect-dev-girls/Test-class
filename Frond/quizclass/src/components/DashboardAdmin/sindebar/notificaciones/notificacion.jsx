import Sidebar from "../Sidebar";

const Notificaciones = () => {
  const notificaciones = [
    {
      id: 1,
      profesor: "Prof. García",
      accion: "Subió un nuevo quiz",
      fecha: "17/08/2024",
    },
    {
      id: 2,
      profesor: "Prof. López",
      accion: "Agregó una nueva calificación",
      fecha: "19/08/2024",
    },
    {
      id: 3,
      profesor: "Prof. López",
      accion: "Agregó un nuevo quiz",
      fecha: "22/08/2024",
    },
    {
      id: 4,
      profesor: "Prof. López",
      accion: "Agregó un nuevo quiz",
      fecha: "25/08/2024",
    },
  ];

  return (
    <div className="flex">
      <div className="w-64 bg-white text-gray-800 shadow-lg border border-[#a4cc64]">
        <Sidebar />
      </div>
      <div className="flex-1 p-8 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full overflow-x-auto">
            <h1 className="text-3xl font-bold mb-6 text-[#fff] text-center">
              Lista de Notificaciones
            </h1>
            <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-[#a4cc64] text-white">
                    <th className="p-4 border-b">Profesor</th>
                    <th className="p-4 border-b">Acción</th>
                    <th className="p-4 border-b">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {notificaciones.map((notificacion) => (
                    <tr key={notificacion.id} className="hover:bg-gray-100">
                      <td className="p-4 border-b">{notificacion.profesor}</td>
                      <td className="p-4 border-b">{notificacion.accion}</td>
                      <td className="p-4 border-b">{notificacion.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notificaciones;
