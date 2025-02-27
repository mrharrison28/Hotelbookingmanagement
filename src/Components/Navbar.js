import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
import './Navbar.css'
export default function Navbar() {
  const auth=useAuth()
  return (
    <nav className='primary-nav'>
      <div>
      <img src='https://ik.imagekit.io/harrison/MERN%20Stack%20/Black_And_Gold_Luxury_Floral_Wedding_Initial_Logo__1_-removebg-preview.png' alt='' height={60}/>
      </div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/amenties'>Amenties</NavLink>
        {/* <NavLink to='/users'>Users</NavLink> */}
        {/* <NavLink to='/profile'>Profile</NavLink> */}
        <NavLink to='/gallery'>Gallery</NavLink>
        <NavLink to='/rooms'>Rooms</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='/menuadmin'>Admin Menu</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </div>
        




    </nav>
  )
}
