# IsItArt

## Description

This project is part of the Frontend Dev Boot Camp course challenge for the thirteen week "Modern Development with React: React Portfolio". 

It requires us to use React,  Bootstrap (or its equivalent), navigation using React Router and dynamic rendering to create a portfolio website. The Acceptance Criteria below details all that is required of a professional portfolio site.


### Methodology: Pseudo Code
* Identity all the components needed based on the wireframe:
  * navbar
  * header
  * component for the static pages such as home/about us, resume, skills page
  * prepare a JSON file for the 6 projects details which can be used to feed into 
    * project gallery page
    * individual details page.
  * prepare the relevant images required for website. 
  * prepare the CV in jpg and pdf format.  
  * preparing the routes for the whole website. 




## User Story

AS A web developer

I WANT a online portfolio 

SO THAT I can show to potential employers to demonstrate my skills




## Acceptance Criteria

* The portfolio ***must*** contain the
  * my name
  * Links to my GitHub profile, LinkedIn page, Email address, Phone number (optional) and CV (in PDF format and with up-to-date projects and professional experience).
  * A list of projects (Challenges or Projects). For each project, to have the Project title, Link to the deployed version, Link to the GitHub repository and screenshot of the deployed application
* The portfolio must render these 6 components:
  * App 
    * Must be the top-level component and render all necessary child components
  * Header
    * Must be rendered across every page component of the site
    * Must contain a Navbar
  * Home page
    * A landing page which renders my name, an avatar 
  * Projects page
    * Must render six instances of the Project component dynamically from a JSON file and import it into your project
  * Project (on Projects page) 
    * Must be a reusable component that ingests JSON data as props and renders a single instance for each project
    * Must utilize Router props to properly render the right project based on user selection
    * Must render info about the Project title, Link to the deployed version and GitHub repository and screenshot of the deployed application
  * Contact page  
    * Contact page:
      * Must include contact information such as Email address, Link to a PDF version of my CV, Link to my GitHub profile and to my LinkedIn page
      * Must have a contact form for handling events.


## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Testing](#testing)
* [Contribution](#contribution)


# Installation

* N.A.


## Usage 

### Screen Dumps:

* Portfolio Home Page
![screen dump - Home Page](public/images/reactPortfolio1.png)


* Portfolio Accordion Page
![screen dump - Portfolio Accordion Page](public/images/reactPortfolio2.png)


* Portfolio Contact Page
![screen dump - Portfolio Contact Page](public/images/reactPortfolio3.png)



## Credits

* Type writer text effects from [w3docs](https://www.w3docs.com/snippets/css/how-to-create-a-typewriter-text-with-only-css.html)
* Mr. JD Tadlock's React video walkthroughs on GitHub



## License 

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Features
* All the acceptance criteria have been implemented in addition to the following:
  * a separate page showing a series of digital illustrations display in a Bootstrap Carousel
  * a skills page

  
  
### Future Developments
* Attempt to use Materials ui (or other compatible) instead of the usual Bootstrap. 
* Continue to update the portfolio with newer content.



## Testing
* Testing is done in Chrome and Safari browsers
* Testing is done on web3mail to test the contact form


## Contribution
* If you have any query about this personal portforlio, please contact me via
  * GitHub [https://github.com/HaveTimeDrinkTea](https://github.com/HaveTimeDrinkTea)
  * email to <havetimedrinktea@gmail.com>

