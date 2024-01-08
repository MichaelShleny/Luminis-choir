import React from 'react';
import { Link } from 'react-router-dom'
import Luminis from './assets/Luminis Choir.png'
import './ContactUs.css'
import Maps from './assets/mapsnew.png'
import Footer from './Footer'
import Nav from './Nav'
import { useEffect } from 'react';


const ContactUs = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
      
    return (
        <div>
            <Nav/>
            <div className="contact--wrapper">
                <div className="row">
                    <div className="contact">
                        <div className="contact__wrapper1">
                            <div className="contact__info">
                                <div className="luminis__header--wrapper">
                                    <h6 className="luminis__header">Luminis Choir</h6>
                                </div>
                                <div className="adress__wrapper">
                                    <p className="address">10201 Yonge St </p>
                                    <p className="address">Richmond Hill, ON</p>
                                    <p className="address">L4C 3B2</p>
                                    <p className="address">Canada</p>
                                </div>
                                <div className="phone">Phone: 647.984.3849</div>
                                <div className="directors">
                                    <div>
                                        <p className="address bold">Danil Biba, Artistic Director</p>
                                        <p className=" gold">danilbiba@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="address bold">Elena Shlenskiy, Choirmeister</p>
                                        <p className=" gold">elena.shlenskiy@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="address bold">Marina Prozorova,  Director of Community Engagment</p>
                                        <p className=" gold">marinaprozorova@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="address bold">Vadim Shlenskiy,  Director of Artistic Operations</p>
                                        <p className=" gold">vadim.shlenskiy@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="map__img--wrapper">
                                <a href = "https://www.google.com/maps/place/Richmond+Hill+United+Church/@43.8759582,-79.4380747,17.75z/data=!3m1!5s0x882b2a4de9bea6d5:0xfcb08cacde62dbe6!4m5!3m4!1s0x0:0xa754259eef66cd8e!8m2!3d43.8760734!4d-79.4380196" target = "_blank">
                                    <img className="maps__img" src={Maps} />
                                </a>
                            </div>
                        </div>
                        <div className="contact__inquiry">
                            <p className="address">For inquiries into Luminis Choir
                                please contact <span className = "gold">luminischoir@gmail.com</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
