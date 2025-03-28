import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { CiCamera } from 'react-icons/ci'
import { IoCameraSharp } from 'react-icons/io5'

const HomePage = () => {
   const dispatch=useDispatch()
   const userData=useSelector(store=>store.user.user)
   console.log(userData)
  return (
    <div className='bg-gray-200 h-[100dvh] sm:w-[40rem] mx-auto'>
      <div className='flex justify-between p-3 items-center bg-white'>
        <p>
          Account Settings 
        </p>
        <Link to="/login" ><Button variant='contained' onClick={()=>dispatch(logout())} sx={{ fontWeight:'bold', marginY:"2%", mx:"auto", textTransform:"none",py:"0.5rem",backgroundColor:"#6c25ff", borderRadius:"5px"}}>Logout</Button></Link>
      </div>
      <div className='flex pt-5 gap-5 px-5'>
        <div className='size-[5rem] rounded-full bg-white items-center flex justify-center relative mb-5'>
          <FaUserAlt className="size-[3.5rem]"/>
          <div className='bg-[#6c25ff] rounded-full p-2 absolute -right-[10%] bottom-[5%]'>
            <IoCameraSharp className='bg-[#6c25ff] text-white'/>
          </div>
        </div>
        <div>
          <p className='font-semibold'>{userData?.fullname||"Marry Doe"}</p>
          <p>{userData?.email||"marry@gmail.com"}</p>
        </div>
        {/* <img src="h" alt="" /> */}
      </div>
      <p className='px-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore accusamus ducimus quos quod ab, animi maiores. Dolorum commodi porro, architecto minus in ad laboriosam alias harum dignissimos sit ea tenetur!
      </p>
      <hr className='border-b-[1px] mt-3 border-dashed'/>
    </div>
  )
}

export default HomePage