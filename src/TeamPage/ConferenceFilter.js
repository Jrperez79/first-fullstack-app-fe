import React, { Component } from 'react'

export default class ConferenceFilter extends Component {
    render() {
        return (
            <select onChange={this.props.handleFilter}>
                <option value="all">All</option>
                {
                    this.props.conferenceOptions.map(conference => {
                        return <option key={conference.id} value={conference.id}>{conference.name}</option>
                    })
                }
            </select>
        )
    }
}
