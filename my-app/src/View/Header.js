import React from 'react';
import { Link } from 'react-router-dom';

// Define the Header component
const Header = ({ name }) => {
    return (
        <header>
            <h1>{ name }</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;