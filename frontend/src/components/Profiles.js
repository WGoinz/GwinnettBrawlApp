import React, { Component } from 'react';
import axios from "axios"

class Profiles extends Component {
    state = {
        profiles: []
    }
    componentDidMount = () => {
        this.displayTournaments()
    }
    displayTournaments = () => {
        axios.get(`/api/profiles/`).then((res) => {
            console.log(res.data)
            this.setState({ profiles: res.data })
        })
    }
    render() {
        let profilesArray = this.state.profiles.map((profile, i) => {
            return (
                <div key={i}>
                    <h2>{profile.username}</h2>
                </div>
            )
        })
        return (
            <div className='allevents bg-info'>
                <h1>All Profiles</h1>
                {profilesArray}
            </div>
        );
    }
}

export default Profiles;