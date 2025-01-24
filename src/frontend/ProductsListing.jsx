function ProductsListing({
  products,
  categories,
  toggleUpdateProductsModalOpen,
  setProductSelected,
  deleteProduct,
}) {
  const handleUpdate = (product) => {
    setProductSelected(product);
    toggleUpdateProductsModalOpen();
  };
  const handleDelete = (product) => {
    const deleteConfirmation = confirm(
      `¿Estas seguro de Eliminar el producto "${product.name}"?`
    );
    if (deleteConfirmation === false) return;
    deleteProduct(product);
  };
  return (
    <>
      <ul className="list">
        {products.map((product) => (
          <li id={product.id} className="list-item" key={product.id}>
            <span>{product.id}</span>
            <span>{product.name}</span>
            <span>{product.stock}</span>
            <span>{product.category_id}</span>
            <span>
              <button onClick={() => handleDelete(product)}>Borrar</button>
              <button onClick={() => handleUpdate(product)}>Editar</button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsListing;
