import React from 'react'
import './UserInfo.css'
import more from '../../../assets/circle-info-solid.svg'
import video from '../../../assets/video-solid.svg'
import edit from '../../../assets/pen-to-square-solid.svg'

function UserInfo() {
  return (
    <div className='userinfo'>
        <div className="user">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
            <h2>Tushar Gothwal</h2>
        </div>
        <div className="icons">
            <img src={more} alt="more" srcset="" />
            <img src={video} alt="video" srcset="" />
            <img src={edit} alt="edit" srcset="" />
        </div>
    </div>
  )
}

export default UserInfo