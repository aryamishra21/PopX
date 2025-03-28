import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const NonLoggedGuard = () => {
    let auth=!!localStorage.getItem("isAuthenticated")
    useEffect(()=>{
        if(auth){
          
        }
    },[auth])
  return auth?<Navigate to='/homepage'/>:<Outlet/>
}

export default NonLoggedGuard