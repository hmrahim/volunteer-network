import React, { useLayoutEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase_init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAuthState} from "react-firebase-hooks/auth"

const Login = () => {
  const location = useLocation()
 
  const from = location?.state?.from?.pathname || "/"
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()
  if(user){
   navigate(from,{replace:true})
   toast.success("Login successfully")
  }


  const formHandeler = e=> {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(email,password)

  }
  if(error){
    toast.error(error.message)
  }
  
  return (
    <div className="container my-5">
      <div className="w-50 mx-auto shadow-lg p-3 rounded-3">
        <h1 className="text-center
        ">Login</h1>
        <form onSubmit={formHandeler} action="">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Email
            </label>
            <input
            name="email"
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
            name="password"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
           <button type='submit' className="btn btn-primary w-100">Login</button>
          </div>
          
        </form>
        <p>You are new here ?  <Link to="/signup">Please signup</Link> </p>
        <p>Forgot password ?  <Link to="/signup">Reset Password</Link> </p>
      </div>
    </div>
  );
};

export default Login;
