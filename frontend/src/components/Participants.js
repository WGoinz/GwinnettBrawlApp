import React, { Component } from 'react';
import axios from "axios"

class Participants extends Component {
    state = {
        participants: []
    }
    componentDidMount = () => {
        this.displayTournaments()
    }
    displayTournaments = () => {
        axios.get(`/api/allparticipants/`).then((res) => {
            console.log(res.data)
            this.setState({ participants: res.data })
        })
    }
    render() {
        let participantsArray = this.state.participants.map((participant, i) => {
            return (
                <div key={i}>
                    <h2>{participant.gamertag}</h2>
                </div>
            )
        })
        return (
            <div className='allevents'>
                <h1>All Participants</h1>
                {participantsArray}
            </div>
        );
    }
}

export default Participants;