import { useEffect, useState } from "react";
import axios from "axios";

function GetSinglePro({ singleData, setAllProducts, allProducts }) {
  const [product, setProduct] = useState(null);

  const getProducts = async (productId) => {
    const API_URL = `${import.meta.env.VITE_API_URL}/product/${productId}`;

    try {
      const response = await axios.get(API_URL);
      setProduct(response.data.Product);
      setAllProducts((prevData) => [...prevData, response.data.Product]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(singleData?.productId);
  }, []);

  const handleRemove = async (id) => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div key={product?._id} className="p-5">
      <div className="mb-10 h-[0.8px] bg-gray-400" />
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-40">
            {product?.images && (
              <img src={product?.images[0]} alt={product?.title} className="w-full" />
            )}
          </div>
          <div>
            <p className="text-blue-500 font-normal">{product?.title}</p>
            <p className="font-normal text-xs mb-3">ID: {product?._id}</p>
            <p className="font-normal mb-5">${product?.price}</p>
            <p
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => handleRemove(product._id)}
            >
              Remove
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="grid gap-2 mx-auto">
            <div className="p-2 border border-gray-300">
              <p className="mb-2 font-semibold">Standard : Shipping & Handling Included</p>
              <p className="font-light text-xs">Estimated Delivery</p>
              <p className="font-semibold text-green-500">5 to 6 Days</p>
            </div>

            <div className="p-2 border border-gray-300">
              <p className="mb-2 font-semibold">Express 1 to 2 Business Days : $3.96</p>
              <p className="font-light text-xs">Estimated Delivery</p>
              <p className="font-semibold text-green-500">2 to 3 Days</p>
            </div>

            <p className="text-blue-500 cursor-pointer hover:underline">Delivery Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetSinglePro;
