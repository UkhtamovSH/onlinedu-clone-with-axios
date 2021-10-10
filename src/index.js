import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const routing = (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();
