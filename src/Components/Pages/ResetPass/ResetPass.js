import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase_init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPass = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  if (sending) {
    toast.success("Password sending to your email");
  }
  const formHandeler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(email);
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto">
        <h1
          className="text-center
        "
        >
          Reset Password
        </h1>
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
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
