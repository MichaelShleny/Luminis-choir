import React, { useState, useLayoutEffect, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MdClose } from 'react-icons/md';
import '../App.css';
import L1 from '../assets/L1.jpg';
import Lum2 from '../assets/Lum2-min.jpg';
import Lum2try from '../assets/lum2try.jpg';
import Lum3 from '../assets/Lum3-min.jpg';
import Lum4 from '../assets/Lum4-min.jpg';
import Lum5 from '../assets/Lum5-min.jpg';
import Lum5try from '../assets/lum5try.jpg'
import Lum6 from '../assets/Lum6-min.jpg';
import Luminisforest from '../assets/luminisforest.jpeg';
import Luminissing from '../assets/luminissing.jpeg';
import Nav from '../Nav'

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 0 });
  }, []);

  const [selectedImg, setSelectedImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModalOpen(false);
  };

  return (
    <div>
      < Nav />
       {/* Include your full-page image here */}
       <section id="gallery"> 
        <div className="container">
          <div className="row">
            <h4 data-aos="flip-left" >Gallery</h4>
            <div className={`full-img ${modalOpen ? 'open' : ''}`} id="fullImgBox">
              {selectedImg && (
                <>
                  <span onClick={closeModal}>
                    <MdClose />
                  </span>
                  <img src={selectedImg} id="fullImg" alt="Enlarged" />
                </>
              )}
            </div>
            <div data-aos="fade-up" className="img__collection">
              <img className="gallery__img" src={L1} onClick={() => openModal(L1)} />
              <img className="gallery__img" src={Lum2try} onClick={() => openModal(Lum2)} />
              <img className="gallery__img" src={Lum3} onClick={() => openModal(Lum3)} />
              <img className="gallery__img" src={Lum4} onClick={() => openModal(Lum4)} />
              <img className="gallery__img" src={Lum5try} onClick={() => openModal(Lum5)} />
              <img className="gallery__img" src={Lum6} onClick={() => openModal(Lum6)} />
              <img className="gallery__img" src={Luminisforest} onClick={() => openModal(Luminisforest)} />
              <img className="gallery__img" src={Luminissing} onClick={() => openModal(Luminissing)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
