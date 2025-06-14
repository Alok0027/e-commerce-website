import foundation from '../assets/foundation.jpg';
import lipstick from '../assets/lipstick.jpg';
import eyeliner from '../assets/eyeliner.jpg';

const Bsellprod = () =>{
    return(
        <div className="py-10">
                <h1 className="text-4xl font-extralight text-center my-11">
                    Our Best Sellings
                </h1>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                        <div className="overflow-hidden">
                            <img src={foundation} alt="Foundation" className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110"/>
                        </div>
        
                        <div className="p-4 text-center font-medium">Foundation</div>
        
                    </div>
        
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                        <div className="overflow-hidden">
                            <img src={lipstick} alt="Lipstick" className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110" />
                        </div>
        
                        <div className="p-4 text-center font-medium">Lip Stick</div>
        
                    </div>
        
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                        <div className="overflow-hidden">
                            <img src={eyeliner} alt="Eyeliner" className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110" />
                        </div>
        
                        <div className="p-4 text-center font-medium">Eye Liner</div>
        
                    </div>
                </div>
        </div>            
    )
};
export default Bsellprod;