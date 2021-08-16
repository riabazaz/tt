import './App.css';
import Header from './Header.jsx';
import React, { Component } from 'react';
import TopTrack from './TopTrack';
import 'bootstrap/dist/css/bootstrap.min.css';


class Youpage extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            topTracks: [],
        }
    }
    componentDidMount() {
        var dt = new Date();        
        if(dt > Date.parse(localStorage.getItem('expirationTime'))){
            this.props.handleRefreshToken();
        }
        
        let topTracks = []
        fetch(`http://localhost:7777/top_tracks`, {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                'trackId' : this.props.trackId
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                topTracks = result;
                console.log(topTracks)
                this.setState({
                    topTracks : topTracks
                })
        })
    }
  
    render() {
        
        return (
            <div>
                <Header loggedIn={localStorage.getItem('loggedIn')} />
                <div className="Youpage">
                    <div className="content" style={{ height: '100%'}}>
                    <h1>You've got good taste.</h1>
                    <p>And we have the proof. Here are some tracks you’ve had on repeat lately: </p>
                    {this.state.topTracks.map((track, index) => (
                        <TopTrack key={index} order={index} trackInfo={track} />
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

    
export default Youpage;
    