import React from 'react'
import { Link } from 'react-router-dom'
import './Data.css'
function LinkComp() {
  return (
    <div className='nav'>
        <Link to ='/' >Home</Link>
        <Link to ='/student'>Student</Link>
        <Link to ='/contact'>Contact</Link>
    </div>
  )
}

export default LinkComp