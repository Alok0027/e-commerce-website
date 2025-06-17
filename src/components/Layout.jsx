import Navbar from './Navbar';
import Footer from './Footer';
import Testimonial from './Testimonial'; // optional

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Layout;