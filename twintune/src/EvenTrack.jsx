import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class EvenTrack extends Component {
    constructor(props){
        super(props);   
    }
    
  
    render() {
        
        return (
            <div className="trackDiv" >
                <p className="trackNum even">#{this.props.trackNum}</p>
                <img className="topTrackAlbum even" src={this.props.img} />
                <div className="songInfo right">
                    <p className="artist">{this.props.artist}</p>
                    <p>{this.props.name}</p>

                </div>
            </div>
        );
    }
}

    
export default EvenTrack;