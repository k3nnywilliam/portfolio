import React, {Component, Fragment} from 'react';
import NavbarComp from './NavbarComp.js';
import Jumbo from './JumboComp.js';
import AboutPage from './About.js';
import CornPage from './Corn.js';
import ProjectPage from './Project.js';
import SkillsPage from './skills.js';
import TimelinePage from './Timeline.js';
import ContactPage from './Contact.js';
import FooterPage from './Footer.js';
import './App.css';

class App extends Component {
  render(){
    return [
      <Fragment>
      <NavbarComp />
      <Jumbo/>
      <AboutPage />
      <CornPage />
      <ProjectPage />
      <SkillsPage />
      <TimelinePage/>
      <ContactPage/>
      <FooterPage/>
      </Fragment>

    ];
  }
}

export default App;
