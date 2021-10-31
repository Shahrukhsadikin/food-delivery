import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, price, description, img } = props.offers;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <h5>Price: {price}</h5>
            <Link to={`/orders/${_id}`}>
                <button className="btn btn-warning">Order {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;