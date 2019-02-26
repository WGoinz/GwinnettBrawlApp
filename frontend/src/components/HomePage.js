import React, { Component } from 'react';
import Nav from './Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class HomePage extends Component {
    render() {
        let form;
        switch (this.props.displayed_form) {
            case 'login':
                form = <LoginForm handle_login={this.props.handle_login} />;
                break;
            case 'signup':
                form = <SignupForm handle_signup={this.props.handle_signup} />;
                break;
            default:
                form = null;
        }
        return (
            <div>
                <h1>Home Page</h1>
                <h3>
                    {this.props.logged_in
                        ? `Hello, ${this.props.username}`
                        : 'Please Log In'}
                </h3>
                <Nav
                    logged_in={this.props.logged_in}
                    display_form={this.props.display_form}
                    handle_logout={this.props.handle_logout}
                    id={this.props.id}
                    username={this.props.username}
                />
                {form}
            </div>
        );
    }
}

export default HomePage;