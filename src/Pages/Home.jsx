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
            <h1 className='hm_headings'>Why Are We Best ?</h1>
            <div className='hm_specialities'>
                <div className='speciality_one'>
                    <h2>Skilled Stylists</h2>
                </div>
                <div className='speciality_two'>
                    <h2>Exciting Offers %</h2>
                </div>
                <div className='speciality_three'>
                    <h2>Free Hair Wash on Saturday</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;