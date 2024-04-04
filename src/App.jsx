// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/about";
function App() {
 return (
  <>
   <Navbar />
   <Hero />
   <About />
   <Projects />
   <Contact />
   <Footer />
  </>
 );
}

export default App;
