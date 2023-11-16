import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../Redux/action';
function Profile(props) {
    let dispatch = useDispatch();
    let Navigate = useNavigate();
    return (
        <div>
            <h1>Profile</h1>
            <button onClick={()=>{
                dispatch(handleLogout(null));
                Navigate('/loginsignup')
            }}>Logout</button>
        </div>
    );
}

export default Profile;