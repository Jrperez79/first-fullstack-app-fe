import React, { Component } from 'react'
import { fetchMls } from './mls-api.js';
import { Link } from 'react-router-dom';

export default class TeamList extends Component {
  state = {
    mlsTeams: []
  }

  componentDidMount = async () => {
    const data = await fetchMls();

    this.setState({
      mlsTeams: data.body
    })

  }

  render() {
    
    return (
      <div>
        {
          this.state.mlsTeams.map((teams) => {
            return <Link className="teams" to={`/detail/${teams.id}`} key={`${teams.id}-${teams.conferences_id}`}>
              <h2>{teams.name}</h2>
              <p>{teams.conferences_id} Conference</p>
              <p>League Standing: {teams.league_standing}</p>
              <p>Ever Won a Championship: {teams.ever_won_a_championship ? 'Yes' : 'No'}</p>
              </Link>
        })
      }
      </div>
    )
  }
}
