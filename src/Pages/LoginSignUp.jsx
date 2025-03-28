import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginSignUp = () => {
  return (
    <div className='flex flex-col justify-end h-[100dvh] px-3 py-6 sm:w-[30rem] mx-auto'>
        <p className='font-bold text-3xl py-1'>Welcome to PopX</p>
        <p className='text-gray-500 font-semibold w-[70%] mb-[4%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Link to="/signup" className='px-3'><Button variant='contained' sx={{width:"100%", marginY:"2%",fontWeight:'medium', mx:"auto", textTransform:"none",py:"0.5rem",backgroundColor:"#6c25ff", borderRadius:"5px"}}>Create Account</Button></Link>
        <Link to="/login" className='px-3'><Button variant='contained' sx={{width:"100%", fontWeight:'bold', marginY:"2%", mx:"auto", textTransform:"none",py:"0.5rem",backgroundColor:"#CEBAFB", borderRadius:"5px",color:"black"}}>Already Registered? Login</Button></Link>
    </div>
  )
}

export default LoginSignUp