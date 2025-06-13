import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Hero from './components/hero.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnnouncementBar />
      <Navbar/>
      <Hero />
    </>
  )
}

export default App
