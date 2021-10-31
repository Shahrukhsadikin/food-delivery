import React, {useState,useEffect} from 'react';
import './ClientOrder'
const ClientOrder = () => {
    const [offers,setOffers] =useState([]);

    useEffect (()=>{
        fetch('https://wicked-fangs-92454.herokuapp.com/offers')
        .then (res =>res.json())
        .then (data =>setOffers(data))
    })
    const heandledelete =id =>{
        const url=(`https://wicked-fangs-92454.herokuapp.com/offers/${id}`)
            fetch(url,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                if (data.deletedCount){
                    const remaining= offers.filter(offers =>offers._id!== id);
                setOffers(remaining)
                }
            })
    }
    return (
        <div>
            {
                offers.map(offers => <div className="service-container" key={offers._id}>
                    <img src={offers.img} alt="" />
                    <h3>{offers.name}</h3>
                    <p>{offers.description}</p>

                    <button onClick={( ) =>heandledelete (offers._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default ClientOrder;