import React from "react";
import { Button } from "react-bootstrap";
import Stars from "./Stars";
const Fossil = ({ fossil, handleAddArticle }) => {
  return (
    <>
      <h4>name:{fossil["file-name"]}</h4>
      <h4>price : {fossil.price},00 $</h4>
      <img src={fossil.image_uri} alt="" />
      <Stars note={fossil.note} />
      <Button onClick={() => handleAddArticle(fossil)} size="lg" variant="info">
        Ajouter
      </Button>
    </>
  );
};

export default Fossil;
