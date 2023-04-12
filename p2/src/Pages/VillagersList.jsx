import React, { useEffect, useState } from "react";
import Villager from "../Components/Villager";
import { getVillagers } from "../services/api-calls";
import "bootstrap/dist/css/bootstrap.min.css";

const VillagersList = ({ handleAddArticle }) => {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers().then((VillagerData) => {
      setVillagers(
        VillagerData.map((villager) => ({
          ...villager,
          note: Math.floor(Math.random() * 2) + 3,
          price: Math.floor(Math.random() * 1000) + 2000,
        })).slice(0, 5)
      );
    });
  }, []);

  return (
    <>
      <h2>Village List </h2>
      {villagers.map((villager) => (
        <>
          <Villager
            key={villager.id}
            note={villager.note}
            villager={villager}
            handleAddArticle={handleAddArticle}
          />
        </>
      ))}
    </>
  );
};

export default VillagersList;
