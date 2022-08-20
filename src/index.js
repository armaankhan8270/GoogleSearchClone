import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Result from './Components/Result';
import Navbar from './Components/Navbar';
import { GoogleState } from './Context/GoogleContext';
import Loading from './Components/Loading';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    <GoogleState>
      
  <Routes>
    <Route path='/*' element={(<App/>)}/>
    <Route path='/search'element={(<Result/>)} />
    <Route path='/Movie' element={(<Result/>)}/>
    <Route path='/Videos' element={(<Result/>)}/>
    <Route path='/Images' element={(<Result/>)}/>
    <Route path='/Loading' element={(<Loading/>)}/>
   
  </Routes>
    </GoogleState>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
