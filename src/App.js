import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Loginform from './components/Loginform';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import { Link } from 'react';
import Registration from './components/Registration';
import Front from './components/front';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Recent from './components/recent/Recent';
function App() {

  return (
    <div>
      <Navbar/>
      <BrowserRouter>
     <Routes>
              <Route path='/' element={<Front/>}/>
              <Route path='/Loginform' element={<Loginform/>}/>
              <Route path='/reg' element={<Registration/>}/>
              <Route path='/about' element={<About/>}/> 
              <Route path='/service' element={<Service/>}/>
              <Route path='/recent' element={<Recent/>}/>       
      </Routes>


            </BrowserRouter>
            
    </div>
  
   
  );
}

export default App;