import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import { ThemeProvider } from './components/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
