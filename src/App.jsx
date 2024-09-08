<<<<<<< HEAD
import Navbar from "./components/navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homePage/homePage"
function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
      <HomePage />
      </div>
            
    </div>
  )
}
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import Listing from "./pages/Listing";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";
import Header from "./components/Header";
import Footer from "./components/Footer";
>>>>>>> b0168b35bd36029cad6f8fa4c0275acf01603268

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}