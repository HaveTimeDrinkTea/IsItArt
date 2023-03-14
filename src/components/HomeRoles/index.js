import React from "react";

function HomeRoles(props) {
   return (
   <>
   <div>
   <h3 className="homeRoles">
      <i class="fa fa-terminal iconColor" aria-hidden="true"></i>{props.roleType} 
   </h3>
   </div>

   </>
   )
}

export default HomeRoles;