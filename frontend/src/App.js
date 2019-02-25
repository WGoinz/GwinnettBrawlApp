import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';
import HomePage from './components/HomePage';


class App extends Component {
  state = {
    displayed_form: '',
    logged_in: localStorage.getItem('token') ? true : false,
    username: '',
    tournament: {}
  };


  componentDidMount() {
    if (this.state.logged_in) {
      fetch('/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('/api/auth_users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    const HomePageComponent = () => {
      return (<HomePage
        tournament={this.state.tournament}
        logged_in={this.state.logged_in}
        display_form={this.display_form}
        handle_logout={this.handle_logout}
        username={this.state.username}
        handle_login={this.handle_login}
        handle_signup={this.handle_signup}
        displayed_form={this.state.displayed_form}
      />)
    }

    return (

      <Router>
        <Switch>
          <Route exact path="/" render={HomePageComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;