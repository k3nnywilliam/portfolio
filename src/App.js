import React, { Component, Fragment } from 'react';
import NavbarComp from './NavbarComp.js';
import MyJumbo from './components/MyJumbo.js';
import AboutPage from './About.js';

import ProjectPage from './Project.js';
import SkillsPage from './skills.js';
import Timeline from './components/Timeline.js';
//import TimelinePage from './Timeline.js';
import ContactPage from './Contact.js';
//import FooterPage from './Footer.js';
import FooterPage from './components/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <NavbarComp />
        <MyJumbo/>
      
        <ProjectPage />
        <SkillsPage />
        {/* <TimelinePage /> */}
        
        <Timeline/>
        <AboutPage />
        <ContactPage />
        
        <FooterPage />
      </>

    );
  }
}

export default App;
