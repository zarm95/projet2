import React, { useState } from "react";
import Stars from "../Components/Stars";

const Panier = ({ articles, setArticles }) => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const handleDelete = (articletodelate) => {
    const articleCopy = articles.filter(
      (article) => article.id !== articletodelate.id
    );

    setArticles(articleCopy);
  };
  const handelMinus = (article) => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
    const total1 = total - article.price;
    setTotal(total1);
  };
  const handlePlus = (article) => {
    setQuantity(quantity + 1);
    const total1 = total + article.price;
    setTotal(total1);
  };

  return (
    <div>
      <h1>ceci est un panier</h1>
      {articles?.map((article) => (
        <>
          <h1>{article.price}</h1>
          <h2>{article["file-name"]}</h2>
          <img src={article.image_uri} alt="" />
          <h2>{article.img}</h2>
          <Stars note={article.note} />
          <button onClick={() => handlePlus(article)}>+</button>
          <span>{quantity}</span>
          <button onClick={() => handelMinus(article)}>-</button>
          <span>{total}</span>
          <button key={article.cle} onClick={() => handleDelete(article)}>
            delete
          </button>
        </>
      ))}
    </div>
  );
};

export default Panier;
