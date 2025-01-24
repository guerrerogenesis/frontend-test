import { useState } from "react";

const AddProductsModal = ({
  categories,
  isOpen,
  toggleModal,
  createProducts,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    category_id: "",
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
    if (formData.category_id == 0) {
      return alert("Cambia la categoría");
    }
    console.log(formData);
    createProducts(formData); // Llama a la función del padre para agregar el producto
    setFormData({ name: "", stock: "", category_id: 0 }); // Limpia el formulario
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
          <form id="addProduct_form" onSubmit={handleSubmit}>
            <h2>Crear Producto</h2>
            <label htmlFor="name">Nombre:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Escribe un nombre"
              onChange={handleInputChange}
              value={formData.name}
              required
            />
            <label htmlFor="stock">Stock:</label>
            <input
              id="stock"
              type="number"
              placeholder="Introduce la cantidad de stock"
              name="stock"
              min="0"
              onChange={handleInputChange}
              value={formData.stock}
              required
            />
            <label htmlFor="category_id">Categoría:</label>
            <select
              id="category_id"
              name="category_id"
              onChange={handleInputChange}
              value={formData.category_id}
              required
            >
              <option value={0} disabled>
                Selecciona una categoría
              </option>
              <hr />
              {categories ? (
                categories.map((category, key) => (
                  <option key={key} value={category.id}>
                    {category.name}
                  </option>
                ))
              ) : (
                <option>No hay categorias disponibles</option>
              )}
            </select>
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

export { AddProductsModal };
