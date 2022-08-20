import React from 'react'
import {Routes,Route,Navigate,BrowserRouter} from "react-router-dom"
import Footer from './Footer'
import Result from './Result'

const Routees = () => {
  return (
    <div  className=' dark:bg-gray-900'>
      <Routes>
      <Route path='/search' element={(<Result/>)}/>
    <Route path='/Movie' element={(<Result/>)}/>
    <Route path='/Videos' element={(<Result/>)}/>
    <Route path='/Images' element={(<Result/>)}/>
   
      </Routes>
      Routes
      </div>
  )
}

export default Routees