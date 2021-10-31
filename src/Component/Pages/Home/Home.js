import React, { useEffect, useState } from 'react';
import './Home.css'
import res1 from '../../../Image/0011.jpg'
import res2 from '../../../Image/022.jpg'
import res3 from '../../../Image/066.jpg'
import res4 from '../../../Image/077.jpg'
import res5 from '../../../Image/088.jpg'
import video from '../../../video/Motorbike delivery food in Kuwait.mkv'
import banner from '../../../Image/Online-delivery-1.png'
import Service from '../Service/Service';
const Home = () => {
    const [offers,setOffers]=useState([]);
    useEffect (()=>{
        fetch('https://wicked-fangs-92454.herokuapp.com/offers')
        .then(res=>res.json())
        .then (data =>setOffers(data))
    },[])
    return (
        <div>
            <div className=" home-banner">
                <div className="row">
                    <div className="col header-left">
                    <h1>Order Healthy And Fresh Food Any Time</h1>
                    <p>Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                    <h3>Popopular Restaurant</h3>
                    <small className="restaurant">
                    <img src={res1} alt="" />
                    <img src={res2} alt="" />  
                    <img src={res3} alt="" />  
                    <img src={res4} alt="" />  
                    <img src={res5} alt="" />
                    </small>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div>
            <div  className="service-container">
                {
                     offers.map(offers =><Service key={offers._id} offers={offers}/>)
                }
            </div>
            <div className="row order-banner">
                <div className="col order-banner-left">
                
                <h1>Get Your Order 24/7 Right At Your Doorsteps</h1>
                <p>Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes</p>
                <button className="btn btn-warning">order now</button>
                <button className="btn btn-dark">search</button>
                </div>
                <div className="col">
                <img src={banner} alt="" />
                </div>
            </div>
            <div>
                <video src={video}></video>
            </div>
        </div>
    );
};

export default Home;