import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import PlaylistTrack from './PlaylistTrack';


class Playlistpage extends Component {
    constructor(props){
        super(props);   
        this.state = {
            user1name : '',
            user2name: '',
            playlistTracks : []
        }
    }
    
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
    }
    
    componentDidMount() {
        var dt = new Date();        
        if(dt > Date.parse(localStorage.getItem('expirationTime'))){
            this.props.handleRefreshToken();
        }

        const params = this.getHashParams();
        const user1 = params.user1;
        const user2 = params.user2;
        
        // user 1 display name
        fetch(`http://localhost:7777/api/unique/` + user1, {
            method: 'GET',         
            json: true
        })
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    user1name : res.display_name
                });
        })

        // user 2 display name
        fetch(`http://localhost:7777/api/unique/` + user2, {
            method: 'GET',         
            json: true
        })
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    user2name : res.display_name
                });
        })
        // get tracks ids for recommended playlist
        fetch(`http://localhost:7777/api/user/` + user1 + "/" + user2 , {
            method: 'GET',         
            json: true
        })
        .then(res => res.json())
        .then(
            (res) => {
                var tracks = res.split(",");
                var x;
                for(x in tracks){
                    var str = tracks[x];
                    tracks[x] = str.substring(str.indexOf("'") + 1,  str.lastIndexOf("'"));
                }
                console.log(tracks);
                this.setState({
                    playlistTracks : tracks
                });
        }) 

       

    }
            

    render() {
        
        return (
            <div>
                <Header loggedIn={localStorage.getItem('loggedIn')} />
                <div className="Playlistpage">
                    <div className="content" style={{ height: '100%'}}>
                    <h1 className="plheader">{this.state.user1name} x {this.state.user2name}</h1>
                    {this.state.playlistTracks.map((track, index) => (
                        <PlaylistTrack key={index} trackId={track} />
                    ))}
                    </div>
                </div>
            </div>
        ); 
    }
}

    
export default Playlistpage;
    