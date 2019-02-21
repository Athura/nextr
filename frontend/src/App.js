import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import { StyledApp, StyledContainer } from './styles/App.styles';
import AppBar from './components/AppBar/AppBar';
import Landing from './components/Landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends Component {
  render() {

    library.add(faFacebookSquare)

    const GlobalStyles = createGlobalStyle`
      body {
        @import url("https://fonts.googleapis.com/css?family=Karla:400,700");
        font-family: 'Karla', sans-serif;
      }
    `;

    return (
      <Router>
        <StyledApp className="App">
        <GlobalStyles />

            <StyledContainer className="container">
              <AppBar />
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
            </StyledContainer>
        </StyledApp>
      </Router>
    );
  }
}

export default App;
