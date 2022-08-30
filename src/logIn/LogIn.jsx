import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { UserListContext } from '../App'

export default function LogIn() {

    const {listFormData} = useContext(UserListContext)
    const navigate = useNavigate()
  
    const [logInput, setLogInput] =React.useState({
        username:"",
        post:""
    })


    function submitHandler(event){
        event.preventDefault()
        if(!logInput.username || !logInput.post) return;
        else if(logInput.username === listFormData.username && logInput.post === listFormData.post ){
            navigate('/dashBoard')
            console.log("We made it")
        }
        else{
            console.log("It didnt matched")
        }
    }

    function changeHandler(event){
        const {name,value} = event.target
        setLogInput(prevState =>({
              ...prevState,
              [name]:value
        }))
      }
    console.log(logInput)
  return (
    <div className='section'>
        <div className="formContainer">
            <h2>LogIn</h2>

            <form onSubmit={submitHandler}>
                <input 
                type="text"
                placeholder='Username'
                value={logInput.username}
                name='username'
                onChange={changeHandler}
                />

                <input 
                type="text"
                placeholder='Post'
                value={logInput.post}
                name='post'
                onChange={changeHandler}
                />
                <button className='btn'>Log In</button>
            </form>
        </div>
    </div>
  )
}
