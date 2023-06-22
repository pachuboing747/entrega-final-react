import React from "react";
import { Link } from "react-router-dom";
import '../ItemList/loading.css'

const ItemList = ({ lista, titulo }) => {
  if (lista.length === 0) return <section className="dots-container">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</section>

  return (
    <div className="item-list">
      <h2>{titulo}</h2>
      {lista.map((item) => (
        <div className="tarjeta" key={item.id}>
          <img src={item.img} alt="Item" />
          <div className="text-tarjeta">
            <h4>{item.nombre}</h4>
            <p>Precio: ${item.precio}</p>
            <Link className="btn-mas" to={`/item/${item.id}`}>
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
