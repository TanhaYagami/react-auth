import React from 'react'
import { Link } from 'react-router-dom'
import './errorPage.css'
export default function Error() {
  return (
    <div className='section'>
        <div className='errorPage'>
            <h1>Oops!</h1>
            <p className='errorText'>seems like you dont belong here Or maybe some other System Error</p>
            <p>Please Visite</p>
            <Link to="/" className='Linkk'>
            <button className='btn'>Home Page</button>
            </Link>
            <Link to="/signUp">
            <button className='btn'>Sign Up page</button>
            </Link>
        </div>
    </div>
  )
}
