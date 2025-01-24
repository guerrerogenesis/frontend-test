import { useState } from "react";
const UpdateProductsModal = ({
  isOpen,
  toggleModal,
  updateProduct,
  productSelected,
  formData,
  setFormData,
}) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(productSelected, formData); // Llama a la función del padre para agregar el producto
    setFormData({ name: "" }); // Limpia el formulario
  };
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
          <form id="updateProduct_form" onSubmit={handleUpdate}>
            <h2>Actualizar stock de producto</h2>
            <label htmlFor="stock">Stock:</label>
            <input
              id="stock"
              type="number"
              placeholder="Introduce la cantidad de stock"
              name="stock"
              required
              onChange={handleInputChange}
              value={formData.stock}
            />
            <div className="buttons-modal">
              <button type="submit">Guardar</button>
            </div>
          </form>
          <div className="buttons-modal">
            <button className="close-modal" onClick={toggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { UpdateProductsModal };
