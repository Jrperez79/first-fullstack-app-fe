import React, { Component } from 'react'
import request from 'superagent'
import { fetchMls } from './mls-api.js';
import Team from './Team.js'

export default class TeamList extends Component {
  state = {
    mlsTeams: []
  }

  componentDidMount = async () => {
    const data = await fetchMls();

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
