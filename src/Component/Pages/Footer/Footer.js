import React from 'react';
import './Footer.css'
import logo from '../../../Image/foodota-logo-main.svg'
const Footer = () => {
    return (
        <div>
            <div className="footer-body">
            <div className="row">
                <div className="col">
                <img src={logo} alt="" />
                <p>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                <h6>Phone: <small> +92300-400-2333</small></h6>
                <h6>Email: <small> shahrukh826966@gmail.com</small></h6>
                </div>
                <div className="col">
                <h3>our services</h3>
                <p>offer</p>
                <p>order</p>
                <p>delivary time</p>
                </div>
                <div className="col">
                <h2>Latest News</h2>
                <p>Barbecue Burgers With Sweet Chili Mayo
                    March 19, 2021
                </p>
                <p>Grilled Chicken & Kabab With Tomato Sauce
                    March 19, 2021
                    </p>
                </div>
                <div className="col">
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;