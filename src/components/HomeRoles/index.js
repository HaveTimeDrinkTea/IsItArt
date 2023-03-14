import React from "react";

export default function HomeRoles(props) {
   return (
   <>
   <div>
   <h3 className="homeRoles">
      <i className="fa fa-terminal iconColor" aria-hidden="true"></i>{props.roleType} 
   </h3>
   </div>

   </>
   )
}