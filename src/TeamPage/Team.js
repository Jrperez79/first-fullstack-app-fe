import React, { Component } from 'react'
import MLS from './MLS.js'

export default class Team extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <ul>
        {data.map(mls => <MLS data={mls} />)}
      </ul>
    )
  }
}
