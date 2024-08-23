import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home';
import { Dashboard } from '../page/AdminProfe';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/Dashoard" element={<Dashboard/>}/>
          
        </Routes>
      </Router>
    )
 }

 export default AppRouter;