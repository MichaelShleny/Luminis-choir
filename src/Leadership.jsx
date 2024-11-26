import React from 'react';
import Elena1 from './assets/elenaFinal.png';
import Danil1 from './assets/danilFinal.png';
import Nav from './Nav';
import Footer from './Footer';
import './Leadership.css';
import { useEffect } from 'react';

const Leadership = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        
        <div>
        <Nav />
            <div id="fullPageImageLeadership">
                {/* Include your full-page image here */}
            </div>
            <section id="leadership">
                <div className="leadership__content">
                    <div className="leader__content">
                        <div className="trytry">
                            <div className="try">
                                <div className="elena__wrapper">
                                    <img className="elena__img1" src={Danil1} />
                                </div>
                            </div>
                        </div>
                        <div className="leader__wrap1">
                            <div className="leader__header danil__header">
                                <h9> Meet our Artistic Director, Danil Biba</h9>
                            </div>
                            <p className="para__about">Danil’s interest in choral music started in his
                                childhood. He graduated with honours from High School of Music, Minsk,
                                with a Choir Conductor diploma, and went on to pursue his career in conducting,
                                playing piano and organ, and composing his own arrangements for choir. With a Bachelor’s
                                degree from Minsk Conservatory of Music, and Master’s from Dresden University, Germany,
                                Danil is an accomplished musician, proficient in different genres. He enjoys working with students of different ages
                                and abilities, both individually and in a choir setting. In addition to many teaching and conducting experiences
                                in Belarus, Canada, and Germany, Danil is also a piano player and co-founder of Trio
                                Classic Hassiba. Since founding Luminis, he had brought in the atmosphere of dedication,
                                accomplishment and passion for music in our newly founded Luminis Choir!
                            </p>
                        </div>
                    </div>
                    <div className="leader__content leader__content1">
                        <div className="trytry">
                            <div className="try">
                                <div className="elena__wrapper">
                                    <img className="elena__img1" src={Elena1} />
                                </div>
                            </div>
                        </div>
                        <div className="leader__wrap1">
                            <div className="leader__header">
                                <h9>Meet our Choirmeister, Elena Shlenskiy</h9>
                            </div>
                            <p className="para__about">Elena is a passionate and dedicated musician, whose
                                fascination with music started at a young age.
                                She began her music journey in her early years in
                                elementary school with gifted piano and choir programs.
                                Continuing to Music College for four years, Elena acquired
                                her Bachelor of Music as well as her Bachelor’s Degree of Music Education
                                in the Belorussian State Academy of Music in Minsk. Elena’s fascination and passion for choir began in her childhood and
                                continued throughout all her years of study. She worked in professional
                                choirs in Music College, Academy of Music, as well as the State Choir of
                                Belorussian University. Her choir went on numerous tours throughout Europe,
                                participating in famous choir festivals, competitions, and concerts.
                                After coming to Canada in 1997, Elena resumed her music career when she opened
                                her private music studio. As a versatile individual, she’s held a number of
                                professional roles, including: piano teacher, accompanist,
                                music theory and history instructor, recital, and music festival organizer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Leadership;
