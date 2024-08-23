import { createContext, useState } from "react";

// Crea el contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const register = async (userData) => {
    try {
      // Simulación de una solicitud al backend
      const response = await fetch("https://tu-api.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        setAuthenticated(true);
        alert("Registro Exitoso");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const login = async (loginData) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (data.success) {
        setUser(data.user);
        setAuthenticated(true);
        alert("Inicio de sesión exitoso");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setUser(null);
    setAuthenticated(false);
    alert("Cierre de sesión exitoso");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
