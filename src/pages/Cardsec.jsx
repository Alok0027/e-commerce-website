
const Cardsec = () => {
  return (
    <section className="w-screen bg-[#ebe2d9] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6  ">
        
        <div className="bg-[#cbd5e1] p-6 rounded-lg shadow-md h-64 brightness-90">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold mb-2">Products in Our Range</h3>
              <p className="mb-4 text-sm text-gray-700">
                Vash now offers over 300 unique beauty products, from skincare to makeup essentials.
              </p>
            </div>
            <p className="text-3xl font-bold">300+</p>
          </div>
        </div>

        
        <div className="bg-[#e2cfcf] p-6 rounded-lg shadow-md h-64 brightness-90">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-gray-700">
                Our products are trusted and loved by beauty enthusiasts worldwide.
              </p>
            </div>
            <p className="text-3xl font-bold">10+</p>
          </div>
        </div>

        
        <div className="bg-[#cde0c3] p-6 rounded-lg shadow-md h-64 brightness-90">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold mb-2">Repeat Customer Rate</h3>
              <p className="text-sm text-gray-700">
                Our customers return for additional purchases, reflecting the trust they have in our brand.
              </p>
            </div>
            <p className="text-3xl font-bold">40%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardsec;