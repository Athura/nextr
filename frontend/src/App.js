import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar />
          <Route exact path="/" component={ Landing } />
          <div className="container">
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
