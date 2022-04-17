import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='text-center'>My Services{services.length}</h1>
        </div>
    );
};

export default Services;