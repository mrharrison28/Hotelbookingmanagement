import React from 'react'
// import {useNavigate} from 'react-router-dom'
import Offers from './Offers'
import HomeAbout from './HomeAbout'
import HomeRoom from './HomeRoom'
import HomeTest from './HomeTest'
import HomeCheck from './HomeCheck'
import HomeFace from './HomeFace'
import Footer from './Footer'
import './Menu.css'
import BookRating from './BookRating'
export default function Home() {
  return (
    <div>
      <div className='menu-img1'>
    <div className='opacity'>
      <h1>Home</h1>
      </div>
      </div>
      <Offers/>
      <HomeAbout/>
      <HomeRoom/>
      <HomeTest/>
      <BookRating/>
      <HomeCheck/>
      <HomeFace/>
      <Footer/>
    </div>
  )
}
