import React from 'react';
import Elena1 from './assets/elena_pic.jpeg';
import './Elena.css';
import Nav from './Nav';
import Footer from './Footer';

const Elena = () => {
  return (
    <div>
      <div id="fullPageImageElena">
        {Elena1}
      </div>
      <Nav />
      <div className="elena">
        <div className="elena__img--wrapper">
          <img className="elena__img" src={Elena1} alt="Elena" />
        </div>
        <div className="elena__info">
          <div className="elena__heading--wrapper">
            <h3 className="elena__heading">Meet our Choirmeister</h3>
          </div>
          <p className="about__para">Elena is a passionate and dedicated musician, whose fascination with music started at a young age...</p>
          {/* ... (rest of the content) */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Elena;
