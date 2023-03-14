import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default function ProjAccordionItem(props) {

   return (
      <>
         <Accordion.Item eventKey={props.id}>
            <Accordion.Header>Portfolio Showcase {props.id}</Accordion.Header>
            <Accordion.Body>
               <img src={props.imageLoc} alt={props.projName} className="center"/>
               <h4>{props.projName}</h4>
               <p>
                  {props.descShort}
               </p>
               <p>
                  Created by {props.tech}
               </p>
               <div className="alignRight">
               <a href={`/portfolio/project` + props.id} className="accordionLink">More <i class="fa fa-chevron-circle-right" aria-hidden="true"></i><i class="fa fa-chevron-circle-right" aria-hidden="true"></i><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
               </div>
            </Accordion.Body>
         </Accordion.Item>
      
      </>
   );
}
