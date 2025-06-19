import { useEffect, useState } from "react";
import hdimg5 from "../assets/hdimg5.jpg";
import hdimg4 from "../assets/hdimg4.png";
import hdimg3 from "../assets/hdimg3.jpg";

const Hero = () => {
  const images = [hdimg5, hdimg4, hdimg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[95vh] w-screen overflow-hidden pt-24">
      <div>
        <a href="#">
            <img src={images[currentImageIndex]} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover filter brightness-75 transition-opacity duration-1000" />
        </a>
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-center text-white text-left px-8 md:px-28">

        <h1 className="text-6xl font-light mb-4 drop-shadow-lg font-sans">
          Glow brighter every
        </h1>
        <h1 className="text-6xl font-light mb-4 drop-shadow-lg">
          day with cosmetics
        </h1>
        <h1 className="text-6xl font-light mb-4 drop-shadow-lg">
          that best in you
        </h1>
        <p className="text-xl font-extralight drop-shadow-md">
          Elevate your beauty with luxurious cosmetics
        </p>
         <p className="text-xl font-extralight drop-shadow-md">
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