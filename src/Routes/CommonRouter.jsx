import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Authentication/Login'
import Signup1 from '../Components/Authentication/Signup1'

function CommonRouter() {
  return (
   <>
   <Routes>
    <Route path='/signup' element={<Signup1 />}></Route>
    <Route path='/login' element ={<Login />}></Route>
   </Routes>
   </>
  )
}

export default CommonRouter