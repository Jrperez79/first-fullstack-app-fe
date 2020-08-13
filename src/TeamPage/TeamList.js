import React, { Component } from 'react'
import request from 'superagent'
import Team from './Team.js'

export default class TeamList extends Component {
  state = {
    mlsTeams: []
  }

  componentDidMount = async () => {
    const data = await request.get(`https://intense-cliffs-84211.herokuapp.com/mls`)

    const parsed = data.body;

    this.setState({
      mlsTeams: parsed
    })

  }

  render() {
    return (
      <div>
        <Team data={this.state.mlsTeams} />
      </div>
    )
  }
}
