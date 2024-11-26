import React from 'react';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import './Milestones.css';

const Milestones = () => {
  return (
    <div>
      <Nav />
      <section className="choir-section">
        <div className="choir-container">
          <h1 className="choir-title">Luminis Choir</h1>
          <p className="choir-subtitle">Official Choir of the International Peace Festival</p>

          <div className="choir-content">
            <p className="choir-description">
              The Luminis Choir is proud to have achieved significant milestones, having organized 
              numerous concerts, fundraising drives, festivals, and private and local events. As 
              the official choir of the International Peace Festival (IPF), Luminis opens the festival 
              every September 21 on the International Day of Peace and performs IPF’s Peace Anthem 
              <span className="choir-highlight"> We are One (We are the Rainbow)</span>, 
              specifically composed for the IPF by renowned composer and music genius John Cameron, 
              along with several other selections.
            </p>
            <p className="choir-description">
              As Music Ambassador for IPF’s Music For Peace International (Choral Music Wing), the 
              Luminis Choir is dedicated to music diplomacy as a particular form of cultural diplomacy 
              immersed in a universal language that breaks down language barriers and cultural differences, 
              promoting cooperation, understanding, and mutual respect among peoples, communities, and 
              nations, and thus contributing to a culture of peace.
            </p>
            <p className="choir-description">
              To learn more about Luminis Choir and its role in the International Peace Festival, 
              visit the official profile at{' '}
              <a
                href="https://www.internationalpeacefestival.net/profiles/luminis-choir"
                target="_blank"
                rel="noopener noreferrer"
                className="choir-link"
              >
                International Peace Festival Profile
              </a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Milestones;
