import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import ProductContext from "../../context/ProductContext";

const Product = () => {
    const {setBasket, products, getAllProduct, basket} = useContext(ProductContext);

  const navigate = useNavigate();



  const handleClickAddToBasket = (item) => {
    setBasket((prevState) => [...prevState, item]);
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <React.Fragment>
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 grid grid-cols-3 justify-center items-center gap-10">
          {products.map((item) => {
            return (
              <div key={item._id} className=" h-min">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="relative overflow-hidden">
                    <img
                      className="object-cover w-44 h-44"
                      src={item.image}
                      alt="Product"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button onClick={() => navigate(`/productDetails/${item._id}`)} className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-indigo-700 transition-all">
                        View Product
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 font-light h-min">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">${item.price}</span>
                    <button onClick={()=>handleClickAddToBasket(item)} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                      Add to Basket
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
