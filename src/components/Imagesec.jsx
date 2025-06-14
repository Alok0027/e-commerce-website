import skin from '../assets/skin.jpg';
import soap from '../assets/soap.jpg';
import beauty from '../assets/beauty.jpg';

const Imagesec = () => {
    return(
         <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-3 grid-rows-2 gap-6">
                {/* Large Soap Image */}
                <div className="row-span-2 col-span-2 rounded-xl overflow-hidden">
                    <img src={soap} alt="Soap" className="w-full h-full object-cover" />
                </div>
                {/* Top Right: Skin Product */}
                <div className="relative rounded-xl overflow-hidden bg-white">
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
                </div>
                {/* Bottom Right: Beauty Essentials */}
                <div className="relative rounded-xl overflow-hidden bg-[#e7dad6]">
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
                </div>
            </div>
        </div>
    )
};
export default Imagesec;