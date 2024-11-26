import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Luminis from './assets/luminis.png'
import { useState } from 'react'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dropdown from './Dropdown';

function Nav() {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 0) {
      setDropdown(false)
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    
      setDropdown(false)
    
  };

  return (
    <div>
      <nav section id="nav">
        <div className="row">
          <div className="nav__container">
            <a className="logo__wrapper" href="/">
              <img className="luminis" src={Luminis}></img>
            </a>
            <div className="nav__bar">
              <div className='nav__home--wrapper'>
                <ul className='nav__home'>
                  <li className="home__link home">
                    <Link to="/" className="
                        link__hover--effect
                        nav__link--anchor">
                      Home</Link></li>
                  <li className="home__link about"
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                  >
                    <Link to="" className="
                        link__hover--effect
                        nav__link--anchor"
                        >
                      About<ArrowDropDownIcon style={{ padding: '0px', fontSize: '20px', verticalAlign: 'middle' }} /></Link>
                      {dropdown && <Dropdown />}
                      </li> 

                  <li className="home__link">
                    <Link to="/store" className="
                        link__hover--effect
                        nav__link--anchor">
                      Store</Link></li>
                  
                  <li className="home__link">
                    <Link to="/library" className="
                        link__hover--effect
                        nav__link--anchor">
                      Library</Link></li>

                  <li className="home__link">
                    <a href="https://www.paypal.com/donate/?hosted_button_id=XWQACJKJ4Q5SA" className="
                        link__hover--effect
                        nav__link--anchor">
                      Support Us</a></li>
                  <li className="home__link">
                    <Link to="/contact" className="
                        link__hover--effect
                        nav__link--anchor">
                      Contact Us</Link></li>
                     
                  <div className=" social__link--home">
                    <a className=" home__link link__hover--effect" href="https://m.facebook.com/105599518749691/" target="_blank"><FacebookIcon /></a>
                    <a className=" home__link link__hover--effect" href="https://instagram.com/luminischoir?igshid=YmMyMTA2M2Y=" target="_blank"><InstagramIcon /></a>
                  </div>
                </ul>
              </div>
              <div className="nav__links--wrapper">
                <ul className={`nav__links ${navbarOpen ? " showMenu " : ""}`}>
                  <li className="nav__link ">
                    <Link to="/" className="
                        links
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Home</Link></li>
                  <li className="nav__link about fas fa-caret-down">
                    <Link to="/about" className="
                        links
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      About</Link></li>
                  <li className="nav__link">
                    <Link to="/leadership" className="
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Leadership</Link></li>
                      <li className="nav__link">
                    <Link to="/concert" className="
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      News</Link></li>
                      <li className="nav__link">
                    <Link to="/gallery" className="
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Gallery</Link></li>
                      <li className="nav__link">
                    <Link to="/testimonial" className="
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Testimonials</Link></li> 
                  <li className="nav__link library">
                    <Link to="/library" className="
                        links
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Library</Link></li> 
                  <li className="nav__link library">
                    <Link to="/milestones" className="
                        links
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Milestones</Link></li> 
                  <li className="nav__link support">
                    <a href = "https://www.paypal.com/donate/?hosted_button_id=XWQACJKJ4Q5SA" className="
                        links
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Support Us</a></li>
                  <li className="nav__link contact_nav">
                    <Link to="/contact" className="
                        links
                        link__hover--effect
                        nav__link--anchor" onClick={() => closeMenu()}>
                      Contact Us</Link></li>
                  <div className="nav__link social__link">
                    <a className="socialfacebook link__hover--effect" href="https://m.facebook.com/105599518749691/" target="_blank"><FacebookIcon /></a>
                    <a className="social link__hover--effect" href="https://instagram.com/luminischoir?igshid=YmMyMTA2M2Y=" target="_blank"><InstagramIcon /></a>
                  </div>
                </ul>
                <div className="nav__button">
                  <button className="nav__button--img" onClick={handleToggle}>
                    {navbarOpen ? (
                      <MdClose style={{ color: "#ffffff", backgroundColor: "#14144B", display: "block", width: "40px", height: "40px" }} />
                    ) : (
                      <FiMenu style={{ color: "#ffffff", backgroundColor: "#14144B", display: "block", width: "40px", height: "40px" }} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
