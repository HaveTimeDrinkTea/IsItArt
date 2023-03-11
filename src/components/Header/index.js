import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
// import Navbar from '../components/Navbar/index.js';

export default function Header() {
   return (
      <header>
         <h3><NavLink to="/">Is It Art?</NavLink></h3>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
         </nav>
      </header>
   )
}
