import React, { Component } from 'react';
import axios from "axios"


class SingleEvent extends Component {
    state = {
        event: {}
    }
    getSingleEvent = () => {
        axios.get(`/api/allevents/${this.props.match.params.id}`).then((res) => {
            console.log(res.data)
            this.setState({ event: res.data })
        })
    }
    deleteEvent = () => {
        axios.delete(`/api/allevents/${this.props.match.params.id}`)
            .then((res) => {
                // console.log(res)
                window.location = '/'
            })
    }
    componentDidMount = () => {
        this.getSingleEvent()
    }
    render() {
        return (
            <div>
                <h1>Event Name: {this.state.event.name}</h1>
                <h2>Total Entrants: {this.state.event.totalEntrants}</h2>
                <button onClick={this.deleteEvent}>Delete Event</button>
            </div>
        );
    }
}
export default SingleEvent;