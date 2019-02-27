import React, { Component } from 'react';
import axios from "axios"

class Events extends Component {
    state = {
        events: []
    }
    componentDidMount = () => {
        this.displayTournaments()
    }
    displayTournaments = () => {
        axios.get(`/api/allevents/`).then((res) => {
            console.log(res.data)
            this.setState({ events: res.data })
        })
    }
    render() {
        let eventsArray = this.state.events.map((event, i) => {
            return (
                <div key={i}>
                    <h2>{event.name}</h2>
                </div>
            )
        })
        return (
            <div className='allevents'>
                <h1>All Events</h1>
                {eventsArray}
            </div>
        );
    }
}

export default Events;