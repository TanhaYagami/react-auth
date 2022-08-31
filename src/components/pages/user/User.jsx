import {FaUpload,FaAddressCard,FaPhoneAlt,FaCalendarDay,FaIdBadge,FaEnvelope} from "react-icons/fa";
import userImg from "./userImages/testimonial-4.jpg"
import { Link } from "react-router-dom";
import './user.css'

export default function User() {
  return (
    <div className='user'>

        <div className="userTitelContainer">
            <h1 className="userTitleTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userInfoContainer">
            <div className="userShow">

                <div className="userShowTop">
                    <img src={userImg} alt="" className='userShowImg' />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Anna Becker</span>
                        <span className="userShowUserPost">Graphic Designer</span>
                    </div>
                </div>
         


            <div className="userBottom">
                <span className="userInfoTitle">Account Details</span>
                <div className="userShowInfo">
                    <FaIdBadge className ="userShowIcon"  />
                    <span className="userShowUserAccount">annabeck99</span>
                </div>
                <div className="userShowInfo">
                    <FaCalendarDay className ="userShowIcon"  />
                    <span className="userShowUserAccount">12.10.1999</span>
                </div>

                <span className="userInfoTitle">Contact Details</span>


                <div className="userShowInfo">
                    <FaPhoneAlt className ="userShowIcon"  />
                    <span className="userShowUserAccount">+1 123 456 67</span>
                </div>
                <div className="userShowInfo">
                    <FaEnvelope className ="userShowIcon"  />
                    <span className="userShowUserAccount">annabeck99@gamil.com</span>
                </div>
                <div className="userShowInfo">
                    <FaAddressCard className ="userShowIcon"  />
                    <span className="userShowUserAccount">New York | USA</span>
                </div>
            </div>
        </div>

            <div className="userUpdate">
                <span className="userUpadateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">

                        <div className="userUpdateItem">
                            <label>UserName</label>
                            <input 
                            type="text" 
                            placeholder='annabeck99' 
                            className="userUpadateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input 
                            type="text" 
                            placeholder='Anna Becker' 
                            className="userUpadateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input 
                            type="text" 
                            placeholder='annabeck99@gamil.com' 
                            className="userUpadateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone Number</label>
                            <input 
                            type="text" 
                            placeholder='+1 123 456 67' 
                            className="userUpadateInput" 
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Addres</label>
                            <input 
                            type="text" 
                            placeholder='New York' 
                            className="userUpadateInput" 
                            />
                        </div>
                    </div>

                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={userImg} alt="" className="userUpdateImg" />
                            <label htmlFor="file">
                                 <FaUpload className="userUpdateIcon" />
                                 </label>
                            <input type="file" id='file' style={{display:"none"}} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
