import logo from '../assets/logo.jpg';
import newsearch from '../assets/newsearch.png';
import newprofile from '../assets/newprofile.png';
import newcart from '../assets/newcart.png';

const Navbar = () => {
  return (

    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between h-50">

        <div className="flex items-center h-50 w-50">
            <a href="#">
                <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
             </a>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-black">
            <a href="#" className=" text-black hover:underline font-light text-base">Our Story</a>
            <a href="#" className="text-black hover:underline font-light text-base">Shop</a>
            <a href="#" className="text-black hover:underline font-light text-base">Reviews</a>
            <a href="#" className="text-black hover:underline font-light text-base">Blog</a>
            <a href="#" className="text-black hover:underline font-light text-base">Contact</a>
      </div>
      

      <div className="flex items-center">
            <a href="#">
                <img src={newsearch} alt="Search Icon" className="h-10 w-10" />
             </a>
            
            <a href="#">
                <img src={newcart} alt="Cart Icon" className="h-10 w-10 ml-4" />
            </a>

            <a href="#">
                <img src={newprofile} alt="User Icon" className="h-7 w-7 ml-4" />
             </a>
      </div>
    </nav>
  );
}

export default Navbar;