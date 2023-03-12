
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.js';
import Main from './components/Main/index.js';
import Footer from './components/Footer/index.js';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

function App() {
   
   const title = "HaveTime.DrinkTea title"


   return (
   <>
   
      <Header title={title} />

      <Routes>
         <Route path="/" element={<Home title={title}/>} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/skills" element={<Skills />} />
         <Route path="/resume" element={<Resume />} />
         <Route path="*" element={<Home title={title}/>} />
      </Routes> 

      <Footer />
   </>
)
}

export default App;
