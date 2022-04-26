import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../../../firebase_init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verify = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const verifyEmail =async () => {
   await sendEmailVerification()
   toast.success("Verification email sent")
  };
  return (
    <div className="container my-5">
      <div className="p-4 border-3 shadow-lg">
        <h3 className="text-success text-center">Please verify your email</h3>
        <p
          onClick={verifyEmail}
          className="text-center text-success "
          style={{ cursor: "pointer" }}
        >
          Send verify email
        </p>
      </div>
    </div>
  );
};

export default Verify;
