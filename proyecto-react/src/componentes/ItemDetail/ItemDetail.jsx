import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) =>{

    const {carrito, agregarAlCarrito} = useContext(CartContext);

    const[cantidad, setCantidad] = useState(1)

    const handleSumar= () => {
       cantidad < item.stock && setCantidad (cantidad + 1)
    }
    const handleRestar = () =>{
        cantidad > 1 && setCantidad (cantidad -1)
    }

  

    return(
        <div className="item-detail">
            <img className="img-item-detail" src={item.img} alt={item.nombre}/>
            <div>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>$ {item.precio}</p>
                <p>Stock: {item.stock}</p>
                
                <ItemCount 
                cantidad = {cantidad}
                inicial ={1} 
                stock={item.stock} 
                handleSumar = {handleSumar}
                handleRestar = {handleRestar }
                handleAgregar={() =>{agregarAlCarrito(item, cantidad)}}
                />


                <div className="continuar-finalizar">
                {
                carrito.length > 0 ?(
                    <Link  className="cart-continuar-finalizar"  to="/carrito">Finalizar Compra</Link>
                ):
                (
                    <Link className="cart-continuar-finalizar"to="/">Continuar Comprando</Link>
                )
                }

                </div>
            </div>
        </div>
    )
}

export default ItemDetail