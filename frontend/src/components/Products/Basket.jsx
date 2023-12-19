import React, { useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContext";

const Basket = () => {
  const { basket, setBasket, singleProductDelete } = useContext(ProductContext);

  const total = basket.reduce((acc, item) => acc + item.price, 0);

  const productId = (id) => {
    return id;
  };

  const handleClickDeleteToBasket = () => {
    if(window.confirm("Sepeti Temizlemek İstediğinize Emin misiniz?")) {
        return setBasket([]);
    }
  }

  const handleClickDeletToSingleProduct = (id) => {
    singleProductDelete(id);
  }


  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((item) => {
                    return (
                      <tr key={item._id} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {productId(item._id)}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap italic">
                          {item.name}
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          ₺{item.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.discount}%
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <button onClick={()=>handleClickDeletToSingleProduct(item._id)} className=" bg-red-600 text-white rounded p-1 hover:bg-red-700 transition-all">Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h3 className=" mx-auto font-bold text-xl mt-4">Total: ₺{total}</h3>
        <button onClick={handleClickDeleteToBasket} className=" bg-red-600 text-white rounded p-1 w-32  mx-auto my-8 hover:bg-red-700 transition-all">
          Delete Basket
        </button>
      </div>
    </React.Fragment>
  );
};

export default Basket;
