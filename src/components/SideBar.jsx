import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const SideBar = ({parallax}) => {
  const navigate = useNavigate()
  return (
    <div className='SideBar'>
     <Nav parallax={parallax}/>
    </div>
  )
}

export default SideBar