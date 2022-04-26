import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth"
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase_init';
import Verify from '../Verify/Verify';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    
    const location = useLocation()
    console.log(user);
    if(loading){
        return <h1 className='text-center'>Loading...</h1>
    }
  
    if(!user){
      return  <Navigate to="/login" state={{from:location}} replace ></Navigate>
    }
    if(!user.emailVerified){
        return <Verify></Verify>
    }
 
  
    return children
};

export default RequireAuth;