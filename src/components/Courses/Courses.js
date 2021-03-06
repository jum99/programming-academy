import React, { useEffect, useState } from 'react';
import './Courses.css';

//------- Courses section and fetch json fakedata ------//
const Courses = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <div className="d-flex mt-5 justify-content-center">
                <h1 className='programming' >Our Courses</h1>
            </div>

            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {details.map(detail => <div className="col" key={detail.key} >
                        <div className="card h-100 hover">
                            <img src={detail.img} className="rounded-start w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{detail.name}</h5>
                                <p className="card-text">{detail.description}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <h3 className="card-text"> ${detail.price}</h3>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div >
        </div>
    );
};

export default Courses;