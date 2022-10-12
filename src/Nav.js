import React from 'react'
import {HashLink as Link } from 'react-router-hash-link'
import Luminis from './assets/Luminis Choir.png'

function Nav() {

  if (document) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    
    document.head.appendChild(stylesheet);
  }

  return (
    <div>
      <nav section id= "nav">
        <div className= "nav__container">
              <a className = "logo__wrapper" href="/">
                <img className = "luminis" src = {Luminis}></img>
              </a>
              <div className = "nav__links--wrapper"> 
                <ul className= "nav__links">
                    <li className= "nav__link home">
                    <Link to="/" className="
                        link__hover-effect
                        nav__link--anchor">
                        Home</Link></li>
                    <li className= "nav__link about">
                    <Link to="/about" className="
                        link__hover-effect
                        nav__link--anchor">
                        About</Link></li>
                    <li className= "nav__link department">
                    <Link to="#department" className="
                        link__hover-effect
                        nav__link--anchor">
                        Our Team</Link></li>
                    <li className= "nav__link library">
                      <Link to="/library" className="
                        link__hover-effect
                        nav__link--anchor">
                        Library</Link></li>
                    <li className= "nav__link contact_nav" onClick = "toggleModal()">
                        <Link to="/contact" className="
                        link__hover-effect
                        nav__link--anchor">
                        Contact us</Link></li>
                </ul>
              </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Nav
