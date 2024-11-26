import React from 'react';
import './App.css';
import Library from './Library'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import Footer from './Footer'
import Home from './Home'
import News from './News'
import Login from './firebase/Login'
import Elena from './Elena';
import Danil from './Danil';
import About from './About';
//import Store from './Store';
import ContactUs from './ContactUs';
import NewSeason from './NewSeason';
import LeaderShip from './Leadership';
import Milestones from './Milestones';
import Support from './Support';
import Testimonial from './Testimonial'
import Gallery from './firebase/Gallery';

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
            <Route path = '/concert' element = { <NewSeason />} /> 
            <Route path = '/leadership' element = { <LeaderShip />} />
            <Route path = '/milestones' element = { <Milestones />} />
            <Route path = '/news' element = { <News />} />
            <Route path ='/support' element = { <Support />} />
            <Route path ='/testimonial' element = { <Testimonial />} />
            <Route path ='/gallery' element = { <Gallery />} />

            </Routes>
        </BrowserRouter>
        </AuthContextProvider>
    </div>
  );
}

export default App;
