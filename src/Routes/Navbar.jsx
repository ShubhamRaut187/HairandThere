import React,{useState} from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'
function Navbar(props) {
    let [active,SetActive] = useState("nav_menu")
    let [toggleIcon,Settoggleicon] = useState("nav_toggler")
    let navToggle = ()=>{
        active === "nav_menu" ? SetActive("nav_menu nav_active") : SetActive("nav_menu");
        toggleIcon === "nav_toggler" ? Settoggleicon("nav_toggler toggle") : Settoggleicon("nav_toggler");
    }
    return (
        <div className='nav'>
           <div className='brand'>
            <img src="https://gabrielbarbers.com.au/wp-content/uploads/2021/01/Gabriel-Barbers-Logo-2.png" alt="logo" />
            {/* <h1>Hair and There</h1> */}
           </div>
            <ul className={active}>
                <li className='nav_item'><Link to='/' className='nav_link'>Home</Link></li>
                <li className='nav_item'><Link  className='nav_link'>About Us</Link></li>
                <li className='nav_item'><Link  className='nav_link'>Services</Link></li>
                <li className='nav_item'><Link  className='nav_link'>Gallery</Link></li>
                <li className='nav_item'><Link  className='nav_link'>Contact</Link></li>
                <li className='nav_item'><Link to='/appointment'  className='nav_link'>Book Appointment</Link></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    );
}

export default Navbar;
//  




