import React from 'react';
import './App.css';
import Library from './Library'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Footer from './Footer'
import Home from './Home'
import Login from './firebase/Login'
import Elena from './Elena';
import Danil from './Danil';
import About from './About';
import ContactUs from './ContactUs';
import { AuthContextProvider } from './context/AuthContext';

function App() {
    return (
    <div>
        <AuthContextProvider>
        <BrowserRouter>
            <Routes>
            <Route path = '/' element = { <Home /> }/>
            <Route path = 'login' element = { <Login /> }/>
            <Route path ='Elena' element = { <Elena />} />
            <Route path ='Danil' element = { <Danil />} />
            <Route path = "about" element = { <About />} />
            <Route path = "contact" element = { <ContactUs/>} />
            <Route path = 'library' element = { <Library />} /> 
            </Routes>
        </BrowserRouter>
        </AuthContextProvider>
    </div>
  );
}

export default App;
