import React from 'react';
import {useNavigate} from 'react-router-dom'
import "./Home.css"
function Home(props) {
    let Navigate = useNavigate();
    let BookAppointment = () => {
        Navigate('/appointment');
    }
    return (
        <div>
            <div className='hm_main'>
               <h1 className='hm_quote'>"A WOMEN WHO CUTS HER HAIR IS ABOUT TO CHANGE HER LIFE"<br/><button onClick={BookAppointment}>MAKE A CHANGE!!</button></h1>
               
            </div>
        </div>
    );
}

export default Home;