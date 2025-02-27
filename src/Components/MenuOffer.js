import React from 'react'
import './Menu.css'
export default function MenuOffer() {
  return (
    <div className='menu-container1'>
        <div className='menu-head1'>
            <p>POPULAR</p>
            <h1>Popular Dishes</h1>
        </div>
        <div className='menu-sub-main'>
        <div className='menu-safty1'>
            {/* First Card */}
            <div className='menu-card1'>
                <div className='menu-img'>
                    <img src="https://ik.imagekit.io/harrison/MERN%20Stack%20/feature-image-12.jpg" alt=''/> 
                </div>
                <div className='menu-h1'>
                    <h1 className='menu-para1'>Grilled with Tomatoes  <span className='menu-span'><s>$55</s></span><span className='menu-span1'>$45</span></h1>
                </div>
                <div>
                    <p className='menu-para'>15% <br></br>OFF</p>
                </div>
            </div>
            {/* Second Card */}
            <div className='menu-card2'>
                <div className='menu-img'>
                    <img src="https://ik.imagekit.io/harrison/MERN%20Stack%20/feature-image-13.jpg" alt=''/>
                </div>
                <div className='menu-h1'>
                    <h1 className='menu-para1'>Squeezing Fresh Juices    <span className='menu-span'><s>$55</s></span><span className='menu-span1'>$45</span></h1>
                </div>
                <div>
                    <p className='menu-para'>15% <br></br>OFF</p>
                </div>
            </div>
            {/* Third Card */}
            <div className='menu-card3'>
                <div className='menu-img'>
                    <img src="https://ik.imagekit.io/harrison/MERN%20Stack%20/feature-image-14.jpg" alt=''/>
                </div>
                <div className='menu-h1'>
                    <h1 className='menu-para1'>Fishes with Vegetables  <span className='menu-span'><s>$55</s></span><span className='menu-span1'>$45</span></h1>
                </div>
                <div>
                    <p className='menu-para'>15% <br></br>OFF</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
