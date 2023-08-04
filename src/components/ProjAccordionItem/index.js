import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default function ProjAccordionItem(props) {

   return (
      <>

            <Accordion.Item eventKey={props.id} key={props.id}>
               <Accordion.Header>Portfolio Showcase {props.id}</Accordion.Header>
               <Accordion.Body>
                  <img src={props.imageLoc} alt={props.projName} className="center"/>
                  <h4>{props.projName}</h4>

                  <p>
                     {props.descLong}
                  </p>
                  <p>
                     Created with {props.tech}
                  </p>
                  
                  <div className="alignRight">
                     <a href={props.githubURL} className="accordionLink" target="_blank" rel="noreferrer" alt={props.projName + `GitHub Repo`}><em>GitHub Repo</em>&nbsp;<i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
                  </div>
                  
                  <div className="alignRight">
                     <a href= {props.projURL} className="accordionLink" target="_blank" rel="noreferrer" alt={props.projName}><em>Deployed Site</em>&nbsp;<i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
                  </div>
   
                  {/* <div className="alignRight">
                     <a href={`/portfolioproject/` + props.id} className="accordionLink"><em>More</em> <i className="fa fa-chevron-circle-right" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
                  </div> */}
               </Accordion.Body>
            </Accordion.Item>

      
      </>
   );
}
