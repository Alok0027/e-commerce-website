import { Link } from 'react-router-dom';
import explorearrow from '../assets/explorearrow.svg';
import silkhairserum from '../assets/silkhairserum.jpg';
import silkyfoundation from '../assets/silkyfoundation.jpg';
import handcream from '../assets/handcream.jpg';

const Bsellprod = () =>{
    return(
    <section className="bg-[#faf8f6] pb-12">   
        <div className="py-10 w-11/12 mx-auto px-4">
                <h1 className="text-4xl text-fuchsia-950 font-normal text-left my-9 ml-4">
                            <p className="text-sm font-normal mb-2">
                                <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
                                NEW ARRIVALS
                                </p>
                                Best Selling Products
                        </h1>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        
                    <Link to="/desc" className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <div className="overflow-hidden">
                            <img src={silkhairserum} alt="haircream" className="w-screen h-80 object-cover transform transition-transform duration-700 hover:scale-105 px-24"/>
                        </div>
                        <div className="p-4 text-center text-xl font-normal mt-1">Silk Smooth Hair Serum
                            <p className='font-normal text-base'>Rs.550</p>
                        </div>
                    </Link>
        
                    <Link to="/desc" className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <div className="overflow-hidden">
                            <img src={handcream} alt="handcream" className="w-screen h-80 object-cover transform transition-transform duration-700 hover:scale-105 px-24" />
                        </div>
                        <div className="p-4 text-center text-xl font-normal mt-1">Shea Butter Hand Cream
                            <p className='font-normal text-base'>Rs.450</p>
                        </div>
                    </Link>
        
                    <Link to="/desc" className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <div className="overflow-hidden">
                            <img src={silkyfoundation} alt="foundation" className="w-screen h-80 object-cover transform transition-transform duration-700 hover:scale-105 px-24" />
                        </div>
                        <div className="p-4 text-center text-xl font-normal mt-1">Silky Smooth Foundation 
                            <p className='font-normal text-base'>Rs.660</p>
                        </div>
                    </Link>
                </div>
        </div>  

    </section>          
    )
};
export default Bsellprod;