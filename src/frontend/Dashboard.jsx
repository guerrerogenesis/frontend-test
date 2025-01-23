
function Dashboard({ products, toggleModal }) {


  return (
    <>
      <div className="header">
        <h1>Listado de productos</h1>
      </div>
      <div className="actions-menu">
        <button onClick={toggleModal}>
            Añadir producto
        </button>
        <button>
            Añadir nueva categoría
        </button>
      </div>
      <li className="list-item head">
        <span>ID</span>
        <span>Nombre</span>
        <span>Stock</span>
        <span>Category</span>
        <span>Acciones</span>
      </li>
      <ul className="list">
        {products.map((product) => (
          <li id={product.id} className="list-item" key={product.id}>
            <span>{product.id}</span>
            <span>{product.name}</span>
            <span>{product.stock}</span>
            <span>{product.category_id}</span>
            <span>
              <button>Borrar</button> <button>Editar</button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dashboard;
