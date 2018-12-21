import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Landing from './components/landing/Landing';

class App extends Component {
  render() {
    return (
      <Router>
          <Landing />
      </Router>
    );
  }
}

export default App;
