import React, { Component } from 'react';
import './shop.css'
import logo from '../../../assets/logo.png';

class Shop extends Component {
    render() {
        return (
            <div>
                <section className='shop'>
                    <div className="container">
                        <div className="cart">
                            <img src={logo} alt="logo" />
                            <h1>Cart</h1>
                            <p>Home <span>Cart</span></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Shop;
