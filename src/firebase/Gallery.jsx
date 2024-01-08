import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Boys from '../assets/boys_pic.png'
import Girls from '../assets/girls_pic.jpeg'
import Choir from '../assets/choir_pic.jpeg'
import Boys2 from '../assets/boys_pic2.jpeg'
import Girls2 from '../assets/girls_pic2.jpeg'
import Blue1 from '../assets/luminisblue1.jpg'
import Blue2 from '../assets/luminisblue2.jpg'
import Blue3 from '../assets/luminisblue3.jpg'
import Luminis from '../assets/Luminis Choir.png'
import Luminissing from '../assets/luminissing.jpeg'
import Luminisforest from '../assets/luminisforest.jpeg'
import '../App.css'
import { useState } from 'react';
import { MdClose } from "react-icons/md"
import { useEffect } from 'react';

const Gallery = () => {

  useEffect(() => {
    Aos.init({ duration:3000 })
}, []);

const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

    return (
        <div>
            <section id="gallery">
                <div className="container">
                    <div className="row">
                        <h4 data-aos = "flip-left">Gallery</h4>
                        <div className="full-img" id="fullImgBox">
                            <img src={Choir} id="fullImg" />
                            <span onClick={() => closeMenu()}>X</span>
                        </div>
                        <div data-aos = "fade-up" className="img__collection">
                            <img className="gallery__img" src={Choir} onClick={() => closeMenu()} />
                            <img className="gallery__img" src={Girls} onClick={() => closeMenu()} />
                            <img className="gallery__img" src={Luminisforest} onClick={() => closeMenu()} />
                            <img className="gallery__img" src={Blue1} onClick={() => closeMenu()} />
                            <img className="gallery__img" src={Luminissing} onClick={() => closeMenu()} />
                            <img className="gallery__img" src={Blue3} onClick={() => closeMenu()} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery;
