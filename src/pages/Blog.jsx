import Smallay from '../components/Smallay';
import explorearrow from '../assets/explorearrow.svg';
import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpg';
import article3 from '../assets/article3.jpg';
import article4 from '../assets/article4.jpg';
import article5 from '../assets/article5.jpg';
import article6 from '../assets/article6.jpg';

const Blog = () => {
    return (
        <Smallay>
            <section className='bg-[#faf8f6]'>
            <div className="py-10 w-11/12 mx-auto px-4">
                <h1 className="text-4xl text-fuchsia-950 font-normal text-left my-9 ml-4">
                    <p className="text-sm font-normal mb-2">
                        <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
                            BLOGS
                  </p>
             Latest Articles
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-4">
                    <div className="bg-white rounded-lg shadow p-6" style={{ width: '628px', height: '341px' }}>
                        <p className="text-sm text-gray-600 mb-2">Sustainability | Jan 29, 2025</p>
                        <h2 className="text-lg font-medium text-black mb-4">
                          How vashs commitment to eco-friendly packaging is shaping a more sustainable future
                        </h2>
                        <img src={article1} alt="Eco-friendly packaging" className="w-72 h-40 object-cover rounded-md mb-4 ml-72" />
                        <p className="text-sm text-black">Read Article →</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6" style={{ width: '628px', height: '341px' }}>
                        <p className="text-sm text-gray-600 mb-2">Skincare Tips | Jan 29, 2025</p>
                        <h2 className="text-lg font-medium text-black mb-4">
                             The ultimate guide to crafting a personalized skincare routine with vash products
                        </h2>
                        <img src={article2} alt="Skincare Routine" className="w-72 h-40 object-cover rounded-md mb-4 ml-72" />
                        <p className="text-sm text-black">Read Article →</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6" style={{ width: '628px', height: '341px' }}>
                    <p className="text-sm text-gray-600 mb-2">Sustainability | Jan 29, 2025</p>
                    <h2 className="text-lg font-medium text-black mb-4">
                        How vashs commitment to eco-friendly packaging is shaping a more sustainable future
                    </h2>
                    <img src={article3} alt="Eco-friendly packaging" className="w-72 h-40 object-cover rounded-md mb-4 ml-72" />
                    <p className="text-sm text-black">Read Article →</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6" style={{ width: '628px', height: '341px' }}>
                    <p className="text-sm text-gray-600 mb-2">Skincare Tips | Jan 29, 2025</p>
                    <h2 className="text-lg font-medium text-black mb-4">
                        The ultimate guide to crafting a personalized skincare routine with vash products
                    </h2>
                    <img src={article4} alt="Skincare Routine" className="w-72 h-40 object-cover rounded-md mb-4 ml-72" />
                    <p className="text-sm text-black">Read Article →</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6" style={{ width: '628px', height: '341px' }}>
                    <p className="text-sm text-gray-600 mb-2">Sustainability | Jan 29, 2025</p>
                    <h2 className="text-lg font-medium text-black mb-4">
                        How vashs commitment to eco-friendly packaging is shaping a more sustainable future
                    </h2>
                    <img src={article5} alt="Eco-friendly packaging" className="w-72 h-40 object-cover rounded-md mb-4 ml-72" />
                    <p className="text-sm text-black">Read Article →</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6" style={{ width: '628px', height: '341px' }}>
                    <p className="text-sm text-gray-600 mb-2">Skincare Tips | Jan 29, 2025</p>
                    <h2 className="text-lg font-medium text-black mb-4">
                        The ultimate guide to crafting a personalized skincare routine with vash products
                    </h2>
                    <img src={article6} alt="Skincare Routine" className="w-72 h-40 object-cover rounded-md mb-4 ml-72" />
                    <p className="text-sm text-black">Read Article →</p>
                    </div>
                </div>
            </div>
            </section>
        </Smallay>
    )
};

export default Blog;