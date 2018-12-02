import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/landing/Landing';

class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path = "/" component = { Landing } />
          </Switch>

          <Route>
            
          </Route>
        </div>
    );
  }
}

export default App;
