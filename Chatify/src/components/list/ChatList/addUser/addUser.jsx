import React from 'react'
import './addUser.css'


function AddUser() {
  return (
    <div className='addUser'>
      <form action="">
        <input type="text" placeholder='Unername' />
        <button>Search</button>
      </form>
        <div className="user">
            <div className="detail">
            <img src="../../../public/IMG_20230304_20415055.jpg" alt="avatar" className=''/>
            <span>TTUUSHAAR</span>
            </div>
            <button>Add User</button>
            </div> 
        </div>
  )
}

export default AddUser