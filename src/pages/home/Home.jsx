import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
export default function Home() {
  return (
    <div className="section">

        <div className='home'>
            <Link to='/logIn'>
            <button className='btn'>Log In</button>
            
            </Link>
            <Link to='/signUp'>
            
            <button className='btn'>Sign Up</button>
            </Link>
        </div>

    </div>
  )
}
