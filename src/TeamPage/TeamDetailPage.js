import React, { Component } from 'react'
import { fetchMlsTeam } from './mls-api.js';

export default class TeamDetailPage extends Component {
  state = {
    mlsTeams: {}
  }
  
  componentDidMount = async () => {
    const data = await fetchMlsTeam(this.props.match.params.id)

    this.setState({
      mlsTeams: data.body
    })
  }

  render() {
    return (
      <div className="mls">
        <h2>{this.state.mlsTeams.name}</h2>
        <p>{this.state.mlsTeams.conference_id} Conference</p>
        <p>League Standing: {this.state.mlsTeams.league_standing}</p>
        <p>Ever Won a Championship: {this.state.mlsTeams.ever_won_a_championship ? 'Yes' : 'No'}</p>
      </div>
    )
  }
}
