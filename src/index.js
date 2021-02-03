import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DateUtils from '@date-io/moment'; // choose your lib
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import DateTest from './Components/Date/DateTest';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <MuiPickersUtilsProvider utils={DateUtils}>
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
