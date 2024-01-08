import React from 'react';
import Luminis from "./assets/Luminis Choir.png"
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleMapReact from 'google-map-react';
import Maps from './assets/mapsnew.png'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="footer__sections">
                    <div className=" footer__section">
                        <div className = "details">
                        <div className="choir__links">
                            <a className="details choir__socialfacebook" href="https://m.facebook.com/105599518749691/" target="_blank"><FacebookIcon /></a>
                            <a className="details choir__socialinsta" href="https://instagram.com/luminischoir?igshid=YmMyMTA2M2Y=" target="_blank"><InstagramIcon /></a>
                        </div>
                            <p className="footer__headers">Luminis Choir</p>
                            <p className="details phone__footer">Phone: 647-984-3849</p>
                            <div className="details__contact"> 
                                <Link to="/contact" className ="details contact__details">Visit our contact page</Link>
                                <p className ="details">Copyright © 2022 Luminis Choir</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </footer>
        </div>
    );
}

export default Footer;
