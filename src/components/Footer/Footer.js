import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-container text-start">

                                <div className="icons-container d-flex text-center ">

                                    <div className="icon pe-2">
                                        <i className="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="icon pe-2">
                                        <i className="fab fa-twitter-square"></i>
                                    </div>
                                    <div className="icon pe-2">
                                        <i className="fab fa-instagram-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-youtube-square"></i>
                                    </div>
                                </div>

                                <p className="mt-3">
                                    <small>© Programming Academy 2021, All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-footer-container d-flex justify-content-end">
                                <div className=" ">
                                    <div>
                                        <h2>Our Contacts</h2>
                                        <br />
                                        <h5>+302-88-909-444</h5>
                                        <p>
                                            3rd Floor, Al Hamra Shopping City, Zindabazar
                                            <br />
                                            Sylhet 3100, Bangladesh.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;