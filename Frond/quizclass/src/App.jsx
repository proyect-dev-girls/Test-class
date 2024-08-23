import AppRouter from "./routes/AppRoutes"
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DashboardAdmin from './components/DashboardAdmin';


function App() {
  return (
      <AuthProvider>
          <Router>
              <Switch>
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <ProtectedRoute path="/dashboard" component={DashboardAdmin} />
              </Switch>
          </Router>
      </AuthProvider>
  );
}

export default App;