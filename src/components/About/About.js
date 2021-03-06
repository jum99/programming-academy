import React from 'react';
import './About.css';
import image from "../../images/about.jpg";

// -------About section info -----//
const About = () => {
    return (
        <div className="about-container mb-4">
            <div className="d-flex mt-5 justify-content-center">
                <h1 className='programming'>About Us </h1>

            </div>
            <section className="hero-banner py-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={image} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 text-black fs-1 fw-bold">Programming Academy </h1>
                            <p className="lead  my-5 text-black fs-5 fw-normal">We are always working on new content, features, and community events.We have skilled stuff who always dedicated to improve our courses outline.Anyone can easily purchase our courses.We are committed to give you the best knowledge from our courses so that you can find it useful in real life.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;