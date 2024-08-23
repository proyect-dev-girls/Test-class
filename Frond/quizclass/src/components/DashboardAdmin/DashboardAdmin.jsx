import React from 'react';
import { Chart, CategoryScale, LinearScale, ArcElement, BarElement } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import Sidebar from './sindebar/Sidebar';

// Registrar escalas y elementos
Chart.register(CategoryScale, LinearScale, ArcElement, BarElement);

const DashboardAdmin = () => {
    //funcion para Configura un gráfico de barras que muestra el número de respuestas correctas para diferentes preguntas.
      const dataBar = {
        labels: ['Clase1', 'Clase2', 'Clase3'],
        datasets: [{
          label: 'Respuestas Correctas',
          data: [12, 19, 3],
          backgroundColor: '#a4cc64', // Verde
        }]
      };
      
    //Funcion para Configura un gráfico de torta que muestra el porcentaje de respuestas correctas e incorrectas.
      const dataDoughnut = {
        labels: ['Correctas', 'Incorrectas'],
        datasets: [{
          data: [300, 50],
          backgroundColor: ['#f48ca4', '#ffcc00'], // Rosa y amarillo
        }]
      };
    
      return (
        <div className="flex bg-gray-100">
            {/* coloque el sindebar para que se vea  */}
          <Sidebar />
          <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-6 text-verde">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-verde">Rendimiendo de los Alumnos por clase</h2>
                <Bar data={dataBar} />
              </div>
              <div className="bg-white p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-verde">Porcentaje de Respuestas</h2>
                <Doughnut data={dataDoughnut} />
              </div>
            </div>
          </div>
        </div>
      );
    };
export default DashboardAdmin;
