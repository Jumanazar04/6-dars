import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import './Contact.css';
import { useNavigate } from 'react-router-dom';


function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        massage: ''
    });    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const navigaet = useNavigate()


    const handleSubmit = () => {
        const { name, email, subject, massage} = form;
        if (name && email && subject && massage) {
            navigaet('/')
        }else{
            alert("Bazi maydonlar bo'sh")
        }
        
    };
    
    const { name, email, subject, massage} = form;
    return (
        <div>
            <section className='contact'>
                <div className="container">
                    <img className='mx-auto' src={logo} alt="img" />
                    <h1>Contact</h1>
                    <p>Home <span>Contact</span></p>
                </div>
            </section>
            <section className='container'>
                <h2 className='touchTaxt text-3xl font-bold mb-4'>Get In Touch With Us</h2>
                <p className='touchTaxt1'> For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="touch">
                    <div className="touch1">
                        <div className="touchCard">
                            <h4>Address</h4>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="touchCard">
                            <h4>Phone</h4>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="touchCard">
                            <h4>Working Time</h4>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="touch2">
                        <form action="#">
                            <label htmlFor="name"> Your Name <br />
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="email"> Email Address <br />
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="subject"> Subject <br />
                                <input
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="message"> Message <br />
                                <input 
                                    type="text" 
                                    name="massage" 
                                    id="massage"
                                    value={massage}
                                    onChange={handleChange}
                                    />
                            </label>
                            <button className='btn' type='button' onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;