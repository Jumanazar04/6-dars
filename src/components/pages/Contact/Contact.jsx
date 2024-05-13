import React, { Component } from 'react';
import logo from '../../../assets/logo.png'
import './Contact.css'

class Contact extends Component {
    render() {
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
                            <form action="#">
                                <label htmlFor="name"> Your Name <br /><input type="text" /></label>
                                <label htmlFor="name"> Email Adrees <br /><input type="text" /></label>
                                <label htmlFor="name"> Subject <br /><input type="text" /></label>
                                <label htmlFor="name"> Massage <br /><input type="text" /></label>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;
