import React from 'react'
import Nav from './Nav'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <img className='profilePic' src='https://res.cloudinary.com/dm4rue7fk/image/upload/v1673872169/yonatan_ozuwpw.jpg' alt='yonatan'></img>
     <Nav/>
    </div>
  )
}

export default SideBar