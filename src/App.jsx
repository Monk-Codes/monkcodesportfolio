import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Hero />} />
     </Route>
    </Routes>
   </BrowserRouter>
   <Projects />
   <Contact />
  </>
 );
}

export default App;
