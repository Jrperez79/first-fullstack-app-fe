import React, { Component } from 'react'
import { fetchMls } from './mls-api.js';
import { Link } from 'react-router-dom';
// import ConferenceFilter from './ConferenceFilter.js';
// import request from 'superagent';

export default class TeamList extends Component {
  state = {
    mlsTeams: [],
    // conferenceOptions: [],
    // filterBy: 0,
  }

  componentDidMount = async () => {
    const data = await fetchMls();

    // const filterConferences = await fetchConferences();

    this.setState({
      mlsTeams: data.body,
      // conferenceOptions: filterConferences
    })

  }
/*
  handleFilter = async(e) => {
    const filterValue = e.target.filter

    let filterRequest = []

    filterValue !== 'all'?
    filterRequest = await request.get(`https://intense-cliffs-84211.herokuapp.com/conferences/${filterValue}`)
    :
    filterRequest = await request.get(`https://intense-cliffs-84211.herokuapp.com/mls`)

    const parsedFilteredResults = filterRequest.body

    this.setState({
      mlsTeams: parsedFilteredResults
    });
  }
*/

  render() {
    
    return (
      <>
      <div className="team-cards">
        {
          this.state.mlsTeams.map((teams) => {
            return <Link className="teams" to={`/detail/${teams.id}`} key={`${teams.id}`}>
              <h2>{teams.name}</h2>
              <p>{teams.conferences_id} Conference</p>
              <p>League Standing: {teams.league_standing}</p>
              <p>Ever Won a Championship: {teams.ever_won_a_championship ? 'Yes' : 'No'}</p>
              </Link>
        })
      }
      </div>
      </>
    )
  }
}
