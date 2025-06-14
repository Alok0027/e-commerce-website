import compact from '../assets/compact.jpg';
import conceller from '../assets/conceller.jpg';
import pallete from '../assets/pallete.jpg';

const Latestprod = () => {
    return (
        <div className="py-10">
                        <h1 className="text-4xl font-extralight text-center my-11">
                                Latest Products
                        </h1>
                
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                
                            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                                <div className="overflow-hidden">
                                    <img src={compact} alt="Compact" className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110"/>
                                </div>
                
                                <div className="p-4 text-center font-medium">Compact</div>
                
                            </div>
                
                            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                                <div className="overflow-hidden">
                                    <img src={conceller} alt="Conceller" className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110" />
                                </div>
                
                                <div className="p-4 text-center font-medium">Conceller</div>
                
                            </div>
                
                            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                                <div className="overflow-hidden">
                                    <img src={pallete} alt="Pallete" className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110" />
                                </div>
                
                                <div className="p-4 text-center font-medium">Pallete</div>
                
                            </div>
                        </div>
                </div>            
    );
    }
export default Latestprod;