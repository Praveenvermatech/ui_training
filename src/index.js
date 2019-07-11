import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemDetails from './components/ItemDetails';
import OrderPayment from './components/OrderPayment';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    
        <Router>
            <Route path="/ItemDetails" component={ItemDetails} />
            <Route path="/OrderPayment" component={OrderPayment} />
            <Route exact path="/" component={App} />
        </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
