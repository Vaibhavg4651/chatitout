import React from 'react'
import './detail.css'
import arrowdown from '../../assets/circle-down-regular.svg'
import arrowup from '../../assets/circle-up-solid.svg'
import download from '../../assets/cloud-arrow-down-solid.svg'
import { auth } from '../../backend/firebase'

function Detail() {
  return (
    <div className='details'>
      <div className="user">
        <img src="../../../public/IMG_20230304_20415055.jpg" alt="" />
        <h2>TUSHAR GOTHWAL</h2>
        <p>21 can you doo some for me?</p>
      </div>
      <div className="info">
     
     

        <div className="option">
           <div className="title">
            <span>Chat Data</span>
            <img src={arrowdown} alt="" className='icons'/>
           </div>
           <div className="photoItem">
            <div className="photoDetails">

            <img src="https://images.pexels.com/photos/22776631/pexels-photo-22776631/free-photo-of-two-people-stand-on-the-beach-at-sunset.jpeg" alt="" />
            <span>IMG DETAILS</span>
            </div>
           <img src={download} alt="" className='icons'/>
           </div>
        </div>

         <br />
        <button>BLOCK USER</button>
      <button onClick={()=>auth.signOut()}>LOGOUT</button>
      </div>

    </div>
  )
}

export default Detail