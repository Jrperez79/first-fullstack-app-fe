import React, { Component } from 'react'
import { createNewMlsTeam, fetchConferences } from './mls-api.js';
import '../App.css';

export default class CreateTeam extends Component {
    state = {
        name: 'mls team',
        conferences_id: [],
        league_standing: 1,
        ever_won_a_championship: ''
    }

    componentDidMount = async () => {
        const conferenceData = await fetchConferences();

        this.setState({
            conferences_id: conferenceData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createNewMlsTeam({
            name: this.state.name,
            conference_id: this.state.conferences_id,
            league_standing: this.state.league_standing,
            ever_won_a_championship: this.state.ever_won_a_championship
        });

        this.setState({
            name: '',
            conferences_id: [],
            league_standing: 1,
            ever_won_a_championship: ''
        })
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

    handleEverWonAShip = e => {
        this.setState({ ever_won_a_championship: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Add Your Favorite Team</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} type="text" value={this.state.name} />
                    </label>
                    <label>
                        Conference: 
                        <select onChange={this.handleConferenceChange} value={this.state.conferences_id}>
                            {
                                this.state.conferences_id.map((conference) => <option value={conference.id}>{conference.conferences_id}</option>)
                            }
                        </select>
                    </label>
                    <label>
                        League Standing:
                        <input onChange={this.handleLeagueStandingChange} type="number" value={this.state.league_standing} />
                    </label>
                    <label>
                        Ever Won A Championship: 
                        <select onChange={this.handleEverWonAShip}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>
                    <button>Create Your Team</button>
                </form>
            </div>
        )
    }
}
