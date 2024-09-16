import React from 'react'
import { Navigate } from 'react-router'
const PrivateRoute = ({children}) => {
   
  const isLoggedIn = JSON.parse(localStorage.getItem("Islogin")) || false;
    return (
      isLoggedIn == true ? children : <Navigate to={"/api/Auth/login"} /> 
  )
}

export default PrivateRoute