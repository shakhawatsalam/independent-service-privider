import React from 'react';
import profile from '../../Images/_MG_3987.png'
import './About.css'


const About = () => {
    return (
        <div className='d-flex align-items-center flex-column class'>
            <div className='profile'>
                <img src={profile} alt="" />
            </div>
            <h1>About My Goal</h1>
            <p className='fw-bold w-50'>I Want to be a very Good Web Developer. Because I am passionate about It. I am Enjoying The process learning. I learned HTML, CSS , JavaScript, AND REACT ETC</p>
        </div>
    );
};

export default About;