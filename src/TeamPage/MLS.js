import React, { Component } from 'react'

export default class MLS extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <li key={Math.random()} className="mls">
        <h2>{data.name}</h2>
        <p>{data.conference} Conference</p>
        <p>League Standing: {data.league_standing}</p>
        <p>Ever Won a Championship: {data.ever_won_a_championship ? 'True' : 'False'}</p>
      </li>
    )
  }
}
