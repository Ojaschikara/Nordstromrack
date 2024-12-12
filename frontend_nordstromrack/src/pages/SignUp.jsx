
  import { useState } from "react";
  import axios from "axios";
//   import Login from "./Login";
  import { useDispatch } from "react-redux";
  import { loginUser } from "../redux/Login/actions";
  import toast from "../components/Toast"
  import { BsCreditCard } from "react-icons/bs";
  import { FiTruck } from "react-icons/fi";
  import { CiCloudOn } from "react-icons/ci";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate,Link } from "react-router-dom";



  const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      email: "",
      firstName: "",
      lastName:"",
      password: "",
    });
  
 
    
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    console.log("done register")
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/registration`,{
          email: formData.email,
            firstName:formData.firstName,
            lastname:formData.lastName,
            password: formData.password
        },{
          withCredentials: true,
        })
        console.log("done register",response)
        //  ` https://cors-anywhere.herokuapp.com/https://nordstromrack.onrender.com/user/registration`,
        //   `${import.meta.env.VITE_API_URL}/user/registration`,
        //   {
           
        //     email: formData.email,
        //     firstName:formData.firstName,
        //     lastname:formData.lastName,
        //     password: formData.password,
            
        //   },
        //   {
        //     withCredentials: true, }
        // );
  
        if (response.status === 201) {
          toast(`Congratulations ${formData.username}, you are registered!`,`success`)}
            
        //   const obj = { email: formData.email, password: formData.password };
        //   dispatch(loginUser(obj));
  
        //   const isAuthUser = { isAuth: true, data: formData.username };
  
        //   localStorage.setItem("user", JSON.stringify(isAuthUser));
        //   setFormData({
        //     email: "",
        //     firstName:"",
        //     lastname:"",
        //     password: ""
        //   });
        // }
      } catch (error) {
        console.error("Error creating account:", error);
        toast("An error occurred while creating your account.","error");
      }
    };
    
 
    return (
        <>
   <Navbar />


    <div className=" w-[400px] h-auto m-auto my-10 ">
      <h1 className="font-bold text-2xl my-8">Create Account</h1>
      <p className="flex gap-2 my-2"><BsCreditCard className="mt-[4px] text-xl" />Check out faster </p>
      <p className="flex gap-2 my-2"><FiTruck className="mt-[4px] text-xl" /> Track orders easily</p>
      <p className="flex gap-2 my-2"><CiCloudOn className="mt-[4px] text-xl" /> Use one sign-in across our brands</p>

      <p className="my-6"><span className="text-red-600 ">*</span>Required</p>

      {/* input.............. */}

      <form onSubmit={handleSubmit}>
          
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email<span className="text-red-600 ">*</span></label>
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

  {/* <!-- First Name Field --> */}
  <div className="mb-4">
    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name<span className="text-red-600 ">*</span></label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder="Enter your first name"
      value={formData.firstName}
      onChange={handleChange}
      required
      className="mt-1 p-2 border border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-500 rounded w-full"
    />
  </div>

  {/* <!-- Last Name Field --> */}
  <div className="mb-4">
    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name<span className="text-red-600 ">*</span></label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      placeholder="Enter your last name"
      value={formData.lastName}
      onChange={handleChange}
      required
      className="mt-1 p-2  border border-gray-300 focus:outline-none focus:border-b-2 focus:border-b-blue-500 rounded w-full"
    />
  </div>

  {/* <!-- Password Field --> */}
  <div className="mb-4">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password<span className="text-red-600 ">*</span></label>
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
    <p className="text-gray-400 text-sm my-8">By creating an account, you agree to our <span className="text-blue-400">Privacy Policy </span> and <span className="text-blue-400"> Terms & Conditions</span>.</p>
    <button
      type="submit"
      className="bg-blue-500 font-bold  text-white p-2 rounded w-full hover:bg-blue-500"
    >
      Create Account
    </button>
    <p className="text-gray-500">Alreday Registered!  <Link to="/login" className="ml-5 text-blue-500">
    Go to Login
  </Link></p>
  
  </div>

      </form>

    </div>
    <Footer />
    </>
    );
  };
  
  export default Signup;
  

// import { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Login from "./Login";

// const SignUp = () => {
//     const [input, setInput] = useState({
//         firstName: '',
//         lastName: '',
//         mobile: '',
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem('user', JSON.stringify(input));
//         navigate('/');
//         alert('Ready to SignIn, click on SignIn given below');
//     };
    
//     return (
//         <>
//             <button
//                 className="mt-[-2px] bg-white p-1 hover:bg-white"
//                 onClick={() => navigate('/signup')}
//             >
//                 Sign Up
//             </button>

//             {/* Modal */}
//             <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//                 <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                     <div className="flex justify-between items-center">
//                         <h2 className="text-2xl font-semibold">Create your account</h2>
//                         <button onClick={() => navigate('/')}>X</button>
//                     </div>

//                     <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                         {/* First Name */}
//                         <div className="flex flex-col">
//                             <input
//                                 type="text"
//                                 placeholder="First name"
//                                 name="firstName"
//                                 value={input.firstName}
//                                 onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
//                                 className="p-2 border border-gray-300 rounded-md"
//                             />
//                         </div>

//                         {/* Last Name */}
//                         <div className="flex flex-col">
//                             <input
//                                 type="text"
//                                 placeholder="Last name"
//                                 name="lastName"
//                                 value={input.lastName}
//                                 onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
//                                 className="p-2 border border-gray-300 rounded-md"
//                             />
//                         </div>

//                         {/* Mobile */}
//                         <div className="flex flex-col">
//                             <div className="flex items-center space-x-2">
//                                 <span className="text-gray-500">+91</span>
//                                 <input
//                                     type="tel"
//                                     placeholder="Mobile*"
//                                     name="mobile"
//                                     value={input.mobile}
//                                     onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
//                                     className="p-2 border border-gray-300 rounded-md flex-1"
//                                 />
//                             </div>
//                         </div>

//                         {/* Email */}
//                         <div className="flex flex-col">
//                             <input
//                                 type="email"
//                                 placeholder="Email*"
//                                 name="email"
//                                 value={input.email}
//                                 onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
//                                 className="p-2 border border-gray-300 rounded-md"
//                             />
//                         </div>

//                         {/* Password */}
//                         <div className="flex flex-col">
//                             <input
//                                 type="password"
//                                 placeholder="Password*"
//                                 name="password"
//                                 value={input.password}
//                                 onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
//                                 className="p-2 border border-gray-300 rounded-md"
//                             />
//                         </div>

//                         {/* Referral Code */}
//                         <div className="flex justify-between items-center">
//                             <Link to="/referral" className="text-blue-500">Got a Referral Code?</Link>
//                             <p className="text-xs">(Optional)</p>
//                         </div>

//                         {/* Whatsapp Updates */}
//                         <div className="flex items-center space-x-2">
//                             <input type="checkbox" defaultChecked />
//                             <span className="text-sm">Get updates on Whatsapp</span>
//                             <img src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png" alt="Whatsapp" className="w-6" />
//                         </div>

//                         {/* Privacy Policy */}
//                         <div className="flex flex-col mt-4 text-xs">
//                             <span>By creating this account, you agree to our</span>
//                             <Link to="/privacy-policy" className="text-blue-700 underline">Privacy Policy</Link>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="mt-4">
//                             <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
//                                 Create an Account
//                             </button>
//                         </div>

//                         {/* Have an account? SignIn */}
//                         <div className="mt-5 text-center">
//                             <p className="text-xs">Have an account?</p>
//                             <Link to="/signin" className="text-blue-700">Sign In</Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignUp;
