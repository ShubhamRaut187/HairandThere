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
                    <h1>BOOK APPOINTMENT</h1>
                    <p>Welcome to Women's Paradise Salon, where your beauty and well-being are our top priorities. Scheduling your next appointment is just a click away. Choose your service, date, and time, and we'll take care of the rest. We look forward to pampering you!"</p>
                </div>
                <div className='appointment_sub2'>
                    <h2>Book an Appointment</h2>
                    <p>"Book Your Beauty Oasis: Where Glam Meets Grace!"</p>
                    <form ref={form} onSubmit={sendEmail} className='appointment_form'>
                    <div>
                        <input type="text" placeholder='Enter Your Name' onChange={(event)=>{SetName(event.target.value)}} name='user_name' className='appointment_form_input_field'/>
                        <input type="number" placeholder='Enter Your Mobile Number' onChange={(event)=>{SetMobile(event.target.value)}} name='user_mobile' className='appointment_form_input_field'/>
                    </div>
                    <div>
                        <input type="date" onChange={(event)=>{SetDate(event.target.value)}} name='user_date' className='appointment_form_input_field'/>
                        <input type="time" onChange={(event)=>{SetTime(event.target.value)}} name='user_time'placeholder='Select Time' className='appointment_form_input_field'/>
                    </div>
                    <div>
                    <input type="email" placeholder='Enter Your Email' onChange={(event)=>{SetEmail(event.target.value)}} name='user_email' className='appointment_form_input_field'/>
                    <input type="text" name='message' className='appointment_form_input_field' placeholder='Enter Message'/>
                    
                    </div>
                    <div>
                    <select name="user_service" onChange={(event)=>{SetService(event.target.value)}} className='appointment_form_input_field'>
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
                        <select onChange={(event)=>{SetStore(event.target.value)}} name='user_store' className='appointment_form_input_field'>
                            <option value="">Select Store</option>
                            <option value="Oxford Street">Oxford Street, London</option>
                            <option value="Carnaby Street">Carnaby Street, London</option>
                            <option value="Shambles Square">Shambles Square, Manchester</option>
                            <option value="St Peter's Square">St Peter's Square, Manchester</option>
                            <option value="Deansgate">Deansgate, Manchester</option>
                        </select>
                        
                    </div>
                    <div>
                        <input type="submit" className='appointment_form_submit_btn'/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Appointment;