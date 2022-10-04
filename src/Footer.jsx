import React from 'react';
import Luminis from "./assets/Luminis Choir.png"
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div>
            <footer id = "footer">
                    <div className="footer__sections">
                        <div className="footer__section footer__section1">
                            <h6 className="footer__headers">Choir Links</h6>
                            <div className = "choir__links">
                            <a className= "details choir__link" href="https://m.facebook.com/105599518749691/" target = "_blank"><FacebookIcon /></a>
                            <a className= "details choir__link" href="https://instagram.com/luminischoir?igshid=YmMyMTA2M2Y=" target = "_blank"><InstagramIcon /></a>
                            </div>
                        </div>
                        <div className="footer__section footer__section2">
                            <h6 className="footer__headers">Where to find us:</h6>
                            <p className= "details location">333 Crosby Ave, Richmond Hill</p>
                            <p className= "details location__postal--code">St.Matthew's United Church</p>
                            <p className= "details phone">Phone: 647-984-3849</p>  
                        </div>
                    </div>
        </footer>
    </div>
    );
}

export default Footer;
