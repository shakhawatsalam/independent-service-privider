import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { name, picture } = service;
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <div className="col carded">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button onClick={() => navigate('/checkout')} className='btn btn-success'>Checkout </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Service;