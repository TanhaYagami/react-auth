import React from 'react'
import {useNavigate} from 'react-router-dom'
import { UserInputContext } from '../../App'
import { UserListContext } from '../../App'

export default function SignUp() {

  const {formData}= React.useContext(UserInputContext)
  const {setListFormData, changeHandler} = React.useContext(UserListContext)
 

 

    const navigate = useNavigate()

    function submitHandler(event){
        event.preventDefault()
        if(!formData.username || !formData.post) return;
          setListFormData({username: formData.username, post:formData.post})
        navigate('/dashBoard')
      
    }

  
    
      

  return (
    <div className='section'>
        <div className="formContainer">
            <h2>Sign Up</h2>

            <form onSubmit={submitHandler}>
                <input 
                type="text"
                placeholder='Username'
                value={formData.username}
                name='username'
                onChange={changeHandler}
                />
                <input 
                type="text"
                placeholder='Post'
                value={formData.post}
                name='post'
                onChange={changeHandler}
                />
                <button className='btn'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}
