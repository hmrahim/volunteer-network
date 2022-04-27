import React from "react";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";

const Services = () => {
    const [services,setServices] = useData()
  return (
    <div   className=" my-2 service-table">
      <table class="table table-striped table-hover">
          
          <tr>
             
              <th>Title</th>
              <th>Image</th>
              <th>Action</th>
          </tr>
          {
              services.map(service=>   <tr>
                <td>{service.title}</td>
                <td>
                    <img width={80} height={50} src={service.link} alt="" />
                </td>
                <td>
                    <button className="btn btn-info text-black btn-sm mx-2 my-2" to="#">View</button>
                    <button className="btn btn-primary text-black btn-sm mx-2 my-2" to="#">Edit</button>
                    <button className="btn btn-danger text-black btn-sm mx-2 my-2" to="#">Delete</button>
                </td>
                
             </tr>)
          }
        
      </table>
    </div>
  );
};

export default Services;
