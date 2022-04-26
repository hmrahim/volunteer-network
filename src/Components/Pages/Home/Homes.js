import React from 'react';
import Card from '../Card/Card';

const Homes = () => {
    return (
        <div className='container my-5'>
               <h1 className='fs-1 mt-5 text-center text-uppercase fw-bold '>I grow by helping people in need</h1>
            
            <form className="row row-cols-lg-auto g-3 align-items-center d-flex justify-content-center mt-3">
                <div className="d-flex ">
                    <input type="text" className="form-control border-end-0 text-start" placeholder="Search" />
                    <button className="btn btn-primary border-start-0">Search</button>
                </div>
           
            </form>
            <div className="row">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
          
        </div>
    );
};

export default Homes;