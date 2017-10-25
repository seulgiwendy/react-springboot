import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    request: ''
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="default-form">
          <form className="echo" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <input type="submit" value="메아리" />
          </form>
        </div>

      </div>
    );
  }

  handleChange = (e) => {
    this.setState({request: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var request = this.state.request.trim();
    if (!request){
      return null;
    }
    fetch(`http://localhost:8080/echo?request=${request}`)
      .then(res => {
        return res.text();
      })
      .then(text => {
        alert(text);
      });
  }
}



export default App;
