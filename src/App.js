import Navigation from './Components/Navigation/Navigation';
import React,{useState} from 'react';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './Components/Home/Home';
import NotFound from './Components/Notfound/NotFound';
import Login from './Components/Login/Login';
import Cartitems from './Components/cartpage/Cartitems';
import Signup from './Components/signup-page/Signup';




function App() {
  

  return (
    <div className="App">

 <BrowserRouter>
 {/* <Navigation/> */}

      <Routes>
      <Route path='/' element={<Login/>}/>

      <Route path='/Home' element={<Home/>}/>
          <Route path='/Cartitems/:id' element={<Cartitems/>}/>
          <Route path='/Signup' element={<Signup/>}/>

          <Route path='/*' element={<NotFound/>}/>
          
      </Routes>
      </BrowserRouter>   </div>
  );
}

export default App;
