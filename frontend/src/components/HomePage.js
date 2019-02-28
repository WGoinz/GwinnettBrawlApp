import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import GetTournament from './GetTournament';
import Events from './Events';
import Participants from './Participants';
import Profiles from './Profiles';
import Jumbotron from './Jumbotron';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                {/* <Profiles /> */}
                <div className='flexMainPage'>
                    <GetTournament id={this.props.id} />
                    <LoggedIn id={this.props.id} />
                </div>
                <Events />
                <Participants />
            </div>
        );
    }
}

export default HomePage;