import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
