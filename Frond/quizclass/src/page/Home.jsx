import React from "react";
import { Link } from 'react-router-dom';

export const Home =()=>{

    return(
        <>
          <h1> home bienbenido</h1>
          <Link to='/Dashoard'>ADMIN</Link>
        </>
    )
}