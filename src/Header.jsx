import React from 'react';
import Picture from './assets/Luminis Choir.png'
import { Link } from 'react-router-dom'
import './App.css'
import Nav from './Nav'

const Header = () => {
    return (
        <div>
            <Nav  />
            <section id="header">
                <div className="row">
                    <div className="header__container">
                        <div className="header__description">
                            
                            <div className="header__links">
                                <a href="" className="header__link">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="" className="header__link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
