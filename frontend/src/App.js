import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/landing/Landing';
import { PageWrapper } from './styles/common/page-wrapper';
import { Wrapper } from './styles/common/wrapper';
import Banner from './components/Panel/Banner/Banner';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Wrapper>
          <Banner />
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default App;
