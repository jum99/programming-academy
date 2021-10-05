import React from 'react';
import './ContactUs.css';

// ------ Contact information section-------//
const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className=" contact d-flex mt-5 mb-4 justify-content-center ">
                <h1 className='programming' >Contact Us</h1>
            </div>
            <div className="container contact-form pt-4 pb-3">
                <form method="post">
                    <h3 className="text-white text-center">Stay In Touch </h3>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className=" p-2 ">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name:" value="" />
                            </div>
                            <div className="p-2">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email:" value="" />
                            </div>
                            <div className=" p-2">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number:" value="" />
                            </div>
                            <div className=" p-2">
                                <button type="button" className="btn my-btn">Send</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" p-2">
                                <textarea name="txtMsg" className="form-control message" placeholder="Your Message:" value="" ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ContactUs;