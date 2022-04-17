import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, picture } = service;
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <div class="col carded">
                <div class="card h-100">
                    <img src={picture} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button className='btn btn-success'>Checkout </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Service;