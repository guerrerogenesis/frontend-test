import "./App.css";
import { useState, useEffect } from "react";
import Dashboard from "./frontend/Dashboard";
import { AddProductsModal } from "./frontend/AddProductsModal";

function App() {

  //estados de modales
  const [isProductsModalOpen, setIsProductModalOpen] = useState(false);
  const toggleModal = () => {
    setIsProductModalOpen(!isProductsModalOpen);
  };


  const apiProductsUrl = (id) =>
    `/api/products${id ? `/${id}` : ""}`;
  
  //Estados de datos
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);

  const getProducts = async () => { //funcion para consultar el api de productos
    try {
      const response = await fetch(apiProductsUrl());
      if (!response.ok) {
        throw new Error("Error al obtener los Productos: ". response.json());
      }
      const data = await response.json();
      setProducts(data); //asigna el objeto devuelto por el api al estado
    } catch (err) {
      setErrorProducts(err.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => { 
    getProducts();
  }, []);//ejecutamos la funcion una vez fetch al renderizar la pagina


  



  if (loadingProducts) return <p>Cargando categorías...</p>;
  if (errorProducts) return <p>Error al cargar los productos: {errorProducts}</p>;
  return (
    <>
      <Dashboard products={products} toggleModal={toggleModal} />
      <AddProductsModal isOpen={isProductsModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default App;
