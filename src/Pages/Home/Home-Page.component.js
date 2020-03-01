import React from 'react';
import LOGO from "../../Assets/LTMLogo.png"
import Button from '../../Components/Button/Button.component'
import { Link } from 'react-router-dom';
import './Home-page.styles.css'

const HomePage = () => {
  return (
   <div className="home-page">
    <img src={LOGO} class="logo" alt="company logo" />
    <div className="company-title">Let's Talk Money</div>
    <Link to="/whichUser" style={{textDecoration: "none"}}><Button props="click">Let's Go</Button>
    </Link>
   
    </div>
  );
};

export default HomePage;