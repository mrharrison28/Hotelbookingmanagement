import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Menu.css'
import MenuOffer from './MenuOffer'
import MenuFooter from './MenuFooter'
export default function MenuUser() {
    const[list,setList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:2809/menus/menu')
        .then(res=>setList(res.data.message))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
    <div className='menu-img1'>
    <div className='opacity'>
      <h1>Our Menu</h1>
      </div>
      </div>
    <div className='main-container'>
        <div className='menu-head'>
        <p>WEEKLY SPECIALS</p>
        <h1>Menu Of The Day</h1>
        </div>
    <div className='menu-container'>
    <div className='menu-cards'>
      {list.map(x=>(
        <div className='menu-grid-items'>
            <div className='menu-flex'>
            <h2>{x.name}</h2>
            <h3>{x.price}</h3>
            </div>
            <div className='border'></div>
            <p>{x.desc}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
    <MenuOffer/>
    <MenuFooter/>   
    </div>
  )
}
