import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import newsearch from '../assets/newsearch.png';
import newprofile from '../assets/newprofile.png';
import newcart from '../assets/newcart.png';

const Navbar = () => {
  return (

    <nav className="bg-stone-200 shadow-md py-4 px-6 flex items-center justify-between h-16">

        <div className="hidden md:flex gap-7 font-inter font-medium text-sm text-black pl-16">
        
        {[
          { text: "OUR STORY", path: "/about" },
          { text: "SHOP", path: "/shop" },
          { text: "BLOGS", path: "/blog" },
          { text: "REVIEW", path: "/review" },
          { text: "CONTACT", path: "/contact" }
        ].map(({ text, path }, index) => (
          <Link
            key={index}
            to={path}
            className="relative group text-black font-light"
          >
            {text}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

        <div className="flex items-center h-10 w-24 mr-72">
            <a href="#">
                <img src={logo} alt="Brand Logo" className="h-10 w-auto" />
             </a>
      </div>

      
      

      <div className="flex pr-16">
            <a href="#">
                <img src={newsearch} alt="Search Icon" className="h-10 w-10" />
             </a>
            
            <Link to="/cart">
                <img src={newcart} alt="Cart Icon" className="h-10 w-10 ml-4" />
            </Link>

            <a href="#">
                <img src={newprofile} alt="User Icon" className="h-7 w-7 ml-4 mt-1" />
             </a>
      </div>
    </nav>
  );
}

export default Navbar;