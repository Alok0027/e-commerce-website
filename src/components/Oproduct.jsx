import { Link } from 'react-router-dom';
import skincare from '../assets/skincare.jpg';
import fragnance from '../assets/fragnance.jpg';
import haircare from '../assets/haircare.jpg';
import makeup from '../assets/makeup.jpg';
import explorearrow from '../assets/explorearrow.svg';

const Oproduct = () => {
  return (
    <div className="border-b border-gray-200 bg-[#faf8f6] py-20 px-16 pb-32">

        <h1 className="text-4xl text-fuchsia-950 font-normal text-left my-9 ml-4">
            <p className="text-sm font-normal mb-2">
                <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
                
                EXPLORE
                </p>
            Our Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <Link to="/shop">
                    <img src={haircare} alt="Haircare" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"/>
                        <button className="absolute bottom-7 left-24 bg-white text-gray-800 text-base px-4 py-1 rounded-xl shadow-md hover:bg-gray-100 transition">
                             Hair Care
                        </button>
                    </Link>
                </div>               
            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <Link to="/shop">
                        <img src={skincare} alt="SkinCare" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" />
                        <button className="absolute bottom-7 left-24 bg-white text-gray-800 text-base px-4 py-1 rounded-xl shadow-md hover:bg-gray-100 transition">
                             Skin Care
                        </button>
                    </Link>
                </div>               
            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <Link to="/shop">
                    <img src={makeup} alt="Makeup" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" />
                    <button className="absolute bottom-7 left-24 bg-white text-gray-800 text-base px-4 py-1 rounded-xl shadow-md hover:bg-gray-100 transition">
                             MakeUp
                        </button>
                    </Link>    
                </div>

                

            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <Link to="/shop">
                    <img src={fragnance} alt="Fragnance" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"/>
                    <button className="absolute bottom-7 left-24 bg-white text-gray-800 text-base px-4 py-1 rounded-xl shadow-md hover:bg-gray-100 transition">
                             Fragrance
                        </button>
                    </Link>
                </div>


            </div>
        </div>

    </div>
  );
}

export default Oproduct;