import React from 'react'
import Nav from './Nav'

const SideBar = ({parallax}) => {
  return (
    <div className='sideBar'>
      <img className='profilePic' src='https://res.cloudinary.com/dm4rue7fk/image/upload/v1673872169/yonatan_ozuwpw.jpg' alt='yonatan'></img>
     <Nav parallax={parallax}/>
    </div>
  )
}

export default SideBar