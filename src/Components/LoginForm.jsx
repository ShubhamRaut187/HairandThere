import React from 'react';
import PageHeading from './PageHeading'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { handleLogin } from '../Redux/action';
import './LoginForm.css'
function LoginForm({WantSignUp,SetSignUp}) {
    let[Useremail,SetUseremail] = useState("");
    let[Userpassword,SetUserpassword] = useState("");
    let Navigate = useNavigate();
    let dispatch = useDispatch();
    let ShowSignUp = () => {
        if(!WantSignUp){
            SetSignUp(true);
        }
    }
    let AuthenticateUser=(event)=>{
        event.preventDefault();
        fetch(`http://localhost:8000/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Email:Useremail,
                Password:Userpassword
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
           dispatch(handleLogin(response));
           alert(response.Message)
           Navigate('/')
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <PageHeading heading="Login Account" />
        <div className='login_main'>
            <div className='login_text'>
                <p className='guesttext'>Dear Valued Guest</p>
                <h1>WELCOME BACK</h1>
                <p className='welcome_msg'>We are delighted to welcome you back to Women's Paradise Salon! Your presence means the world to us, and we can't wait to make your experience with us as fabulous as ever.</p>
            </div>
            <div className='login_form_div'>
                <h2>Login To Your Account</h2>
                <p>Please login to your account to book your next appointment or explore our new offerings. We are here to pamper you, make you feel beautiful, and ensure every visit is a rejuvenating escape.</p>
                <form className='login_form' onSubmit={AuthenticateUser}>
                    <input type="email" placeholder='Enter Your Email' className='login_form_input_field' onChange={(event)=>{SetUseremail(event.target.value)}}/>
                    <input type="password" placeholder='Enetr Your Password' className='login_form_input_field'onChange={(event)=>{SetUserpassword(event.target.value)}}/>
                    <input type="submit" className='login_form_submit_btn '/>
                    
                </form>
                <p onClick={()=>{ShowSignUp()}}>Don't Have Account, Create One</p>
            </div>
        </div>
        </div>
    );
}

export default LoginForm;