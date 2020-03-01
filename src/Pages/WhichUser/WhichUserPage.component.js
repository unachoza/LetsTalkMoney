import React from 'react';
import Button from '../../Components/Button/Button.component'
import { Link } from 'react-router-dom';

const WhichUserPage = () => {
  return (
   <div className="WhichUser-page" style={{display: "flex",
    height: "80vh",
    width: "70%",
    margin: "auto",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"}}>
    <Link to="/survey" style={{textDecoration: "none"}}><Button props="click">Know Your Worth</Button>
    </Link>
    <Link to="/survey" style={{textDecoration: "none"}}><Button props="click">Looking to Negotiate</Button>
    </Link>
   
    </div>
  );
};

export default WhichUserPage;