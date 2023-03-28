import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} alt="" />
                </nav>
                <div className='listItems'>
                    <li><a href="./Home">Home</a></li>
                    <li><a href="./About">About</a></li>
                    <li><a href="./Contact">Contact</a></li>
                    <li><a href="./Order">Order</a></li>
                </div>
            </header>
        </div>
    );
};

export default Header;