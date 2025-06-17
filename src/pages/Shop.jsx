import Smallay from "../components/Smallay";
import { Link } from "react-router-dom";
import explorearrow from '../assets/explorearrow.svg';
import eyecream from '../assets/eyecream.jpg';
import bottle from '../assets/bottle.jpg';
import silkhairserum from '../assets/silkhairserum.jpg';
import silkyfoundation from '../assets/silkyfoundation.jpg';
import handcream from '../assets/handcream.jpg';
import rosespray from '../assets/rosespray.jpg';
import mineralpowder from '../assets/mineralpowder.jpg';
import greenmask from '../assets/greenmask.jpg';
import ageserum from '../assets/ageserum.jpg';


const Shop = () => {
  const products = [
    { image: rosespray, name: "Silk Smooth Hair Serum", price: "550", link: "/desc" },
    { image: ageserum, name: "Shea Butter Hand Cream", price: "450", link: "/desc" },
    { image: mineralpowder, name: "Silky Smooth Foundation", price: "660", link: "/desc" },
    { image: greenmask, name: "Green Tea Face Mask", price: "660", link: "/desc" },
    { image: bottle, name: "Hydrating Toner", price: "660", link: "/desc" },
    { image: eyecream, name: "Brightening Eye Cream", price: "660", link: "/desc" },
    { image: silkhairserum, name: "Hair Growth Serum", price: "550", link: "/desc" },
    { image: handcream, name: "Hand & Nail Cream", price: "450", link: "/desc" },
    { image: silkyfoundation, name: "Matte Foundation", price: "660", link: "/desc" },
  ];

  return (
    <Smallay>
    <div className="border-b border-gray-200 bg-[#faf8f6] py-20 px-16 pb-32">
      <h1 className="text-4xl text-fuchsia-950 font-normal text-left my-9 ml-4">
        <p className="text-sm font-normal mb-2">
          <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
          EXPLORE
        </p>
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((product, index) => (
          <Link to={product.link} key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-80 object-cover transform transition-transform duration-700 hover:scale-105 px-24" 
              />
            </div>
            <div className="p-4 text-center text-xl font-normal mt-1">
              {product.name}
              <p className='font-normal text-base'>Rs.{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </Smallay>
  );
};

export default Shop;