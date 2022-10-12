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
                    <div className="footer__section footer__section1">
                        <h6 className="footer__headers">Choir Links</h6>
                        <div className="choir__links">
                            <a className="details choir__link" href="https://m.facebook.com/105599518749691/" target="_blank"><FacebookIcon /></a>
                            <a className="details choir__link" href="https://instagram.com/luminischoir?igshid=YmMyMTA2M2Y=" target="_blank"><InstagramIcon /></a>
                        </div>
                    </div>
                    <div className="footer__section footer__section2">
                        <div className = "details">
                            <h6 className="footer__headers">Where to find us:</h6>
                            <p className="details location">10201 Yonge St, Richmond Hill, ON</p>
                            <p className="details location__postal--code">Richmond Hill United Church</p>
                            <p className="details phone">Phone: 647-984-3849</p>
                        </div>
                            <div className = "maps">
                                <div className= "maps__img--wrapper">
                                    <a href = "https://www.google.com/maps/place/Richmond+Hill+United+Church/@43.8759582,-79.4380747,17.75z/data=!3m1!5s0x882b2a4de9bea6d5:0xfcb08cacde62dbe6!4m5!3m4!1s0x0:0xa754259eef66cd8e!8m2!3d43.8760734!4d-79.4380196" target = "_blank">
                                        <img className="maps__img" src={Maps} />
                                    </a>
                                </div>
                            </div>
                    </div>  
                </div>
            </footer>
        </div>
    );
}

export default Footer;
