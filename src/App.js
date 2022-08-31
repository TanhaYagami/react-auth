import Home from './pages/home/Home';
import SignUp from './pages/signUP/SignUp';
import LogIn from './logIn/LogIn';
import SharedLayout from './SharedLayout'
import DashBoard from './pages/dashBoard/DashBoard';
import User from './components/user/User'
import ProtectedRoute from './ProtectedRoute';
import Error from './pages/errorPage/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'

import './App.css';


export const UserListContext = React.createContext(null)
export const UserInputContext = React.createContext(null)

function App() {
  
  const [formData, setFormData] = React.useState({
    username:"",
    post:""
  })
  const [listFormData, setListFormData] = React.useState(null)
  

  React.useEffect(()=>{

    const data= localStorage.getItem('app-user-data')
    if(data){
      setListFormData(JSON.parse(data))
    } 
  },[])

  React.useEffect(()=>{
    localStorage.setItem("app-user-data", JSON.stringify(listFormData))
  })

  

  function changeHandler(event){
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }



  return (
    <UserListContext.Provider value={{listFormData, setListFormData, changeHandler}}>
    <UserInputContext.Provider value={{formData}}>

    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} /> 
              <Route path='signUp' element={<SignUp />} />
              <Route path='logIn' element={<LogIn  />} />
            
              <Route path='dashBoard' element={
                  <ProtectedRoute listFormData={listFormData}>
                      <DashBoard/>
                     
                  </ProtectedRoute>
              } />
              
            </Route>
            <Route path="dashBoard/user" element ={<User />} />
            <Route path="errorPage" element={<Error />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </UserInputContext.Provider>
      </UserListContext.Provider>
  );
}

export default App;
