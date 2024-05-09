import React from 'react'
import './list.css'
import UserInfo from './UserInfo/UserInfo'
import ChatList from './ChatList/ChatList'

function List() {
  return (
    <div className='list'>
        <UserInfo></UserInfo>
        <ChatList></ChatList>
    </div>
  )
}

export default List