import React from 'react';
import Home from '../Pages/Home';
import Appointment from '../Pages/Appointment';
import Services from '../Pages/Services';
import About from '../Pages/About';
import LoginSignUp from '../Pages/LoginSignUp';
import Products from '../Pages/Products';
import Stores from '../Pages/Stores';
import Profile from '../Pages/Profile';
import ProtectedRoutes from './ProtectedRoutes';
import {Route,Routes} from 'react-router-dom'
function Allroutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/appointment' element={<ProtectedRoutes><Appointment/></ProtectedRoutes>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/stores' element={<Stores/>}/>
                <Route path='/loginsignup' element={<LoginSignUp/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<ProtectedRoutes><Products/></ProtectedRoutes>}/>
                <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
            </Routes>
        </div>
    );
}

export default Allroutes;