import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Header from './components/Header';

class Routes extends Component {
  render() { 
    return ( 
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
     );
  }
}
 
export default Routes;