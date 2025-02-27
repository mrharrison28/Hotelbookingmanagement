import React from 'react'
import { CirclePlay } from 'lucide-react';
import './About.css'
export default function AboutContent() {
  return (
    <div className="about-container1">
      {/* <div className='menu-img1'>
    <div className='opacity'>
      <h1>Home</h1>
      </div>
      </div> */}
      <div className="about-safty1">
        <div className="about-one">
          <p className="about-para">ABOUT ROYALKING</p>
          <h1>Luxury<br></br> Hotel in The Heart of<br></br> San Francisco.</h1>
          <p className='about-para1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            integer ultrices suspendisse varius etiam est. Est, felis, tempus
            nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui
            ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et
            velit fusce.
          </p>
          <button className='about-button'><span></span>DISCOVER MORE</button>
        </div>
        <div className="about-two">
          <img
            src="https://ik.imagekit.io/sk751508/Mern%20clg%20project/about-2.jpg"
            alt=""
            className="about-img1"
          />
          <img
            src="https://ik.imagekit.io/sk751508/Mern%20clg%20project/about-3.jpg"
            alt=""
            className="about-img2"
          />
          <div className="about-three">
            <CirclePlay  size={70} strokeWidth={1.75} />
            <p>Watch Exclusive <br></br><span>Video</span></p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
