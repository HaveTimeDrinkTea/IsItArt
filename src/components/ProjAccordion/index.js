
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import portfolioData from '../portfolio.json';
import ProjAccordionItem from '../ProjAccordionItem';

export default function ProjAccordion(props) {

  // const[portfolioList, setPortfolioList] = useState(portfolioData);
  
  let portfolioList = portfolioData;

  return (
    <>
    <div className="rhsPortfolioArt">
      <Accordion defaultActiveKey="1" flush>
            {portfolioList.map((proj) => (
              
                <ProjAccordionItem
                  id={proj.id}
                  projName={proj.projName}
                  projURL={proj.projURL}
                  imageLoc={proj.imageLoc}
                  isGithubUR={proj.isGithubURL}
                  githubURL={proj.githubURL}
                  tech={proj.tech}
                  descShort={proj.descShort}
                  descLong={proj.descLong}
                  />
            ))}
      </Accordion>
    </div>      
    </>
  );
}

