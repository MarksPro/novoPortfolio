import React, { Component } from 'react';
import Routes from './routes';
import './scss/style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Routes/>
     );
  }
}
 
export default App;