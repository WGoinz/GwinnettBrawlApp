import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import GetTournament from './GetTournament';


class HomePage extends Component {
    render() {
        return (
            <div>
                <GetTournament id={this.props.id} />
                <LoggedIn id={this.props.id} />
            </div>
        );
    }
}

export default HomePage;