import React from 'react';
import './Banner.css';

const Banners = () => {
    return (
        <div className="banners">
            <ul className="list-unstyled">
                <li> <img src={require('../../assets/images/pic1.png')} alt="logo" /> </li>
                <li> <img src={require('../../assets/images/pic2.png')} alt="logo" /> </li>
                <li> <img src={require('../../assets/images/pic3.png')} alt="logo" /> </li>

            </ul>
        </div>
    );
}

export default Banners;