import "./App.css";
import { useState, useEffect } from "react";
import ProductsListing from "./frontend/ProductsListing";
import AddProductsModal from "./frontend/AddProductsModal";
import UpdateProductsModal from "./frontend/UpdateProductsModal";
import AddCategoryModal from "./frontend/AddCategoryModal";
import { apiUrl } from "./lib/config";


function App() {
  //estados y comportamiento de modales
  const [isCreateProductsModalOpen, setIsCreateProductsModalOpen] =
    useState(false);

  const [isUpdateProductsModalOpen, setIsUpdateProductsModalOpen] =
    useState(false);
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] =
    useState(false);
  const [productUpdateFormData, setProductUpdateFormData] = useState({
    stock: "",
  });
  const [productSelected, setProductSelected] = useState({});

  const toggleCreateProductModal = () => {
    setIsCreateProductsModalOpen(!isCreateProductsModalOpen);
  };
  const toggleUpdateProductsModalOpen = () => {
    setIsUpdateProductsModalOpen(!isUpdateProductsModalOpen);
  };
  const toggleCreateCategoryModal = () => {
    setIsCreateCategoryModalOpen(!isCreateCategoryModalOpen);
  };

  //manejo de datos y llmadas al API
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    //funcion para consultar el api de productos
    try {
      const response = await fetch(apiUrl + "/products");
      if (!response.ok) {
        throw new Error("Error al obtener los Productos: ".response.json());
      }
      const data = await response.json();
      setProducts(data); 
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  const getCategories = async () => {
    //funcion para consultar el api de productos
    try {
      const response = await fetch(apiUrl + "/categories");
      if (!response.ok) {
        throw new Error("Error al obtener las Categorías: ".response.json());
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const createProduct = async (newProduct) => {
    let response;
    try {
      response = await fetch(apiUrl + "/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok && response.status == 201) {
        getProducts();
        toggleCreateProductModal();
      } else {
        alert(
          `Error: ${response.statusText || "No se pudo crear el producto."}`
        );
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  };
  
  const updateProduct = async (product, newProduct) => {
    try {
      const response = await fetch(apiUrl + "/products/" + product.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        getProducts();
        toggleUpdateProductsModalOpen();
      } else {
        alert(
          `Error: ${
            response.statusText || "No se pudo actualizar el producto."
          }`
        );
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  const createCategory = async (newCategory) => {
    try {
      const response = await fetch(apiUrl + "/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      if (response.ok && response.status == 201) {
        getCategories();
        toggleCreateCategoryModal();
      } else {
        alert(
          `Error: ${response.statusText || "No se pudo crear la categoría."}`
        );
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  const deleteProduct = async (product) => {
    try {
      const response = await fetch(apiUrl+"/products/"+product.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        getProducts();
      } else {
        alert(
          `Error: ${response.statusText || "No se pudo crear la categoría."}`
        );
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []); //ejecutamos la consulta fetch de productos y categorias al renderizar la página
 
  return (
    <main>
      <div className="header">
        <h1>Listado de productos</h1>
      </div>
      <div className="actions-menu">
        <button onClick={toggleCreateProductModal}>Añadir producto</button>
        <button onClick={toggleCreateCategoryModal}>
          Añadir nueva categoría
        </button>
      </div>
      <div className="list-item head">
        <span>ID</span>
        <span>Nombre</span>
        <span>Stock</span>
        <span>Category</span>
        <span>Acciones</span>
      </div>
      {!loadingProducts ? (
        <ProductsListing
          products={products}
          categories={categories}
          toggleCreateProductModal={toggleCreateProductModal}
          toggleUpdateProductsModalOpen={toggleUpdateProductsModalOpen}
          toggleCreateCategoryModal={toggleCreateCategoryModal}
          setProductSelected={setProductSelected}
          deleteProduct={deleteProduct}
        />
      ) : (
        <p>Cargando Productos...</p>
      )}

      <AddProductsModal
        categories={categories}
        isOpen={isCreateProductsModalOpen}
        toggleModal={toggleCreateProductModal}
        setIsModalOpen={setIsCreateProductsModalOpen}
        createProducts={createProduct}
      />
      <UpdateProductsModal
        isOpen={isUpdateProductsModalOpen}
        toggleModal={toggleUpdateProductsModalOpen}
        setIsModalOpen={setIsUpdateProductsModalOpen}
        updateProduct={updateProduct}
        productSelected={productSelected}
        formData={productUpdateFormData}
        setFormData={setProductUpdateFormData}
      />
      <AddCategoryModal
        isOpen={isCreateCategoryModalOpen}
        toggleModal={toggleCreateCategoryModal}
        setIsModalOpen={setIsCreateCategoryModalOpen}
        createCategory={createCategory}
      />
    </main>
  );
}

export default App;
