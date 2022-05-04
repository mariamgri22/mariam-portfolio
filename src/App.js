import './App.css';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Projects from './components/Projects'
import Header from './components/Header';

function App() {
  return (
   <>
    <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
