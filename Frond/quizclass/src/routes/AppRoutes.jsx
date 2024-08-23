import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home';
import { Dashboard } from '../page/AdminProfe';
import CrearQuiz from '../components/DashboardAdmin/sindebar/quiz/crearQuiz';
import { Alumnos } from '../components/DashboardAdmin/sindebar/alumnos/Alumnos';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/crear-quiz" element={<CrearQuiz />} />
          <Route path="/alumnos" element={<Alumnos/>} />
          
          <Route path="/Dashoard" element={<Dashboard/>}/>
          
        </Routes>
      </Router>
    )
 }

 export default AppRouter;