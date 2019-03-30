import React, { Component } from 'react';
import Wizard from './core/component/wizard/Wizard';
import logo from './logo.svg';
import './App.css';
import shippingLabelMakerReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import ShippingDetailsRedux from './containers/shippingDetailsRedux.jsx'
import Route from './core/router.jsx'
import { Provider } from 'react-redux'

const store = createStore(shippingLabelMakerReducer);

class App extends Component {
  render() {
    return (
      <div>
         <Provider store={ store }>
        <Route></Route>
        </Provider>
        </div>
    );
  }
}

export default App;
