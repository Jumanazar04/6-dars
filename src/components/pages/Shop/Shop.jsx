import React, {  } from 'react';
import './shop.css'
import logo from '../../../assets/logo.png';

function Shop() {

        return (
            <div>
                <section className='shop'>
                    <div className="container">
                        <div className="cart">
                            <img className='mx-auto' src={logo} alt="logo" />
                            <h1>Cart</h1>
                            <p>Home <span>Cart</span></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    
}

export default Shop;
