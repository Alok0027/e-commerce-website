import Navbar from './Navbar';
import Footer from './Footer';

const Smallay = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Smallay;