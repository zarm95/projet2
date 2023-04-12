import React from "react";
import Stars from "./Stars";
import { Button } from "react-bootstrap";

const Villager = ({ villager, handleAddArticle }) => {
  return (
    <>
      <h3> name : {villager["file-name"]}</h3>
      <h4> price: {villager.price},00$</h4>
      <img src={villager.image_uri} alt="" />

      <Stars note={villager.note} />
      <Button
        onClick={() => handleAddArticle(villager)}
        size="lg"
        variant="info"
      >
        Ajouter
      </Button>
    </>
  );
};

export default Villager;
