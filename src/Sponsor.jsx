import React from 'react';
import './Sponsors.css'
import Sponsor2 from './assets/sponsor2.png'
import Sponsor3 from './assets/sponsor3.png'
import Sponsor4 from './assets/IMG_3353.jpg'

const Sponsor = () => {
    return (
        <div className="sponsors__wrapper">
            <div className="sponsors">
                <h7 className="sponsors__title">THANK YOU TO OUR SPONSORS & PARTNERS </h7>
            </div>
            <div className="sponsors__logo">
                <a href = "https://www.kartina.tv/en" target = "_blank">
                <img className="sponsor" src={Sponsor2} />
                </a>
                <a href="https://www.instagram.com/lapoirecakes/?hl=en" target="_blank">
                    <img className="sponsor sponsor3" src={Sponsor3} />
                </a>
                <a href="https://www.gtaimplant.com/out-team/dr-kirill-khromov" target="_blank">
                    <img className=" sponsor sponsorthin" src={Sponsor4} />
                </a>
            </div>
        </div>
    );
}

export default Sponsor;
