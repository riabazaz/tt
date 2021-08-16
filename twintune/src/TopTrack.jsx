import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OddTrack from './OddTrack';
import EvenTrack from './EvenTrack';

class TopTrack extends Component {
    constructor(props){
        super(props);   
        console.log(props);  
        this.state = {
            trackNum : this.props.order + 1,
            artist : this.props.trackInfo.artists[0].name,
            name : this.props.trackInfo.name,
            img : this.props.trackInfo.album.images[0].url
        }
    }
    
  
    render() {
        
        return (
            <div  >
                {this.state.trackNum % 2 === 0 ?  (
                    <EvenTrack trackNum={this.state.trackNum} artist={this.state.artist} name={this.state.name} 
                    img={this.state.img}/>
                ) : (
                    <OddTrack trackNum={this.state.trackNum} artist={this.state.artist} name={this.state.name} 
                    img={this.state.img}/>
                )}
            </div>
        ); 
    }
}

    
export default TopTrack;
    