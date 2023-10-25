import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer(props) {
    return (
        <div className='Foot_main'>
           <div className='Foot_child_div'>
           <h2 className='Foot_heading'>Quick Links</h2>
               <div className='Foot_links'>
                    <Link to='/' className='Foot_link_element'>Home</Link>
                    <Link to='/about' className='Foot_link_element'>About</Link>
                    <Link to='/services' className='Foot_link_element'>Services</Link>
                    <Link to='/products' className='Foot_link_element'>Products</Link>
                    <Link to='/stores' className='Foot_link_element'>Stores</Link>
                    <Link to='/appointment' className='Foot_link_element'>Book Appointment</Link>
               </div>
           </div>
           <div className='Foot_child_div'>
                <img src="https://cdn.vectorstock.com/i/preview-1x/09/78/royal-beauty-logo-with-l-letter-luxury-gold-vector-34680978.jpg" alt="logo" />
           </div>
           <div className='Foot_child_div2'>
                <h2 className='Foot_heading'>Contact Us</h2>
                <div className='Foot_contact_info'>
                <p><span>Telephone - </span>789789789</p>
                <p><span>Email - </span>wp@gmail.com</p>
                </div>
           </div>
        </div>
    );
}

export default Footer;