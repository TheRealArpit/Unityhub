import React from 'react';
import { Link } from 'react-router-dom';

// Define the Header component
export const Header = ({ name }) => {
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

// Define the Footer component
export const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 SocialSphere. All rights reserved.</p>
        </footer>
    );
};