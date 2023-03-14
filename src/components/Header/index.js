import React from "react";
import NavbarScroll from "../NavbarScroll";
import "./style.css";

export default function Header() {
   return (
      <>
      <header>
         <NavbarScroll />
         <div className="avatar_container">
            <img src={require("./webdeveloper_peiwang.png")} alt="avatar of Pei Wang." className="avatar_image avatar" title="hover over me!" />
            <div className="avatar_middle">
               <img src={require("./webdeveloper_peiwang2.png")} alt="another avatar of Pei Wang" className="avatar_image avatar" />
            </div>
         </div>  
      </header>
      </>
   )
}
