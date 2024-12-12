import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IS_LOADING, NO_LOADING, ERROR } from "../redux/Loading/actionTypes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer"
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);

  const [data, setData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
//   const toast = useToast();

  const fetchData = async () => {
    try {
      dispatch({ type: IS_LOADING });

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/product/${id}`
      );

      setData(res.data.Product);
      setSelectedImage(res.data.Product.images[0]);

      dispatch({ type: NO_LOADING });
    } catch (error) {
      console.error("Error fetching product data:", error.message);

      dispatch({ type: ERROR });

    //   toast({
    //     title: "Error Fetching Data",
    //     description: "Failed to load product details. Please try again later.",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //     position: "top-right",
    //   });
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const handleClick = async () => {
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        throw new Error("User not logged in");
      }

      const { token } = JSON.parse(user);
      if (!token) {
        throw new Error("Authentication token not found");
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/get/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

    //   toast({
    //     title: "Product Added to Cart",
    //     description: `${data.title} has been successfully added to your cart.`,
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //     position: "top",
    //   });
    } catch (error) {
      console.error("Error adding product to cart:", error);

      if (error.response) {
        console.error("Error response:", error.response.data);
      }

    //   toast({
    //     title: "Error",
    //     description: `Please Login first: ${error.message}`,
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //     position: "top",
    //   });
    }
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <img
            src="https://www.sephora.com/img/ufe/loader.gif"
            alt="loading"
            className="w-20 h-20"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 w-4/5 mx-auto">
          {/* Left side (images) */}
          <div>
            <img
              src={selectedImage}
              alt="Main Image"
              className="w-[500px] border-2 border-gray-300 mb-5"
            />
            <div className="flex mt-5">
              {data.images &&
                data.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-24 h-24 object-cover border border-gray-300 mr-2 cursor-pointer opacity-100 hover:opacity-70"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
            </div>
          </div>

          {/* Right side (details) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-xl">Your Price</span>
              <span className="font-semibold text-xl">${data.price}</span>
            </div>
            <p className="text-lg mb-6">{data.description}</p>
            <button
              onClick={handleClick}
              className="bg-black text-white w-full py-2 rounded hover:bg-white hover:text-black border-2 border-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SingleProduct;
