import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header-title">Major League Soccer Info</h1>
                <div>
                    <div className="create-team">
                        <Link to='/create'>Create Team</Link>
                    </div>
                    <div className="team-list">
                        <Link to='/'>Team List</Link>
                    </div>
                </div>
            </header>
        )
    }
}

