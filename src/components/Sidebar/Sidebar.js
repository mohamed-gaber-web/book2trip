import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyled">
                <li className="active"> <i className="fas fa-file-invoice"></i> my wall </li>
                <li> <i className="fas fa-id-card"></i> Profile  </li>
                <li> <i className="fas fa-envelope"></i> Message  <span> 0 </span></li>
                <li> <i className="fas fa-graduation-cap"></i>Colleagues </li>
                <li> <i className="fas fa-graduation-cap"></i>Colleagues requests <span> 6</span></li>
                <li> <i className="fas fa-users"></i>My Group </li>
                <li> <i className="fas fa-comments"></i> Chat </li>
            </ul>
        </div>
    );
}

export default Sidebar;