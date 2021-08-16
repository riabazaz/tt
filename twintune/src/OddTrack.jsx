import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class OddTrack extends Component {
    constructor(props){
        super(props);   
        console.log(props);     
    }
    
  
    render() {
        
        return (
            <div className="trackDiv" >
                <p className="trackNum odd">#{this.props.trackNum}</p>
                <img className="topTrackAlbum odd" src={this.props.img} />
                <div className="songInfo left">
                    <p className="artist">{this.props.artist}</p>
                    <p>{this.props.name}</p>

                </div>
            </div>
        );
    }
}

    
export default OddTrack;