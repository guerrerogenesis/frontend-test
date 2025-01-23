const AddProductsModal = ({ isOpen, toggleModal }) => {
  return (
    <>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={toggleModal}
      >
        <div
          className="modal"
          onClick={(e) => e.stopPropagation()} // Evita que cerrar el modal al hacer clic dentro
        >
          <h2>Modal Lateral</h2>
          <p>Este es un contenido de prueba para el modal.</p>
          <button onClick={toggleModal}>Cerrar</button>
        </div>
      </div>
    </>
  );
};

export { AddProductsModal };
