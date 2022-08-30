import React from 'react'
import DashHome from './dashHome/DashHome'
import Sidebar from './sideBar/Sidebar'
import './dashBoard.css'

export default function DashBoard({listFormData}) {
  return (
    <div className='dashBoard'>
        
      <Sidebar />
      <DashHome />
    </div>
  )
}
