import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer text-center">
            <img src={require('../../assets/images/footer.png')} alt="footer_image" />
            <ul className="list-unstyled social-top">
                <li><NavLink to="#"> <i className="fab fa-facebook-f"></i> </NavLink></li>
                <li><NavLink to="#"> <i className="fab fa-twitter"></i></NavLink></li>
                <li><NavLink to="#"> <i className="fab fa-google-plus-g"></i> </NavLink></li>
                <li><NavLink to="#"> <i className="fab fa-instagram"></i> </NavLink></li>
            </ul>
        </div>
    );
}

export default Footer;