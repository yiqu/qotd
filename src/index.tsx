import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Bootstrap 4.6
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const mainTheme: Theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'Lato'].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: false
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={ mainTheme }>
    <App />
  </ThemeProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
