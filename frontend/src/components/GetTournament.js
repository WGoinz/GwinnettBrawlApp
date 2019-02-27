import React, { Component } from 'react';
import axios from "axios"


class GetTournament extends Component {
    state = {
        tournaments: []
    }
    componentDidMount = () => {
        this.displayTournaments()
    }
    displayTournaments = () => {
        axios.get(`/api/profiles/${this.props.id}/tournaments`).then((res) => {
            console.log(res.data)
            this.setState({ tournaments: res.data })
        })
    }

    render() {
        let tournamentsArray = this.state.tournaments.map((tournament, i) => {
            return (
                <div key={i}>
                    <h2>{tournament.name}</h2>
                </div>
            )
        })
        return (
            <div>
                <h1>My Tournaments</h1>
                <button onClick={this.displayTournaments}>Show</button>
                {tournamentsArray}
            </div>
        );
    }
}

export default GetTournament;