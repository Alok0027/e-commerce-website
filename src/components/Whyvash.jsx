import Whyvas from '../assets/Whyvas.jpg'
const Whyvash = () => {
  return (
    <div className="relative py-36 bg-[#faf8f6]">
      <img className="w-full h-96 object-cover brightness-50" src={Whyvas} alt="whyvas" />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
        <h2 className="text-4xl font-semibold mb-4">Why choose SkinCareSample?</h2>
        <p className="text-center max-w-3xl mb-8 text-base font-light">
          Our cruelty-free, eco-friendly, and high-performance products cater to all your
          <span className="font-medium"> skincare, makeup</span>, hair care, and wellness needs.
          With carefully selected ingredients and innovative formulations,
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full max-w-4xl">
          <div className="bg-white text-black p-4 rounded-lg flex flex-col items-center justify-center shadow-md">
            <div className="text-2xl mb-2">📦</div>
            <p className="text-sm font-medium text-center">Fast & reliable shipping</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg flex flex-col items-center justify-center shadow-md">
            <div className="text-2xl mb-2">⏱️</div>
            <p className="text-sm font-medium text-center">Outstanding premium quality</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg flex flex-col items-center justify-center shadow-md">
            <div className="text-2xl mb-2">💳</div>
            <p className="text-sm font-medium text-center">Flexible payment options</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whyvash;