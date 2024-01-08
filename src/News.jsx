import Aos from 'aos';
import 'aos/dist/aos.css'
import { React } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import './News.css'
import ChoirNews from './assets/choirnews.jpg'
import { useEffect } from 'react';


const News = () => {

    useEffect(() => {
        Aos.init({ duration:1000 })
    }, []);

    return (
        <div>
            <section  id="news">
                <div className = "trytry">
                    <div className="church__img--wrapper">
                        <img data-aos = "fade-out"className="church__img" src={ChoirNews}></img>
                    </div>
                    <div className="news__info">
                        <div data-aos = "fade-up" className="newsTitle">Upcoming events!</div>
                        <p data-aos = "fade-down" className="news__Describe">Come hear Luminis Choir as you’ve never heard it before.</p>
                        <div data-aos = "fade-out"className="news__button--wrapper">
                            <Link to = "/concert" style={{ textDecoration: "none" }} className="news__button">Details</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default News;