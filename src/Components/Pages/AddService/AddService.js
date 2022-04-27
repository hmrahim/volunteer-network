
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const AddService = () => {
  const [startDate, setStartDate] = useState(new Date());
    const formHandeler =(e)=> {
        e.preventDefault()
        const title = e.target.title.value
        const details = e.target.details.value
        const link = e.target.link.value
        const date = e.target.date.value
        const data = {title,details,link,date}
        console.log(data);
       
       fetch("http://localhost:5000/service",{
           method:"POST",
           headers:{
               "Content-Type" : "Application/json"
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(ss=>{
         console.log(ss);
         

       })
        
    }
    return (
        <div>
              <div className=" shadow-lg p-3 rounded-3">
        <h3 className="text-center
        ">Add new service</h3> <hr />
        <form  onSubmit={formHandeler} action="">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              title
            </label>
            <input
            name="title"
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Details
            </label>
            <input
            name="details"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Details"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Images link
            </label>
            <input
            name="link"
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Images"
            />
          </div>
          <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
              Date
            </label>
          <DatePicker className="form-control" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="mb-3">
           <button type='submit' className="btn btn-primary w-100">Submit</button>
          </div>
          
        </form>
        
      </div>
        </div>
    );
};

export default AddService;