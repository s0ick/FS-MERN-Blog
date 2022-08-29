import React from 'react';
import Container from '@mui/material/Container';

import {Header} from '../styled/ui-components/header/header';

import {HomePage} from './home-page';

function Router() {
  return (
    <React.Fragment>
      <Header/>

      <Container maxWidth={'lg'}>
        <HomePage/>
      </Container>
    </React.Fragment>
  );
}

export default Router;
