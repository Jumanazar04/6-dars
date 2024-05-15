import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css'
import logo from '../../assets/logo.png';
import img1 from '../../assets/person.png';
import img2 from '../../assets/search.png';
import img3 from '../../assets/heart.png';
import img4 from '../../assets/shopping.png';

function Layout() {
    
        return (
          <>  <nav className='container'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <p className="logoText">Furniro</p>
                </div>
                <ul>
                    <NavLink to={"/"} >
                        Home
                    </NavLink>
                    <NavLink to={"/shop"}>
                        Shop
                    </NavLink>
                    <NavLink to={"/about"}>
                        About
                    </NavLink>
                    <NavLink to={"/contact"}>
                        Contact
                    </NavLink>
                </ul>
                <div className="icons">
                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                    <img src={img3} alt="img" />
                    <img src={img4} alt="img" />
                </div>
            </nav>
            <section>
                <Outlet />
            </section>
            <footer className='container'>
                <div className="footer">
                    <div className="footerCards">
                        <div className="footerLogo">
                            <h2>Furniro</h2>
                            <span>400 University Drive Suite 200 Coral Gables,<br />
                                FL 33134 USA</span>
                        </div>
                        <div className="footerLinks">
                            <span>Links</span>
                            <Link className='footerLink' to={"/"}>Home</Link>
                            <Link className='footerLink' to={"/shop"}>Shop</Link>
                            <Link className='footerLink' to={"/about"}>About</Link>
                            <Link className='footerLink' to={"/contact"}>Contact</Link>
                        </div>
                        <div className="footerHelp">
                            <span>Help</span>
                            <p>Returns</p>
                            <p>Pravicy Policy</p>
                            <p>Payment Options</p>
                        </div>
                        <div className="footerNewsLetter">
                            <span>NewsLetter</span><br />
                            <input type="text" placeholder='Enter your email...'/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
        );
    
}

export default Layout;
