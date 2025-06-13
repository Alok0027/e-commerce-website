import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import AnnouncementBar from "./components/AnnouncementBar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnnouncementBar />
      <Navbar/>
    </>
  )
}

export default App
