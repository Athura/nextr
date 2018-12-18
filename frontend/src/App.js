import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PageWrapper } from './styles/common/page-wrapper';
import { Wrapper } from './styles/common/wrapper';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Wrapper>
            <Route exact path = "/" component={} />
          </Wrapper>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
