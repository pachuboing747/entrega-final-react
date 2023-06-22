import { useEffect, useState } from "react";
import { getProduct} from "../../componentes/Services/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer =() =>{
    const [item, setItem] = useState(null)
    const id = useParams().id;

    useEffect(()=>{
        getProduct((id))
        .then((res)=>{
            setItem(res);
        })

    }, [id])


    return(
        <div className="container-item-detail-container">
        {item && <ItemDetail item={item}/>}
        </div>
    )
   
}

export default ItemDetailContainer