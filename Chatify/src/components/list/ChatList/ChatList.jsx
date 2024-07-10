import React from 'react'
import './ChatList.css' 
import search from '../../../assets/magnifying-glass-solid.svg'
import plus from '../../../assets/plus-solid.svg'
import minus from '../../../assets/minus-solid.svg'
import { useState } from 'react'
import AddUser from './addUser/addUser'
import { useUserStore } from '../../../backend/userStore'
import { doc } from 'firebase/firestore'
import { useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { db } from '../../../backend/firebase'
import avtrr from '../../../assets/user.png'
import { getDoc } from 'firebase/firestore'
import { useChatStore } from '../../../backend/chatStore'

function ChatList() {

  const [addMode, setAddMode] = useState(false)
  const [chats, setChats] = useState([])
  
  const {changeChat} = useChatStore()
  const {currentUser} = useUserStore()
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'userchats', currentUser.id), (doc) => {
      
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    })
    return () => {
      unsub()
    };
  }, [currentUser.id]);
  console.log(chats)


  const handleSelect =async (chat) => {
    changeChat(chat.chatId, chat.user) //changeChat is a function from useChatStore which takes two arguments (chatId, user) and sets the current chat to the selected chat. (chatId is the id of the chat and user is the user with whom the chat is happening)
  }

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

      {chats.map(chat => (

      <div className="items" key={chat.chatId} >
            <img src={chat.user.avatar || avtrr} alt="avatar" className='userimg'/>
      <div className="texts">
        <span>{chat.user.username}</span>
        <p>{chat.lastMessage}</p>
      </div>
      </div>

      ))}
      
     
    </div>

    
  )
}

export default ChatList



//https://medium.com/spidernitt/building-a-video-chat-app-with-webrtc-firebase-8546edb860d5