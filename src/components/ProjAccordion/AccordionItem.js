import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default function AccordionItem(props) {

   return (
      <>
         <div className="rhsPortfolioArt">
         <Accordion.Item eventKey={props.id}>
            <Accordion.Header>Portfolio Showcase {props.id}</Accordion.Header>
            <Accordion.Body>
               <img src={props.imageLoc} alt={props.projName} className="center"/>
               <p>
               {props.projName}
               </p>
               <p>
                  {props.descShort}
               </p>
               <p>
                  Created by {props.tech}
               </p>
               <div className="alignRight">
               <a href="/portfolio/project1" className="accordionLink">more <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
               </div>
            </Accordion.Body>
         </Accordion.Item>
         </div>
      </>
   );
}
