import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class PlaylistTrack extends Component {
    constructor(props){
        super(props);   
        this.state = {
            artist: "",
            img : "",
            name : ""
        }    
    }

    //get track Info
    componentDidMount() {
        fetch(`http://localhost:7777/track/` + this.props.trackId, {
                method: 'GET',
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                }
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        artist : result.body.artists[0].name,
                        img : result.body.album.images[0].url,
                        name : result.body.album.name
                    })
            })
    }
    
  
    render() {
        
        return (
            <div className="trackDiv" >
                <div className="songInfo">
                    <img className="playlistAlbum odd" src={this.state.img} />
                    <p className="artist">{this.state.artist}</p>
                    <p>{this.state.name}</p>

                </div>
            </div>
        );
    }
}

    
export default PlaylistTrack;