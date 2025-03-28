import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LoginGuard = () => {
    let auth=!!localStorage.getItem("isAuthenticated")
    useEffect(()=>{
        if(auth){
          
        }
    },[auth])
  return auth?<Outlet/>:<Navigate to='/login'/>
}

export default LoginGuard