import React, { useState } from "react";
import axios from "axios";

const ProductContext = React.createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
  );
  const [singleProduct, setSingleProduct] = useState([]);



  const getAllProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      //   console.log(response);
      setProducts(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };



  const getSingleProduct = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/${id}`);
      // console.log(response);
      setSingleProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };


  const singleProductDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      const deletedProduct = basket.filter((item) => {
        return(
          item._id !== id
        );
      })
      setBasket(deletedProduct);
    } catch (error) {
      console.log(error);
    }
  }


  const sharedValuesAndMethods = {
    products,
    getAllProduct,
    setBasket,
    basket,
    getSingleProduct,
    singleProduct,
    singleProductDelete
  };

  return (
    <ProductContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ProductContext.Provider>
  );
};

export { Provider };
export default ProductContext;
