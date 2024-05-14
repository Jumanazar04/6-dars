import React, { Component } from 'react';
import './about.css';
import logo from '../../../assets/logo.png';

class About extends Component {
    render() {
        return (
            <>
                <section className='about '>
                <div className="container">
                    <div className="checkOut">
                        <img src={logo} alt="img" />
                        <h1>Checkout</h1>
                        <p>Home <span>ChekcOut</span></p>
                    </div>
                </div>
            </section>
            <section className='container'>
            <div className="detailes">
                    <div className="detail1">
                        <h2>Billing detailes</h2>
                        <form action="#">
                            <div className="mainInput">
                                <label htmlFor="firstName">First Name <br /> <input type="text" /></label>
                                <label htmlFor="lastName">Last Name <br /><input type="text" /></label>
                            </div>
                            <label htmlFor="companyName">Company Name <br /> <input type="text" /></label>
                            <label htmlFor="Country">Country/Reagion <br /><input type="text" /></label>
                            <label htmlFor="Street Adrees">Street adrees <br /><input type="text" /></label>
                            <label htmlFor="Town">Town/City <br /><input type="text" /></label>
                            <label htmlFor="Town">Province <br /><input type="text" /></label>
                            <label htmlFor="Town">ZIP code <br /><input type="text" /></label>
                            <label htmlFor="Town">Phone <br /><input type="text" /></label>
                            <label htmlFor="Town">Email Adrees <br /><input type="text" /></label>
                        </form>
                    </div>
                    <div className="detail2">

                    </div>

                </div>
            </section>
            </>
            
        );
    }
}

export default About;
