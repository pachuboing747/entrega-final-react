import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link, useNavigate} from "react-router-dom";
import { crearOrden } from "../Services/firebase"

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, removeItem} = useContext(
    CartContext
  );

  const navegacion = useNavigate()

 async function handleConfirm(){
    const orden = {
      items: carrito,
        comprador:{
          nombre:"www",
          email:"wwwwwee",
          telefono:1,  
        },
        fecha:new Date(),
        precio:precioTotal(),
    };

   const id = await crearOrden(orden);
   console.log("respuesta",id);
   navegacion(`/confirmar-compra/${id}`)
}

  const vaciarCart = () => {
    vaciarCarrito();
  };

  const removerItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div className="main-carrito">
      <h1 className="titulo-carrito">Carrito</h1>

      {carrito.map((prod) => (
        <div className="carrito-img" key={prod.id}>
          <img className="" src={prod.img} alt={prod.nombre} />
          <h2 className="yellow">{prod.nombre}</h2>
          <p className="yellow">Precio unitario: ${prod.precio}</p>
          <p className="yellow">Cantidad: {prod.cantidad}</p>
          <button  className="btn-eliminar-cart"onClick={() => removerItem(prod.id)}>Eliminar</button>
          <p className="yellow">Precio Total: ${prod.precio * prod.cantidad}</p>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div className="crear-orden"> 
          <h2 className="final-price">Precio Final: ${precioTotal()}</h2>
          <button className="btn-mas" onClick={vaciarCart}>Vaciar Carrito</button>
          <Link className="btn-mas" to="/Checkout">Crear orden de Compra</Link>
        </div>
      ) : (
        <div className="container-carrito">
          <h2 className="carrito-vacio">El carrito está vacío 😢</h2>
          <Link className="btn-carrito" to="/">Ver Productos</Link>
        </div>
      )}

       
    </div>
  );
};

export default Carrito;
