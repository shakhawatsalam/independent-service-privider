import React from 'react';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <NavBar></NavBar>
            <div className='header'>
                <div className="content">
                    <h1 className='text'>Hi, I am Amy</h1>
                    <h1 className='text'>Dental Care</h1>
                    <p>We offer a full range of dental, preventative, restorative, & cosmetic services. Book now. Care at Tend isn’t just painless, it’s a pleasure. Book an appointment online today. Full-service dentistry. Emergency appointments. No judgment ever. Insurance accepted. Safety first. State-of-the-art tech.</p>
                    <button className='btn btn-success mt-5'>Get Started</button>
                </div>
                <div className='doctor-img'>
                    <img src="https://images.unsplash.com/photo-1613918108466-292b78a8ef95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="" />
                </div>
            </div>
            <Services></Services>
        </div>
        
    );
};

export default Home;