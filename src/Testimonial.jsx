import React from 'react';
import './Testimonial.css'
import Nav from './Nav'
import Footer from './Footer'


const Testimonial = () => {
    return(
        <div>
            < Nav />
            <div class = "testimonials"><h1>Testimonials</h1></div>
	
	        <div class="testimonial">
		        <p class = "testimonial_text">

                    Dear Luminis Choir and Team,

                    <br></br> <br></br>"I am writing to you on behalf of MP Majid Jowhari's office to express our 
                    gratitude for your outreach and to share our appreciation for your mission and work. 

                    <br></br><br></br>We were honored to have attended your Christmas concert and were moved by the joy and 
                    hope that your music brought to the community during these challenging times.

                    <br></br><br></br>MP Jowhari has provided the following recommendation based on his experience of your
                    performances:
                    
                    <br></br><br></br>I am writing this letter to highly recommend the upcoming Luminis concert 
                    at Richmond Hill. Having attended numerous concerts and events, I can confidently say that 
                    Luminis is one of the most talented and captivating music ensembles that I have had the 
                    pleasure of experiencing. Their performances are characterized by a perfect balance of 
                    technical precision and emotional depth, creating a truly unforgettable experience for 
                    audiences of all ages. Each member of the group brings a unique perspective and style to 
                    the ensemble, resulting in a truly dynamic and diverse performance. I strongly encourage 
                    the members of our community to attend the Luminis concert at Richmond Hill. It is an 
                    experience that you will not want to miss. Whether you are a seasoned music lover or just 
                    someone looking for an evening of entertainment, Luminis is sure to exceed your 
                    expectations.
 
                    <br></br><br></br>We are thrilled to hear about the significant milestones that your choir 
                    has achieved in such a short period. Your initiative to bring people together and support 
                    newcomers in Canada through music is truly admirable. We appreciate the opportunity to 
                    support your mission to continue expanding and bringing music and joy to the community.

                    <br></br><br></br>MP Jowhari is always happy to support organizations and initiatives that promote cultural 
                    diversity, community involvement, and well-being in our community. 

                    <br></br><br></br>We would be happy to learn more about your work and explore ways in which we can support 
                    your efforts. Please feel free to provide more information about your organization, 
                    including any specific areas where you need assistance.

                    <br></br><br></br>Thank you again for reaching out, and we look forward to hearing back from you.

                    <br></br><br></br>Warm regards,"
                </p>
		        <span>- Mohi Izadpoor, Office of MP Majid Jowhari </span>
	        </div>

	        <Footer />
        </div>
    );
}

export default Testimonial