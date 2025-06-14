import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Hero from './components/hero.jsx';
import Oproduct from './components/Oproduct.jsx';
import Aboutus from './components/Aboutus.jsx';
import Bsellprod from './components/Bsellprod.jsx';
import Latestprod from './components/Latestprod.jsx';
import Imagesec from './components/imagesec.jsx';
import Footer from './components/Footer.jsx';
import Lastvid from './components/Lastvid.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnnouncementBar />
      <Navbar/>
      <Hero />
      <Oproduct />
      <Aboutus />
      <Bsellprod />
      <Imagesec />
      <Latestprod />
      <Lastvid />
      <Footer />
    </>
  )
}

export default App
