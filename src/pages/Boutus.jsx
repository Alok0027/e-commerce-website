import Layout from '../components/Layout';
import explorearrow from '../assets/explorearrow.svg';
import boutuspic1 from '../assets/boutuspic1.jpg';
import boutuspic from '../assets/boutuspic.jpg';
import boutuspic3 from '../assets/boutuspic3.jpg';
import aboutusp1 from '../assets/aboutusp1.jpg';
import aboutusp2 from '../assets/aboutusp2.jpg';
import aboutusp3 from '../assets/aboutusp3.jpg';
import Cardsec from './Cardsec'; 
import Vision from './Vision';
import Team from './Team';

const Boutus = () =>{

    return(

        <Layout showTestimonials={true}>
            <section className="bg-[#faf8f6] p-8">
                <h1 className="text-5xl text-yellow-950 font-normal text-left my-9 ml-16">
                            <p className="text-sm font-normal mb-2">
                                <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
                                OUR STORY
                            </p>
                    About Us 
                </h1>

                <div className='flex justify-between px-14 pt-10'>
                    <div className='text-3xl w-[36rem]'>
                        We believe beauty is more than skin deep—it’s a reflection of confidence, care, and individuality.
                    </div>

                    <div>
                        <div className='w-[34rem]'>
                            From product innovation to customer care, every member is dedicated to delivering excellence and redefining beauty standards.
                        </div>
                        <div className='flex flex-row justify-end gap-6 pt-6'>
                            <div >
                                <h2 className='text-3xl font-normal'>1.2m</h2>
                                <p>Product are sold.</p>
                            </div>
                            <div>
                                 <div className='flex flex-row '>
                                    <img className='rounded-full w-7 h-7' src={boutuspic1} alt='boutpic'></img>
                                    <img className='rounded-full w-7 h-7' src={boutuspic} alt='boutpic'></img>
                                    <img className='rounded-full w-7 h-7' src={boutuspic3} alt='boutpic'></img>
                                </div>
                                <div className='text-sm'>
                                    100+ years combined expertise.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-16'>
                    <div className='w-[32rem] pt-20 mt-12'>
                        <div className='pl-14'>
                                <div className="items-start gap-8 py-4 border-b border-gray-200">
                                    <div className="text-xl font-normal text-gray-900 mb-1">1. Empowering Confidence</div>
                                    <div className="text-base text-gray-700 pl-4">Creating beauty solutions that inspire self-confidence.</div>
                                </div>
                        </div>
                        <div className='pl-14'>
                                <div className="items-start gap-8 py-4 border-b border-gray-200">
                                    <div className="text-xl font-normal text-gray-900 mb-1">2.Promoting Sustainability</div>
                                    <div className="text-base text-gray-700 pl-4">Committing to eco friendly practices for healthier planet.</div>
                                </div>
                        </div>
                        <div className='pl-14'>
                                <div className="items-start gap-8 py-4 border-b border-gray-200">
                                    <div className="text-xl font-normal text-gray-900 mb-1">3.Focusing on Quality</div>
                                    <div className="text-base text-gray-700 pl-4">Committed to top-tier quality in every product we create.</div>
                                </div>
                        </div>
                    </div>
                    <div className=' pt-4 mt-4'>
                        <img className="h-[22rem] w-[30rem] rounded-md" src={aboutusp1} alt='abpic'></img>
                    </div>
                    <div className=' pt-4 mt-4'>
                        <img className="h-[22rem] w-64 rounded-md" src={aboutusp2} alt='abpic'></img>

                    </div>
                </div>

                <div className='flex flex-row'>
                    <div className='ml-16'>
                        <img className='h-[26rem] my-36 rounded-lg' src={aboutusp3} alt='abpic'></img>
                    </div>
                    <div className='w-[38rem] my-60 ml-16'>
                        <h1 className='text-3xl'>Eco-conscious beauty for a better tomorrow</h1>
                        <p className='py-4'>
                            Our eco-conscious approach ensures that every product is crafted with sustainable ingredients and packaging, helping to reduce our environmental footprint and create a better tomorrow.
                        </p>
                        <p>
                            We are committed to sustainable practices, and promoting cruelty-free beauty that respects both our customers and the planet.
                        </p>
                        <button className='bg-black text-white mt-5 px-8 py-3 rounded-lg'> 
                            Explore More
                        </button>
                    </div>
                </div>

            <Cardsec />
            <Team />
            <Vision />
            </section>
            
        </Layout>
    )
};

export default Boutus;