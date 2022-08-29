import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Router from './components/router';
import {theme} from './styled/global/theme';
import './styled/global/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router/>
    </ThemeProvider>
  </BrowserRouter>
);
