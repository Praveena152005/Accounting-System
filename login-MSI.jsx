import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    
    const handleLogin = () => {
        if(email&&password.length>5)
            {
                
                axios.get("http://localhost:3000/User")
                .then((res)=>
                    {
                           const data=res.data;
                           console.log(data);
                           if(data.find(obj => obj.email === email))
                           {
                              let index=data.findIndex(obj => obj.email === email);
                              
                              if(data[index].password === password)
                              {
                                window.location.href='/home';
                              }
                              else{
                                alert("Invalid password");
                              }
                           }
                           else
                           {
                            alert("User not found");
                            
                           }
                        
                    })
                    .catch((error)=>
                    {
                        console.log(error);
                    })
                
            }
            else{
                if(password.length<6)
                {
                    alert("Password must be atleast 6 in length")
                }
            }
    
    };


    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Money Map Login</h2>
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
                    <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
                </form>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;


