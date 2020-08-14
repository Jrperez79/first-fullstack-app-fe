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
            return <Link className="teams" to={`/detail/${teams.id}`} key={`${teams.id}-${teams.conference}`}>
              <h2>{data.name}</h2>
              <p>{data.conference} Conference</p>
              <p>League Standing: {data.league_standing}</p>
              <p>Ever Won a Championship: {data.ever_won_a_championship ? 'Yes' : 'No'}</p>
            </Link>
          })
        }
      </div>
    )
  }
}
