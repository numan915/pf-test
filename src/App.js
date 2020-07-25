import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index';
import Home from './components/Home/index';
// import About from './components/About'; 
// import Resume from './components/Resume';
import {Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        {<Header />}
        {<Home />}
        </div>
  );
  }
}

export default App;
