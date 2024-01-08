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
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
