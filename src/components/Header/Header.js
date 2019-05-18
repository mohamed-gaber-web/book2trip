import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 ">
                        <ul className="list-unstyled info-top">
                            <li>Faq</li>
                            <li> Contact Us </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <ul className="list-unstyled social-top">
                            <li><NavLink to="#" className="lang"> Language </NavLink>  </li>
                            <li><NavLink to="#"> <i className="fab fa-facebook-f"></i> </NavLink></li>
                            <li><NavLink to="#"> <i className="fab fa-twitter"></i></NavLink></li>
                            <li><NavLink to="#"> <i className="fab fa-google-plus-g"></i> </NavLink></li>
                            <li><NavLink to="#"> <i className="fab fa-instagram"></i> </NavLink></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;