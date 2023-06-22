import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(cartInicial)

  const agregarAlCarrito = (item, cantidad) => {
  const itemAgregado = { ...item, cantidad };
  
  const nuevoCarrito = [...carrito];
  const isInCart = nuevoCarrito.find((item) => item.id === itemAgregado.id);
  
  if (isInCart) {
    const cantidadTotal = isInCart.cantidad + cantidad;
    isInCart.cantidad = cantidadTotal;
  } else {
    nuevoCarrito.push(itemAgregado);
  }
  setCarrito(nuevoCarrito);
};


  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const removeItem = (itemId) => {
    const cartUpdated = carrito.filter((prod) => prod.id !== itemId);
    setCarrito(cartUpdated);
  };
  

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
