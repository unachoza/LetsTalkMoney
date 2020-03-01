import React from 'react';
import HomePage from './Pages/Home/Home-Page.component'
import Dashboard from './Pages/Dashboard/Dashboard.component'
import Survey from './Pages/Survey/Survey.component'
import WhichUserPage from './Pages/WhichUser/WhichUserPage.component'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/whichUser" component={WhichUserPage} />
      </Switch>
    </div>
  );
}

export default App;