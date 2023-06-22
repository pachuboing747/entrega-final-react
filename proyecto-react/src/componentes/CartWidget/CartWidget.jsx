import { Link } from "react-router-dom"
import image from "./image/carro.svg"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"


const  CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CartContext)

  

    return (

        cantidadEnCarrito() === 0 ?(
        <div className="/carrito">
        <Link to="carrito">
        <img className="cart" src={image} alt="carro"/>
        </Link>
    </div>
    )
    :
    (
        <div className="/carrito">
            <Link to="carrito">
            <img className="cart" src={image} alt="carro"/>
            <p className="carrito-numero"> {cantidadEnCarrito()}</p>
            </Link>
        </div>
    )   
    )
}

export default CartWidget