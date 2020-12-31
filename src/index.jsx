import React from 'react';
import ReactDOM from 'react-dom';
import { Calculator } from './App';
import serviceWorker from './serviceWorker';
import { createRoot } from 'rootz';
import Radicle from './radicle';
// Import Styles
import './index.css';

const rootz = new createRoot(Radicle);
 
ReactDOM.render(<Calculator />, document.getElementById('root'));
serviceWorker.unregister();
