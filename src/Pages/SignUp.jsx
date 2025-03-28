import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { BiSolidError } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { setUser } from "../store/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <form
      className="px-[1rem] py-[2rem] sm:w-[30rem] mx-auto"
      onSubmit={handleSubmit((data)=>{
        // console.log(data)
         dispatch(setUser(data))
          dispatch(login())
          navigate('/homepage')
      })}
    >
      <p className="font-bold text-3xl py-1 w-[70%] sm:w-[100%] ">
        Create your PopX account
      </p>
      <p className="text-gray-500 font-semibold w-[70%] sm:w-[100%] my-[4%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <TextField
        id="outlined-basic"
        type="text"
        label="Full Name"
        variant="outlined"
        placeholder="Enter full name"
        sx={{ width: "100%", my: "1rem" }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: "#6c25ff",
            fontWeight: "bold",
            "&.Mui-focused": { color: "#6c25ff", fontWeight: "bold" },
          },
        }}
        {...register("fullname", {
          required: "Full Name is required",
        })}
      />
      <p className="text-red-700 flex gap-1 items-center">
        {errors.fullname?.message && <BiSolidError className='size-[1.5rem]' />}
        <span className="text-xs font-bold">{errors.fullname?.message}</span>
      </p>
      <TextField
        id="outlined-basic"
        type="number"
        label="Phone number"
        variant="outlined"
        placeholder="Enter phone number"
        sx={{ width: "100%", my: "1rem" }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: "#6c25ff",
            fontWeight: "bold",
            "&.Mui-focused": { color: "#6c25ff", fontWeight: "bold" },
          },
        }}
        {...register("number", {
          required: "Phone number is required",
        })}
      />
      <p className="text-red-700 flex gap-1 items-center">
        {errors.number?.message && <BiSolidError className='size-[1.5rem]' />}
        <span className="text-xs font-bold">{errors.number?.message}</span>
      </p>
      <TextField
        id="outlined-basic"
        type="text"
        label="Email Address"
        variant="outlined"
        placeholder="Enter email address"
        sx={{ width: "100%", my: "1rem" }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: "#6c25ff",
            fontWeight: "bold",
            "&.Mui-focused": { color: "#6c25ff", fontWeight: "bold" },
          },
        }}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      <p className="text-red-700 flex gap-1 items-center">
        {errors.email?.message && <BiSolidError className='size-[1.5rem]' />}
        <span className="text-xs font-bold">{errors.email?.message}</span>
      </p>
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        placeholder="Enter password"
        sx={{ width: "100%", my: "1rem" }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: "#6c25ff",
            fontWeight: "bold",
            "&.Mui-focused": { color: "#6c25ff", fontWeight: "bold" },
          },
        }}
        {...register("password", {
          required: "Password is required",
        })}
      />
      <p className="text-red-700 flex gap-1 items-center">
        {errors.password?.message && <BiSolidError className='size-[1.5rem]' />}
        <span className="text-xs font-bold">{errors.password?.message}</span>
      </p>

      <TextField
        id="outlined-basic"
        label="Company name"
        variant="outlined"
        placeholder="Enter company name"
        sx={{ width: "100%", my: "1rem" }}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: "#6c25ff",
            fontWeight: "bold",
            "&.Mui-focused": { color: "#6c25ff", fontWeight: "bold" },
          },
        }}
        {...register("company")}
      />
      {/* <Link to="/homepage"> */}
      <Button
        variant="contained"
        type="submit"
        sx={{
          width: "100%",
          marginY: "2%",
          fontWeight: "bold",
          mx: "auto",
          textTransform: "none",
          py: "0.5rem",
          backgroundColor: "#6c25ff",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      >
        Login
      </Button>
      {/* </Link> */}
    </form>
  );
};

export default SignUp;
