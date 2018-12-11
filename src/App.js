import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import RobohashApi from './RobohashApi'
import './css/bootstrap.css'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className="app bg-primary">
        <RobohashApi />
      </div>
    );
  }
}

export default App;
