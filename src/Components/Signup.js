import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
export default function Signup() {
    const navigate=useNavigate()
    const[message,setMessage]=useState('')
    const[formData,setFormData]=useState({
        name:'',
        firstname:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:2809/users/signup',formData)
        // axios.post('http://localhost:3000/users',formData)
        
        .then(res=>{
            alert('Signup Successfull Redirecting to Login...')
            setTimeout(() => {
                navigate('/login')
            });
        })
        .catch(err=>{
            setMessage('')
            alert('Something went wrong')
        })
    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='main1'>
        <div className='main'>
        <label className='lab'>Username:</label>
        <input className='inp1' type='text' name='name' value={formData.name} onChange={handleChange} required/><br></br>
        <label className='lab'>Name:</label>
        <input className='inp1' type='text' name='firstname' value={formData.firstname} onChange={handleChange} required/><br></br>
        <label className='lab'>Email:</label>
        <input className='inp1' type='email' name='email' value={formData.email} onChange={handleChange} required/><br></br>
        {/* <label className='lab'>Phno:</label>
        <input className='inp1' type='tel' name='phno' value={formData.phno} onChange={handleChange} required/><br></br> */}
        <label className='lab'>Password:</label>
        <input className='inp1' type='password' name='password' value={formData.password} onChange={handleChange} required/><br></br>
        <button className='btn1' type='submit'>Signup</button>
        </div>
        </div>
      </form>
      
      {message}
    </div>
  )
}
