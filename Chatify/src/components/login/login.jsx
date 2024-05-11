import React from 'react'
import { useState } from 'react'
import './login.css'
import avtr from '../../assets/user.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../../backend/firebase'
import { setDoc, doc } from 'firebase/firestore'


function Login() {

const [avatar, setAvatar] = useState({
    file: null,
    url:" "
})

const handleAvatar = e => {
    if(e.target.files[0]){
    
    setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
    })
}
}


const handleRegister = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const{username, email, password, file} = Object.fromEntries(formData)
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        
        await setDoc(doc(db, 'users', res.user.uid), {
            username,
            email,
            id: res.user.uid,
            blocked:[]
        })
        await setDoc(doc(db, 'userchats', res.user.uid), {
            chats:[]
        })


    } catch (error) {
        console.log(error)

        }
};

const handleLogin = e => {
    e.preventDefault( )

}

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Enter your email' name='email'/>
                <input type="password" placeholder='Enter your password' name='password'/>
                <input type="submit" value="Login"/>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || avtr}  />
                    Upload an image 
                    </label>
                <input type="file"  id="file" style={{display:'none'}} onChange={handleAvatar}/>
                <input type="text" placeholder='Enter your Unsermame' name='username'/>
                <input type="text" placeholder='Enter your email' name='email' />
                <input type="password" placeholder='Enter your password' name='password' />
                <input type="submit" value="Create"/>
            </form>
        </div>
    </div>
  )
}

export default Login