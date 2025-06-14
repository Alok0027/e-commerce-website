import blush from '../assets/blush.jpg';
import eyeshadow from '../assets/eyeshadow.jpg';
import mascara from '../assets/mascara.jpg';
import nailpaint from '../assets/nailpaint.jpg';

const Oproduct = () => {
  return (
    <div className="border-b border-gray-200 bg-[#faf8f6] py-20">
        <h1 className="text-4xl font-extralight text-center my-11">
            Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <img src={blush} alt="Blush" className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"/>
                </div>

                <div className="p-4 text-center font-medium">Blush</div>

            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <img src={eyeshadow} alt="Eyeshadow" className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                </div>

                <div className="p-4 text-center font-medium">Eye Shadow</div>

            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <img src={mascara} alt="Mascara" className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110" />
                </div>

                <div className="p-4 text-center font-medium">Mascara</div>

            </div>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden relative">
                <div className="overflow-hidden">
                    <img src={nailpaint} alt="Nailpaint" className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"/>
                </div>

                <div className="p-4 text-center font-medium">Nailpaint</div>

            </div>
        </div>

    </div>
  );
}

export default Oproduct;