import React, { useState } from "react";
import './css/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const Login_Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        if (!name || !email || !password) {
            setErrorMessage('All fields are required.');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Please enter a valid email (Include "@" and ".").');
            return false;
        } else if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters.');
            return false;
        }
        setErrorMessage('');
        navigate('/');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Submitted', { name, email, password });
        }
    };

    return (
        <div className='loginSignup'>
            <div className="loginSignup_container">
                <h1>Sign Up</h1>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <div className="loginSignup_fields">
                    <input 
                        type="text" 
                        placeholder='Your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <input 
                        type="email" 
                        placeholder='Email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Sign Up</button>
                <p className="loginSignup_login">
                    Already have an account? <span>Login here</span>
                </p>
                <div className="loginSignup_agree">
                    <input type="checkbox" name='' id='' />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default Login_Signup;
