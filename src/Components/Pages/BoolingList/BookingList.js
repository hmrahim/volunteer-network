import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingList = () => {
    return (
        <div className='container my-5'>
            <div className="row g-4">
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>
                <BookingCard></BookingCard>

            </div>
            
        </div>
    );
};

export default BookingList;