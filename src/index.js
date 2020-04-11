import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( //with Router tags application has access to all the routers(it could have been done in app.js).
    //I want my entire app to use it so I put ProductProvider (which returns context object) on top, as a top compnenent in the app
    <ProductProvider>
        <Router> 
            <App />
        </Router>
    </ProductProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
