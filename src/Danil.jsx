import React from 'react';
import Danil1 from './assets/danil_pic.jpeg'
import './Danil.css';
import Nav from './Nav'


const Danil = () => {
    return (
        <div>
            <Nav />
            <div className="danil">
                <div className="elena__img--wrapper">
                    <img className="elena__img" src={Danil1} />
                </div>
                <div className="elena__info">
                    <h3 className="elena__heading">Meet our Art Director</h3>
                    <p className="elena__para">Danil’s interest in choral music started in his
                        childhood. He graduated with honours from High School of Music, Minsk,
                        with a Choir Conductor diploma, and went on to pursue his career in conducting,
                        playing piano and organ, and composing his own arrangements for choir. </p>
                    <p className="elena__para">With a Bachelor’s degree from Minsk Conservatory of Music,
                        and Master’s from Dresden University, Germany, Danil is an accomplished musician,
                        proficient in different genres. He enjoys working with students of different ages
                        and abilities, both individually and in choir setting. </p>
                    <p className="elena__para">In addition to many teaching and conducting experiences
                        in Belarus, Canada and Germany, Danil is also a piano player and co-founder of Trio
                        Classic Hassiba. Since founding Luminis, he had brought in the atmosphere of dedication,
                        accomplishment and passion for music in our newly founded Luminis Choir!</p>
                </div>
            </div>
        </div>
    );
}

export default Danil;