
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import portfolioData from '../portfolio.json';
import ProjAccordionItem from '../ProjAccordionItem';

export default function ProjAccordion(props) {

  const[portfolioList, setPortfolioList] = useState(portfolioData);

  return (
    <>
    <div className="rhsPortfolioArt">
      <Accordion defaultActiveKey="1" flush>
            {portfolioList.map((proj) => (
              
                <ProjAccordionItem
                  id={proj.id}
                  projName={proj.projName}
                  imageLoc={proj.imageLoc}
                  descShort={proj.descShort}
                  descLong={proj.descLong}
                  tech={proj.tech}
                  />
                  
            ))}
      </Accordion>
    </div>      
    </>
  );
}

