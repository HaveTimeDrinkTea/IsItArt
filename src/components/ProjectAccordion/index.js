
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import portfolioData from '../portfolio.json';
import AccordionItem from './AccordionItem';


export default function ProjectAccordion(props) {

  const[portfolioList, setPortfolioList] = useState(portfolioData);

  return (
    <>
      
      <Accordion defaultActiveKey="1" flush>
            {portfolioList.map((proj) => (
              
                <AccordionItem
                  id={proj.id}
                  projName={proj.projName}
                  imageLoc={proj.imageLoc}
                  descShort={proj.descShort}
                  descLong={proj.descLong}
                  tech={proj.tech}
                  />
                  
            ))}
      </Accordion>

    </>
  );
}

