import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container my-4">
      <div className="row g-3">
        <div className="col-md-3 p-4 border-1 ms-3 border">
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><Link className="text-decoration-none text-black text-center" to="/admin/services">Services</Link></li>
              <li className="list-group-item"><Link className="text-decoration-none text-black text-center" to="/admin/addservice">Add new service</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-8 border p-4 border-1 ms-3 ">
          
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Admin;
