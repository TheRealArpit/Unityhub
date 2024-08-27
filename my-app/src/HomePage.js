import React from 'react';
import { Link } from 'react-router-dom';

// Define the Header component
const Header = () => {
    return (
        <header>
            <h1>Welcome to SocialSphere</h1>
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

// Define the Main component
const MainContent = () => {
    return (
        <main>
            <section>
                <h2>Explore Your World</h2>
                <p>Connect with friends and the world around you on SocialSphere.</p>
            </section>
            <section>
                <h2>Share Your Moments</h2>
                <p>Post photos, videos, and updates to share your life's key moments.</p>
            </section>
        </main>
    );
};

// Define the Footer component
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 SocialSphere. All rights reserved.</p>
        </footer>
    );
};

// Define the HomePage component
const HomePage = () => {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default HomePage;