import React, { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";

const Item = ({ lista }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, lista.img);
    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log("Error getting image URL from Firebase Storage:", error);
      });
  }, [lista.img]);

  return (
    <div className="tarjeta">
      {imageUrl && <img src={imageUrl} alt="Item" />}
      <div className="text-tarjeta">
        <h4>{lista.nombre}</h4>
        <p>Precio: ${lista.precio}</p>
        <Link className="btn-mas" to={`/item/${lista.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;

