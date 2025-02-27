import React, { useState } from 'react'
import axios from 'axios'
import MenuTable from './MenuTable'
export default function Menu() {
    const[menu,setMenu]=useState({
        name:'',
        price:'',
        desc:''
    })
    const handleChange=(e)=>{
        setMenu({...menu,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        // e.preventDefault()
        console.log(menu)
        axios.post('http://localhost:3000/menu',menu)
        .then(res=>{
            alert('Product added Successfully')
            setMenu({
                name:'',
                price:'',
                desc:''
            })
            console.log(res)
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label>Menu Name:</label><br></br>
            <input type='text' name='name' value={menu.name} onChange={handleChange} required/><br></br>
            <label>Menu price:</label><br></br>
            <input type='text' name='price' value={menu.price} onChange={handleChange} required/><br></br>
            <label>Menu description:</label><br></br>
            <textarea type='text' name='desc' value={menu.desc} onChange={handleChange} required/><br></br>
            <button type='submit'>Submit</button>
        </form>
      </div>
      <MenuTable/>
    </div>
  )
}
