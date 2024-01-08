import React from 'react';
import Footer from './Footer'
import MusicSheets2 from './assets/musicsheets2.png'
import Exercise2 from './assets/exercise2.png'
import WarmUp2 from './assets/warmup2.png'
import Solfege2 from './assets/solfege2.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Library.css';
import Sponsor from './Sponsor'

const Library = () => {
    return (
        <div>
            <Nav />
            <section id="library">
                    <div className="library__content--wrapper">
                        <div className="content">
                                <Link className = "login-wrapper" style={{ textDecoration: "none" }} to="/login" >
                                    <div className="login__required library__img1">
                                        <div className="library__img--wrapper">
                                            <img className="library__img" src={MusicSheets2}href="https://drive.google.com/drive/folders/1oVKvIbvfYRCkNlfigZ-IXXAsagES_CuJ" target="_blank"></img>
                                        </div>
                                            <div className="login__headings--wrapper">
                                                <h8 className="login__headings">Login Required</h8>
                                            </div>    
                                    </div>
                                </Link>
                                <Link className = "login-wrapper" style={{ textDecoration: "none" }} to="/login" >
                                    <div className="login__required">
                                    <div className="library__img--wrapper">
                                                <img className="library__img" src={WarmUp2}href="https://drive.google.com/drive/folders/1oVKvIbvfYRCkNlfigZ-IXXAsagES_CuJ" target="_blank"></img>
                                            </div>
                                        <div className="login__headings--wrapper">
                                            <h8 className="login__headings">Login Required</h8>
                                        </div>
                                    </div>
                                </Link>
                                <Link className = "login-wrapper" style={{ textDecoration: "none" }} to="/login" >
                                    <div className="login__required">
                                    <div className="library__img--wrapper">
                                            <img className="library__img" src={Solfege2}href="https://drive.google.com/drive/folders/1oVKvIbvfYRCkNlfigZ-IXXAsagES_CuJ" target="_blank"></img>
                                        </div>
                                        <div className="login__headings--wrapper">
                                            <h8 className="login__headings">Login Required</h8>
                                        </div>
                                    </div>
                                </Link>
                        </div>
                    </div>
            </section>
            <Sponsor />
            <Footer />
        </div>
    );
}

export default Library;
