import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Youpage from './You';
import Aboutpage from './About';
import Sharepage from './Share';
import Playlistpage from './Playlist';
import Switch from 'react-bootstrap/esm/Switch';


class App extends Component {
  constructor() {
    super();
    localStorage.setItem('loggedIn', false);
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  
  handleStateChange(params) {    
    console.log(params);
    const access = params.access_token;
    const refresh = params.refresh_token;
    var dt = new Date();
    dt.setHours( dt.getHours() + 1);

    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('expirationTime', dt);
  }

  // make call to refresh token api and reset shit
  handleRefreshToken() {    
    fetch(`http://localhost:7777/refresh_token`, {
        method: 'GET',
        headers: {
          refresh_token: localStorage.getItem('refreshToken')
        }
    })
    .then(res => res.json())
    .then(
        (res) => {
          console.log(res);
          var dt = new Date();
          dt.setHours( dt.getHours() + 1);
          localStorage.setItem('accessToken', res.access_token);
          localStorage.setItem('expirationTime', dt);
    })


  }



  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => ( <Homepage {...props}   />)} />
            <Route path="/you" render={(props) => ( <Youpage {...props}  handleRefreshToken={this.handleRefreshToken} />)} />
            <Route path="/about" render={(props) => ( <Aboutpage {...props}   />)} />
            <Route path="/playlist" render={(props) => ( <Playlistpage {...props} handleRefreshToken={this.handleRefreshToken}  />)} />
            <Route path="/share" render={(props) => ( <Sharepage {...props} handleRefreshToken={this.handleRefreshToken} handleStateChange={this.handleStateChange}  />)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
