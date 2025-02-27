import React, { useState } from 'react'
import axios from 'axios'
export default function MenuUpdate({data,setPop}) {
    const[menu,setMenu]=useState({
        name:data.name,
        price:data.price,
        desc:data.desc
    })
    const handleChange=(e)=>{
        setMenu({...menu,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        axios.put(`http://localhost:3000/menu/${data.id}`,menu)
        .then(res=>{
            console.log(res)
            alert('menu updated successfully')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <div className='popup'>
        <form onSubmit={handleSubmit}>
            <button onClick={()=>setPop(false)}>X</button><br></br>
            <label>Menu Name:</label><br></br>
            <input type='text' name='name' value={menu.name} onChange={handleChange}/><br></br>
            <label>Menu price:</label><br></br>
            <input type='text' name='price' value={menu.price} onChange={handleChange}/><br></br>
            <label>Menu description:</label><br></br>
            <textarea type='text' name='desc' value={menu.desc} onChange={handleChange}/><br></br>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
