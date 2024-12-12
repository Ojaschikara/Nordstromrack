import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETCARTITEMS } from "../redux/Cart/actionTypes";
import { Link } from "react-router-dom";
// import GetSinglePro from "../components/GetSinglePro";
import axios from "axios";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartData);
  const { loading } = useSelector((state) => state.loading);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(GETCARTITEMS);
  }, [dispatch]);

  const subtotal = allProducts.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);

  const estimatedTax = subtotal * 0.08;
  const estimatedTotal = subtotal + estimatedTax;

  const handleCheckout = async () => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    try {
      await Promise.all(
        data?.map(async (el) => {
          await axios.delete(
            `${import.meta.env.VITE_API_URL}/cart/remove/${el.productId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
        })
      );

      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-5 pt-5 sm:p-10">
        <h1 className="text-xl font-bold">
          Shipping and Delivery Basket ({data.length})
        </h1>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {loading ? (
              <div className="flex justify-center items-center min-h-[50vh]">
                <img
                  src="https://www.sephora.com/img/ufe/loader.gif"
                  alt="Loading..."
                />
              </div>
            ) : data && data.length > 0 ? (
              data.map((elem, i) => (
                <GetSinglePro
                  singleData={elem}
                  key={i}
                  setAllProducts={setAllProducts}
                  allProducts={allProducts}
                />
              ))
            ) : (
              <div className="mt-5">
                <div className="mb-10 h-[0.8px] bg-gray-400"></div>
                <p className="text-lg font-normal mb-3">
                  Your shopping cart is empty. Please add at least one item to
                  your cart before checking out.
                </p>
                <Link to={"/"}>
                  <button className="mb-4 bg-black text-white hover:text-white px-4 py-2 rounded-md">
                    Continue Shopping
                  </button>
                </Link>
                <div className="mb-10 h-[0.8px] bg-gray-400"></div>
              </div>
            )}
          </div>

          <div className="p-5 border border-gray-300">
            <div className="flex items-start mb-3 gap-2">
              <div className="w-8">
                <img
                  src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                  alt="Icon"
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-lg">
                  The Sephora Credit Card Program
                </p>
                <p className="text-xs font-normal">
                  Save 25% on this order when you open and use either Sephora
                  Credit Card today
                </p>
              </div>
            </div>
            <button className="bg-white text-black border border-black w-full py-2 text-sm font-normal">
              See Details
            </button>
          </div>

          <div className="p-5 border border-gray-300">
            <div className="flex justify-between mb-4">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="flex justify-between text-sm mb-3">
              <p>Estimated Tax</p>
              <p>${estimatedTax}</p>
            </div>
            <div className="mb-3 h-[0.8px] bg-gray-400"></div>
            <div className="flex justify-between font-semibold mb-4">
              <p>Estimated Total</p>
              <p>${estimatedTotal}</p>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              Applicable taxes will be calculated at checkout.
            </p>
            <button
              onClick={handleCheckout}
              className="bg-black text-white w-full py-2 text-sm font-normal hover:text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartPage;
