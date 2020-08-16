import React, { Component } from 'react'
import { fetchMlsTeam, fetchConferences, updateMlsTeam, deleteMlsTeam } from './mls-api.js';
import { matchPath } from 'react-router-dom';

export default class TeamDetailPage extends Component {
  state = {
    mlsTeams: {},
    name: 'Portland Timbers',
    conferences_id: 1,
    conferences: [],
    league_standing: 1,
    ever_won_a_championship: true
  }
  
  componentDidMount = async () => {
    const data = await fetchMlsTeam(this.props.match.params.id)
    const conferenceData = await fetchConferences();

    const matchingConferences = conferenceData.body.find(conference => conference.name = data.body.conference_name);

    this.setState({
      mlsTeams: data.body,
      name: data.body.name,
      conference: matchingConferences.id,
      conferences: matchingConferences.body,
      league_standing: data.body.league_standing,
      ever_won_a_championship: data.body.ever_won_a_championship
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateMlsTeam(
        this.props.match.params.id,
        {
          name: this.state.name,
          conferences_id: this.state.conferences_id,
          league_standing: this.state.league_standing,
          ever_won_a_championship: this.state.ever_won_a_championship
        });

        this.setState({
          name: 'Portland Timbers',
          conferences_id: 1,
          league_standing: 1,
          ever_won_a_championship: 'yes',
          mlsTeams: updateMlsTeam.body
        });
    } catch(e) {
      console.log(e.message)
    }
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  }

  handleConferenceChange = e => {
    this.setState({ conferences_id: e.target.value });
  }

  handleLeagueStandingChange = e => {
    this.setState({ league_standing: e.target.value });
  }

  handleEverWonAShipChange = e => {
    this.setState({ ever_won_a_championship: e.target.value });
  }

  handleDelete = async () => {
    await deleteMlsTeam(this.props.match.params.id);

    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div>
          Here are the details about the team you selected. Team: {this.state.mlsTeams.name} play in the {this.state.mlsTeams.conference_name} conference, League Standing {this.state.mlsTeams.league_standing}, and has this team ever won a Ship: {this.state.mlsTeams.ever_won_a_championship}.
        </div>

      <h2>Update this Teams information?</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
              Team Name: 
              <input onChange={this.handleNameChange} type="text" value={this.state.name} />
          </label>
          <label>
              Conference: 
              <select onChange={this.handleConferenceChange} value={this.state.conferences_id}>
                {
                  this.state.conferences.map((conference) => <option value={conference.id}>{conference.name}</option>)
                }
              </select>
          </label>
          <label>
              League Standing: 
              <input onChange={this.handleLeagueStandingChange} type="number" value={this.state.league_standing} />
          </label>
          <label>
              Ever Won A Championship: 
              <input onChange={this.handleEverWonAShipChange} type="text" value={this.state.ever_won_a_championship} />
          </label>
          <button>Update Team</button>
        </form>
      <button onClick={this.handleDelete}>Delete Team</button>
    </div>
    )
  }
}
