import React from 'react';
import './Footer.css';

//------ footer section ------//
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="d-flex justify-content-center text-center">
                    <div>
                        <h2 className="">Our Contacts:</h2>
                        <br />
                        <h5>+302-88-909-444</h5>
                        <p>
                            3rd Floor, Al Hamra Shopping City, Zindabazar
                            <br />
                            Sylhet 3100, Bangladesh.
                        </p>
                    </div>
                </div>
                <br />
                <p className="mt-3 text-center">
                    <small>© Programming Academy 2021, All rights reserved.</small>
                </p>
            </div>
        </div>

    );
};

export default Footer;