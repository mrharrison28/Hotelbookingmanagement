import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Gallery.css'
import './Menu.css'
import AboutFooter from './AboutFooter'
import MenuFooter from './MenuFooter'
// import {useNaVigate} from 'react'
// import { Facebook } from 'lucide-react';
// import { Twitter } from 'lucide-react';
// import { Linkedin } from 'lucide-react';
export default function Gallery() {
    const [img,setImg]=useState([])
  const[allworks,setallworks]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/AllWorks')
    .then(res=>{setallworks(res.data)})
    .catch(err=>console.log(err))
  },[])
  const[Nursing,setNursing]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/Nursing')
    .then(res=>{setNursing(res.data)})
    .catch(err=>console.log(err))
  },[])
  const[Medical,setMedical]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/Medical')
    .then(res=>{setMedical(res.data)})
    .catch(err=>console.log(err))
  },[])
  const[Senior,setSenior]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/Senior')
    .then(res=>{setSenior(res.data)})
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='gallery-container'>
      <div className='menu-img1'>
    <div className='opacity'>
      <h1>Gallery</h1>
      </div>
      </div>
      <div className='all-safty'>
        <div className='gallery-btn'>
          <button onClick={()=>setImg(allworks)}>All Works</button>
          <button onClick={()=>setImg(Nursing)}>Nursing</button>
          <button onClick={()=>setImg(Medical)}>Medical</button>
          <button onClick={()=>setImg(Senior)}>Senior</button>
        </div>
        {<div className='gal-image'>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-9.jpg' height={250} width={300} alt=''></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-7.jpg' height={250} width={300} alt=''></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-8.jpg' height={250} width={300} alt=''></img><br></br>

        </div>
       /* <div className='image'>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-5.jpg' height={250} width={300}></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-4.jpg' height={250} width={300}></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-3.jpg' height={250} width={300}></img><br></br>

        </div>
        <div className='image'>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-2.jpg' height={250} width={300}></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-1.jpg' height={250} width={300}></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-6.jpg' height={250} width={300}></img><br></br>

        </div>
        <div className='image'>

          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-9.jpg' height={250} width={300}></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-1.jpg' height={250} width={300}></img>
          <img src='https://ik.imagekit.io/ykn0ycjx9/selva/gallery-3.jpg' height={250} width={300}></img><br></br>

        </div> */}
        <div className='gal-image1'>
  {img.map(x => (
    <img  src={x.image} height={250} width={300} alt='' />
  ))}
</div>
</div>
      <MenuFooter/>
    </div>
  )
}

