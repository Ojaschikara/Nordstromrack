
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { IS_LOADING, NO_LOADING, ERROR } from "../redux/Loading/actionTypes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
//   import Navbar from "../components/Navbar";
//   import Footer from "../components/Footer";
// import products from "../../public/products.json"
  
  const MultiProducts1 = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    
     console.log("id"); // Check if the id is captured correctly

  
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
  
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.loading);
    const navigate = useNavigate();
  
    const fetchData = async () => {
      try {
        dispatch({ type: IS_LOADING });
  
        // const resp = await axios.get(
        //   `${import.meta.env.VITE_API_URL}/product/`
        // );
        const resp = await axios.get("/products.json");
        console.log(resp.data);
        setData(resp.data.data);
      setSortedData(resp.data.data);

  
        dispatch({ type: NO_LOADING });
      } catch (error) {
        console.log("Error in Fetching");
        dispatch({ type: ERROR });
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [category]);
  
    useEffect(() => {
      window.scroll({
        top: 0,
        behavior: "instant",
      });
    }, []);
  
    const handleClick = (id) => {
      navigate(`/products/${id}`);
    };
  
    const handleChange = (e) => {
      const value = e.target.value;
      if (value === "ltoh") {
        const sorted = [...data].sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
        setSortedData(sorted);
      } else if (value === "htol") {
        const sorted = [...data].sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        setSortedData(sorted);
      }
    };
  
    return (
        <div>
        <Navbar />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[.3fr_3fr]">
        <div className="mb-5    p-8 w-[200px] sticky top-0 h-screen    content-start">
 
  <div className="mx-auto mb-4  hidden lg:flex  md:block">
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" data-testid="svg_IconStoreRackOutlined" >
          <path fill="#191A1B" fillRule="evenodd" d="M12.369 13.5h3.893l-.32-2.154c-.128-.886-.8-1.174-1.867-1.216l-1.215-.043v-.342l1.109-.106c1.184-.118 1.91-.704 1.91-1.91V7.42c0-1.13-.79-1.92-1.92-1.92H7.75v8h3.776v-2.678h.438zm-.267-4.373h-.576V7.474h.576z" clipRule="evenodd"></path>
          <path fill="#191A1B" fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v16h-3v-4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H4zm5 16h2v-3H9zm4 0h2v-3h-2z" clipRule="evenodd"></path>
           </svg>
   <p className="text-blue-500 underline" >Set location</p>        
  </div>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Price</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Size</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Color</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Brand</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Activity</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Closure</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Discount</p>
  <hr />
  <p className="font-bold my-3 cursor-pointer">Feature</p>
  <hr />
</div>

{loading ? (

  <div className="flex justify-center items-center min-h-[20vh]">
    <img
      src="https://www.sephora.com/img/ufe/loader.gif"
      alt="loading"
    />
  </div>
) : (
   <div> 
        <h1 className=" sticky text-3xl font-bold p-2" >
          Products
        </h1>
        <hr />
  <div className="flex my-2 mx-2 w-auto ">
  <select
    className=" ml-auto  outline outline-[1px] outline-gray-400 rounded-none cursor-pointer"
    onChange={handleChange}
  >
    <option value="ltoh">Price: Low To High</option>
    <option value="htol">Price: High To Low</option>
  </select>
  <hr />
   </div>
  <div
    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 sm:p-8 lg:p-20 pt-2 gap-12 items-end"
  >
    
    {(sortedData.length ? sortedData : data)?.map((elem) => (
      <div className="cursor-pointer group" key={elem.id}>
       <div className="relative group">
  {/* Product Image */}
  <img src={elem.image} alt="Image" className="w-full " />

  {/* Quick View Button */}
  <button
  className="hidden group-hover:block absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-400 bg-opacity-50 border border-black text-black px-4 py-2"
  onClick={() => handleClick(elem._id)}
>
  Quick View
</button>
</div>
        
        <h2 className="mt-2 font-bold text-[12px]">{elem.title}</h2>
        {/* <h2 className="mt-2 font-bold text-[12px]">{elem.description}</h2> */}

        <h2
          className="my-5 font-normal text-[13px] md:text-[14px] hover:underline overflow-hidden h-10"
          onClick={() => handleClick(elem._id)}
        >
          {elem.Description}
        </h2>
        <h2 className="font-bold text-[16px]">${elem.Price}</h2>
     
      </div>
    ))}
  </div>
  </div>
)}

        </div>
     <Footer />
      </div>
        );
  };
  
  export default MultiProducts1;
  

  