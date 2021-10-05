import React from 'react';
import './NotFound.css';

//------ NotFound section ------//
const NotFound = () => {
    return (
        <div className="notFound">

            <div className="page-wrap d-flex flex-row align-items-center mt-5">
                <div className="container mt-5">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-12 text-center mt-5">
                            <span className="display-1 d-block text-black fs-1 fw-bolder">404</span>
                            <div className="mb-4 lead text-black fs-2 fw-bold">The page you are looking for was not found.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;