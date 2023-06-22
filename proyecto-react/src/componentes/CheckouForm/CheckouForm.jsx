const CheckoutForm = ({
  handleFormSubmit,
  nombre,
  setNombre,
  telefono,
  setTelefono,
  email,
  setEmail,
  loading,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="checkout-text">
        <label htmlFor="nombre">Nombre:</label>
        <input
          className="input"
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="checkout-text">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          className="input"
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </div>
      <div className="checkout-text">
        <label htmlFor="email">Email:</label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button  type="submit" disabled={loading} className="btn-checkout">
        {loading ? "Procesando..." : "Confirmar Orden"}
      </button>
    </form>
   
  );
};

export default CheckoutForm;
