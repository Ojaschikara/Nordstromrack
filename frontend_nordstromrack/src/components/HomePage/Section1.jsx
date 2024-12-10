import React,{useState,useEffect} from "react";
import axios from "axios"
import Slider from "react-slick";
import slider1_1 from '../../assets/HomePage/slider1_1.png'
import slider1_2 from '../../assets/HomePage/slider1_2.png'
import slider1_3 from '../../assets/HomePage/slider1_3.png'
import section1 from '../../assets/HomePage/section1.png'
import section1_2 from '../../assets/HomePage/section1_2.png'
import section1_3 from '../../assets/HomePage/section1_3.png'
import section1_4 from '../../assets/HomePage/section1_4.png'
import section1_5 from '../../assets/HomePage/section1_5.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section1 = () => {
  const [slides, setSlides] = useState([]);
  const sliderData =[
    {
      "id" : 1,
      "image" :"https://n.nordstrommedia.com/id/sr3/82a9e970-a841-45a9-8541-8b33edb868fb.jpeg?h=365&w=240&dpr=2",
      "title" : "Altra",
      "text" : "Outroad 2 Trail Running Shoe",
      "price" : "$87.97"
  },
  {
      "id" : 2,
      "image" :"https://n.nordstrommedia.com/id/sr3/a58c9631-81a0-4794-85fa-c67cdd13e27d.jpeg?h=365&w=240&dpr=2",
      "title" : "NORDSTROM RACK",
      "text" : "Trim Fit Linen Blend Suit",
      "price" : "$149.97"
  },
  {
      "id" : 3,
      "image" :"https://n.nordstrommedia.com/id/sr3/b3e3f770-d3f6-4700-8513-9990cb7a1386.jpeg?h=365&w=240&dpr=2",
      "title" : "Bottega Veneta",
      "text" : "Illusione Bois Nu for Him Eau de Toilette",
      "price" : "$49.97"
  },
  {
      "id" : 4,
      "image" :"https://n.nordstrommedia.com/id/sr3/8569fa2f-5d86-4aaf-a0ff-d44c7be83f9e.jpeg?h=365&w=240&dpr=2",
      "title" : "Black Clover",
      "text" : "Seamless Luck 2 Baseball Cap",
      "price" : "$19.97"
  },
  {
      "id" : 5,
      "image" :"https://n.nordstrommedia.com/id/sr3/636e5007-9990-4c6b-96ec-afd4c3a5d4bd.jpeg?h=365&w=240&dpr=2",
      "title" : "PORSAMO BLEU",
      "text" : "Charlie Multifunction Bracelet Strap Watch, 45mm",
      "price" : "$269.97"
  },
  {
      "id" : 6,
      "image" :"https://n.nordstrommedia.com/id/sr3/47cfeca4-38ed-43ac-9c4e-a77483d90b91.jpeg?h=365&w=240&dpr=2",
      "title" : "Bugatchi",
      "text" : "Geo Print OoohCotton® Short Sleeve Button-Up Shirt",
      "price" : "$269.97"
  },
  {
      "id" : 7,
      "image" :"https://n.nordstrommedia.com/id/sr3/896742d3-edd6-4f6a-ac87-9dad0743ca12.jpeg?h=365&w=240&dpr=2",
      "title" : "Marina",
      "text" : "Sequin Lace Cap Sleeve Sheath Dress",
      "price" : "$54.97"
  },
  {
      "id" : 8,
      "image" :"https://n.nordstrommedia.com/id/sr3/39ebeb1f-ba98-4b56-b855-7b0388917e56.jpeg?h=365&amp;w=240&amp;dpr=2",
      "title" : "Miss Selfridge",
      "text" : "Slubbed Tweed Blazer",
      "price" : "$37.97"
  },
  {
      "id" : 9,
      "image" :"https://n.nordstrommedia.com/id/sr3/e3b1bb73-325a-4073-8c06-50bbb6078d3a.jpeg?h=365&w=240&dpr=2",
      "title" : "New Balance",
      "text" : "Kair Running Shoe (Women)",
      "price" : "$79.97"
  },
  {
      "id" : 10,
      "image" :"https://n.nordstrommedia.com/id/sr3/330a300f-d85b-46fe-ac7a-616848bd5df9.jpeg?h=365&w=240&dpr=2",
      "title" : "btb Los Angeles",
      "text" : "Beach Please Tote Bag",
      "price" : "$49.97"
  },
  {
      "id" : 11,
      "image" :"https://n.nordstrommedia.com/id/sr3/f9c6db91-f17a-4ae4-bce1-0e1191d7d85f.jpeg?h=365&w=240&dpr=2",
      "title" : "FERRAGAMO",
      "text" : "Marcel Wingtip Sneaker (Men)",
      "price" : "$429.97"
  },
  {
      "id" : 12,
      "image" :"https://n.nordstrommedia.com/id/sr3/2b256da0-5946-4789-8263-545417400b8d.jpeg?h=365&w=240&dpr=2",
      "title" : "KicKee Pants",
      "text" : "Floral Print Zip Coverall (Baby)",
      "price" : "$22.97"
  }
  ]
  

   useEffect(()=>{
   setSlides(sliderData)
   },[])
  const settings1 = {
    // dots: true,
    infinite: true,
    arrows:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    
    accessibility:true
  };
  const settings2 = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    centerMode: true,
    slidesToScroll: 7
  };
  return (
    <div >
        <div className=" h-36 text-center pt-10 ">
         <h1 className="text-2xl font-bold  ">Move to Rack, easier and faster</h1>
         <button className="border p-2 m-1 hover:bg-gray-100 border-blue-500">Sign In or Create an Account </button>
        </div>
      <img className='w-full my-7' src={section1} alt="Discount image" />
     

          
 
    <div >
      <Slider {...settings1}>
        <div>
        <img className='w-full' src={slider1_1} alt="Discount image" />
        
        </div> 
        <div>
        <img className='w-full' src={slider1_2} alt="Discount image" />
        </div>
        <div>
        <img className='w-full' src={slider1_3} alt="Discount image" />
        </div>
       
      </Slider>
    </div>
    <img className='w-full my-7' src={section1_3} alt="Discount image" />

    <img className='w-full my-7' src={section1_2} alt="Discount image" />
    <img className='w-full my-7' src={section1_4} alt="Discount image" />
    <img className='w-full my-7' src={section1_5} alt="Discount image" />

    <h1 className="font-bold text-lg">Cyber Extended Scores Up to 70% Off</h1>
   


 
 
    <div className="slider-container">
      {slides.length > 0 ? (
        <Slider {...settings2}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <img
                className="w-full"
                src={slide.image}
                alt={slide.title}
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div style={{ textAlign: "center", padding: "10px" }}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading slides...</p>
      )}
    </div>

    </div>
  )
}

export default Section1
