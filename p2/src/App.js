import { Route, Routes } from "react-router-dom";
import Panier from "./Pages/Panier";

import FossilList from "./Pages/FossilList";
import { useState } from "react";
import VillagersList from "./Pages/VillagersList.jsx";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import Filter from "./Components/Filter";
import "./styles/App.css";

function App() {
  async function generateid(article) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(article);
      }, 2000);
    });
  }

  const [articles, setArticles] = useState([]);
  async function handleAddArticle(article) {
    const art = await generateid(article);

    setArticles([...articles, art]);
  }
  return (
    <>
      <Header />
      <Filter />
      <Routes>
        <Route
          path="/fossil"
          element={<FossilList handleAddArticle={handleAddArticle} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/Panier"
          element={<Panier articles={articles} setArticles={setArticles} />}
        />
      </Routes>

      <Routes>
        <Route
          path="/Villager"
          element={<VillagersList handleAddArticle={handleAddArticle} />}
        />
      </Routes>
    </>
  );
}

export default App;
