import kewhero from "../assets/kewhero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-screen overflow-hidden ">
      <div>
        <a href="#">
            <img src={kewhero} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover filter brightness-75" />
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