import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Major League Soccer Info</h1>
                <div className="sidebar">
                    <div>
                        <Link to='/create'>Create Team</Link>
                    </div>
                    <div>
                        <Link to='/'>Team List</Link>
                    </div>
                </div>
            </header>
        )
    }
}

