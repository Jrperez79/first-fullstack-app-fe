import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import TeamList from './TeamPage/TeamList.js';
import Header from './Header.js';
import TeamDetailPage from './TeamPage/TeamDetailPage.js';
import CreateTeam from './TeamPage/CreateTeam.js';
import './App.css';


export default class  extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <Router>
        <main>
        <Header />
          <div>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <TeamList {...routerProps} />} 
              />
              <Route 
                  path="/create" 
                  exact
                  render={(routerProps) => <CreateTeam {...routerProps} />} 
              />
              <Route 
                  path="/detail/:id" 
                  exact
                  render={(routerProps) => <TeamDetailPage {...routerProps} />} 
              />
          </Switch>
          </div>
          </main>
      </Router>
    </header>  
    </div>
    )
  }
}
