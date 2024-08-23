import React, {Children, createContext, useState} from 'react';

// Crea el contexto de autenticacion

export const AuthContext = createContext();

export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);
    
    const register = async (userData) => {
        try {
            //Simulacion de una solicitud al back
            const response = await fetch('https://tu-api.com/register',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });


            const data = await response.json();

            if(data.success){
                setUser(data.user);
                setAuthenticated(true);
                alert('Registro Exitoso');
            } else {
                alert(`Error: ${data.message}`); 
            }
        }catch(error){
            console.error('Error al registrar:', error);
            alert('Ocurrio un error durante el registro.');
        
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, register}}>
            {Children}
        </AuthContext.Provider>
    )
};