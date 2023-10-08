import React from 'react';
import Home from '../Pages/Home';
import Appointment from '../Pages/Appointment';
import {Route,Routes} from 'react-router-dom'
function Allroutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/appointment' element={<Appointment/>}/>
            </Routes>
        </div>
    );
}

export default Allroutes;