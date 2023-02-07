import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import  ProfilePic from '../images/profilepic.png'

const SideBar = ({parallax}) => {
  const navigate = useNavigate()
  return (
    <div className='SideBar'>
      <img className='ProfilePic' onClick={() => navigate('/')} src={ProfilePic} alt='yonatan'></img>
     <Nav parallax={parallax}/>
    </div>
  )
}

export default SideBar