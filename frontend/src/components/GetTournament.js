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
        axios.get(`/api/alltournaments/`).then((res) => {
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
                <h1>All Tournaments</h1>
                {tournamentsArray}
            </div>
        );
    }
}

export default GetTournament;