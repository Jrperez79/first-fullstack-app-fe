import React, { Component } from 'react'
import { createNewMlsTeam } from './mls-api.js';
import '../App.css';

export default class CreateTeam extends Component {
    state = {
        name: 'mls team',
        conference: '',
        league_standing: 1,
        ever_won_a_championship: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createNewMlsTeam({
            name: this.state.name,
            conference: this.state.conference,
            league_standing: this.state.league_standing,
            ever_won_a_championship: this.state.ever_won_a_championship
        });

        this.setState({
            name: '',
            conference: '',
            league_standing: 1,
            ever_won_a_championship: ''
        })
    }
    
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleConferenceChange = e => {
        this.setState({ conference: e.target.value });
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
                        <input onChange={this.handleNameChange} type="text" value={this.state.conference} />
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
