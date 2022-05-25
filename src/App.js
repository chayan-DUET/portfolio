import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Service from './Components/Service';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <>
     <NavBar/>
     <Slider/>
     <Service/>
     <Portfolio/>
     <About/>
     <Testimonial/>
     <Footer/>
    </>
  );
}

export default App;
