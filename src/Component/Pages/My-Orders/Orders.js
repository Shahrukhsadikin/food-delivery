import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const { offersId } = useParams();
    const [offers,setOffers]=useState({})
    useEffect (()=>{
        fetch(`http://localhost:5000/offers/${offersId}`)
        .then(res=>res.json())
        .then(data =>setOffers(data))
    },[])
    return (
        <div>
            <div>
                <h2> of:{offers.name}</h2>
            <h2>Ordered: {offersId}</h2>
        </div>
        </div>
    );
};

export default Orders;