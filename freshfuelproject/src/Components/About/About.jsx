import React from 'react';
import './About.css'; // Import the CSS file
import agriculture from '../Static/images/agri.png'
import cooking from '../Static/images/cooking.png'
import magnifying from '../Static/images/magnifying.png'
import home from '../Static/images/home.png'
import delivery from '../Static/images/delivery.png'

export const About = () => {
  return (
  <div className="timeline">
    <div className="container left-container">
      <img src={agriculture} alt="" />
      <div className="text-box">
        <h2>Harvested Fresh</h2>
        <br />
        <small>Stage 1</small>
        <p>
          Local farms harvest fresh produce at peak ripeness, using sustainable practices. Committed to supporting local agriculture....
        </p>
        <span className="left-container-arrow"></span>
      </div>
    </div>
    <div className="container right-container">
      <img src={magnifying} alt="" />
      <div className="text-box">
        <h2>Quality Checked </h2>
        <br />
        <small>Stage 2</small>
        <p>
          Our experts meticulously inspect every item for quality you can trust. Ensuring food safety is our priority.
        </p>
        <span className="right-container-arrow"></span>
      </div>
    </div>
    <div className="container left-container">
      <img src={cooking} alt="" />
      <div className="text-box">
        <h2>Prepped with Care</h2>
        <br />
        <small>Stage 3</small>
        <p>
          Clean, cut, & portioned perfectly - just the way you like it! Save time on meal prep.
        </p>
        <span className="left-container-arrow"></span>
      </div>
    </div>
    <div className="container right-container">
      <img src={delivery} alt="" />
      <div className="text-box">
        <h2> Delivered Chilled.</h2>
        <br />
        <small>Stage 4</small>
        <p>
          Temperature-controlled delivery ensures freshness right to your doorstep. Worry-free delivery experience.
        </p>
        <span className="right-container-arrow"></span>
      </div>
    </div>
    <div className="container left-container">
      <img src={home-delivery} alt="" />
      <div className="text-box">
        <h2>Enjoy at Home</h2>
        <br />
        <small>Stage 5</small>
        <p>
          Enjoy delicious, healthy meals with our convenient home delivery. Freshness delivered, time reclaimed.
        </p>
        <span className="left-container-arrow"></span>
      </div>
    </div>
  </div>

  );
};

export default About;
