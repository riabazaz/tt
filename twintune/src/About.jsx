import './App.css';
import Header from './Header.jsx';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Aboutpage extends Component {
    

    render() {
        return (
            <div className="Aboutpage">
                <div className="content" style={{ height: '100%'}}>
                <Header loggedIn={localStorage.getItem('loggedIn')} />
                    <h1>About TwinTune</h1>
                    <p>Hey, you made it! I’m so glad you stumbled upon TwinTune. Since you’re here, I can only assume you love sharing music with friends, family, and acquantinces as much as I do. Or you might be a friend of mine who is simply here to support me and my side projects. Either way, I appreciate you and I thank you for stopping by.</p>
                    <p>I hope TwinTune gives you the chance to connect with someone over music you have in common and bond over the new tunes that you share with each other. Simply login, share the link generated under the “Share” tab with a friend, and get to listening. Here’s to great music and an ever-expanding Liked songs library.</p>
                    <p>Ria Bazaz</p>
                </div>
                
            </div>
        );
    }
}
    
export default Aboutpage;
    