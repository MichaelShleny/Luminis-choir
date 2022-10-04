import React from 'react';
import Elena1 from './assets/elena_pic.jpeg'
import './Elena.css';
import Nav from './Nav'


const Elena = () => {
    return (
        <div>
            <Nav />
            <div className="elena">
                <div className="elena__img--wrapper">
                    <img className="elena__img" src={Elena1} />
                </div>
                <div className="elena__info">
                    <div className="elena__heading--wrapper">
                        <h3 className="elena__heading">Meet our Choirmeister</h3>
                    </div>
                    <p className="elena__para">Elena is a passionate and dedicated musician, whose
                        fascination with music started at a young age.
                        She began her music journey in her early years in
                        elementary school with gifted piano and choir programs.
                        Continuing to Music College for four years, Elena acquired
                        her Bachelor of Music as well as her Bachelor’s Degree of Music Education
                        in the Belorussian State Academy of Music in Minsk. </p>
                    <p className="elena__para">Elena’s fascination and passion for choir began in her childhood and
                        continued throughout all her years of study. She worked in professional
                        choirs in Music College, Academy of Music, as well as State Choir of
                        Belorussian University. Her choir went on numerous tours throughout Europe,
                        participating in famous choir festivals, competitions, and concerts.</p>
                    <p className="elena__para">After coming to Canada in 1997, Elena resumed her music career when she opened
                        her private music studio. As a versatile individual, she’s held a number of
                        professional roles, including: piano teacher, accompanist,
                        music theory and history instructor, recital, and music festival organizer.</p>
                </div>
            </div>
        </div>
    );
}

export default Elena;
