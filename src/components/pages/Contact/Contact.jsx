import React, { Component } from 'react';
import logo from '../../../assets/logo.png'
import './Contact.css'

class Contact extends Component {
    constructor(){
        super()
        this.state = {name: '', email: '', subject: '', massage: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange1 = this.handleChange2.bind(this)
        this.handleChange1 = this.handleChange3.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleChange(event){
        this.setState({name: event.target.value})
    }

    handleChange1(event){
        this.setState({email: event.target.value})
    }
    handleChange2(event){
        this.setState({subject: event.target.value})
    }
    handleChange3(event){
        this.setState({massage: event.target.value})
    }

    handleClick(e){
        console.log(this.state);
        this.setState({
            name: '',
            email: ''
        })
    }

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
                                <label htmlFor="name"> Your Name <br /><input
                                 type="text"
                                 value={this.state.name}
                                 onChange={this.handleChange}
                                /></label>
                                <label htmlFor="name"> Email Adrees <br /><input 
                                 type="text" 
                                 value={this.state.email}
                                 onChange={this.handleChange1}
                                 /></label>
                                <label htmlFor="name"> Subject <br /><input 
                                 type="text" 
                                 value={this.state.subject}
                                 onChange={this.handleChange2}
                                /></label>
                                <label htmlFor="name"> Massage <br /><input 
                                 type="text" 
                                 value={this.state.massage}
                                 onChange={this.handleChange3}
                                /></label>
                                <button className='btn' type='button' onClick={this.handleClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;
