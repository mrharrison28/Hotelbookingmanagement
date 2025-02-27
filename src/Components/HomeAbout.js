import React from 'react'
import './Offers.css'
import { CircleCheckBig } from 'lucide-react';
export default function HomeAbout() {
  return (
    <div className="cont">
      <div className="safty">
        <div className="img1">
          <img src="https://ik.imagekit.io/wec67zazi/about-5.jpg?updatedAt=1738558873721" alt=''/>
        </div>
        <div className="img2">
          <img src="https://ik.imagekit.io/wec67zazi/about-4.jpg?updatedAt=1738558873807" alt='' />
        </div>
        <div className="about">
          <h2 className="head">ABOUT ROYALKING</h2>
          <h1 className="text">
            Luxury Hotel in The <br></br>Heart of Mexico.
          </h1>
          <p className="p-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            integer ultrices suspendisse varius etiam est. Est, felis, tempus
            nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui
            ipsum ornare sagittis dolor sagittis amet odio est. Sit semper et
            velit fusce.
          </p>
          
           <div className="flex-li"><p className="l1"><CircleCheckBig size={19} color="#c77a63" strokeWidth={1.5} /></p><p >Powerful Admin Panel</p></div>
           <div className="flex-li"><p className="l1"><CircleCheckBig size={19} color="#c77a63" strokeWidth={1.5} /></p><p >Multi-Language Support</p></div>
           <button className="button"><span></span>DISCOVER MORE</button>
          
        </div>
      </div>
    </div>
  )
}
