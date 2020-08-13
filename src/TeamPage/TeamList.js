import React, { Component } from 'react'
import request from 'superagent'
import Team from './Team.js'

export default class TeamList extends Component {
  state = {
    mls_teams: []
  }

  componentDidMount = async () => {
    const data = await request.get(`https://intense-cliffs-84211.herokuapp.com/mls`)

    const parsed = data.body;

    this.setState({
      mls_teams: parsed
    })

  }

  render() {
    return (
      <div>
        <Team data={this.state.mls_teams} />
      </div>
    )
  }
}
