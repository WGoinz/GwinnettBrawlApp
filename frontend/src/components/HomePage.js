import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import GetTournament from './GetTournament';
import Events from './Events';
import Participants from './Participants';
import Profiles from './Profiles';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Profiles />
                <GetTournament id={this.props.id} />
                <LoggedIn id={this.props.id} />
                <Events />
                <Participants />
            </div>
        );
    }
}

export default HomePage;