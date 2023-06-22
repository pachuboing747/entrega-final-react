const ItemCount = ({cantidad, handleSumar, handleRestar, handleAgregar}) =>{

    return(
        <div className="contador">
            <div className="botones-contador">
                <button className="btn-count" onClick={handleRestar}>-</button>
                <h4 className="numero-contador">{cantidad}</h4>
                <button className="btn-count" onClick={handleSumar}>+</button>
            </div>
            <div className="btn-agregar-carrito">
                <button className="btn-agregar" onClick={handleAgregar}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
    
}
export default ItemCount