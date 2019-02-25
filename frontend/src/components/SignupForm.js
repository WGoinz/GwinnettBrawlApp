import React from 'react';

class SignupForm extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        slogan: '',
        profilePic: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                <h4>Sign Up</h4>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handle_change}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                />
                <br />
                <label htmlFor="slogan">Slogan</label>
                <input
                    type="text"
                    name="slogan"
                    value={this.state.slogan}
                    onChange={this.handle_change}
                />
                <br />
                <label htmlFor="profilePic">Profile Pic</label>
                <input
                    type="text"
                    name="profilePic"
                    value={this.state.profilePic}
                    onChange={this.handle_change}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handle_change}
                />
                <br />
                <input type="submit" />
            </form>
        );
    }
}

export default SignupForm;

