import React from 'react'
import './ChatList.css' 
import search from '../../../assets/magnifying-glass-solid.svg'
import plus from '../../../assets/plus-solid.svg'
import minus from '../../../assets/minus-solid.svg'
import { useState } from 'react'
import AddUser from './addUser/addUser'

function ChatList() {

  const [addMode, setAddMode] = useState(false)
  
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src={search} alt="" srcset="" />
          <input type="text" placeholder='Search..' />
        </div>
          <img src={addMode ? minus : plus} alt="" className='plus' onClick={()=> setAddMode(prev=>!prev)}/>
      </div>

      {addMode && <AddUser />}
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>lorem</p>
      </div>
      </div>

      
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>


      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>


      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>


      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>

      
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>

      
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>

      
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>

      
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>

      
      <div className="items">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className='userimg'/>
      <div className="texts">
        <span>Tushar</span>
        <p>Hello for now</p>
      </div>
      </div>

    </div>

    
  )
}

export default ChatList



//https://medium.com/spidernitt/building-a-video-chat-app-with-webrtc-firebase-8546edb860d5