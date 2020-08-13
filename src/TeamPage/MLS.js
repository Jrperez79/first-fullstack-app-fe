import React, { Component } from 'react'

export default class MLS extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <li key={Math.random()} className="mls">
        <h1>{data.name}</h1>
        <p>League Standing: {data.league_standing}</p>
        <p>Ever Won a Championship: {data.ever_won_a_championship}</p>
        <p>{data.conference} Conference</p>
      </li>
    )
  }
}
