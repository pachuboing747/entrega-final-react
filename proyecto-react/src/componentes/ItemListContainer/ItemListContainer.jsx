import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { requestData } from "../Services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [lista, setLista] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState("productos");

  useEffect(() => {
    requestData().then((respuesta) => {
      if (categoria) {
        setLista(respuesta.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setLista(respuesta);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList lista={lista} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
