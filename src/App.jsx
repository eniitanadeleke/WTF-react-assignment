// App.jsx
import TopBar from './components/TopBar/TopBar'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import About from './components/About/About'
import VideoStats from './components/VideoStats/VideoStats'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <TopBar />
        <Navbar />
      </header>

      <Hero />
      <Features />
      <About />
      <VideoStats />
      <WhyChooseUs />

    </div>
  )
}

export default App