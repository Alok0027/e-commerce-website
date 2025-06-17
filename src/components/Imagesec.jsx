import skin from '../assets/skin.jpg';
import soap from '../assets/soap.jpg';
import beauty from '../assets/beauty.jpg';
import { Link } from 'react-router-dom';

const Imagesec = () => {
    return(
         <div className="py-12 px-4 bg-[#faf8f6]">
            <div className="w-11/12 mx-auto grid grid-cols-3 grid-rows-2 gap-6">
                
                <div className="row-span-2 col-span-2 rounded-xl overflow-hidden">
                    <Link to="/shop">
                        <img src={soap} alt="Soap" className="w-full h-full object-cover" />
                    </Link>
                </div>
                
                <div className="relative rounded-xl overflow-hidden bg-white">
                    <Link to="/shop">
                        <img src={skin} alt="Skin" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-between p-6">
                            <div>
                                <div className="text-xs text-white font-semibold mb-2">Exclusive Beauty Sale!</div>
                                <div className="text-lg font-bold text-white mb-4">Skin Product</div>
                            </div>
                            <button className="self-start bg-white text-gray-900 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
                                Shop Now <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </Link>
                </div>
                
                <div className="relative rounded-xl overflow-hidden bg-[#e7dad6]">
                    <Link to="/shop">
                        <img src={beauty} alt="Beauty" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-between p-6">
                            <div>
                                <div className="text-xs text-gray-700 font-semibold mb-2">Flat 40% Off</div>
                                <div className="text-lg font-bold text-gray-900 mb-4">Beauty Essentials</div>
                            </div>
                            <button className="self-start bg-transparent text-gray-900 font-medium px-4 py-2 rounded-lg hover:underline transition">
                                Explore Items <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default Imagesec;