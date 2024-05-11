import React from 'react'
import './chat.css'
import phone from '../../assets/phone-solid.svg'
import video from '../../assets/video-solid.svg'
import info from '../../assets/circle-info-solid.svg'
import emoji from '../../assets/face-smile-solid.svg'
import camera from '../../assets/camera-solid.svg'
import folder from '../../assets/folder-solid.svg'
import mic from '../../assets/microphone-lines-solid.svg'

import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'


function Chat() {

  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const endref = useRef(null)

  useEffect(() => {
    endref.current.scrollIntoView({behavior:'smooth'})
  }, [])

  const handleEmoji = e => {
    setText(prev=>prev+e)
    setOpen(false)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
        <img src="../../../public/IMG_20230304_20415055.jpg" alt="" />
        <div className="texts">
          <span>Tushar</span>
          <p>This is description.</p>
        </div>
        </div>
        <div className="icons">
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={info} alt="" />
        </div>
      </div>









      <div className="center">
        <div className="message ">
          <img src="../../../public/IMG_20230304_20415055.jpg" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, tempore adipisci. Hic suscipit sit, eius odit, alias quidem necessitatibus dicta, eligendi eum aliquid minus ipsam impedit nulla velit provident laboriosam.</p>
            <span>1 min ago</span>
          </div>
        </div>


        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae beatae incidunt modi eveniet illo voluptas saepe, eum a facere optio dolorem et alias harum at libero in, pariatur quia autem?</p>
            <span>1 min ago</span>
          </div>
        </div>


        <div className="message ">
          <img src="../../../public/IMG_20230304_20415055.jpg" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod. Veritatis at eum, cupiditate laudantium, ut hic laborum quis recusandae nulla quam fugiat numquam. Facilis libero aliquid corporis quisquam omnis!</p>
            <span>1 min ago</span>
          </div>
        </div>


        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias excepturi sequi deserunt deleniti minima dicta, ut soluta amet dolore ullam aliquid facilis natus dolor assumenda in, obcaecati labore doloremque. In.</p>
            <span>1 min ago</span>
          </div>
        </div>


        <div className="message">
          <img src="../../../public/IMG_20230304_20415055.jpg" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatibus molestiae dolorum molestias saepe harum error dolore dolor repudiandae, suscipit nam, aperiam odio dicta necessitatibus a voluptates corrupti commodi quibusdam.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in dolor vel ut maiores porro amet nostrum accusantium molestiae! Provident ipsum nesciunt iusto a fuga veritatis obcaecati optio quis doloribus.</p>
            <span>1 min ago</span>
          </div>
        </div>




        <div className="message">
          <img src="../../../public/IMG_20230304_20415055.jpg" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet odit tempore ratione, nulla, dignissimos odio rerum consequatur aliquid sequi nesciunt explicabo laudantium assumenda placeat ipsa neque eaque eligendi laboriosam aut.</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="kiko-camaclang-6cJX8XXcqm4-unsplash.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique eius debitis vero recusandae labore. Laboriosam esse ipsam maiores nihil nostrum, recusandae expedita commodi dolores necessitatibus, officiis iure reiciendis eius tempora!</p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endref}></div>


      </div>
      
      
      
      
      
      <div className="bottom">
        <div className="icons">
          <img src={camera} alt="" />
          <img src={folder} alt="" />
          <img src={mic} alt="" />
        </div>
          <input type="text" name="chatt" id="chatt" placeholder='Type Somethig...' 
          onChange={e=>setText(e.target.value)} value={text}/>
          
          <div className="emoji">
            <img src={emoji} alt="" className='icons' onClick={()=>setOpen(prev=>!prev)}/>
            <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className='sendButton'>Send</button>
        
      </div>
    </div>
          )
}

export default Chat