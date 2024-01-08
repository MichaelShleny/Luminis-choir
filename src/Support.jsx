import React from 'react';
import { Link } from 'react-router-dom'
import Luminis from './assets/Luminis Choir.png'
import './ContactUs.css'
import Maps from './assets/mapsnew.png'
import Footer from './Footer'
import Nav from './Nav'
import { useEffect } from 'react';

const Support = () => {    
    return (
        <div>
                <form class = "support__form" action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="XWQACJKJ4Q5SA" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
                </form>
        </div>
    );
}

export default Support;
