import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,  Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <>
     
    <Router>
    <NavBar/>
    <Slider/>
     <Routes>
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
     <Portfolio/>
     <Testimonial/>
     <Footer/>
    </Router>
    </>
  );
}

export default App;
