import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SportsHead from './components/SportsHead'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <SportsHead />
      <Footer />
    </div>
  )
}

export default App