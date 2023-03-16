import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default function ProjAccordionItem(props) {

   let projects = [];
    projects = Object.values(props);
   console.log("projects:", projects);
   
   return (
      <>

         {projects.map((project, index) => {

            <Accordion.Item eventKey={project[0]} key={index}>

               <Accordion.Header>
                  Portfolio Showcase {project[0]}
                  </Accordion.Header>

               <Accordion.Body>
                  <img src={project[2]} alt={project[1]} className="center"/>
                  <h4>{project[1]}</h4>
                  <p>
                     {project[3]}
                  </p>
                  <p>
                     Created with {project[5]}
                  </p>

                  <div className="alignRight">
                     <a href={`/portfolioproject/` + project[0]} className="accordionLink">
                        <em>More</em> 
                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                     </a>
                  </div>
               </Accordion.Body>
            </Accordion.Item>


         })}

      
      </>
   );
}
