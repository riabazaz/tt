import './App.css';
import Header from './Header.jsx';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './twintunelogo.png';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Homepage">            
                <div className="content">
                <Header loggedIn={localStorage.getItem('loggedIn')} />
                <div className="Homediv">
                    <img className="logo" src={Logo} />
                    <div className="Hometext">
                        <h1>Welcome to TwinTune.</h1>
                        <p>We use the Spotify API to create a magical playlist for you and your friend with a little of what you like, a little of what they like, and some of both. Have fun vibing together. </p>
                        <div className="button">
                        <Button style={{ height: '5.5rem', borderRadius: '20px', outlineColor: 'none', color:"#023047",backgroundColor:"#FFB703", fontSize:'35px'}}size="lg" color="primary"><a style={{color: "#023047"}} href='http://localhost:7777/login'>Login to Spotify </a></Button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
    
export default Homepage;
    