
import { Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar/index';
import Header from './components/Header/index.js';
// import Main from './components/Main/index.js';
// import Footer from './components/Footer/index.js';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
   
   const title = "React .map over Array Tutorial"


   return (
   <>
   
      <Header title={title} />
      <Routes>
         <Route path="/" element={<Home title={title}/>} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/resume" element={<Resume />} />
         <Route path="*" element={<Home />} />
      </Routes> 

      {/* <Main />
      <Footer /> */}
   </>
)
}

export default App;
