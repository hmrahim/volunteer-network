import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase_init"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, vefifyError] = useSendEmailVerification(auth);

const navigate = useNavigate()


  const formHandeler  = async (e)=> {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(email,password)
    .then(async()=>{
      await sendEmailVerification()

    })
  
 
   
    toast.success("Signup succesfully! verification email sent check your email")
  navigate("/login")
    

  }
    return (
        <div className='container my-5'>
            <div className="w-50 mx-auto shadow-lg p-3 rounded-3">
        <h1 className="text-center
        ">Signup</h1>
        <form onSubmit={formHandeler} action="">
        <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Name
            </label>
            <input
            name="name"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Name"
            />
          </div>
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
           <button type='submit' className="btn btn-primary w-100">Signup</button>
          </div>
        </form>
        <p>Already have an account ?  <Link to="/login">Please login</Link> </p>
        
      </div>
            
        </div>
    );
};

export default Signup;