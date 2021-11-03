import React, {Component, Fragment} from 'react';
import NavbarComp from './NavbarComp.js';
import Jumbo from './JumboComp.js';
import AboutPage from './About.js';
import ProjectPage from './Project.js';
import SkillsPage from './skills.js';
import TimelinePage from './Timeline.js';
import './App.css';

class App extends Component {
  render(){
    return [
      <Fragment>
      <NavbarComp />
      <Jumbo/>
      <AboutPage />
      <ProjectPage />
      <SkillsPage />
      <TimelinePage/>
      </Fragment>

    ];
  }
}

export default App;
