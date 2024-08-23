import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home';
import { Dashboard } from '../page/AdminProfe';
import CrearQuiz from '../components/DashboardAdmin/sindebar/quiz/crearQuiz';
import ListaQuizzes from '../components/DashboardAdmin/sindebar/quiz/ListQuiz';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/crear-quiz" element={<CrearQuiz />} />
          <Route path="/lista-quizzes" element={<ListaQuizzes/>} />
          
          <Route path="/Dashoard" element={<Dashboard/>}/>
          
        </Routes>
      </Router>
    )
 }

 export default AppRouter;