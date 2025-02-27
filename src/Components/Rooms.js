import React from 'react'
import './Rooms.css'
import Star from './Star'
import './Menu.css'
import './Offers.css'
import MenuFooter from './MenuFooter'
export default function Rooms() {
  return (
    <div className='room-main'>
            <div className='menu-img1'>
    <div className='opacity'>
      <h1>Rooms</h1>
      </div>
      </div>

            <div className='total1'>
                <div className='room-image1'>
                    <img className='room-img' src='https://ik.imagekit.io/ykn0ycjx9/selva/room-1.jpg' height={180} width={350} alt=''/>
                    <div className='star'>
                    <Star/>
                        <h2 className='room-text'>Luxury Room</h2>
                        <p className='room-para'>Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>

                    </div>
                    <div className='main-box'>
                    <div className='room-box'>
                        <h4 id='a'>Start from $55.0/night</h4>
                    </div>
                    </div>
                    <div className='room-btn'>
                    <button className='button'><span></span>Book now</button>
                    </div>
                </div>
                <div className='room-image1'>
                    <img className='room-img' src='https://ik.imagekit.io/ykn0ycjx9/selva/room-2.jpg' height={180} width={350} alt=''/>
                    <div className='star'>
                    <Star/>
                        <h2 className='room-text'>Delux Room</h2>
                        <p className='room-para'>Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>

                    </div>
                    <div className='main-box'>
                    <div className='room-box'>
                        <h4 id='a'>Start from $55.0/night</h4>
                    </div>
                    </div>
                    <div className='room-btn'>
                    <button className='button'><span></span>Book now</button>
                    </div>
                </div>
                <div className='room-image1'>
                    <img className='room-img' src='https://ik.imagekit.io/ykn0ycjx9/selva/room-3.jpg' height={180} width={350} alt=''/>
                    <div className='star'>
                    <Star/>
                        <h2 className='room-text'>Royal Room</h2>
                        <p className='room-para'>Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>

                    </div>
                    <div className='main-box'>
                    <div className='room-box'>
                        <h4 id='a'>Start from $55.0/night</h4>
                    </div>
                    </div>
                    <div className='room-btn'>
                    <button className='button'><span></span>Book now</button>
                    </div>
                </div>

            </div>

            <div className='total1'>
                <div className='room-image'>
                    <img className='room-img' src='https://ik.imagekit.io/ykn0ycjx9/selva/room-4.jpg' height={350} width={350} alt=''/>
                    <div className='star'>
                    <Star/>
                        <h2 className='room-text'>Luxury Room</h2>
                        <p className='room-para'>Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>

                    </div>
                    <div className='main-box'>
                    <div className='room-box'>
                        <h4 id='a'>Start from $55.0/night</h4>
                    </div>
                    </div>
                    <div className='room-btn'>
                    <button className='button'><span></span>Book now</button>
                    </div>
                </div>
                <div className='room-image'>
                    <img className='room-img' src='https://ik.imagekit.io/ykn0ycjx9/selva/room-5.jpg' height={350} width={350} alt=''/>
                    <div className='star'>
                    <Star/>
                        <h2 className='room-text'>Delux Room</h2>
                        <p className='room-para'>Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>

                    </div>
                    <div className='main-box'>
                    <div className='room-box'>
                        <h4 id='a'>Start from $55.0/night</h4>
                    </div>
                    </div>
                    <div className='room-btn'>
                    <button className='button'><span></span>Book now</button>
                    </div>
                </div>
                <div className='room-image'>
                    <img className='room-img' src='https://ik.imagekit.io/ykn0ycjx9/selva/room-6.jpg' height={350} width={350} alt=''/>
                    <div className='star'>
                    <Star/>
                        <h2 className='room-text'>Royal Room</h2>
                        <p className='room-para'>Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>

                    </div>
                    <div className='main-box'>
                    <div className='room-box'>
                        <h4 id='a'>Start from $55.0/night</h4>
                    </div>
                    </div>
                    <div className='room-btn'>
                    <button className='button'><span></span>Book now</button>
                    </div>
                </div>

            </div>
            <MenuFooter/>
        </div>
  )
}
