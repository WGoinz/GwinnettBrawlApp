import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"



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
                    <Link to={`/tournaments/${tournament.id}`}><h3>{tournament.name}</h3></Link>
                </div>
            )
        })
        return (
            <div className='alltourneys'>
                <h1>All Tournaments</h1>
                {tournamentsArray}
            </div>
        );
    }
}

export default GetTournament;