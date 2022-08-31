import { FaHome,FaLinode,FaThinkPeaks,FaPodcast,
FaProductHunt,FaMoneyCheckAlt,FaRegFileAlt,FaRegEnvelope,FaCoins,FaCommentDots,FaDatabase,FaPaperclip } from 'react-icons/fa';
import {Link} from "react-router-dom"
import React from 'react';
import { UserListContext } from '../../../App'
import "./sidebar.css"


export default function Sidebar() {


    const {listFormData} = React.useContext(UserListContext)
    const directLink = listFormData.post === "admin" || "manager" ? "/dashBoard/user" : "/errorPage"

  return (
    <div className="sidebarContainer">
       <div className="sideBarWrapper">
        <div className="sideBarMenu">
            <h3 className='sideBarTitle' >DashBoard</h3>
            <ul className="sideBarMenuItmes">
                <Link to="/" className='Linkk'>
                <li className="sideBarListItem active">
                    <FaHome  className='sideBarIcon' />
                    Home
                </li>
                </Link>
                <li className="sideBarListItem">
                    <FaLinode className='sideBarIcon' />
                    Analytics
                </li>
                <li className="sideBarListItem">
                    <FaThinkPeaks className='sideBarIcon' />
                    Sales
                </li>
            </ul>
        </div>  
       
       <div className="sideBarMenu">
            <h3 className='sideBarTitle' >Quick Menu</h3>
            <ul className="sideBarMenuItmes">

                <Link to ={directLink} className='Linkk'>
                <li className="sideBarListItem">
                    <FaPodcast  className='sideBarIcon' />
                    User
                </li>
                </Link>

                <Link to="/products" className='Linkk'>
                <li className="sideBarListItem" >
                    <FaProductHunt className='sideBarIcon' />
                   Products
                </li>
                </Link>

                {
                    listFormData === "admin" && 
                <li className="sideBarListItem">
                    <FaMoneyCheckAlt className='sideBarIcon' />
                    Transaction
                </li>}

                <li className="sideBarListItem">
                    <FaRegFileAlt className='sideBarIcon' />
                    Reports
                </li>
            </ul>
        </div>


      {listFormData.post === "admin" &&
        <div className="sideBarMenu">
            <h3 className='sideBarTitle' >Notification</h3>
            <ul className="sideBarMenuItmes">
                <li className="sideBarListItem">
                    <FaRegEnvelope className='sideBarIcon' />
                   Mail
                </li>
                <li className="sideBarListItem">
                    <FaCoins className='sideBarIcon' />
                   Feedback
                </li>
                <li className="sideBarListItem">
                    <FaCommentDots className='sideBarIcon' />
                    Message
                </li>
            </ul>
        </div> }


        <div className="sideBarMenu">
            <h3 className='sideBarTitle' >Staff</h3>
            <ul className="sideBarMenuItmes">
                <li className="sideBarListItem">
                    <FaDatabase  className='sideBarIcon' />
                    Manage
                </li>
                <li className="sideBarListItem">
                    <FaLinode className='sideBarIcon' />
                    Analytics
                </li>
                <li className="sideBarListItem">
                    <FaPaperclip className='sideBarIcon' />
                    Reports
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}
