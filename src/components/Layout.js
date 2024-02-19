import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div className='row'>
        <div className='col-2'>
        <Sidebar/>
            </div> 
            <div className='col-10'>
            <Outlet/>
        </div>
        </div>
       
        
    </div>
  )
}

export default Layout