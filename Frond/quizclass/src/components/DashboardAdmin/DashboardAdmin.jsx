import React from 'react';
import  Sidebar  from './Sidebar';
import { Bar, Doughnut } from 'react-chartjs-2';

const DashboardAdmin = () => {
  const dataBar = {
    labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
    datasets: [{
      label: 'Respuestas Correctas',
      data: [12, 19, 3],
      backgroundColor: '#a4cc64',
    }]
  };

  const dataDoughnut = {
    labels: ['Correctas', 'Incorrectas'],
    datasets: [{
      data: [300, 50],
      backgroundColor: ['#f48ca4', '#ffcc00'],
    }]
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Respuestas Correctas por Pregunta</h2>
            <Bar data={dataBar} />
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Porcentaje de Respuestas</h2>
            <Doughnut data={dataDoughnut} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
