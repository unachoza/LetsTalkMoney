import React from 'react';
import LOGO from "../../Assets/LTMLogo.png"
import './Home-page.styles.css'

const HomePage = () => {
  return (
   <div className="home-page">
    <img src={LOGO} class="logo" alt="company logo" />
    <div className="company-title">Let's Talk Money</div>
   
    </div>
  );
};

export default HomePage;