import React,{useState} from 'react';


import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
function LoginSignUp(props) {
    let[WantSignUp,SetSignUp] = useState(false)
    return (
        <div>
            {
                WantSignUp ? <SignupForm WantSignUp={WantSignUp} SetSignUp={SetSignUp}/> : <LoginForm WantSignUp={WantSignUp} SetSignUp={SetSignUp}/>
            }
        </div>
    );
}

export default LoginSignUp;