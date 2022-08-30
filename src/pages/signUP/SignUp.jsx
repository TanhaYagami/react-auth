import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function SignUp({ setListFormData}) {


  const [username, setUsername]= React.useState('')
  const [post, setPost]= React.useState('')

    const navigate = useNavigate()

    function submitHandler(event){
        event.preventDefault()
        if(!username || !post) return;
          setListFormData({username: username, post:post})
        navigate('/dashBoard')
        console.log(username, post)
    }

    function changeHandler(event){
        const {value} = event.target
        setUsername(value)
      }

      function postChangeHandler(event){
        const {value} = event.target
        setPost(value)
      }

    
      

  return (
    <div className='section'>
        <div className="formContainer">
            <h2>Sign Up</h2>

            <form onSubmit={submitHandler}>
                <input 
                type="text"
                placeholder='Username'
                value={username}
                name='username'
                onChange={changeHandler}
                />
                <input 
                type="text"
                placeholder='Post'
                value={post}
                name='post'
                onChange={postChangeHandler}
                />
                <button className='btn'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}
