import React,{useState} from 'react';
import PageHeading from './PageHeading'

import './SignupForm.css'
function SignupForm({WantSignUp,SetSignUp}) {
    let [Name,SetName] = useState("");
    let [Email,SetEmail] = useState("");
    let [Password,SetPassword] = useState("");
    let [Mobile,SetMobile] = useState(0);
    let [Address,SetAddress] = useState("");
    let ShowLogin = () => {
        if(WantSignUp){
            SetSignUp(false);
        }
    }

    let RegisterUser = (event)=>{
        event.preventDefault();
        fetch(`http://localhost:8000/signup`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Name,
                Email,
                Mobile,
                Password,
                Address
            })
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    }


    return (
        <div>
            <PageHeading heading="SignUp" />
            <div className='signup_main'>
            <div className='signup_text'>
                <p className='guesttext'>Dear Valued Guest</p>
                <h1>WELCOME TO WOMENS PARADISE</h1>
                <p className='welcome_msg'>We're thrilled that you've chosen Women's Paradise Salon to be your beauty destination. Join our growing community of empowered and confident individuals who know the value of self-care.</p>
            </div>
            <div className='signup_form_div'>
                <h2>Create Your Account</h2>
                <p>Sign up today and embark on a journey of beauty, relaxation, and self-expression with us. Your unique style, your story, and your beauty matter to us.</p>
                <form className='signup_form' onSubmit={RegisterUser}>
                    <input type="text" placeholder='Enter Your Name' className='signup_form_input_field' onChange={(event)=>{
                        SetName(event.target.value);
                    }}/>
                    <input type="email" placeholder='Enter Your Email' className='signup_form_input_field'onChange={(event)=>{
                        SetEmail(event.target.value);
                    }}/>
                    <input type="number" placeholder='Enter Your Mobile Number' className='signup_form_input_field'onChange={(event)=>{
                        SetMobile(event.target.value);
                    }}/>
                    <input type="password" placeholder='Enetr Your Password' className='signup_form_input_field' onChange={(event)=>{
                        SetPassword(event.target.value);
                    }}/>
                    <input type="text" placeholder='Enetr Your Address' className='signup_form_input_field_adress' onChange={(event)=>{
                        SetAddress(event.target.value);
                    }}/>
                    <input type="submit" className='signup_form_submit_btn '/>
                </form>
                <p onClick={()=>{ShowLogin()}} className='form_toggle_button_signup'>Already Have Account, Login</p>
            </div>
        </div>
        </div>
    );
}

export default SignupForm;