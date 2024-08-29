import React, { useState } from 'react';
import { Header } from './ReuseableComponents';
import './LoginPage.css';
import { login } from '../Controller/Login';

const LoginPage = () => {
    // State to store the username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
        // console.log('Login Submitted');
        // console.log('Username:', username);
        // console.log('Password:', password);
        login(username, password);
        // Here you would usually handle authentication, perhaps sending a request to your server
    };

    return (
        <div className="container">
            <Header name="Login" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;