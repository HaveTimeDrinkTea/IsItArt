import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Header() {
   return (
      <header>
         <h3><NavLink to="/"><span className="logo">Is It Art?</span></NavLink></h3>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/resume">Resume</NavLink>
         </nav>
      </header>
   )
}
