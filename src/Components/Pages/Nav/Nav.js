import React from 'react';
import brnadLogo from "../../../img/logos/Group 1329.png"
import { Link, useNavigate } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth"
import auth from '../../../firebase_init';
import {signOut} from "firebase/auth"



const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  const logout = ()=> {
    signOut(auth)
    
      navigate("/login")



  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand" href="#"><img width={200} height={60} src={brnadLogo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Donation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/bookinglist">Booling List</Link>
        </li>
        {
          user ?  <li className="nav-item ms-4">
          <a onClick={logout} className="nav-link active btn btn-primary text-light px-3 " aria-current="page" >Logout</a>
        </li>
        : 
        
        <li className="nav-item ms-4">
          <Link className="nav-link active btn btn-primary text-light px-3 " aria-current="page" to="/signup">Register</Link>
        </li>
        }
        <li className="nav-item ms-4">
          <Link className="nav-link active btn btn-secondary text-light px-3 my-3 my-md-0 " aria-current="page" to="/admin">Admin</Link>
        </li>
 
      </ul>
    
    </div>
  </div>
</nav>
    );
};

export default Nav;