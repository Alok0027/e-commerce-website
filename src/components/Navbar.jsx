import { Link } from 'react-router-dom';
import newsearch from '../assets/newsearch.png';
import newprofile from '../assets/newprofile.png';
import newcart from '../assets/newcart.png';
import amaia from '../assets/amaia.png';
import mlogo from '../assets/mlogo.png';
import { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const prevScrollPos = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 10);

      if (currentScrollPos < 100 || currentScrollPos < prevScrollPos.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <nav className={`${isScrolled ? 'bg-transparent' : 'bg-stone-200'} transition-colors duration-500 py-4 px-2 flex items-center justify-between h-16 fixed w-full top-0 z-50 ${showNavbar ? 'block' : 'hidden'}`}>

        <div className="flex items-center h-10 w-auto ml-20 gap-4">
            <a href="#">
                <img src={mlogo} alt="Brand m" className="h-8 w-6" />
             </a>
      </div>

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