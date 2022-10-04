import React from 'react'
import Header from './Header'
import About from './About'
import Gallery from './firebase/Gallery'
import Footer from './Footer'
import Sponsor from './Sponsor'
import Department from './Department'

const Home = () => {
    return(
    <><Header /><About />< Department /><Gallery /><Sponsor /> <Footer /></>
    )
}
export default Home

