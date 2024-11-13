import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log('Email:', email, 'Password:', password);
        } else {
            console.log('Passwords do not match');
        }
    };
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };

    // const handleSignup = () => {
    //     navigate("/signup");
    // };

    return (
        <div className="signup-page">  {/* Added signup-page for background styling */}
            <div className='signup-container'>
                <div className="signup-box">
                    <h2>Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="signup-button"><Link to="/home" style={{ color: "white",textDecoration:"none" }}>Sign Up</Link></button>
                    </form>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/login" onClick={handleLogin}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
