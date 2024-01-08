import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import Luminis from './assets/Luminis Choir.png'
import Footer from './Footer'
import Nav from './Nav'
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
       Aos.init({ duration:2000 })
    }, []);

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div>
        <Nav/>
        <section id = "about">
            <div className="container">
                <div className="row">
                    <h3 className="about__title">Who we are</h3>
                    <div className= "about__wrapper">
                            <div className= "section__description">
                                <div className = "section__description1">
                                    <h4 className= "about__subtitle">Our Vision</h4>
                                    <p className= "about__para__about "> ● Luminis Choir is 
                                        creating positive and passionate experiences through learning and
                                        performing a wide range of choral music. We believe singing builds 
                                        community and enriches the lives of our singers emotionally,
                                        physically and psychologically.<br/>
                                        ● We value individualism, artistry, humor,
                                        excellence, musical independence, discipline, potential, beauty, high expectations, 
                                        commitment, joy, soaring spirits and the value of every member, past and present. 
                                        <br/> 
                                        ● We are recognised for our energy and passion and are characterized by our sense of
                                        humor and commitment. We are a diverse group of men and women who care passionately 
                                        about the quality of our vocal sound and the professionalism of our performance and 
                                        production values.
                                    </p>
                                </div>
                            </div>
                            <div className= "section__description section__description2">
                                <h4 className= "about__subtitle">Our Mission</h4>
                                <p className= "about__para__about about2">Luminis Choir aims to make a difference 
                                    in the lives of our singers, our audiences and
                                    our community through the power of group singing.
                                </p>
                            </div>  
                            
                            <div className= "section__description section__description3">
                            <h4 className= "about__subtitle">Our Goals</h4>
                            <p className="about__para__about"> Luminis Choir strives to: </p>
                               <p className = "about__para__about para__indent about3"> ● Provide a fun, inclusive and accessible place for singers of all ages and ability to
                                discover the and transformative power of group singing;<br/>
                                ● Continually seek performance opportunities to showcase the work of our
                                members, drive new membership and provide service to our community;<br/>
                                ● Explore new and innovative programming opportunities including repertoire,
                                performance styles, collaboration with other groups such as other choirs, dance

                                troupes, actors, or instrumental ensembles, as well as combined concerts with
                                other visual arts such as film, artwork, or photography;<br/>
                                ● Improve the musical quality and vocal skills of each of our singers through
                                regular rehearsals, workshops, retreats and other avenues;<br/>
                                ● Value each and every member of our choir and the skills and talents that they
                                bring by providing opportunities to showcase and develop these further;<br/>
                                ● Implement technological innovation in all operations of the organization,
                                employing the use of the Internet, e-mail communication, and other technologies
                                to maximum effect in outreach and the marketing of our performances,
                                communication with our supporters, and in the recruitment and retention of
                                participants and volunteers.</p>
                            </div>
                            <div data-aos = "fade-up" className= "section__description section__description4">
                            <h4 className= "about__subtitle">Values</h4>
                            <p className= "about__para__about">Luminis Choir has a range of values that we believe should be upheld by both
                                leadership and choir members.</p>
                                <p className = "about__para__about para__indent about4"> ● Integrity - The values which are promoted as a choir should be matched by
                                members in the way they treat themselves and other members.<br/>
                                ● Transparency - We are open and transparent about our beliefs and mission and
                                in matters of publicity, fundraising, employment, etc.<br/>
                                ● Honesty and Accountability - All leaders and members of Luminis are expected
                                to exercise wisdom, integrity and responsibility in using the talents and resources
                                given to us.<br/>
                                ● Diversity - We recognise and respect that there are varying values and beliefs to
                                which people adhere within our communities and that these should not be at
                                odds with the values of Luminis.<br/>
                                ● Commitment to each other - Luminis cares about its members and is committed
                                to supporting them wherever possible to achieve their personal goals. Where
                                issues may arise within the choir, we will handle them with care and compassion.<br/>
                                ● Equality - All members of our choir are considered equal, regardless of what
                                skills or ability they bring to the group and no single member should ever be
                                made to feel less than that by leadership or other members.<br/>
                                ● Transformation - We believe that everyone should have the opportunity to realize
                                their true potential and thus make a full contribution to the choir and to society in
                                general. A belief that as we grow and change, not only are we transformed, but
                                that the world around us is also impacted.<br/>
                                ● Community - We believe that a healthy community is one in which people feel
                                they belong, and that successful delivery of our mission happens when members
                                feel they fit in and have a role to play within and beyond our membership. The
                                importance of a goal focused organization where a collaborative atmosphere is

                                fostered in order to achieve great things. Creating and encouraging strength in
                                unity as a result.<br/>
                                ● Musical Excellence - We believe that the process of what we do as a choir is as
                                important as our musical product, we are committed to striving for musical
                                excellence and to building the musical ability of all members.<br/>
                                ● Friendship - We find joy in seeing deep relationships forged through the power of
                                song.<br/>
                                ● Commitment - We value commitment from our members to sustaining our vision
                                and upholding our values.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    );
}

export default About;
