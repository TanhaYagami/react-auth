import React from 'react'
import { FaBell, FaLanguage,FaStroopwafel } from 'react-icons/fa';
import newImg from './imgs/karsten-winegeart.jpg'
import './topbar.css'
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="left">
                <span className='logo'>lamaadmin</span>
            </div>
            <div className="right">
                <div className="topIconContainer"> 
                    <FaBell className='topIcon' />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topIconContainer"> 
                    <FaLanguage className='topIcon' />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topIconContainer"> 
                    <FaStroopwafel className='topIcon' />
                  
                </div>
                    <img src={newImg} alt="" className='topAvatar'/>
               
            </div>
        </div>
    </div>
  )
}
