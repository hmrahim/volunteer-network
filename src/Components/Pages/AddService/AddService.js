import React from 'react';

const AddService = () => {
    const formHandeler = e=> {
        e.preventDefault()
        const title = e.target.title.value
        const details = e.target.details.value
        const link = e.target.link.value
        console.log(title,details,link)
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
           <button type='submit' className="btn btn-primary w-100">Submit</button>
          </div>
          
        </form>
        
      </div>
        </div>
    );
};

export default AddService;