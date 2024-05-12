import React from 'react'
import './UserInfo.css'
import more from '../../../assets/circle-info-solid.svg'
import video from '../../../assets/video-solid.svg'
import edit from '../../../assets/pen-to-square-solid.svg'
import { useUserStore } from '../../../backend/userStore'
import avatr from '../../../assets/user.png'




function UserInfo() {
  const {currentUser} = useUserStore()
  return (
    <div className='userinfo'>
        <div className="user">
            <img src={currentUser.avatar || avatr} alt="avatar" className='userimg'/>
            <h2>{currentUser.username}</h2>
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