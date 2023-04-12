import React from "react";
import logo from "../assetts/logo1.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  const handlePanier = () => {
    navigate(`/Panier`);
  };
  const cagnotte = 1000;
  return (
    <div className="Header">
      <img className="image" src={logo} alt="" />
      <h1>boutique nook</h1>
      <span>{cagnotte}$</span>
      <Button onClick={() => handlePanier()} size="lg" variant="info">
        Panier
      </Button>
    </div>
  );
};

export default Header;
