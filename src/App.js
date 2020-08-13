import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import TeamList from './TeamPage/TeamList.js';
import Header from './Header.js';
import './App.css';


export default class  extends Component {
  render() {
    return (
      <div>
      <Router>
        <Header />
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <TeamList {...routerProps} />} 
              />
          </Switch>
      </Router>
  </div>
    )
  }
}
