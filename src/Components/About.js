import React from 'react'
import AboutContent from './AboutContent'
import Offers from './Offers'
import AboutVideo from './AboutVideo'
import HomeTest from './HomeTest'
import AboutFooter from './AboutFooter'

export default function About() {
  return (
    <div>
      <div className='menu-img1'>
    <div className='opacity'>
      <h1>About us</h1>
      </div>
      </div>
      <AboutContent/>
      <Offers/>
      <AboutVideo/>
      <HomeTest/>
      <AboutFooter/>
    </div>
  )
}
