import React from 'react';
import Footer from './Footer'
import MusicSheets2 from './assets/musicsheets2.png'
import Exercise2 from './assets/exercise2.png'
import WarmUp2 from './assets/warmup2.png'
import Solfege2 from './assets/solfege2.png'
import { Link } from 'react-router-dom'
import Luminis from './assets/Luminis Choir.png'

const Library = () => {
    return (
        <div>
            <nav section id="nav">
                <div className="nav__container">
                    <a className="logo__wrapper" href="/">
                        <img className="luminis" src={Luminis}></img>
                    </a>
                    <div className="nav__links--wrapper">
                        <ul className="nav__links">
                            <li className="nav__link">
                                <Link to="/" className="
                        link__hover-effect
                        nav__link--anchor">
                                    Home</Link></li>
                            <li className="nav__link">
                                <a href="luminischoir@gmail.com" className="
                        link__hover-effect
                        nav__link--anchor">
                                    Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="library">
                <div className="library__content--wrapper">
                    <div className="content">
                        <div className="content1">
                            <Link style={{ textDecoration: "none" }} to="/login" >
                                <div className="login__required library__img1">
                                    <img className="library__img" src={MusicSheets2}></img>
                                    <h8 className="login__headings">Login Required</h8>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/login" >
                                <div className="login__required library__img2">
                                    <img className="library__img" src={Exercise2} href="https://drive.google.com/drive/folders/1oVKvIbvfYRCkNlfigZ-IXXAsagES_CuJ" target="_blank"></img>
                                    <h8 className="login__headings">Login Required</h8>
                                </div>
                            </Link>
                        </div>
                        <div className="content2">
                            <Link style={{ textDecoration: "none" }} to="/login" >
                                <div className="login__required">
                                    <img className="library__img" src={WarmUp2} href="https://drive.google.com/drive/folders/1oVKvIbvfYRCkNlfigZ-IXXAsagES_CuJ" target="_blank"></img>
                                    <h8 className="login__headings">Login Required</h8>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/login" >
                                <div className="login__required">
                                    <img className="library__img" src={Solfege2} href="https://drive.google.com/drive/folders/1oVKvIbvfYRCkNlfigZ-IXXAsagES_CuJ" target="_blank"></img>
                                    <h8 className="login__headings">Login Required</h8>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Library;
