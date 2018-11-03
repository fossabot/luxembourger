import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/index-mobile.css';
import './app/components/bm/bm.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

import {BrowserRouter} from "react-router-dom";

// unregister();

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// registerServiceWorker();
