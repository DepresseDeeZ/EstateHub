import Navbar from "./components/navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homePage/homePage"
import About from './components/about/About';
import Properties from './components/properties/Properties';
import Blog from './components/blog/Blog';
import Footer from "./components/footer/Footer";
import bannerImg from "../src/components/footer/banner.png"
function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
      <HomePage />
      <About />
      <Properties />
      <Blog />
            <div className='max-padd-container py16 overflow-x-hidden'>
                <img src={bannerImg} alt="" />
            </div>
      <Footer />
      </div>
            
    </div>
  )
}

export default App;
