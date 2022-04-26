import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='d-flex flex-cullam justify-content-center align-items-center'>
            <h1 className='text-center'>404 not found </h1>
            <Link className='text-center' to="/">Please to home page</Link>
            </div>
            
        </div>
    );
};

export default NotFound;