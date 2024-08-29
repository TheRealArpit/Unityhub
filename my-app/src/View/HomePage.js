import React from 'react';
import { Header, Footer } from './ReuseableComponents';

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