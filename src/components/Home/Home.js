import React, { useEffect, useState } from 'react';
import image from '../../images/home.png';
import './Home.css';

//------- home section and load fakedata from json ------//
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const homeCourses = courses.slice(0, 4)
    return (
        <div>

            <section className="hero-section">
                <div className="container" >

                    <div className="row pt-4 pb-4">

                        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center ">
                            <div>
                                <h3 >Learn With</h3>
                                <h1 > <span className='programming fs-1'>Programming</span>  <span className='academy fs-1'>Academy</span>
                                </h1>
                                <p className="text-white fs-5">Programming Academy is a online-based platform where we provide different kind of courses for students who want to build their career with programming.We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so.</p>

                                <button type="button" className="btn my-btn">
                                    Details

                                </button>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ">
                            <img className="w-100" src={image} alt="" />
                        </div>

                    </div>
                </div>
            </section >
            <div className="container mt-5 mb-5" >
                <div className="d-flex mt-5 justify-content-center ">
                    <h1 className='programming' >Highly Rated Courses</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-5 mt-4 text-black  ">

                    {homeCourses.map(homeCourse => <div className="col" key={homeCourse.key}>
                        <div className="home-cards card h-100 g-5 hover">
                            <img src={homeCourse.img} className="home-images rounded-start w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{homeCourse.name}</h5>
                                <p className="card-text">{homeCourse.description}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <h3 className="card-text"> ${homeCourse.price}</h3>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div>
        </div >
    );
};

export default Home;