import { useState } from 'react';
import explorearrow from '../assets/explorearrow.svg';
import brook from '../assets/brook.jpg';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const reviews = [
      {
        name: "Brooklyn Simmons",
        title: "Marketing Executive",
        location: "Miami, USA",
        message: "Absolutely love Vash! Their skincare products transformed my skin in just weeks. The quality of the ingredients is evident, and I can truly see the difference in my skin’s texture and glow.",
        secondary: "A game-changer for my skincare routine!",
        image: brook,
      },
      {
        name: "Marvin McKinney",
        title: "Creative Director",
        location: "California, USA",
        message: "My skin has never felt better. Vash truly understands skincare and quality.",
        secondary: "Highly recommended!",
        image: brook,
      },
      {
        name: "Wanda Maximoff",
        title: "Fashion Designer",
        location: "Florida, USA",
        message: "I've tried so many products, but Vash actually delivers results. Glowing skin!",
        secondary: "Finally found my forever skincare brand.",
        image: brook,
      },
    ];

    return (
    <section className='bg-[#faf8f6]'>
        <div className='ml-20'>
            <h1 className="text-4xl text-fuchsia-950 font-normal text-left my-9 ml-4">
                    <p className="text-sm font-normal mb-2">
                        <img src={explorearrow} alt="Explore Icon" className="inline-block mr-2 h-6 w-6" />
                        
                        TESTIMONIALS
                        </p>
                    CLIENT REVIEWS
            </h1>
        </div> 

        
            
                {reviews.map((review, index) => (
                  <div key={index} className="border-t border-gray-200 py-6 ml-24 pr-8">
                    <div
                      onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                      className="flex items-center justify-between cursor-pointer">
                        
                      <div className="flex items-center gap-4">
                        <span className="ml-2 inline-block text-lg font-bold transition-transform duration-500" style={{ transform: activeIndex === index? 'rotateZ(45deg) scale3d(1, 1, 1)': 'rotateZ(0deg) scale3d(1, 1, 1)',transformStyle: 'preserve-3d',}}>
                            +
                        </span>
                        <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full" />
                        <span className="font-medium">{review.name}</span>
                      </div>
                      <div className="text-right text-sm text-gray-600 flex items-center gap-2">
                        <span>{review.title}</span>
                        <span>{review.location}</span>
                        
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div className="mt-4 bg-[#f4f0ed] p-6 rounded-md text-center text-sm text-gray-700 mr-9">
                        <p className="mb-4">{review.message}</p>
                        <hr className="my-2" />
                        <p className="italic">{review.secondary}</p>
                      </div>
                    )}
                  </div>
                ))}
            
          
    </section>     
    );
}
export default Testimonial;