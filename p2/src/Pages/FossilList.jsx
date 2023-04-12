import React, { useEffect, useState } from "react";
import Fossil from "../Components/Fossil";
import { getFossils } from "../services/api-calls";

const FossilList = ({ handleAddArticle }) => {
  const [fossils, setFossils] = useState([]);

  useEffect(() => {
    getFossils().then((FossilData) => {
      setFossils(
        FossilData.map((fossil) => ({
          ...fossil,
          note: Math.floor(Math.random() * 3) + 3,
          price: Math.floor(Math.random() * 1000) + 2000,
        })).slice(0, 5)
      );
    });
  }, []);

  //console.log(fossils);
  return (
    <>
      <h2>Fossil List Page</h2>
      {fossils.map((fossil) => (
        <>
          <Fossil
            key={fossil.id}
            note={fossil.note}
            villager
            fossil={fossil}
            handleAddArticle={handleAddArticle}
          />
        </>
      ))}
    </>
  );
};

export default FossilList;
