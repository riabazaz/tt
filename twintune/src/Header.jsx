import './App.css';
import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="Headerdiv">
        <Navbar  className="Header" fixed="top">
          <Navbar.Brand style={{fontSize: '2.5rem', paddingLeft:'40px'}}><Link to="/">TwinTune</Link></Navbar.Brand>
          <Nav style={{paddingRight:'40px'}} className="ml-auto">
            <Navbar.Text style={{paddingRight:'40px'}} >
              <Link to="/about">About</Link>
            </Navbar.Text>
            {this.props.loggedIn && (
              <Navbar.Text style={{paddingRight:'40px'}}>
              <Link to="/you">Your Music</Link>
            </Navbar.Text>
            )}
            {this.props.loggedIn && (
              <Navbar.Text style={{paddingRight:'40px'}}>
              <Link to="/share">Share</Link>
            </Navbar.Text>
            )}
            {this.props.loggedIn && (
              <Navbar.Text>
              <a>Logout</a>
            </Navbar.Text>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
