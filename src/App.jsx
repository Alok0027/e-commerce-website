import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from './components/Hero.jsx';
import Oproduct from './components/Oproduct.jsx';
import Aboutus from './components/Aboutus.jsx';
import Bsellprod from './components/Bsellprod.jsx';
import Latestprod from './components/Latestprod.jsx';
import Imagesec from './components/imagesec.jsx';
import Footer from './components/Footer.jsx';
import Trust from './components/Trust.jsx';
import Whyvash from './components/Whyvash.jsx';
import Testimonial from './components/Testimonial.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boutus from './pages/Boutus';
import Shop from "./pages/Shop";
import ArticleL from './components/ArticleL.jsx';
import Blog from "./pages/Blog";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Desc from "./pages/Desc";
import Cart from "./pages/Cart";
import { CartProvider } from './context/Cartcontext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
    <BrowserRouter>
      
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Oproduct />
              <Aboutus />
              <Bsellprod />
              <Imagesec />
              <Trust />
              <Latestprod />
              <Testimonial />
              <Whyvash />
              <ArticleL />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<Boutus />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/desc" element={<Desc />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>

      
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
