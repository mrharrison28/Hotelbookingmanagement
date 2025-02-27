import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
// import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [mess, setMess] = useState('');
  const [log, setLog] = useState({
    email: '',
    password: ''
  });

  const handle = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2809/users/login', log)
      .then(res => {
        alert(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLog = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handle}>
        <div className='main1'>
        {/* <h2>Login</h2> */}
        <div className='main'>
        <label className='lab'>Email:</label>
        <input className='inp1'
          type="text" 
          name="email"  
          value={log.email} 
          onChange={handleLog} 
          placeholder="Enter your email"
        />
        
        <label className='lab'>Password:</label>
        <input className='inp1'
          type="password" 
          name="password" 
          value={log.password} 
          onChange={handleLog} 
          placeholder="Enter your password"
        />
        
        <button className='btn1 btn2' type="submit">LOGIN</button>
        <p className="error-message">{mess}</p>
        <p className='login-para'>Don't have an account? <span className='sign' onClick={() => navigate('/signup') }>Sign up</span></p> 
        </div>
        </div>
      </form>
    </div>
  );
}