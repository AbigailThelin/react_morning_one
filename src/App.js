import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
  super();

  this.state = {
    userGender: 'male',

  }
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <div>
            <button click ={ ()=> this.setState(userGender) }>Toggle Gender</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SmileComponent/>
        <StillSmiling/>
      </div>
    );
  }
}


class SmileComponent extends Component {
  render(){
    return(
      <div>I might not be smiling outside but I'm smiling inside, because I'm closer to becoming a real dev</div>
    );
  }
}

function StillSmiling(){
  return(
    <div>Yup, still smiling</div>
  )
}


export default App;
