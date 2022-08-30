import Home from './pages/home/Home';
import SignUp from './pages/signUP/SignUp';
import LogIn from './logIn/LogIn';
import SharedLayout from './SharedLayout'
import DashBoard from './pages/dashBoard/DashBoard';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'

import './App.css';


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


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} /> 
              <Route path='signUp' element={<SignUp formData={formData} setFormData={setFormData}  setListFormData ={setListFormData}  />} />
              <Route path='logIn' element={<LogIn listFormData={listFormData} />} />
            
              <Route path='dashBoard' element={
                  <ProtectedRoute listFormData={listFormData}>
                      <DashBoard listFormData={listFormData} />
                  </ProtectedRoute>
              } />
              
            </Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
