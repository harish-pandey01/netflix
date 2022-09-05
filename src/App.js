import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Carrier from "./pages/Carrier";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="about" element={<About/>} />
     <Route path="contact" element={<Contact/>} />
     <Route path="carrier" element={<Carrier/>} />
   </Routes>
   <Footer />
   </BrowserRouter>
  
  );
}

export default App;
