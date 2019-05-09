import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/app';
import Firebase, { FirebaseContext } from './components/firebase';
import * as serviceWorker from './serviceWorker';
import Popper from 'popper.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
	  <App />
	</FirebaseContext.Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
