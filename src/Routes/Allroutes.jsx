import React from 'react';
import Home from '../Pages/Home';
import Appointment from '../Pages/Appointment';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products';
import Stores from '../Pages/Stores';
import {Route,Routes} from 'react-router-dom'
function Allroutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/appointment' element={<Appointment/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/stores' element={<Stores/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </div>
    );
}

export default Allroutes;