import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('https://wicked-fangs-92454.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div id="services">
        <h2 className="text-primary mt-5">Our services</h2>
        <div className="service-container">
            {
                offers.map(offers => <Service key={offers._id} offers={offers}/>)
            }
        </div>
    </div>
    );
};

export default Services;