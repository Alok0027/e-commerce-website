import aboutusp4 from '../assets/aboutusp4.jpg';

const Vision = () => {
  return (
    <section className="w-full bg-[#f8f5f1] py-16">
      <div className=" flex justify-aroundmax-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
            Leading the way to a more inclusive and ethical beauty industry
          </h2>
          <div className="flex items-start gap-4">
            <div className="bg-white shadow-sm rounded-lg p-4 w-48">
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Client Satisfaction</h3>
              <p className="text-xs text-gray-700 mt-20">
                Their needs guide our product development & brand evolution.
              </p>
            </div>
            <img src={aboutusp4} alt="aboutus" className="rounded-lg w-[26rem] h-auto object-cover" />
          </div>
        </div>
        <div className="text-gray-800 space-y-4">
          <h3 className="text-lg font-semibold">Our Vision</h3>
          <p className="text-sm">
            Our vision is to redefine beauty by providing sustainable, high-quality products that
            empower individuals, celebrate diversity, and promote confidence in every person.
          </p>
          <p className="text-sm">
            We aim to lead the beauty industry towards a more inclusive, ethical, and
            eco-conscious future.
          </p>
          <button className="mt-4 px-5 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
            Explore More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;