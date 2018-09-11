import 'morris.js/morris';
import 'morris.js/morris.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/icons.css';
import './assets/css/style.css';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
