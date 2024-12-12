import { useState } from "react";
import axios from "axios";
//   import Login from "./Login";
  import { useDispatch } from "react-redux";
  import { loginUser } from "../redux/Login/actions";
  import toast from "../components/Toast"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";
  

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  

    
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (formData.password !== formData.confirmPassword) {
        toast("Passwords do not match. Please try again.","error");
        return;
      }
  
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/user/login`,
          {
           
            email: formData.email,
            firstName:formData.firstName,
            lastname:formData.lastName,
            password: formData.password,
            
          }
        );
  
        if (response.status === 201) {
          toast(`Congratulations ${formData.username}, you are registered!`,"success")
            
        //   onClose();
          const obj = { email: formData.email, password: formData.password };
          dispatch(loginUser(obj));
  
          const isAuthUser = { isAuth: true, data: formData.username };
  
          localStorage.setItem("user", JSON.stringify(isAuthUser));
          setFormData({
            email: "",
            firstName:"",
            lastname:"",
            password: ""
          });
        }
      } catch (error) {
        console.error("Error creating account:", error);
        toast("An error occurred while creating your account.","error");
      }
    };
    
 
  return (
    <>
    <Navbar />
    <div>
        
      <div className=" w-[400px] h-auto m-auto my-10 ">

      <h1 className="font-bold text-2xl my-8">Welcome!</h1>
      <p className="flex gap-4  my-2">
        <img className="w-auto h-14" src="data:image/png;base64,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" alt="" />   
         <img src="https://i.pinimg.com/originals/80/ca/53/80ca53d743a3d75ae114c5eaa0b792e5.png" alt="Logo" className="h-12 w-auto " />

         </p>
      

      {/* input.............. */}

      <form onSubmit={handleSubmit}>
          
  <div class="mb-4">
    <label for="email" class="block text-sm font-medium text-gray-700">Email<span className="text-red-600 ">*</span></label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={handleChange}
      required
      className="mt-1 p-2 border border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-500 rounded w-full"
    />
  </div>

 
  {/* <!-- Password Field --> */}
  <div className="mb-4">
    <label for="password" className="block text-sm font-medium text-gray-700">Password<span className="text-red-600 ">*</span></label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter your password"
      value={formData.password}
      onChange={handleChange}
      required
      className="mt-1 p-2 border  border-gray-300  focus:outline-none focus:border-b-2 focus:border-b-blue-500 rounded w-full box-border"
    />
  </div>

  {/* <!-- Submit Button --> */}
  <div className="mt-4">
        <button
      type="submit"
      className="bg-blue-500  font-bold text-white p-2 rounded w-full hover:bg-blue-600"
    >
      Sign In
    </button>
    <p className="text-gray-500">Not Registered!  <Link to="/register" className="ml-5 text-blue-500">
    Go to Register
  </Link></p>
  </div>

      </form>
    </div>
   
    </div>
     <Footer />
     </>
  )
}

export default Login
