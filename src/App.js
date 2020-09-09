import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Header from './headers/Header';

import AboutMeContainer from './components/AboutMeContainer';
import Projects from './components/ProjectContainer';
import Resume from './components/ResumeContainer';

const App = () => {
  // Initialize history
  const history = useHistory();

  // Render Projects Page
  const renderProjects = () => {
    return (
      <Projects />
    );
  };

  // Render Resume Page
  const renderResume = () => {
    return (
      <Resume />
    );
  };

  // Render AboutMe Page
  const renderAboutMe = () => {
    return (
      <AboutMeContainer />
    );
  };

  // RETURN
  return (
    <div className="maincontainer">
      <div className="title">
        <Header 
          history={history}
        />
      </div>
      
      <Switch>
        <Route exact path="/" render={() => renderAboutMe() } />
        <Route exact path="/projects" render={() => renderProjects() } />
        <Route exact path="/resume" render={() => renderResume() } />
      </Switch>
    </div>
  );
};

let RouterComponent = withRouter(App);
export default RouterComponent; 