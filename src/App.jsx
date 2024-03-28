import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";
import Hero from "./components/hero";
import Projects from "./components/projects";

function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Hero />} />
     </Route>
     {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
   </BrowserRouter>
   <Projects />
  </>
 );
}

export default App;
