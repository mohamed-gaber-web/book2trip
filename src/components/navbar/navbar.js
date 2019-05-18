import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Routing from './../../Routing/route';
import './Navbar.css';
import Header from '../Header/Header';

const NavBarLink = ({ to, title, icon }) => {
    return (
        <li className='nav-item'>
            <NavLink to={to} className="nav-link" >{title}</NavLink>
            {/* <span> <i class={icon}></i> </span> */}
        </li>
    );

}
class Navbar extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="nav-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 logo">
                                <img src={require('../../assets/images/logo.png')} alt="logo" />
                            </div>
                            <div className="col-md-6">
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <NavBarLink exact to='/' title='Home' icon="fas fa-home" />
                                            <NavBarLink to='/about' title='About Us' icon="fas fa-users" />
                                            <NavBarLink to='/services' title='Our Services' icon="fas fa-calender-week" />
                                            <NavBarLink to='/events' title='New & Events' icon="fas fa-calender-week" />
                                        </ul>

                                    </div>
                                </nav>

                            </div>
                            <div className="col-md-3 person">
                                <ul className="list-unstyled">
                                    <li> <img src={require('../../assets/images/user.png')} alt="logo" /> </li>
                                    <li> Hi <span> User </span> </li>
                                    <li> <i class="fas fa-search"></i> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }


}

export default Navbar;