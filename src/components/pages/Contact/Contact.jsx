import React, { useState } from 'react';
import logo from '../../../assets/logo.png'
import './Contact.css'

function Contact() {
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        subject: '',
        massage: ''
    });

    const resetForm = ()=>{
        setForm({
            name: '',
            email: '',
            subject: '',
            massage: '',        
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };
    
    function handleChange(event){
        return ({name: event.target.value})
    }

    function handleChange1(event){
        return ({email: event.target.value})
    }
    function handleChange2(event){
        return ({subject: event.target.value})
    }
    function handleChange3(event){
        return ({massage: event.target.value})
    }

    
        return (
            <div>
                <section className='contact'>
                    <div className="container">    
                        <img src={logo} alt="img" />
                        <h1>Contact</h1>
                        <p>Home <span>Contact</span></p>
                    </div>
                </section>
                <section className='container'>
                    <h2 className='touchTaxt'>Get In Touch With Us</h2>
                    <p className='touchTaxt1'> For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    <div className="touch">
                        <div className="touch1">
                            <div className="touchCard">    
                                <h4>Adrees</h4>
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
                            <form action="#" onSubmit={handleSubmit}>
                                <label htmlFor="name"> Your Name <br /><input
                                 type="text"
                                 value={form.name}
                                 onChange={handleChange}
                                /></label>
                                <label htmlFor="name"> Email Adrees <br /><input 
                                 type="text" 
                                 value={form.email}
                                 onChange={handleChange1}
                                 /></label>
                                <label htmlFor="name"> Subject <br /><input 
                                 type="text" 
                                 value={form.subject}
                                 onChange={handleChange2}
                                /></label>
                                <label htmlFor="name"> Massage <br /><input 
                                 type="text" 
                                 value={form.massage}
                                 onChange={handleChange3}
                                /></label>
                                <button className='btn' type='button' onClick={resetForm}>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    
}

export default Contact;
