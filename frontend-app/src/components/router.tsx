import React from 'react';
import Container from '@mui/material/Container';

import {Header} from '../styled/ui-components/header/header';

import {HomePage} from './home-page';
import {DetailedPostPage} from './detailed-post-page';
import {CreatePostPage} from './create-post-page/create-post-page';
import {LoginPage} from './auth/login-page';
import {RegistrationPage} from './auth/registration-page';

function Router() {
  return (
    <React.Fragment>
      <Header/>

      <Container maxWidth={'lg'}>
        {/*<HomePage/>*/}
        {/*<DetailedPostPage/>*/}
        {/*<CreatePostPage/>*/}
        {/*<LoginPage/>*/}
        <RegistrationPage/>
      </Container>
    </React.Fragment>
  );
}

export default Router;
