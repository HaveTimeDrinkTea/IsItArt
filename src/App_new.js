
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import {Routes, Route, HashRouter} from 'react-router-dom';

import NavbarScroll from './components/NavbarScroll/index.js';
import NavbarScrollFooter from './components/NavbarScrollFooter/index.js';
import Wrapper from './components/Wrapper/index.js';
import Header from './components/Header/index.js';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import PortfolioArt from './pages/PortfolioArt';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

function App() {
   

   return (
   <>
      
      <NavbarScroll />
      {/* <Header /> */}
      <Wrapper> 
      
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolioproject/1" element={<PortfolioProject id={"1"} />} /> <Route path="/portfolioproject/2" element={<PortfolioProject id={"2"} />} />
            <Route path="/portfolioproject/3" element={<PortfolioProject id={"3"} />} />
            <Route path="/portfolioproject/4" element={<PortfolioProject id={"4"} />} />
            <Route path="/portfolioproject/5" element={<PortfolioProject id={"5"} />} />
            <Route path="/portfolioproject/6" element={<PortfolioProject id={"6"} />} />
            <Route path="/portfolioart" element={<PortfolioArt />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Home />} />
         </Routes>
         
      </Wrapper>
      <NavbarScrollFooter />

   </>
)
}

export default App;
