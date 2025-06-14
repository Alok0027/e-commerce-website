import herovid from "../assets/herovid.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-3/4 object-cover z-0"
      >
        <source src={herovid} type="video/mp4" />
      </video>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Your Beauty, Your Rules.
        </h1>
        <p className="text-xl font-light drop-shadow-md">
          Explore timeless favorites and trend-forward looks crafted for you.
        </p>
      </div>
    </div>
  );
};

export default Hero;