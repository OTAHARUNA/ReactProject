import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: 'にんじゃわんこ'};
  }
  handleClick(name){
    this.setState({name: name});
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <h1>こんにちは、{this.state.name}</h1>
          <button onClick = {() => this.handleClick('ひつじ仙人')}>ひつじ仙人</button>
          <button onClick = {() => this.handleClick('にんじゃわんこ')}>にんじゃわんこ</button>
        </body>
      </div>
    );
    }

}

export default App;
