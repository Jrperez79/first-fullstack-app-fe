import React, { Component } from 'react'
import MLS from './mls.js'

export default class Team extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <ul>
        {data.map(team => <MLS data={mls} />)}
      </ul>
    )
  }
}
