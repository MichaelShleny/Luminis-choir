import React from 'react';
import './Department.css';
import { Link } from 'react-router-dom'
import  Elena1  from './assets/elena_pic.jpeg'
import  Danil1  from './assets/danil_pic.jpeg'

const Department = () => {
    return (
        <div>
            <div className = "row">
            <div section id="department">
                <div className="leader__section">
                <div className="danil__section">
                        <h6 className="leader__headers">Artistic Director</h6>
                        <div className="elena__img--wrapper-department">
                            <img className="elena__img--department" src={Danil1} />
                        </div>
                        <span className="lead__name">
                            <Link style={{ textDecoration: "none" }} to="/danil"><p className="lead__color">Read more about Danil Biba</p></Link>
                        </span>
                    </div>
                    <div className="elena__section">
                        <h6 className="leader__headers">Choirmeister</h6>
                        <div className="elena__img--wrapper-department">
                            <img className="elena__img--department" src={Elena1} />
                        </div>
                        <span className="lead__name">
                            <Link style={{ textDecoration: "none" }} to="/Elena"><p className="lead__color">Read more about Elena Shlenskiy</p></Link>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Department;
