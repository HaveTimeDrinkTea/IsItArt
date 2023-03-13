import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Card(props) {

   return (
   <div className="card">
     
      <div className="img-container">
         <img alt={props.projName} src={props.imageLoc} />
      </div>

      <div className="content">
         <ul>
            <li>
               <strong>Name:</strong> {props.projName}{props.imageLoc}
            </li>
            <li>
               <strong>Created with:</strong> {props.tech}
            </li>
         </ul>
         <button> <NavLink to="project/`{props.id}`"
      end className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>more details</NavLink></button>
        
      </div>

      </div>

   );
}

      //-- the onclick thingie is a function otherwise props.removeFriend(props.id) will be called on page load and not on click
