import React from 'react'
import './Offers.css'
export default function Offers() {
  return (
      <div className='container1'>
        <div className='sub-main'>
        <div className='safty1'>
            {/* First Card */}
            <div className='card1'>
                <div className='img'>
                    <img src="https://ik.imagekit.io/sk751508/Mern%20clg%20project/feature-image-6.jpg" alt=''/> 
                </div>
                <div className='h1'>
                    <p className='para1'>Kick off Summerin NYC</p>
                </div>
                <div>
                    <p className='para'>15% <br></br>OFF</p>
                </div>
            </div>
            {/* Second Card */}
            <div className='card2'>
                <div className='img'>
                    <img src="https://ik.imagekit.io/sk751508/Mern%20clg%20project/feature-image-7.jpg" alt=''/>
                </div>
                <div className='h1'>
                    <p className='para1'>Free Breakfast Packages</p>
                </div>
                <div>
                    <p className='para'>15% <br></br>OFF</p>
                </div>
            </div>
            {/* Third Card */}
            <div className='card3'>
                <div className='img'>
                    <img src="https://ik.imagekit.io/sk751508/Mern%20clg%20project/feature-image-8.jpg" alt=''/>
                </div>
                <div className='h1'>
                    <p className='para1'>Free Breakfast Packages</p>
                </div>
                <div>
                    <p className='para'>15% <br></br>OFF</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
