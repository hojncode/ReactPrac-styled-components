import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const darkMode = {
  textColor:"white",
  backgroundColor:"#111"
};

const lightMode = {
  textColor:"#111",
  backgroundColor:"white"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={darkMode}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
