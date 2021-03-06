import React from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

//------ menubar section -----//
const MenuBar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img d-flex align-center p-2">
                            <img className="logo p-3 w-100" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-center justify-content-end menu-container-list">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/courses" className="items">
                                    <li>Courses</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;