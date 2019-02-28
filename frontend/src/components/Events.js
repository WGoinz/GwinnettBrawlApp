import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"


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
                    <Link to={`/events/${event.id}`}><h4>{event.name}</h4></Link>
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