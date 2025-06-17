import brook from '../assets/brook.jpg';
import contactimg from '../assets/contactimg.jpg';
import { FiMail } from 'react-icons/fi';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
    <div className="bg-[#f7f3ef] px-8 md:px-24 py-16 font-sans">
      <h3 className="text-[#612c2c] text-sm font-semibold mb-2">➤ GET IN TOUCH</h3>
      <h1 className="text-5xl font-semibold text-[#4b2c2c] mb-12">Contact us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Full name*</label>
            <input type="text" className="w-full p-3 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email address*</label>
            <input type="email" className="w-full p-3 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone number</label>
            <input type="tel" className="w-full p-3 rounded-md border border-gray-300" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Write your message here*</label>
            <textarea className="w-full p-3 rounded-md border border-gray-300" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-md w-fit">Submit Now</button>
        </form>

        <div className="space-y-6">
          <p className="text-gray-700">Our team is ready to assist you with any inquiries regarding our products, services, or orders.</p>
          <div className="flex gap-2">
            <img src={brook} alt="Team Member" className="w-8 h-8 rounded-full" />
            <img src={brook} alt="Team Member" className="w-8 h-8 rounded-full" />
            <img src={brook} alt="Team Member" className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#e8dfd7] rounded-lg p-4 w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-white rounded-full">
                  <FiMail />
                </div>
                <span>Write an email</span>
              </div>
              <p className="text-sm text-gray-800 mb-1 border-b border-gray-300 pb-1">info@example.com</p>
              <p className="text-sm text-gray-600">Need help? Write to us, and we’ll respond promptly!</p>
            </div>
            <img src={contactimg} alt="Contact" className="rounded-lg w-full md:w-1/2 h-auto object-cover" />
          </div>
          <div className="pt-4">
            <p className="text-sm font-semibold text-gray-800">Phone</p>
            <p className="text-sm text-gray-600 mb-2">+(480) 555-0103</p>
            <p className="text-sm font-semibold text-gray-800">Office Address</p>
            <p className="text-sm text-gray-600">6391 Elgin St. Celina, Delaware 10299</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Contact;