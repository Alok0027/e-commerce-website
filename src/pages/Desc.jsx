import truck from "../assets/truck.svg";
import watch from "../assets/watch.svg";
import silkhairserum from "../assets/silkhairserum.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cartcontext";
import Smallay from "../components/Smallay";

const Desc = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <Smallay>
    <div className="bg-[#f7f3ef] min-h-screen px-8 md:px-24 py-28 font-sans flex flex-col lg:flex-row gap-8">
      <div className="flex-1 flex items-center justify-center mb-72">
        <img src={silkhairserum} alt="Product" className="w-full max-w-md rounded-lg" />
      </div>

      <div className="flex-1 text-black space-y-5 mt-8">
        <div className="flex flex-col">
        <h1 className="text-4xl font-normal">Silk Smooth Hair Serum</h1>
        <p className="text-lg text-gray-600">
          Tame frizz and add shine with this smoothing serum.
        </p>
        <p className="text-xl font-semibold">Rs. 18.99 </p>

        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Lightweight formula for silky</li>
          <li>Protects against heat damage</li>
          <li>Suitable for all hair types</li>
        </ul>

        <div className="flex items-center gap-4 mt-4">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-12 text-center border border-gray-300 rounded-md py-4"
          />
          <button
            onClick={() => {
              addToCart({
                id: "silk-smooth-hair-serum",
                name: "Silk Smooth Hair Serum",
                price: 18.99,
                image: silkhairserum,
              });
              navigate("/cart");
            }}
            className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition inline-block text-center"
          >
            Add to Cart
          </button>
        </div>

        <div className="border-t border-gray-300 pt-4 text-sm text-gray-700">
          <p>
            <span className="font-semibold">SKU:</span> SSHS-016
            <span className="ml-6 font-semibold">Categories:</span> Makeup
            <span className="ml-6 font-semibold">Tag:</span> Frizz Control
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p>
            <img src={truck} alt="truck" className="inline w-4 h-4 mr-2" />
            Enjoy free shipping on all orders — no minimum!
          </p>
          <p>
            <img src={watch} alt="watch" className="inline w-4 h-4 mr-2" />
            Get your order delivered in 3–7 working days
          </p>
        </div>
        </div>

        <div className="mt-12 px-4 md:px-0">
          <div className="border-b border-gray-300 flex gap-8 text-lg font-medium text-gray-700">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2 border-b-2 ${
                activeTab === "overview" ? "border-black text-black" : "border-transparent text-gray-400"
              }`}
            >
              Product Overview
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-2 border-b-2 ${
                activeTab === "shipping" ? "border-black text-black" : "border-transparent text-gray-400"
              }`}
            >
              Shipping Information
            </button>
          </div>
          {activeTab === "overview" && (
            <div className="mt-6 space-y-4 text-gray-700 text-sm leading-6">
              <p>
                Our project aims to redefine the online shopping experience for beauty enthusiasts. By focusing on user-centric design and cutting-edge technology, we're creating a platform that not only showcases the latest trends in cosmetics but also offers personalized recommendations based on individual preferences.Our goal is to empower users to discover and purchase products that align perfectly with their beauty goals, all within a seamless and intuitive interface.
              </p>
              <p>
                Vash is dedicated to revolutionizing the beauty industry through innovation and user-focused design. By integrating advanced technology with a deep understanding of consumer needs, we aim to create a platform that offers an unparalleled shopping experience. From skincare to cosmetics and haircare, our goal is to curate a diverse range of products that cater to every aspect of personal beauty care. With a commitment to quality, accessibility, and customer satisfaction, we're poised to redefine how beauty products are discovered, purchased, and enjoyed online.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Exceptional customer service with dedicated support for inquiries, returns, and post-purchase assistance, ensuring customer satisfaction.
                </li>
                <li>Prioritizing the needs and preferences of customers to ensure a delightful shopping experience.</li>
                <li>A user-friendly online platform that provides a seamless shopping experience, from browsing to purchasing and customer support.</li>
                <li>Continuously exploring new technologies and design trends to offer cutting-edge products.</li>
              </ul>
            </div>
          )}
          {activeTab === "shipping" && (
            <div className="mt-6 space-y-4 text-gray-700 text-sm leading-6">
              <div>
                <h3 className="font-semibold text-base mb-2">Cancellation Policy</h3>
                <p>
                  A. Cras auctor nisl non ornare pellentesque orci leo congue et vel pellentesque at amet quisque arcu purus tincidunt in lectus adipiscing phasellus
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Erat in vitae pretium adipiscing convallis auctor lacus pharetra.</li>
                  <li>Orci arcu nisi nisl quisque fermentum vulputate vitae.</li>
                  <li>Cursus aliquet nunc faucibus mollis sed fusce fames consequat.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-base mt-6 mb-2">Shipping</h3>
                <p>
                  At senectus velit feugiat tortor est volutpat hendrerit orci. Tortor adipiscing proin orci euismod accumsan cursus felis morbi. Non dignissim sapien nec porttitor tellus. Eget feugiat sed sapien et. Faucibus sollicitudin tortor vestibulum tellus neque in turpis. Massa ipsum felis fermentum tortor mattis fermentum massa. Diam magna pharetra ipsum porta commodo tristique quam. Odio cras sed dis molestie vehicula amet. Non libero tortor tellus viverra viverra nulla amet aliquet. Dignissim aliquet magna vivamus et ac pellentesque. Nulla accumsan turpis vel convallis. Tellus pulvinar diam ultricies sed id sed aenean. Est enim commodo pharetra diam. Convallis leo neque faucibus et convallis vitae rhoncus.
                </p>
                <p className="mt-4">
                  Odio porttitor eget ligula massa in risus fermentum fermentum enim. Feugiat euismod turpis sit massa sem pellentesque. Dapibus viverra in et vestibulum vulputate adipiscing lobortis rhoncus gravida. Leo quam cursus sit at amet augue ut et ut. Semper leo viverra in neque amet consectetur. Sagittis enim arcu lacus a feugiat in suspendisse. Eget non dui ultrices viverra sociis tortor. Lorem ullamcorper dignissim sed molestie duis cursus. Amet egestas enim ornare elit nascetur lectus porttitor.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </Smallay>
  );
};

export default Desc;