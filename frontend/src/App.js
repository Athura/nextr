import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import setAuthToken from './utils/setAuthToken';

import theme from './styles/theme';
import store from './store/store';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import { StyledContainer } from './styles/App.styles';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import CreateProfile from './components/Dashboard/CreateProfile/CreateProfile';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user information and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout the user
    store.dispatch(logoutUser());
    // Clear the current profile
    store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    const GlobalStyles = createGlobalStyle`
      html {
        scroll-behavior: smooth;
        background-size: 100%;
        background-position: center center;
        background-image: linear-gradient(to top right,
        purple 30%,
        ${theme.darkpurple},
        ${theme.pink},
        ${theme.salmon},
        ${theme.orange});
      }
      body {
        @import url("https://fonts.googleapis.com/css?family=Karla:400,700");
        @import url("https://fonts.googleapis.com/css?family=Pacifico&amp;subset=cyrillic,latin-ext");
        font-family: 'Karla', 'Pacifico', sans-serif;
      }
    `;

    return (
      <Provider store={store}>
        <Router>
          <>
            <GlobalStyles />
            <StyledContainer>
              <AppBar />
              <Route exact path="/" component={Landing} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Switch>
                <ProtectedRoute path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <ProtectedRoute
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Footer />
            </StyledContainer>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
