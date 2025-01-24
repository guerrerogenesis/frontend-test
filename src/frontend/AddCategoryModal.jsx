import { useState } from "react";
const AddCategoryModal = ({ isOpen, toggleModal, createCategory }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(formData); // Llama a la función del padre para agregar el producto
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
          <form id="addCategory_form" onSubmit={handleSubmit}>
            <h2>Crear Categoría</h2>
            <label htmlFor="name">Nombre:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Escribe un nombre"
              required
              onChange={handleInputChange}
              value={formData.name}
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

export { AddCategoryModal };
