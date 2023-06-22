import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Services/firebase";
import CheckoutForm from "../CheckouForm/CheckouForm";



const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const { carrito, vaciarCarrito } = useContext(CartContext);


 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const order = {
        comprador: {
          nombre,
          telefono,
          email,
        },
        items: carrito,
        fecha: new Date(),
      };

      const docRef = await addDoc(collection(db, "ordenes"), order);
      console.log("Orden creada con ID:", docRef.id);

      vaciarCarrito();

      setNombre("");
      setTelefono("");
      setEmail("");
      setOrdenId(docRef.id);

      setLoading(false);
    } catch (error) {
      alert("Error al crear la orden:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="id-compra"> Se está generando su orden...</h1>;
  }

  if (ordenId) {

    return <h2 className="id-compra">Este el tu comprobante de Compra: {ordenId}</h2>;
  }

  return (
    <div className="containe-checkout">
      <img  className="boca-checkout" src="../../../public/boca.png" alt="boca" />
      <h1 className="title">Checkout</h1>
      <h2 className="title">Ingresa tus datos parara finalizar compra</h2>
      <CheckoutForm
        handleFormSubmit={ handleFormSubmit}
        nombre={nombre}
        setNombre={setNombre}
        telefono={telefono}
        setTelefono={setTelefono}
        email={email}
        setEmail={setEmail}
      />   
       
    </div>
  );
};

export default Checkout;

