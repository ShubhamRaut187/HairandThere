import React from 'react';
import './StoreCard.css'
function StoreCard({Name,Description,Location,Image}) {
    // console.log(Name)
    return (
        <div className='store_card_main'>
            <div className='store_img_div'>
                <img src={Image} alt="salon" />
            </div>
            <div className='store_info_div'>
                <p className='store_name'>{Name}</p>
                <p className='store_location'>{Location}</p>
                <p className='store_info'>{Description}</p>
                <p className='store_contact'>0200002514</p>
                <p className='store_email'>womensparadise@gmail.com</p>
                <p className='book_button'>Book Appointment !!</p>
            </div>
        </div>
    );
}

export default StoreCard;