import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import axios from "axios";
import useApi from "../../Hooks/useApi";
const Services = () => {
  const [services, setServices] = useData();
  const {deleteData} = useApi()

  // useEffect(() => {
  //   fetch("http://localhost:5000/service")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, services);


  return (
    <div className=" my-2 service-table">
      <table class="table table-striped table-hover">
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {services.map((service) => (
          <tr>
            <td>{service.title}</td>
            <td>
              <img width={80} height={50} src={service.link} alt="" />
            </td>
            <td>
              <button className="btn btn-info text-black btn-sm mx-2 my-2">
                View
              </button>
              <button className="btn btn-primary text-black btn-sm mx-2 my-2">
                Edit
              </button>
              <button
                onClick={() => deleteData(service._id)}
                className="btn btn-danger text-black btn-sm mx-2 my-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Services;
