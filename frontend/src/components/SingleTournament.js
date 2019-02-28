import React, { Component } from 'react';
import axios from "axios"


class SingleTournament extends Component {
    state = {
        tournament: {}
    }
    getSingleTournament = () => {
        axios.get(`/api/alltournaments/${this.props.match.params.id}`).then((res) => {
            console.log(res.data)
            this.setState({ tournament: res.data })
        })
    }
    componentDidMount = () => {
        this.getSingleTournament()
    }
    render() {
        return (
            <div>
                <h1>Tournament Name: {this.state.tournament.name}</h1>
                <h2>Address: {this.state.tournament.venueAddress}</h2>
                <h2>totalParticipants: {this.state.tournament.totalParticipants}</h2>
            </div>
        );
    }
}

export default SingleTournament;