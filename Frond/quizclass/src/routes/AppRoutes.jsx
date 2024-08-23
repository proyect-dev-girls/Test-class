import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home';
import { Dashboard } from '../page/AdminProfe';
import CrearQuiz from '../components/DashboardAdmin/sindebar/quiz/crearQuiz';
import Alumnos  from '../components/DashboardAdmin/sindebar/alumnos/Alumnos';
import JugarQuiz from '../components/DashboardAdmin/sindebar/alumnos/JugarQuiz';
import Register from '../components/auth/Register/Register'
import Login from '../components/auth/login/Login';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/crear-quiz" element={<CrearQuiz />} />
          <Route path="/alumnos" element={<Alumnos/>} />
          <Route path="/jugar-quiz" element={<JugarQuiz/>} />
          <Route path="/Dashoard" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          
          
        </Routes>
      </Router>
    )
 }

 export default AppRouter;