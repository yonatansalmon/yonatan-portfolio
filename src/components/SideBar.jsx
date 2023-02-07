import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const SideBar = ({parallax}) => {
  const navigate = useNavigate()
  return (
    <div className='SideBar'>
      <img className='ProfilePic' onClick={() => navigate('/')} src='https://res.cloudinary.com/dm4rue7fk/image/upload/v1673872169/yonatan_ozuwpw.jpg' alt='yonatan'></img>
     <Nav parallax={parallax}/>
    </div>
  )
}

export default SideBar