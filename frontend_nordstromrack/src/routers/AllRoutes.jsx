import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/SignUp";
import Login from "../pages/Login";
import MultiProducts1 from "../pages/MultiProduct1";
import SingleProduct from "../pages/SingleProduct";
import CartPage from "../pages/CartPage";
// import CartPage from "../pages/CartPage";
// import PrivateRoutes from "./PrivateRoutes";
// import Products from "../pages/Products";
// import Product from "../pages/Product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <CartPage />
          </PrivateRoutes>
        }
      /> */}
      {/* <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} /> */}
      <Route path="/register" element ={<Signup />} />
      <Route path="/login" element ={<Login />} />
      <Route path="/mensProduct" element={<MultiProducts1 />} />
      <Route path="/product/:id" component={<SingleProduct />} />
      <Route path="/cart" component={<CartPage />} />

          </Routes>
  );
};

export default AllRoutes;
