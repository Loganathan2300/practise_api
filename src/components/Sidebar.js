import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='vh-100 bg-info'>
        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/name">NAME</Link></li>
            <li><Link to="/email">EMAIL</Link></li>
            <li><Link to="/gender">GENDER</Link></li>
            <li><Link to="/active">ACTIVE</Link></li>
        </ul>
        </div>
  )
}

export default Sidebar