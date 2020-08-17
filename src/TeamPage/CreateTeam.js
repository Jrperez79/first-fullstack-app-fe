import React, { Component } from 'react'
import { createNewMlsTeam, fetchConferences } from './mls-api.js';
import '../App.css';

export default class CreateTeam extends Component {
    state = {
        name: 'Enter Team',
        conferences_id: 1,
        conferences: [],
        league_standing: 1,
        ever_won_a_championship: true
    }

    componentDidMount = async () => {
        const conferenceData = await fetchConferences();

        this.setState({
            conferences: conferenceData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createNewMlsTeam({
            name: this.state.name,
            conferences_id: this.state.conferences_id,
            league_standing: this.state.league_standing,
            ever_won_a_championship: this.state.ever_won_a_championship
        });

        this.setState({
            name: '',
            conferences_id: 1,
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
            <div className="create-content">
                <h2>Add Your Favorite Team</h2>
                <form onSubmit={this.handleSubmit} className="create-list">
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} type="text" value={this.state.name} />
                    </label><br/>
                    <label>
                        Conference: 
                        <select onChange={this.handleConferenceChange}>
                            {
                                this.state.conferences.map((conference) => <option value={conference.id}>{conference.name}</option>)
                            }
                        </select>
                    </label><br/>
                    <label>
                        League Standing:
                        <input onChange={this.handleLeagueStandingChange} type="number" value={this.state.league_standing} />
                    </label><br/>
                    <label>
                        Ever Won A Championship: 
                        <select onChange={this.handleEverWonAShip}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>
                    <br/>
                    <button className="create-button">Create Your Team</button>
                </form>
            </div>
        )
    }
}
