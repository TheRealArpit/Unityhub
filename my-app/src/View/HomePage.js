import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

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
            <Header name = "Welcome to SocialSphere1" />
            <MainContent />
            <Footer />
        </div>
    );
};

export default HomePage;