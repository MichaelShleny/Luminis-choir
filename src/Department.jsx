import React from 'react';
import './Department.css';
import { Link } from 'react-router-dom';
import Elena1 from './assets/elenaFinal.png';
import Danil1 from './assets/danilFinal.png';

const Department = () => {
  return (
    <div>
      <div id="fullPageImage">
        {/* Include your full-page image here */}
      </div>
      <div section id="department">
        <div className="leader__section">
          <div className="danil__section">
            <div className="elena__img--wrapper-department dada">
              <img className="elena__img--department elena__img--department--danil" src={Danil1} alt="Danil Biba" />
            </div>
            <span className="lead__name">
              <Link style={{ textDecoration: "none" }} to="/danil"><p className="lead__color">Read more about Danil Biba</p></Link>
            </span>
            <div className="titles">
              <p className="lead_titles">Artistic Director</p>
            </div>
          </div>
          <div className="danil__section part2">
            <div className="elena__img--wrapper-department">
              <img className="elena__img--department" src={Elena1} alt="Elena Shlenskiy" />
            </div>
            <span className="lead__name">
              <Link style={{ textDecoration: "none" }} to="/Elena"><p className="lead__color">Read more about Elena Shlenskiy</p></Link>
            </span>
            <div className="titles">
              <p className="lead_titles">Choirmeister</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
