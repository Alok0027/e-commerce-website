import { useEffect, useState } from "react";
import kewhero from "../assets/kewhero.jpg";
import trialp1 from "../assets/trialp1.jpg"
import trialp2 from "../assets/trialp2.jpg"

const Hero = () => {
  const images = [trialp1, trialp2, kewhero];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[95vh] w-screen overflow-hidden ">
      <div>
        <a href="#">
            <img src={images[currentImageIndex]} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover filter brightness-75 transition-opacity duration-1000" />
        </a>
      </div>

      <div className="relative z-10 h-full w-full flex flex-col items-start justify-center text-white text-center pl-20 pb-72">

        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          Glow brighter every
        </h1>
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          day with cosmetics
        </h1>
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          that best in you
        </h1>
        <p className="text-xl font-normal drop-shadow-md">
          Elevate your beauty with luxurious cosmetics
        </p>
         <p className="text-xl font-normal drop-shadow-md">
          crafted to celebrate your natural charm.
        </p>
                <button className="bg-white text-black px-4 py-2 rounded-lg font-normal shadow hover:bg-gray-100 transition 
                w-40 mt-6">
                    View collection
                </button>
      </div>
    </div>
  );
};

export default Hero;