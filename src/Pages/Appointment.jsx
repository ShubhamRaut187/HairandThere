import React,{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import PageHeading from '../Components/PageHeading';
import './Appointment.css'


function Appointment(props) {
    let[Name,SetName] = useState("");
    let[Mobile,SetMobile] = useState(0);
    let[Email,SetEmail] = useState("")
    let[Date,SetDate] = useState("");
    let[Time,SetTime] = useState("");
    let[Service,SetService] = useState("");
    let[Store,SetStore] = useState("");
    
    const form = useRef();



    let sendEmail = (event) => {
        event.preventDefault();
        if(Name === "" || Mobile === "" || Email === "" || Date === "" || Time === "" || Service === "" || Store === ""){
            console.log("Fill all fields");
            alert("Fill all fields");
            return;
        }else{
            emailjs.sendForm('service_psxu7iy', 'template_97v4e1a', form.current, '3I6LX4W7ELm1-USwX')
            .then((result) => {
                console.log(result.text);
                console.log("Succesful")
            }, (error) => {
                console.log(error.text);
                console.log("Fail")
            });
        }
        // console.log(Name,Mobile,Email,Date,Time,Service,Store)

    }
    
    return (
        <div>
            <PageHeading heading={"Book Appointment"}/>
            <div className='appointment_main'>
                <div className='appointment_sub1'>
                    <h1>Book Appointment</h1>
                    <h3>"Book Your Beauty Oasis: Where Glam Meets Grace!"</h3>
                </div>
                <div className='appointment_sub2'>
                    <form ref={form} onSubmit={sendEmail}>
                    <label>Enter Name *</label>
                    <input type="text" placeholder='Enter Your Name' onChange={(event)=>{SetName(event.target.value)}} name='user_name'/>
                    <label>Enter Mobile Number *</label>
                    <input type="number" placeholder='Enter Your Mobile Number' onChange={(event)=>{SetMobile(event.target.value)}} name='user_mobile'/>
                    <label>Enter Email *</label>
                    <input type="email" placeholder='Enter Your Email' onChange={(event)=>{SetEmail(event.target.value)}} name='user_email'/>
                    <label>Select Date *</label>
                    <input type="date" onChange={(event)=>{SetDate(event.target.value)}} name='user_date'/>
                    <label>Select Time *</label>
                    <input type="time" onChange={(event)=>{SetTime(event.target.value)}} name='user_time'/>
                    <label>Select Service</label>
                    <select name="user_service" onChange={(event)=>{SetService(event.target.value)}}>
                        <option value="">Select Service</option>
                        <option value="Hair Care">Hair Care</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Bridal Grooming">Bridal Grooming</option>
                        <option value="Facial Treatment">Facial Treatment</option>
                        <option value="Body Massage">Body Massage</option>
                        <option value="Waxing">Waxing</option>
                        <option value="Manicure">Pedicure</option>
                        <option value="Pedicure">Pedicure</option>
                    </select>
                    <label>Select Store *</label>
                    <select onChange={(event)=>{SetStore(event.target.value)}} name='user_store'>
                        <option value="">Select Store</option>
                        <option value="Oxford Street">Oxford Street, London</option>
                        <option value="Carnaby Street">Carnaby Street, London</option>
                        <option value="Shambles Square">Shambles Square, Manchester</option>
                        <option value="St Peter's Square">St Peter's Square, Manchester</option>
                        <option value="Deansgate">Deansgate, Manchester</option>
                    </select>
                    <label>Message</label>
                    <input type="text" name='message' />
                    <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Appointment;