import React from 'react';
import ReactDOM from 'react-dom';
import './polyfills';
import 'font-awesome/css/font-awesome.css';

import Dashboard from './components/dashboard';

ReactDOM.render(
  <Dashboard />,
  document.getElementById('wrapper'),
);