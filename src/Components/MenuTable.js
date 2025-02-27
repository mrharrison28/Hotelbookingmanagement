import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MenuUpdate from './MenuUpdate'
export default function MenuTable() {
    const[list,setList]=useState([])
    const[popup,setPop]=useState(false)
    const[data,setData]=useState({})
    useEffect(()=>{
        axios.get('http://localhost:3000/menu')
        .then(res=>setList(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDel=(id)=>{
        axios.delete(`http://localhost:3000/menu/${id}`)
        .then(res=>{
            window.location.reload()
            console.log(res)
            alert('Deleted Successfully')
        })
        .catch(err=>console.log(err))
    }
    const handleEdit=(data)=>{
        setPop(true)
        setData(data)
    }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {list.map(x=>(
                <tr>
                    <td>{x.name}</td>
                    <td>{x.price}</td>
                    <td>{x.desc}</td>
                    <td>
                        <button className='button btn-btn' onClick={()=>handleEdit(x)}><span></span>Edit</button>
                        <button className='button' onClick={()=>handleDel(x.id)}><span></span>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
      {popup&&<MenuUpdate data={data} setPop={setPop}/>}
    </div>
  )
}
