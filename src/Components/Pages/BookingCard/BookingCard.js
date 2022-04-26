import React from 'react';

const BookingCard = () => {
    return (
        <div className='col-md-6 g-5'>
            <div className="row shadow-lg p-2 rounded-3">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/TrjxWN0/extra-Volunteer.png" className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 d-flex flex-column align-items-stretch">
                    <div className=' mt-3'>
                        <h4>Child support</h4>
                        <p>29 sep, 2020</p>
                    </div>
                    <div className='d-flex align-items-end justify-content-end mt-5'>
                        <button className='btn btn-secondary'>Cancel</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;