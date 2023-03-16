// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import NavbarScroll from './components/NavbarScroll/index.js';
import NavbarScrollFooter from './components/NavbarScrollFooter/index.js';
import Wrapper from './components/Wrapper/index.js';


import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import PortfolioArt from './pages/PortfolioArt';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {

   return (
      <>
         <NavbarScroll />
         <Wrapper> 
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/contact" element={<Contact />} />
               <Route exact path="/portfolio" element={<Portfolio />} />
               <Route exact path="/portfolioproject/1" element={<PortfolioProject id={"1"} />} />
               <Route exact path="/portfolioproject/2" element={<PortfolioProject id={"2"} />} />
               <Route exact path="/portfolioproject/3" element={<PortfolioProject id={"3"} />} />
               <Route exact path="/portfolioproject/4" element={<PortfolioProject id={"4"} />} />
               <Route exact path="/portfolioproject/5" element={<PortfolioProject id={"5"} />} />
               <Route exact path="/portfolioproject/6" element={<PortfolioProject id={"6"} />} />
               <Route exact path="/portfolioart" element={<PortfolioArt />} />
               <Route exact path="/skills" element={<Skills />} />
               <Route exact path="/resume" element={<Resume />} />
               <Route path="*" element={<Home />} />
            </Routes>             
         </Wrapper>
         <NavbarScrollFooter />
      </>
)
}

export default App;