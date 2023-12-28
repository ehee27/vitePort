import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Tech from './components/Tech'

function App() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 to-black px-5">
      <Navbar />
      <Banner />
      <Portfolio />
      <Tech />
      <Footer />
    </div>
  )
}

export default App
