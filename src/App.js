
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.js';
import NavbarScroll from './components/NavbarScroll/index.js';
import Wrapper from './components/Wrapper/index.js';
import Footer from './components/Footer/index.js';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioProject from './pages/PortfolioProject';
import PortfolioArt from './pages/PortfolioArt';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

function App() {
   
   const title = "HaveTime.DrinkTea title"


   return (
   <>


         <NavbarScroll />
         {/* <Header title={title} /> */}
         <Wrapper> 

         <Routes>
               <Route path="/" element={<Home title={title}/>} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
               <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/portfolio/project/1" element={<PortfolioProject id={"1"} />} />
               <Route path="/portfolioart" element={<PortfolioArt />} />
               <Route path="/skills" element={<Skills />} />
               <Route path="/resume" element={<Resume />} />
               <Route path="*" element={<Home title={title}/>} />
            </Routes>             
         </Wrapper>
         <Footer />

   </>
)
}

export default App;
