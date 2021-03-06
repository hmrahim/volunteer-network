import React from 'react';
import cardImg from "../../../img/images/childSupport.png"

const Card = (props) => {
    console.log(props);
    
    return (
        <div className='col-md-3 g-3'>
            <div className='position-relative  rounded-3'>
                <img src={props.service.link} className="img-fluid w-100 " alt="" />
                <p className='py-3 text-center position-absolute bottom-0 w-100 bg-warning m-0 rounded-bottom '>{props.service.title}</p>
            </div>
            
            
        </div>
    );
};

export default Card;