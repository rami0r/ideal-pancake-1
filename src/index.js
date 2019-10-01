import './index.css';

import { AnotherApp, App } from './App';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <App name="App"/>
    <AnotherApp name="Another app"/>
  </div>, 
  document.getElementById('root')
  );

