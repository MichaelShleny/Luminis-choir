import React from 'react';
import Picture from './assets/Luminis Choir.png'
import { Link } from 'react-router-dom'
import './App.css'
import Christmas from './assets/christmas.png'
import ChristmasFinal from './assets/christmasfinal.jpg'
import ChoirNews2 from './assets/choirnews2.jpg'
import ChoirNews1 from './assets/newschoral.jpg'
import LuminisHolidays from './assets/LuminisHolidays1.png'
import Divina from './assets/divina.png'
import Spring from './assets/spring-treasures-email.png'
import Holidays from './assets/holidays2024.png'
import Nav from './Nav'
import './NewSeason.css'
import Sponsor from './Sponsor'
import Footer from './Footer'
import { useEffect } from 'react';


const NewSeason = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <div>
            <Nav/>
            <div className="news__info"> 
                <div className="newsTitle">Upcoming events!</div>
            </div>
            <div className = "season__concert--wrapper">
                    <div className="news__img--wrapper">
                        <img className="news__img" src={Holidays} />
                    </div>
                    <div className="concert__info">
                        <div className = "concert__date">THURSDAY, DECEMBER 12, 2024 AT 7:30PM</div>
                        <div className = "concert__location">Fairview Theatre, Fairview Public Library, 25 Fairview Mall Drive, North York</div>
                        <div className = "concert__name">Luminis Holidays</div>
                        <div className = "concert__singers">Join Luminis choir for a special Holiday Concert!</div>
                        <div className = "concert__singers">With Special Guests</div>
                        <div className = "concert__singers">Anastasia Pogorelova</div>
                        <div className = "concert__singers">Nikki Clarke</div>
                        <div className = "concert__singers">and Allegro Academy of Music Children ensemble</div>

                        <div className="news__button--wrapper1">
                            <a className = "news__button" href = "https://www.eventbrite.ca/e/luminis-holidays-choral-concert-tickets-1046394874237?fbclid=IwZXh0bgNhZW0CMTEAAR2sQ3puqFuayP6p5XOhzY7PPZ8ldR6DxFOinHdkvum8goSuSzsN_nvikEM_aem_HA5OMWq6ZqGV0anyrAbAWQ" target = "_blank" style={{ textDecoration: "none" }} >Tickets</a>
                        </div>
                    </div>
                </div>
            
    
            <div className="news__info">
                <div className="newsTitle">Previous Events</div>
            </div>
            <section id="newSeason">
            <div className = "season__concert--wrapper">
                    <div className="news__img--wrapper">
                        <img className="news__img" src={Spring} />
                    </div>
                    <div className="concert__info">
                        <div className = "concert__date">SATURDAY, MAY 11, 2024 AT 7:30PM</div>
                        <div className = "concert__location">St. Mary's Anglican Church, 10030 Younge St, Richmond Hill</div>
                        <div className = "concert__name">Spring Treasures</div>
                        <div className = "concert__singers">Chorus York</div>
                        <div className = "concert__singers">Jennifer Min-Young Lee, Artistic Director</div>
                        <div className = "concert__singers">Luminis Choir</div>
                        <div className = "concert__singers">Danil Biba, Artistic Director</div>
                        <div className="news__button--wrapper1">
                            <a className = "news__button" href = "https://www.chorusyork.ca/event/spring-treasures/" target = "_blank" style={{ textDecoration: "none" }} >Tickets</a>
                        </div>
                    </div>
                </div>
            <div className = "season__concert--wrapper">
                    <div className="news__img--wrapper">
                        <img className="news__img" src={Divina} />
                    </div>
                    <div className="concert__info">
                        <div className = "concert__date">SATURDAY, NOVEMBER 25, 2023 AT 7:30PM</div>
                        <div className = "concert__location">181 Bay St, Toronto, ON M5J, Canada</div>
                        <div className = "concert__name">Luminis Meets Divina Dali</div>
                        <div className = "concert__singers">Join us for a special evening of art, wine and music</div>
                        <div className="news__button--wrapper1">
                            <a className = "news__button" href = "https://shorturl.at/jktHX" target = "_blank" style={{ textDecoration: "none" }} >Tickets</a>
                        </div>
                    </div>
                </div>
                <div className = "season__concert--wrapper">
                    <div className="news__img--wrapper">
                        <img className="news__img" src={LuminisHolidays} />
                    </div>
                    <div className="concert__info">
                        <div className = "concert__date">SATURDAY, DECEMBER 2, 2023 AT 7:30PM</div>
                        <div className = "concert__location">York Woods Library Theatre, 1785 Finch Ave W, North York, ON</div>
                        <div className = "concert__name">Luminis Holidays</div>
                        <div className = "concert__singers">Join us for a delightful holiday concert of diverse choral repertoire
                        to embrace the festive spirit</div>
                        <div className = "concert__singers">Danil Biba, conductor</div>
                        <div className = "concert__singers">Luminis Choir Singers</div>
                        <div className = "concert__singers">And Many Surprises</div>
                        <div className="news__button--wrapper1">
                            <a className = "news__button" href = "https://www.eventbrite.ca/e/luminis-holidays-tickets-736658534507?aff=ebdssbdestsearch" target = "_blank" style={{ textDecoration: "none" }} >Tickets</a>
                        </div>
                    </div>
                </div>
                
                <div className = "season__concert--wrapper">
                    <div className="news__img--wrapper">
                        <img className="news__img" src={ChoirNews1} />
                    </div>
                    <div className="concert__info">
                        <div className = "concert__date">FRIDAY, JUNE 23, 2023 AT 7:30PM</div>
                        <div className = "concert__location">Richmond Hill United Church 10201 Younge St, L4C 3B2</div>
                        <div className = "concert__name">Glowing Hearts of Richmond Hill</div>
                        <div className = "concert__singers">We are excited to celebrate the milestone anniversary of Richmond Hill, 
                        and commemorate its history, strengthen our sense of community, and look forward to its 
                        future! <br></br>Come to celebrate 150th year of Richmond Hill with us!<br></br><br></br></div>
                        <div className = "concert__singers">Danil Biba, conductor</div>
                        <div className = "concert__singers">Luminis Choir Singers</div>
                        <div className = "concert__singers">Anastasia Pogorelova</div>
                        <div className="news__button--wrapper1">
                            <a className = "news__button" href = "https://www.eventbrite.ca/e/luminis-choir-celebrates-richmond-hill-150th-birthday-tickets-633788347007" target = "_blank" style={{ textDecoration: "none" }} >Tickets</a>
                        </div>
                    </div>
                </div>
                <div className = "season__concert--wrapper">
                    <div className="news__img--wrapper">
                        <img className="news__img" src={ChristmasFinal} />
                    </div>
                    <div className="concert__info">
                        <div className = "concert__date">SATURDAY, DECEMBER 10, 2022 AT 7:30PM</div>
                        <div className = "concert__location">Richmond Hill United Church 10201 Younge St, L4C 3B2</div>
                        <div className = "concert__name">Luminis Christmas</div>
                        <div className = "concert__singers">Danil Biba, conductor</div>
                        <div className = "concert__singers">Luminis Choir Singers</div>
                        <div className = "concert__singers">Anastasia Pogorelova, Hassiba Trio</div>
                        <div className="news__button--wrapper1">
                            <a className = "news__button" href = "https://www.eventbrite.ca/e/luminis-christmas-tickets-458801536747" target = "_blank" style={{ textDecoration: "none" }} >Tickets</a>
                        </div>
                    </div>
                </div>
                <div className = "concert__warning--wrapper">
                   <p className = "warning__para"> Please note: All concert programs are subject to change, including repertoire, performers and dates.</p>
                </div>
                
            </section>
            <Sponsor />
            <Footer/>
        </div>
    );
}

export default NewSeason;